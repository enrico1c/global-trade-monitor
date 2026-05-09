export const commodities = [
  {
    id: 'oil',
    name: 'Crude Oil',
    unit: 'barrel',
    valuePerTon: 560,
    typicalRoutes: ['Strait of Hormuz', 'Suez Canal Route'],
  },
  {
    id: 'grain',
    name: 'Grain / Wheat',
    unit: 'tonne',
    valuePerTon: 220,
    typicalRoutes: ['Turkish Straits / Bosphorus', 'Trans-Atlantic South'],
  },
  {
    id: 'containers',
    name: 'Container Cargo',
    unit: 'TEU',
    valuePerTon: 1200,
    typicalRoutes: ['Suez Canal Route', 'Strait of Malacca', 'Panama Canal Route'],
  },
  {
    id: 'lng',
    name: 'LNG',
    unit: 'tonne',
    valuePerTon: 450,
    typicalRoutes: ['Strait of Hormuz', 'Strait of Malacca'],
  },
  {
    id: 'coal',
    name: 'Coal',
    unit: 'tonne',
    valuePerTon: 130,
    typicalRoutes: ['Trans-Pacific South', 'Indian Ocean East'],
  },
  {
    id: 'electronics',
    name: 'Electronics',
    unit: 'tonne',
    valuePerTon: 8000,
    typicalRoutes: ['Trans-Pacific North', 'Strait of Malacca'],
  },
  {
    id: 'iron_ore',
    name: 'Iron Ore',
    unit: 'tonne',
    valuePerTon: 110,
    typicalRoutes: ['Indian Ocean East', 'Trans-Pacific South'],
  },
  {
    id: 'chemicals',
    name: 'Chemicals',
    unit: 'tonne',
    valuePerTon: 950,
    typicalRoutes: ['English Channel', 'Trans-Atlantic North'],
  },
]

export const detourCosts = {
  sea: { costPerKm: 0.0015, kmPerDay: 500 },  // $M per km for large vessel
  air: { costPerKm: 0.008, kmPerDay: 900 },
  road: { costPerKm: 0.0003, kmPerDay: 200 },
  rail: { costPerKm: 0.0002, kmPerDay: 600 },
}
