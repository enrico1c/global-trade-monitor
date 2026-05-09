import { useState, useEffect } from 'react'
import MapContainer from './components/MapContainer'
import Sidebar from './components/Sidebar'
import { seedDisruptions } from './data/disruptions'
import { fetchDisruptions } from './services/gdelt'

export default function App() {
  const [disruptions, setDisruptions] = useState(seedDisruptions)
  const [selected, setSelected] = useState(null)
  const [layers, setLayers] = useState({ sea: true, air: true, road: true, disruptions: true })

  useEffect(() => {
    fetchDisruptions().then((gdeltData) => {
      if (!gdeltData?.features) return
      const gdeltDisruptions = gdeltData.features
        .filter(
          (f) =>
            f.geometry?.coordinates &&
            Array.isArray(f.geometry.coordinates) &&
            f.geometry.coordinates.length >= 2
        )
        .slice(0, 20)
        .map((f, i) => ({
          id: `gdelt-${i}`,
          title: f.properties?.name || 'Trade Disruption Event',
          location: f.geometry.coordinates,
          type: 'news',
          severity: 'medium',
          affectedRoutes: [],
          startDate: new Date().toISOString().split('T')[0],
          status: 'ongoing',
          description:
            f.properties?.url ||
            f.properties?.title ||
            'GDELT-detected trade disruption event.',
          monetaryImpact: {},
          alternatives: [],
        }))
      setDisruptions((prev) => [...prev, ...gdeltDisruptions])
    })
  }, [])

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: '#0f172a' }}>
      <Sidebar
        disruptions={disruptions}
        selected={selected}
        setSelected={setSelected}
        layers={layers}
        setLayers={setLayers}
      />
      <div style={{ flex: 1, position: 'relative' }}>
        <MapContainer
          disruptions={disruptions}
          selected={selected}
          setSelected={setSelected}
          layers={layers}
        />
      </div>
    </div>
  )
}
