import { detourCosts } from '../data/commodities'

/**
 * Calculate the cost of a detour vs the original route.
 * @param {number} originalKm - original route distance in km
 * @param {number} detourKm - detour route distance in km
 * @param {'sea'|'air'|'road'|'rail'} routeType
 * @param {number} volumeTonnes - cargo volume in tonnes
 * @param {number} valuePerTon - cargo value per tonne in USD
 * @returns {{ extraKm, extraDays, fuelCostM, holdingCostM, totalM }}
 */
export function calcDetourCost(originalKm, detourKm, routeType, volumeTonnes, valuePerTon) {
  const costs = detourCosts[routeType] || detourCosts.sea
  const extraKm = Math.max(0, detourKm - originalKm)
  const extraDays = extraKm / costs.kmPerDay
  const fuelCostM = extraKm * costs.costPerKm
  const cargoValueM = (volumeTonnes * valuePerTon) / 1e6
  // Holding/financing cost: 0.02% per day on cargo value
  const holdingCostM = cargoValueM * 0.0002 * extraDays

  return {
    extraKm: Math.round(extraKm),
    extraDays: extraDays.toFixed(1),
    fuelCostM: fuelCostM.toFixed(2),
    holdingCostM: holdingCostM.toFixed(2),
    totalM: (fuelCostM + holdingCostM).toFixed(2),
  }
}

/**
 * Calculate estimated monetary impact of a disruption.
 * @param {object} disruption
 * @param {number} daysBlocked
 */
export function calcDisruptionImpact(disruption, daysBlocked = 30) {
  const daily = disruption.monetaryImpact?.dailyBillion
  const total = disruption.monetaryImpact?.totalBillion

  return {
    totalBillionUSD: daily
      ? (daily * daysBlocked).toFixed(1)
      : total != null
      ? String(total)
      : 'N/A',
    dailyBillionUSD: daily != null ? String(daily) : 'N/A',
  }
}

/**
 * Typical route distances (km) for known chokepoints.
 * Used in the monetary panel for quick estimates.
 */
export const routeDistances = {
  'Suez Canal Route': { primary: 21000, detour: 35000, detourName: 'Cape of Good Hope' },
  'Red Sea / Gulf of Aden': { primary: 2000, detour: 16000, detourName: 'Cape of Good Hope' },
  'Panama Canal Route': { primary: 1500, detour: 13000, detourName: 'Cape Horn' },
  'Strait of Malacca': { primary: 900, detour: 3500, detourName: 'Lombok Strait' },
  'Strait of Hormuz': { primary: 100, detour: 5000, detourName: 'Overland pipeline' },
  'Turkish Straits / Bosphorus': { primary: 50, detour: 8000, detourName: 'Rail via Romania' },
  'English Channel': { primary: 560, detour: 1800, detourName: 'North of Scotland' },
  'Arctic Northern Sea Route': { primary: 14000, detour: 21000, detourName: 'Suez Canal Route' },
}
