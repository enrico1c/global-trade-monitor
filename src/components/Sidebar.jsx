import { AlertTriangle, Waves, Plane, Truck, Radio, Globe } from 'lucide-react'
import MonetaryPanel from './MonetaryPanel'

const SEVERITY_COLOR = {
  critical: 'text-red-400 bg-red-900/30 border-red-700/50',
  high: 'text-orange-400 bg-orange-900/30 border-orange-700/50',
  medium: 'text-yellow-400 bg-yellow-900/30 border-yellow-700/50',
  low: 'text-blue-400 bg-blue-900/30 border-blue-700/50',
}

const SEVERITY_DOT = {
  critical: 'bg-red-500',
  high: 'bg-orange-500',
  medium: 'bg-yellow-500',
  low: 'bg-blue-500',
}

const layerConfig = [
  { key: 'sea', label: 'Sea Routes', icon: Waves, color: 'text-blue-400' },
  { key: 'air', label: 'Air Routes', icon: Plane, color: 'text-orange-400' },
  { key: 'road', label: 'Road / Rail', icon: Truck, color: 'text-green-400' },
  { key: 'disruptions', label: 'Disruptions', icon: Radio, color: 'text-red-400' },
]

export default function Sidebar({ disruptions, selected, setSelected, layers, setLayers }) {
  function toggleLayer(key) {
    setLayers((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const ongoing = disruptions.filter((d) => d.status === 'ongoing')
  const resolved = disruptions.filter((d) => d.status === 'resolved')

  return (
    <div
      className="w-80 flex flex-col h-screen overflow-hidden"
      style={{
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        backdropFilter: 'blur(12px)',
        borderRight: '1px solid rgba(55, 65, 81, 0.8)',
      }}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-700 shrink-0">
        <div className="flex items-center gap-2 mb-0.5">
          <Globe size={20} className="text-blue-400" />
          <h1 className="text-white font-bold text-lg tracking-tight">Global Trade Monitor</h1>
        </div>
        <p className="text-gray-400 text-xs">Real-time disruptions & route analysis</p>
      </div>

      {/* Layer toggles */}
      <div className="p-4 border-b border-gray-700 shrink-0">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Map Layers
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {layerConfig.map(({ key, label, icon: Icon, color }) => (
            <button
              key={key}
              onClick={() => toggleLayer(key)}
              className={`flex items-center gap-2 px-2.5 py-2 rounded text-xs font-medium transition-colors border ${
                layers[key]
                  ? 'border-gray-500 bg-gray-700 text-white'
                  : 'border-gray-700 bg-gray-800/50 text-gray-500'
              }`}
            >
              <Icon size={13} className={layers[key] ? color : 'text-gray-600'} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Disruptions list */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        {/* Ongoing */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle size={14} className="text-red-400" />
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Active Disruptions ({ongoing.length})
            </h2>
          </div>
          <div className="space-y-2">
            {ongoing.map((d) => (
              <DisruptionCard
                key={d.id}
                disruption={d}
                isSelected={selected?.id === d.id}
                onClick={() => setSelected(selected?.id === d.id ? null : d)}
              />
            ))}
          </div>
        </div>

        {/* Resolved */}
        {resolved.length > 0 && (
          <div>
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Resolved ({resolved.length})
            </h2>
            <div className="space-y-2">
              {resolved.map((d) => (
                <DisruptionCard
                  key={d.id}
                  disruption={d}
                  isSelected={selected?.id === d.id}
                  onClick={() => setSelected(selected?.id === d.id ? null : d)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Monetary calculator */}
        <MonetaryPanel />
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-gray-700 shrink-0">
        <p className="text-xs text-gray-600 text-center">
          Data: GDELT · OpenFlights · Static GeoJSON
        </p>
      </div>
    </div>
  )
}

function DisruptionCard({ disruption: d, isSelected, onClick }) {
  const colorClass = SEVERITY_COLOR[d.severity] || SEVERITY_COLOR.low
  const dotClass = SEVERITY_DOT[d.severity] || 'bg-gray-500'

  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded border p-2.5 transition-all ${
        isSelected
          ? 'ring-1 ring-blue-500 ' + colorClass
          : 'border-gray-700 bg-gray-800/50 hover:bg-gray-700/50 hover:border-gray-600'
      }`}
    >
      <div className="flex items-start gap-2">
        <div
          className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${dotClass} ${
            d.status === 'ongoing' ? 'animate-pulse' : ''
          }`}
        />
        <div className="min-w-0">
          <div className="text-white text-xs font-medium leading-snug truncate">{d.title}</div>
          <div className="text-gray-400 text-xs mt-0.5 leading-snug line-clamp-2">
            {d.description.slice(0, 80)}...
          </div>
          <div className="flex gap-2 mt-1">
            <span
              className={`text-xs px-1 py-0.5 rounded ${
                d.status === 'ongoing'
                  ? 'bg-red-900/40 text-red-400'
                  : 'bg-green-900/40 text-green-400'
              }`}
            >
              {d.status}
            </span>
            {d.monetaryImpact?.dailyBillion && (
              <span className="text-xs text-yellow-500">
                ${d.monetaryImpact.dailyBillion}B/day
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  )
}
