export const seaLanes = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Suez Canal Route',
        type: 'sea',
        volume_mt: 1200,
        vessels_day: 50,
        chokepoint: true,
        alternatives: ['Cape of Good Hope Route'],
        description: 'Main Europe-Asia shipping artery via Suez Canal. ~12% of global trade passes through.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-5.5, 36.0],   // Gibraltar
          [10.0, 38.5],   // Sardinia
          [15.0, 37.5],   // Sicily
          [25.0, 34.0],   // Crete
          [32.55, 30.5],  // Suez Canal entrance
          [33.5, 27.5],   // Red Sea North
          [37.5, 22.0],   // Red Sea Middle
          [43.5, 14.5],   // Bab-el-Mandeb
          [50.5, 12.0],   // Gulf of Aden
          [57.0, 10.5],   // Arabian Sea
          [65.0, 15.0],   // Indian Ocean
          [72.5, 18.5],   // Near Mumbai
          [80.0, 10.0],   // Near Sri Lanka
          [95.0, 5.0],    // Andaman Sea
          [103.8, 1.3],   // Malacca
          [108.5, 10.0],  // South China Sea
          [114.0, 22.0],  // Hong Kong
          [121.5, 25.0],  // Taiwan
          [127.0, 34.0],  // Korea Strait
          [135.0, 35.0],  // Japan
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Red Sea / Gulf of Aden',
        type: 'sea',
        volume_mt: 700,
        vessels_day: 40,
        chokepoint: true,
        alternatives: ['Cape of Good Hope Route'],
        description: 'Bab-el-Mandeb strait — critical chokepoint between Red Sea and Gulf of Aden.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [32.55, 30.5],  // Suez Canal
          [36.0, 27.0],   // Red Sea
          [40.0, 20.0],   // Midpoint Red Sea
          [43.5, 14.5],   // Bab-el-Mandeb
          [48.0, 12.0],   // Gulf of Aden
          [52.0, 11.5],   // Gulf of Aden East
          [57.0, 10.5],   // Arabian Sea
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cape of Good Hope Route',
        type: 'sea',
        volume_mt: 400,
        vessels_day: 20,
        chokepoint: false,
        alternatives: [],
        description: 'Bypass route around Africa, avoids Suez Canal. +14 days compared to Suez. Surge in use since 2023 Houthi crisis.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-5.5, 36.0],   // Gibraltar
          [-15.0, 28.0],  // Canary Islands
          [-20.0, 14.0],  // Senegal
          [-15.0, 0.0],   // Gulf of Guinea
          [5.0, -15.0],   // Angola
          [12.0, -28.0],  // Namibia
          [18.5, -34.0],  // Cape of Good Hope
          [26.0, -35.0],  // South Africa
          [35.0, -26.0],  // Mozambique
          [45.0, -15.0],  // Madagascar
          [55.0, -5.0],   // Reunion
          [65.0, 5.0],    // Indian Ocean
          [72.5, 18.5],   // Near Mumbai
          [80.0, 10.0],   // Sri Lanka
          [95.0, 5.0],    // Andaman Sea
          [103.8, 1.3],   // Malacca
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Panama Canal Route',
        type: 'sea',
        volume_mt: 500,
        vessels_day: 36,
        chokepoint: true,
        alternatives: ['Drake Passage', 'Cape Horn / Drake Passage'],
        description: 'Pacific-Atlantic shortcut via Panama Canal. ~6% of global seaborne trade.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-75.0, 40.0],  // US East Coast (NY)
          [-77.0, 35.0],  // Carolinas
          [-80.0, 25.0],  // Florida
          [-79.9, 9.1],   // Panama Canal
          [-85.0, 10.0],  // Gulf of Panama
          [-90.0, 14.0],  // Guatemala
          [-105.0, 20.0], // Mexico
          [-118.0, 34.0], // Los Angeles
          [-122.5, 37.5], // San Francisco
          [-130.0, 45.0], // Pacific
          [-145.0, 50.0], // Gulf of Alaska
          [-155.0, 55.0], // Alaska
          [175.0, 52.0],  // Bering Sea approach
          [145.0, 40.0],  // Japan coast
          [135.0, 35.0],  // Japan
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Strait of Malacca',
        type: 'sea',
        volume_mt: 900,
        vessels_day: 84,
        chokepoint: true,
        alternatives: ['Lombok Strait', 'Sunda Strait'],
        description: 'World\'s busiest shipping lane. 25% of global trade. Connects Indian Ocean to South China Sea.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [80.0, 10.0],   // Sri Lanka
          [85.0, 7.0],    // Bay of Bengal
          [92.0, 3.0],    // Andaman Sea
          [96.0, 3.5],    // Aceh
          [100.0, 2.5],   // Malacca Strait North
          [103.8, 1.3],   // Singapore
          [107.0, 3.0],   // South China Sea entry
          [110.0, 8.0],   // Vietnam
          [114.0, 16.0],  // Philippines
          [120.0, 22.0],  // Taiwan Strait
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Strait of Hormuz',
        type: 'sea',
        volume_mt: 1800,
        vessels_day: 21,
        chokepoint: true,
        alternatives: [],
        description: 'World\'s most critical oil chokepoint. ~20% of global petroleum passes through. Persian Gulf exit.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [50.0, 26.5],   // Persian Gulf
          [52.0, 26.0],   // UAE
          [56.5, 24.5],   // Hormuz Strait
          [58.0, 23.0],   // Gulf of Oman
          [60.0, 22.0],   // Arabian Sea
          [65.0, 17.0],   // Indian Ocean
          [57.0, 10.5],   // Gulf of Aden
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'English Channel',
        type: 'sea',
        volume_mt: 800,
        vessels_day: 500,
        chokepoint: true,
        alternatives: [],
        description: 'Busiest seaway in the world by vessel count. ~500 vessels daily. Europe\'s main maritime artery.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-5.5, 48.0],   // Atlantic approach
          [-4.5, 48.5],   // Finistere
          [-3.0, 48.8],   // Brest
          [-1.5, 49.5],   // Cherbourg
          [0.0, 50.0],    // Mid-Channel
          [1.5, 51.0],    // Dover
          [2.5, 51.5],    // Strait of Dover
          [4.0, 52.0],    // Netherlands
          [5.0, 53.0],    // North Sea
          [8.0, 55.0],    // Denmark
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Danish Straits',
        type: 'sea',
        volume_mt: 300,
        vessels_day: 120,
        chokepoint: true,
        alternatives: [],
        description: 'Only access to the Baltic Sea. Kattegat and Skagerrak straits. Critical for Baltic trade.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [5.0, 53.0],    // North Sea
          [8.0, 55.0],    // Kattegat south
          [10.5, 56.0],   // Skagerrak
          [12.0, 56.5],   // Oresund
          [15.0, 55.5],   // Baltic entry
          [18.0, 57.0],   // Baltic
          [20.0, 58.0],   // Baltic
          [24.0, 59.5],   // Finland Gulf approach
          [26.0, 60.0],   // Helsinki
          [30.0, 60.0],   // St. Petersburg
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Turkish Straits / Bosphorus',
        type: 'sea',
        volume_mt: 400,
        vessels_day: 150,
        chokepoint: true,
        alternatives: [],
        description: 'Bosphorus + Dardanelles — only Black Sea exit. Critical for Russian/Ukrainian grain exports.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [25.0, 40.5],   // Aegean
          [26.5, 40.0],   // Dardanelles
          [27.5, 40.8],   // Marmara
          [29.0, 41.0],   // Bosphorus south
          [29.1, 41.2],   // Istanbul
          [29.3, 41.5],   // Bosphorus north
          [30.0, 42.0],   // Black Sea
          [32.0, 46.0],   // Black Sea Ukraine
          [37.0, 47.0],   // Azov approach
          [36.5, 45.5],   // Crimea
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Trans-Atlantic North',
        type: 'sea',
        volume_mt: 600,
        vessels_day: 30,
        chokepoint: false,
        alternatives: [],
        description: 'Main North Atlantic route between Europe and US East Coast. Most heavily traded ocean route.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-74.0, 40.7],  // New York
          [-65.0, 43.0],  // Nova Scotia
          [-50.0, 47.0],  // Newfoundland
          [-35.0, 52.0],  // Mid-Atlantic
          [-20.0, 53.0],  // Iceland approach
          [-10.0, 51.5],  // Ireland
          [-5.5, 48.0],   // UK/France
          [-4.0, 50.5],   // English Channel
          [4.0, 52.0],    // Netherlands
          [10.0, 53.5],   // Germany
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Trans-Atlantic South',
        type: 'sea',
        volume_mt: 350,
        vessels_day: 18,
        chokepoint: false,
        alternatives: [],
        description: 'Europe to South America shipping route. Key for Brazilian commodity exports.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-43.0, -22.9], // Rio de Janeiro
          [-45.0, -15.0], // Brazil coast
          [-40.0, -5.0],  // Northeast Brazil
          [-30.0, 5.0],   // Equator crossing
          [-20.0, 15.0],  // Cape Verde
          [-15.0, 28.0],  // Canary Islands
          [-9.0, 38.0],   // Lisbon
          [-5.5, 36.0],   // Gibraltar
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Trans-Pacific North',
        type: 'sea',
        volume_mt: 700,
        vessels_day: 25,
        chokepoint: false,
        alternatives: [],
        description: 'US West Coast to Japan/Korea. Largest container trade lane by volume.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-122.5, 37.5], // San Francisco
          [-130.0, 42.0], // Pacific
          [-145.0, 47.0], // Mid-Pacific
          [-165.0, 50.0], // Aleutians approach
          [175.0, 52.0],  // North Pacific
          [155.0, 46.0],  // Kurils
          [141.0, 40.0],  // Honshu
          [135.0, 35.0],  // Japan (Osaka)
          [129.0, 35.5],  // Korea Strait
          [126.5, 37.5],  // Incheon
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Trans-Pacific South',
        type: 'sea',
        volume_mt: 450,
        vessels_day: 18,
        chokepoint: false,
        alternatives: [],
        description: 'US West Coast to Australia, SE Asia, and Pacific Islands.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-118.0, 34.0], // Los Angeles
          [-130.0, 28.0], // Pacific
          [-150.0, 20.0], // Central Pacific
          [-170.0, 10.0], // Equatorial
          [175.0, 5.0],   // Gilbert Islands
          [160.0, -5.0],  // Solomon Islands
          [150.0, -15.0], // Coral Sea
          [145.0, -20.0], // Great Barrier Reef
          [153.0, -27.5], // Brisbane
          [151.0, -34.0], // Sydney
          [145.0, -38.0], // Melbourne
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Indian Ocean West',
        type: 'sea',
        volume_mt: 500,
        vessels_day: 22,
        chokepoint: false,
        alternatives: [],
        description: 'Middle East to East Africa and Europe bypass. Oil tanker route.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [56.5, 24.5],   // Hormuz
          [55.0, 20.0],   // Arabian Sea
          [52.0, 15.0],   // Yemen coast
          [48.0, 12.0],   // Gulf of Aden
          [43.0, 5.0],    // Somali Basin
          [40.0, -5.0],   // East Africa
          [40.5, -15.0],  // Mozambique channel
          [35.0, -20.0],  // Mozambique
          [35.0, -26.0],  // Durban
          [26.0, -35.0],  // South Africa
          [18.5, -34.0],  // Cape of Good Hope
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Indian Ocean East',
        type: 'sea',
        volume_mt: 550,
        vessels_day: 28,
        chokepoint: false,
        alternatives: [],
        description: 'India to SE Asia and Australia. Coal, iron ore, LNG trade route.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [72.5, 18.5],   // Mumbai
          [77.5, 8.0],    // Sri Lanka west
          [80.0, 10.0],   // Sri Lanka east
          [85.0, 5.0],    // Bay of Bengal
          [90.0, 0.0],    // Equatorial Indian Ocean
          [95.0, -8.0],   // Sumatra west
          [100.0, -12.0], // Java west
          [110.0, -20.0], // Indian Ocean
          [115.0, -28.0], // Western Australia
          [122.0, -34.0], // Perth area
          [130.0, -32.0], // South Australia
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'South China Sea',
        type: 'sea',
        volume_mt: 1100,
        vessels_day: 150,
        chokepoint: false,
        alternatives: [],
        description: 'Critical for SE Asia-East Asia trade. Contested waters. ~$3.37T in trade annually.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [103.8, 1.3],   // Singapore
          [105.0, 5.0],   // South China Sea south
          [108.0, 8.0],   // Vietnam
          [110.0, 12.0],  // Central SCS
          [112.0, 16.0],  // Paracel Islands
          [114.0, 20.0],  // Hainan approach
          [114.0, 22.0],  // Hong Kong
          [117.0, 25.0],  // Fujian
          [121.5, 25.0],  // Taiwan Strait
          [122.0, 30.0],  // Shanghai
          [122.5, 37.0],  // Yellow Sea
          [127.0, 34.0],  // Korea Strait
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Arctic Northern Sea Route',
        type: 'sea',
        volume_mt: 35,
        vessels_day: 2,
        chokepoint: false,
        alternatives: ['Suez Canal Route'],
        description: 'Arctic shortcut between Europe and Asia. ~30% shorter than Suez. Seasonal (ice-free July-Oct). Growing due to climate change.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [20.0, 70.0],   // Norway North
          [30.0, 73.0],   // Barents Sea
          [40.0, 73.5],   // Novaya Zemlya
          [55.0, 73.0],   // Kara Sea
          [70.0, 73.5],   // Ob Gulf
          [90.0, 75.0],   // Laptev Sea
          [110.0, 74.0],  // East Siberian
          [130.0, 72.0],  // Chukchi approach
          [145.0, 65.0],  // Bering Strait approach
          [168.0, 65.5],  // Bering Strait
          [170.0, 60.0],  // Alaska
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Mediterranean Main',
        type: 'sea',
        volume_mt: 650,
        vessels_day: 90,
        chokepoint: false,
        alternatives: [],
        description: 'Main Mediterranean shipping corridor from Gibraltar to Suez.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-5.5, 36.0],   // Gibraltar
          [-2.0, 37.0],   // Spain south
          [5.0, 37.5],    // Algeria
          [10.5, 37.0],   // Tunisia
          [13.0, 32.5],   // Libya north
          [18.0, 32.5],   // Tripoli
          [22.0, 32.0],   // Egypt north
          [25.0, 34.0],   // Crete south
          [29.0, 31.5],   // Alexandria
          [32.55, 30.5],  // Suez
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cape Horn / Drake Passage',
        type: 'sea',
        volume_mt: 80,
        vessels_day: 4,
        chokepoint: false,
        alternatives: ['Panama Canal Route'],
        description: 'Historic Atlantic-Pacific route around South America. Backup for Panama Canal. Notoriously rough seas.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-52.0, -52.0], // Falklands
          [-60.0, -57.0], // Drake Passage
          [-65.0, -60.0], // Antarctic approach
          [-68.0, -56.0], // Cape Horn
          [-70.0, -52.0], // Chile coast
          [-75.0, -45.0], // Magallanes
          [-80.0, -35.0], // Chile central
          [-80.0, -25.0], // Atacama coast
          [-85.0, -10.0], // Ecuador
          [-85.0, 5.0],   // Colombia
          [-79.9, 9.1],   // Panama Canal
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Lombok Strait',
        type: 'sea',
        volume_mt: 150,
        vessels_day: 15,
        chokepoint: false,
        alternatives: [],
        description: 'Alternative to Malacca Strait. Deep water route through Indonesia. Used by VLCCs too large for Malacca.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [80.0, 10.0],   // Sri Lanka
          [85.0, 3.0],    // Bay of Bengal
          [92.0, -3.0],   // Sumatra west
          [98.0, -5.0],   // Sumatra south
          [105.0, -8.0],  // Java
          [109.0, -8.5],  // Lombok Strait
          [115.5, -8.0],  // Lombok Strait east
          [118.0, -7.0],  // Flores Sea
          [120.0, 5.0],   // Sulawesi
          [123.0, 10.0],  // Philippines
          [120.0, 20.0],  // Luzon Strait
          [121.5, 25.0],  // Taiwan
        ],
      },
    },
  ],
}
