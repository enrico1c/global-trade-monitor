import Papa from 'papaparse'

const AIRPORTS_URL =
  'https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat'
const ROUTES_URL =
  'https://raw.githubusercontent.com/jpatokal/openflights/master/data/routes.dat'

export async function fetchAirRoutes() {
  const cached = sessionStorage.getItem('airRoutes')
  if (cached) {
    try {
      return JSON.parse(cached)
    } catch {
      sessionStorage.removeItem('airRoutes')
    }
  }

  const [airportsText, routesText] = await Promise.all([
    fetch(AIRPORTS_URL).then((r) => {
      if (!r.ok) throw new Error('airports fetch failed')
      return r.text()
    }),
    fetch(ROUTES_URL).then((r) => {
      if (!r.ok) throw new Error('routes fetch failed')
      return r.text()
    }),
  ])

  // Parse airports: IATA code → { lat, lng, name, city, country }
  const airports = {}
  Papa.parse(airportsText, {
    complete: ({ data }) => {
      data.forEach((row) => {
        // columns: id, name, city, country, IATA, ICAO, lat, lng, alt, tz, dst
        const iata = row[4]
        const lat = parseFloat(row[6])
        const lng = parseFloat(row[7])
        if (iata && iata !== '\\N' && iata.length === 3 && !isNaN(lat) && !isNaN(lng)) {
          airports[iata] = {
            name: row[1],
            city: row[2],
            country: row[3],
            lat,
            lng,
          }
        }
      })
    },
  })

  // Parse routes and resolve coordinates
  const routes = []
  Papa.parse(routesText, {
    complete: ({ data }) => {
      data.forEach((row) => {
        // columns: airline, airlineId, src, srcId, dst, dstId, codeshare, stops, equipment
        const srcIATA = row[2]
        const dstIATA = row[4]
        const src = airports[srcIATA]
        const dst = airports[dstIATA]
        if (src && dst && srcIATA !== dstIATA) {
          routes.push({
            airline: row[0],
            src: srcIATA,
            dst: dstIATA,
            srcLat: src.lat,
            srcLng: src.lng,
            dstLat: dst.lat,
            dstLng: dst.lng,
            srcName: src.name,
            dstName: dst.name,
            srcCity: src.city,
            dstCity: dst.city,
          })
        }
      })
    },
  })

  // Sort by angular distance descending (longest routes most visually interesting)
  const sample = routes
    .sort((a, b) => {
      const da =
        Math.abs(a.srcLat - a.dstLat) + Math.abs(a.srcLng - a.dstLng)
      const db =
        Math.abs(b.srcLat - b.dstLat) + Math.abs(b.srcLng - b.dstLng)
      return db - da
    })
    .slice(0, 800)

  try {
    sessionStorage.setItem('airRoutes', JSON.stringify(sample))
  } catch {
    // sessionStorage quota exceeded — ignore
  }

  return sample
}
