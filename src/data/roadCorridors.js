export const roadCorridors = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Trans-Siberian Railway',
        type: 'rail',
        length_km: 9289,
        cargo_type: ['containers', 'coal', 'timber', 'grain'],
        alternatives: ['Northern Sea Route'],
        description: 'World\'s longest railway (Moscow to Vladivostok). Key Europe-Asia land bridge.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [37.6, 55.7],   // Moscow
          [56.0, 57.0],   // Perm
          [60.5, 56.8],   // Yekaterinburg
          [73.5, 55.0],   // Omsk
          [82.9, 55.0],   // Novosibirsk
          [93.0, 56.0],   // Krasnoyarsk
          [104.3, 52.3],  // Irkutsk
          [107.6, 51.8],  // Lake Baikal
          [115.0, 50.0],  // Chita
          [126.0, 50.5],  // Amur region
          [132.0, 48.5],  // Khabarovsk
          [138.0, 47.0],  // Vladivostok approach
          [132.0, 43.5],  // Vladivostok
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'New Silk Road / Belt and Road',
        type: 'rail',
        length_km: 11000,
        cargo_type: ['containers', 'electronics', 'machinery', 'consumer_goods'],
        alternatives: ['Suez Canal Route'],
        description: 'China\'s Belt and Road Initiative rail corridor. Connects Chongqing to Duisburg, Germany in 18 days.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [106.5, 29.6],  // Chongqing
          [104.1, 36.1],  // Lanzhou
          [91.1, 44.0],   // Urumqi
          [87.0, 43.5],   // Xinjiang
          [80.0, 42.0],   // Kazakhstan border
          [76.0, 43.0],   // Almaty area
          [68.5, 43.0],   // Kazakhstan central
          [59.0, 41.5],   // Aral Sea area
          [52.5, 43.5],   // Caspian
          [50.0, 46.5],   // Aktau
          [43.0, 49.0],   // Atyrau
          [37.0, 48.5],   // Rostov
          [30.0, 50.5],   // Kiev
          [24.0, 50.0],   // Lviv
          [18.0, 50.0],   // Krakow
          [14.0, 51.0],   // Poland west
          [10.0, 51.5],   // Frankfurt
          [6.8, 51.4],    // Duisburg
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Pan-American Highway',
        type: 'road',
        length_km: 30000,
        cargo_type: ['agricultural', 'manufactured_goods', 'vehicles', 'food'],
        alternatives: [],
        description: 'World\'s longest driveable road (Alaska to Argentina). Interrupted by Darien Gap.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-147.0, 64.0], // Fairbanks, Alaska
          [-135.0, 60.0], // Whitehorse
          [-123.0, 49.0], // Vancouver
          [-122.5, 37.5], // San Francisco
          [-117.0, 32.5], // San Diego/Tijuana
          [-106.0, 19.0], // Mexico City
          [-90.0, 14.5],  // Guatemala City
          [-87.0, 13.5],  // San Salvador
          [-85.0, 12.0],  // Managua
          [-83.0, 9.0],   // San Jose
          [-77.0, 8.0],   // Panama (Darien Gap break)
          [-74.0, 4.5],   // Bogota
          [-77.0, -0.2],  // Quito
          [-77.0, -12.0], // Lima
          [-70.7, -33.5], // Santiago
          [-58.4, -34.6], // Buenos Aires
          [-47.9, -15.8], // Brasilia
          [-43.0, -22.9], // Rio de Janeiro
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Trans-Africa Highway',
        type: 'road',
        length_km: 10228,
        cargo_type: ['agricultural', 'minerals', 'manufactured_goods'],
        alternatives: [],
        description: 'Cairo to Cape Town corridor. Partially unpaved. Critical for African continental trade.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [31.2, 30.1],   // Cairo
          [32.5, 25.0],   // Aswan
          [33.0, 21.0],   // Sudan
          [32.0, 15.5],   // Khartoum
          [36.0, 9.0],    // Addis Ababa area
          [36.8, 1.2],    // Nairobi approach
          [36.8, -1.3],   // Nairobi
          [36.0, -6.0],   // Tanzania
          [33.5, -13.0],  // Lilongwe
          [32.5, -18.0],  // Zambia
          [31.0, -25.0],  // Maputo approach
          [28.0, -26.0],  // Johannesburg
          [18.5, -34.0],  // Cape Town
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'US Interstate 80',
        type: 'road',
        length_km: 4667,
        cargo_type: ['manufactured_goods', 'agricultural', 'containers', 'retail'],
        alternatives: ['Trans-Canadian Highway'],
        description: 'New York to San Francisco. America\'s main transcontinental freight highway.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-74.0, 40.7],  // New York
          [-76.0, 41.0],  // Pennsylvania
          [-80.0, 41.5],  // Ohio
          [-86.0, 41.5],  // Chicago area
          [-90.5, 41.0],  // Iowa border
          [-95.5, 41.5],  // Omaha
          [-100.0, 41.0], // Nebraska
          [-105.0, 41.0], // Cheyenne
          [-111.0, 41.0], // Salt Lake City
          [-115.5, 40.5], // Nevada
          [-119.0, 39.5], // Reno
          [-121.5, 38.0], // Sacramento
          [-122.5, 37.5], // San Francisco
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'European E-Road Network',
        type: 'road',
        length_km: 9000,
        cargo_type: ['manufactured_goods', 'automotive', 'food', 'chemicals'],
        alternatives: ['Trans-Siberian Railway'],
        description: 'E-road network Lisbon to Moscow (E80/E30 corridor). Spine of European freight.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-9.1, 38.7],   // Lisbon
          [-8.6, 39.5],   // Portugal
          [-7.0, 38.7],   // Badajoz
          [-3.7, 40.4],   // Madrid
          [2.5, 41.5],    // Barcelona
          [7.0, 43.5],    // Nice
          [12.5, 41.9],   // Rome
          [14.5, 41.0],   // Napoli approach
          [16.4, 43.5],   // Split
          [18.0, 44.0],   // Bosnia
          [20.5, 44.0],   // Belgrade
          [23.7, 44.5],   // Bucharest approach
          [26.0, 44.5],   // Bucharest
          [29.0, 41.0],   // Istanbul
          [37.6, 55.7],   // Moscow
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Middle Corridor',
        type: 'rail',
        length_km: 6700,
        cargo_type: ['containers', 'manufactured_goods', 'agricultural'],
        alternatives: ['Northern Silk Road via Russia'],
        description: 'Trans-Caspian International Transport Route. China to Europe via Kazakhstan, Caspian Sea, Azerbaijan, Georgia, Turkey.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [121.5, 37.5],  // China coast
          [114.0, 36.0],  // Zhengzhou
          [108.0, 34.5],  // Xi\'an
          [98.0, 40.0],   // Dunhuang
          [87.5, 43.5],   // Xinjiang west
          [80.0, 42.0],   // Kyrgyzstan border
          [76.0, 43.0],   // Almaty
          [68.0, 44.0],   // Uzbekistan
          [58.5, 37.5],   // Ashgabat
          [53.0, 37.0],   // Caspian Turkmenistan
          [52.5, 40.5],   // Caspian Sea crossing
          [49.5, 40.5],   // Baku
          [46.0, 41.5],   // Tbilisi area
          [41.7, 41.0],   // Poti (Georgia)
          [36.0, 37.0],   // Turkey
          [29.0, 41.0],   // Istanbul
          [20.5, 44.0],   // Serbia
          [14.5, 48.2],   // Vienna
          [8.7, 50.1],    // Frankfurt
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Trans-Canadian Highway',
        type: 'road',
        length_km: 7821,
        cargo_type: ['grain', 'timber', 'minerals', 'manufactured_goods'],
        alternatives: ['US Interstate 80'],
        description: 'World\'s longest national highway. St. John\'s, Newfoundland to Victoria, BC.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-52.7, 47.6],  // St. John\'s NL
          [-63.6, 44.6],  // Halifax
          [-71.2, 46.8],  // Quebec City
          [-73.6, 45.5],  // Montreal
          [-79.4, 43.7],  // Toronto
          [-81.0, 46.0],  // Sudbury
          [-89.5, 48.5],  // Thunder Bay
          [-97.2, 49.9],  // Winnipeg
          [-104.6, 50.5], // Regina
          [-106.7, 52.1], // Saskatoon
          [-114.1, 51.1], // Calgary
          [-116.5, 51.5], // Banff
          [-119.5, 50.7], // Kelowna
          [-122.5, 49.3], // Vancouver
          [-123.4, 48.4], // Victoria BC
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Brazil BR-163 Soy Corridor',
        type: 'road',
        length_km: 3500,
        cargo_type: ['soy', 'corn', 'agricultural', 'grain'],
        alternatives: [],
        description: 'Main soy export corridor from Mato Grosso to ports. Brazil exports 90M tonnes/year soy.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-55.0, -13.0], // Mato Grosso soy fields
          [-55.5, -10.0], // Para state
          [-54.0, -6.0],  // Santarem area
          [-52.0, -2.5],  // Amazon estuary
          [-48.5, -1.5],  // Belem
          [-38.5, -4.0],  // Maranhao
          [-35.5, -5.0],  // Fortaleza
          [-34.9, -8.0],  // Recife
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Australia Highway 1',
        type: 'road',
        length_km: 14500,
        cargo_type: ['minerals', 'agricultural', 'consumer_goods', 'livestock'],
        alternatives: [],
        description: 'World\'s longest national highway. Circles entire Australian continent.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [151.2, -33.9], // Sydney
          [153.0, -27.5], // Brisbane
          [147.0, -19.3], // Townsville
          [145.8, -16.9], // Cairns
          [136.5, -12.5], // Darwin
          [130.0, -25.0], // Stuart Highway
          [121.5, -30.9], // Kalgoorlie
          [115.9, -32.0], // Perth
          [117.0, -34.0], // Albany
          [127.0, -34.0], // Esperance area
          [133.0, -33.5], // Nullarbor
          [138.6, -34.9], // Adelaide
          [141.0, -37.0], // Victoria border
          [144.9, -37.8], // Melbourne
          [148.0, -36.0], // Snowy Mountains
          [151.2, -33.9], // Sydney (loop back)
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'India NH-44',
        type: 'road',
        length_km: 3745,
        cargo_type: ['agricultural', 'manufactured_goods', 'minerals', 'vehicles'],
        alternatives: [],
        description: 'India\'s longest national highway (Srinagar to Kanyakumari). Spine of Indian road freight.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [74.8, 34.1],   // Srinagar
          [76.8, 30.7],   // Ambala
          [77.2, 28.6],   // Delhi
          [78.0, 26.5],   // Agra
          [78.5, 24.0],   // Jhansi
          [79.5, 21.5],   // Nagpur
          [79.0, 18.0],   // Hyderabad
          [78.5, 14.5],   // Bangalore approach
          [77.6, 12.9],   // Bangalore
          [77.7, 10.0],   // Coimbatore
          [77.5, 8.1],    // Kanyakumari
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Southern African Development Corridor',
        type: 'road',
        length_km: 3500,
        cargo_type: ['minerals', 'coal', 'agricultural', 'containers'],
        alternatives: [],
        description: 'Dar es Salaam to Durban corridor. Main SADC freight route. Copper belt access.',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [39.3, -6.8],   // Dar es Salaam
          [37.0, -8.0],   // Tanzania inland
          [32.5, -9.0],   // Zambia border
          [28.3, -15.4],  // Lusaka
          [26.0, -17.0],  // Livingstone
          [27.5, -20.0],  // Botswana north
          [25.9, -24.7],  // Gaborone
          [28.0, -26.2],  // Johannesburg
          [30.0, -29.5],  // eThekwini
          [31.0, -29.9],  // Durban
        ],
      },
    },
  ],
}
