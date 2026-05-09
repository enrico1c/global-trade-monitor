import { useState } from 'react'
import { DollarSign, Calculator } from 'lucide-react'
import { commodities } from '../data/commodities'
import { seedDisruptions } from '../data/disruptions'
import { calcDetourCost, routeDistances } from '../utils/monetaryCalc'

export default function MonetaryPanel() {
  const [commodity, setCommodity] = useState(commodities[0].id)
  const [route, setRoute] = useState('')
  const [volume, setVolume] = useState(50000)
  const [result, setResult] = useState(null)

  const availableRoutes = Object.keys(routeDistances)
  const disrupted = seedDisruptions.filter(
    (d) => d.affectedRoutes?.some((r) => availableRoutes.includes(r)) || availableRoutes.includes(d.id)
  )

  function calculate() {
    const selectedRoute = route || availableRoutes[0]
    const rd = routeDistances[selectedRoute]
    if (!rd) return

    const com = commodities.find((c) => c.id === commodity) || commodities[0]
    const result = calcDetourCost(rd.primary, rd.detour, 'sea', volume, com.valuePerTon)
    setResult({ ...result, detourName: rd.detourName, route: selectedRoute, commodity: com.name })
  }

  return (
    <div className="border-t border-gray-700 pt-4">
      <div className="flex items-center gap-2 mb-3">
        <Calculator size={16} className="text-yellow-400" />
        <h3 className="text-sm font-semibold text-white">Monetary Impact Calculator</h3>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-xs text-gray-400 mb-1">Commodity</label>
          <select
            value={commodity}
            onChange={(e) => setCommodity(e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 text-white text-xs rounded px-2 py-1.5 focus:outline-none focus:border-blue-500"
          >
            {commodities.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} (${c.valuePerTon}/t)
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1">Blocked Route</label>
          <select
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 text-white text-xs rounded px-2 py-1.5 focus:outline-none focus:border-blue-500"
          >
            {availableRoutes.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1">Volume (tonnes)</label>
          <input
            type="number"
            value={volume}
            min={100}
            max={500000}
            step={1000}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full bg-gray-800 border border-gray-600 text-white text-xs rounded px-2 py-1.5 focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          onClick={calculate}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium py-2 rounded transition-colors flex items-center justify-center gap-2"
        >
          <DollarSign size={14} />
          Calculate Detour Cost
        </button>

        {result && (
          <div className="bg-gray-800 border border-gray-600 rounded p-3 text-xs space-y-1.5">
            <div className="text-gray-300 font-medium mb-2">
              {result.commodity} via {result.detourName}
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
              <span className="text-gray-500">Extra distance:</span>
              <span className="text-white font-medium">
                {result.extraKm.toLocaleString()} km
              </span>
              <span className="text-gray-500">Extra transit:</span>
              <span className="text-white font-medium">{result.extraDays} days</span>
              <span className="text-gray-500">Fuel cost:</span>
              <span className="text-yellow-400 font-medium">${result.fuelCostM}M</span>
              <span className="text-gray-500">Holding cost:</span>
              <span className="text-yellow-400 font-medium">${result.holdingCostM}M</span>
              <span className="text-gray-500 font-semibold">Total cost:</span>
              <span className="text-red-400 font-bold text-sm">${result.totalM}M</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
