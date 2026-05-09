import { Polyline, Popup } from 'react-leaflet'
import { roadCorridors } from '../data/roadCorridors'

export default function RoadLayer() {
  return (
    <>
      {roadCorridors.features.map((feature) => {
        const { name, type, length_km, cargo_type, description, alternatives } =
          feature.properties
        const coords = feature.geometry.coordinates.map(([lng, lat]) => [lat, lng])
        const isRail = type === 'rail'

        return (
          <Polyline
            key={name}
            positions={coords}
            pathOptions={{
              color: '#22C55E',
              weight: 2,
              opacity: 0.75,
              dashArray: isRail ? '6 3' : null,
            }}
          >
            <Popup maxWidth={300}>
              <div className="text-sm">
                <div className="font-bold text-green-800 mb-1">{name}</div>
                <span
                  className={`inline-block text-xs px-2 py-0.5 rounded mb-2 ${
                    isRail
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {isRail ? 'Railway' : 'Road'}
                </span>
                <p className="text-gray-600 text-xs mb-2">{description}</p>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <span className="text-gray-500">Length:</span>
                  <span className="font-medium">{length_km?.toLocaleString()} km</span>
                  <span className="text-gray-500">Cargo:</span>
                  <span className="font-medium">{cargo_type?.join(', ')}</span>
                </div>
                {alternatives?.length > 0 && (
                  <div className="mt-2 text-xs">
                    <span className="text-gray-500">Alternatives: </span>
                    <span className="text-green-700">{alternatives.join(', ')}</span>
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
