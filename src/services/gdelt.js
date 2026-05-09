const GDELT_URL = 'https://api.gdeltproject.org/api/v2/geo/geo'

export async function fetchDisruptions() {
  const query = encodeURIComponent(
    'shipping OR "port closure" OR blockade OR "trade route" OR "supply chain"'
  )
  const url = `${GDELT_URL}?query=${query}&format=GeoJSON&timespan=30d&maxrecords=50`
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)
    const res = await fetch(url, { signal: controller.signal })
    clearTimeout(timeout)
    if (!res.ok) throw new Error(`GDELT returned ${res.status}`)
    const data = await res.json()
    return data
  } catch (e) {
    console.warn('GDELT unavailable, using seed data only:', e.message)
    return null
  }
}
