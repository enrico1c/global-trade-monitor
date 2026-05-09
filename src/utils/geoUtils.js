// Haversine distance in km
export function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

// Great circle intermediate points for drawing smooth arcs
// Returns array of [lat, lng] for n+1 points along the arc
export function greatCirclePoints(lat1, lng1, lat2, lng2, n = 50) {
  const toRad = (d) => (d * Math.PI) / 180
  const toDeg = (r) => (r * 180) / Math.PI

  const φ1 = toRad(lat1)
  const λ1 = toRad(lng1)
  const φ2 = toRad(lat2)
  const λ2 = toRad(lng2)

  const d = 2 * Math.asin(
    Math.sqrt(
      Math.sin((φ2 - φ1) / 2) ** 2 +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin((λ2 - λ1) / 2) ** 2
    )
  )

  // If points are very close, just return straight line
  if (d < 0.001) {
    return [
      [lat1, lng1],
      [lat2, lng2],
    ]
  }

  const points = []
  for (let i = 0; i <= n; i++) {
    const f = i / n
    const A = Math.sin((1 - f) * d) / Math.sin(d)
    const B = Math.sin(f * d) / Math.sin(d)
    const x = A * Math.cos(φ1) * Math.cos(λ1) + B * Math.cos(φ2) * Math.cos(λ2)
    const y = A * Math.cos(φ1) * Math.sin(λ1) + B * Math.cos(φ2) * Math.sin(λ2)
    const z = A * Math.sin(φ1) + B * Math.sin(φ2)
    const φ = Math.atan2(z, Math.sqrt(x * x + y * y))
    const λ = Math.atan2(y, x)
    points.push([toDeg(φ), toDeg(λ)])
  }
  return points
}

// Check if a point [lng, lat] is within radiusKm of a route feature's coordinates
export function isPointNearRoute(point, routeCoords, radiusKm = 300) {
  const [lng, lat] = point
  for (const [rLng, rLat] of routeCoords) {
    if (haversineKm(lat, lng, rLat, rLng) < radiusKm) return true
  }
  return false
}
