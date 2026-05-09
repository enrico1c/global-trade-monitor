import { useEffect, useRef } from 'react'
import { MapContainer as LeafletMapContainer, TileLayer, LayersControl, useMap } from 'react-leaflet'
import SeaLayer from './SeaLayer'
import AirLayer from './AirLayer'
import RoadLayer from './RoadLayer'
import DisruptionLayer from './DisruptionLayer'

const CARTO_DARK =
  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
const CARTO_ATTR =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'

// Sub-component: flies to selected disruption
function FlyToSelected({ selected }) {
  const map = useMap()
  const prevId = useRef(null)

  useEffect(() => {
    if (selected && selected.id !== prevId.current) {
      prevId.current = selected.id
      const [lng, lat] = selected.location
      map.flyTo([lat, lng], 5, { duration: 1.2 })
    }
  }, [selected, map])

  return null
}

export default function MapContainer({ disruptions, selected, setSelected, layers }) {
  return (
    <LeafletMapContainer
      center={[20, 10]}
      zoom={3}
      minZoom={2}
      maxZoom={12}
      style={{ height: '100%', width: '100%', background: '#0f172a' }}
      worldCopyJump={false}
    >
      <TileLayer url={CARTO_DARK} attribution={CARTO_ATTR} />

      <FlyToSelected selected={selected} />

      {layers.sea && <SeaLayer disruptions={disruptions} />}
      {layers.air && <AirLayer />}
      {layers.road && <RoadLayer />}
      {layers.disruptions && (
        <DisruptionLayer
          disruptions={disruptions}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </LeafletMapContainer>
  )
}
