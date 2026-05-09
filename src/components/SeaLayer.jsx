import { Polyline, Popup } from 'react-leaflet'
import { seaLanes } from '../data/seaLanes'

export default function SeaLayer({ disruptions }) {
  // Build a quick lookup: route name → disruption severity
  const routeDisruption = {}
  disruptions.forEach((d) => {
    d.affectedRoutes?.forEach((r) => {
      if (!routeDisruption[r] || d.severity === 'critical') {
        routeDisruption[r] = d.severity
      }
    })
  })

  return (
    <>
      {seaLanes.features.map((feature) => {
        const { name, volume_mt, vessels_day, chokepoint, alternatives, description } =
          feature.properties
        const coords = feature.geometry.coordinates.map(([lng, lat]) => [lat, lng])
        const disrupted = routeDisruption[name]

        let color = '#3B82F6'
        if (disrupted === 'critical') color = '#EF4444'
        else if (disrupted === 'high') color = '#F97316'
        else if (disrupted === 'medium') color = '#EAB308'

        const weight = chokepoint ? 4 : 2
        const opacity = disrupted ? 1 : 0.8

        return (
          <Polyline
            key={name}
            positions={coords}
            pathOptions={{ color, weight, opacity, dashArray: disrupted ? '8 4' : null }}
          >
            <Popup maxWidth={320}>
              <div className="text-sm">
                <div className="font-bold text-blue-800 mb-1">{name}</div>
                {chokepoint && (
                  <span className="inline-block bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded mb-2">
                    Chokepoint
                  </span>
                )}
                <p className="text-gray-600 text-xs mb-2">{description}</p>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <span className="text-gray-500">Volume:</span>
                  <span className="font-medium">{volume_mt}M tonnes/yr</span>
                  <span className="text-gray-500">Vessels/day:</span>
                  <span className="font-medium">{vessels_day}</span>
                </div>
                {alternatives?.length > 0 && (
                  <div className="mt-2 text-xs">
                    <span className="text-gray-500">Alternatives: </span>
                    <span className="text-green-700">{alternatives.join(', ')}</span>
                  </div>
                )}
                {disrupted && (
                  <div className="mt-2 bg-red-50 border border-red-200 rounded p-1 text-xs text-red-700">
                    Active disruption — {disrupted} severity
                  </div>
                )}
              </div>
            </Popup>
          </Polyline>
        )
      })}
    </>
  )
}
