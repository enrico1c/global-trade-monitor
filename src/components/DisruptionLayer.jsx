import { CircleMarker, Popup } from 'react-leaflet'

const SEVERITY_COLOR = {
  critical: '#EF4444',
  high: '#F97316',
  medium: '#EAB308',
  low: '#3B82F6',
}

const TYPE_LABEL = {
  security: 'Security',
  environmental: 'Environmental',
  infrastructure: 'Infrastructure',
  conflict: 'Conflict',
  health: 'Health',
  news: 'News Event',
}

export default function DisruptionLayer({ disruptions, selected, setSelected }) {
  return (
    <>
      {disruptions.map((d) => {
        const [lng, lat] = d.location
        const color = SEVERITY_COLOR[d.severity] || '#94A3B8'
        const isSelected = selected?.id === d.id
        const isOngoing = d.status === 'ongoing'

        return (
          <CircleMarker
            key={d.id}
            center={[lat, lng]}
            radius={isSelected ? 14 : isOngoing ? 10 : 7}
            pathOptions={{
              color: color,
              fillColor: color,
              fillOpacity: isSelected ? 0.9 : 0.6,
              weight: isSelected ? 3 : isOngoing ? 2 : 1,
            }}
            eventHandlers={{
              click: () => setSelected(d),
            }}
          >
            <Popup maxWidth={340} onOpen={() => setSelected(d)}>
              <div className="text-sm">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-bold text-gray-800">{d.title}</div>
                  <span
                    className="shrink-0 text-xs px-1.5 py-0.5 rounded font-medium"
                    style={{ backgroundColor: color + '22', color }}
                  >
                    {d.severity?.toUpperCase()}
                  </span>
                </div>

                <div className="flex gap-2 mb-2 text-xs">
                  <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    {TYPE_LABEL[d.type] || d.type}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded font-medium ${
                      d.status === 'ongoing'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {d.status === 'ongoing' ? 'Ongoing' : 'Resolved'}
                  </span>
                </div>

                <p className="text-gray-600 text-xs mb-2">{d.description}</p>

                {d.monetaryImpact?.dailyBillion && (
                  <div className="bg-amber-50 border border-amber-200 rounded p-1.5 mb-2 text-xs">
                    <div className="font-medium text-amber-800">Monetary Impact</div>
                    <div className="text-amber-700">
                      Daily: ${d.monetaryImpact.dailyBillion}B
                      {d.monetaryImpact.totalBillion
                        ? ` | Total: $${d.monetaryImpact.totalBillion}B`
                        : ''}
                    </div>
                  </div>
                )}

                {d.affectedRoutes?.length > 0 && (
                  <div className="text-xs mb-1">
                    <span className="text-gray-500">Affected: </span>
                    <span className="text-red-700">{d.affectedRoutes.join(', ')}</span>
                  </div>
                )}

                {d.alternatives?.length > 0 && (
                  <div className="text-xs">
                    <span className="text-gray-500">Alternatives: </span>
                    <span className="text-green-700">{d.alternatives.join(', ')}</span>
                  </div>
                )}

                <div className="text-xs text-gray-400 mt-2">Since {d.startDate}</div>
              </div>
            </Popup>
          </CircleMarker>
        )
      })}
    </>
  )
}
