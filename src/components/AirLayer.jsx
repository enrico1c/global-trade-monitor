import { useEffect, useState } from 'react'
import { Polyline, Popup } from 'react-leaflet'
import { fetchAirRoutes } from '../services/openflights'
import { greatCirclePoints } from '../utils/geoUtils'

export default function AirLayer() {
  const [routes, setRoutes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchAirRoutes()
      .then((data) => {
        setRoutes(data)
        setLoading(false)
      })
      .catch((e) => {
        setError(e.message)
        setLoading(false)
      })
  }, [])

  if (loading || error || routes.length === 0) return null

  return (
    <>
      {routes.map((route, i) => {
        const arcPoints = greatCirclePoints(
          route.srcLat,
          route.srcLng,
          route.dstLat,
          route.dstLng,
          30
        )
        return (
          <Polyline
            key={`air-${i}`}
            positions={arcPoints}
            pathOptions={{
              color: '#F97316',
              weight: 1,
              opacity: 0.25,
            }}
          >
            <Popup maxWidth={260}>
              <div className="text-sm">
                <div className="font-bold text-orange-700 mb-1">Air Route</div>
                <div className="text-xs text-gray-600">
                  <span className="font-medium">{route.srcCity || route.src}</span>
                  {' → '}
                  <span className="font-medium">{route.dstCity || route.dst}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {route.srcName} → {route.dstName}
                </div>
                <div className="text-xs text-gray-400 mt-1">Airline: {route.airline}</div>
              </div>
            </Popup>
          </Polyline>
        )
      })}
    </>
  )
}
