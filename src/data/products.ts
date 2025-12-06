export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  specs: string[];
  images: string[];
}

export const categories = [
  { id: "electronics", name: "Electronics", icon: "Laptop" },
  { id: "fashion", name: "Fashion", icon: "Shirt" },
  { id: "sports", name: "Sports", icon: "Dumbbell" },
  { id: "home", name: "Home & Living", icon: "Home" },
];

export const products: Product[] = [
  // Electronics (15 products)
  {
    id: "e1",
    name: "Quantum Pro Laptop",
    category: "electronics",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    description: "Next-gen laptop with quantum processing power. Features the latest AI acceleration and holographic display technology.",
    specs: ["Intel i9 13th Gen", "32GB RAM", "1TB SSD", "15.6\" 4K OLED"],
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500"
    ]
  },
  {
    id: "e2",
    name: "NeuroPods Elite",
    category: "electronics",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500",
    description: "Wireless earbuds with neural audio processing and adaptive noise cancellation.",
    specs: ["Active Noise Cancellation", "32-hour Battery", "Spatial Audio", "IPX7 Waterproof"],
    images: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500",
      "https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=500"
    ]
  },
  {
    id: "e3",
    name: "HoloPhone X",
    category: "electronics",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    description: "Revolutionary smartphone with holographic projection and quantum-secure communication.",
    specs: ["6.7\" Holographic Display", "256GB Storage", "108MP Camera", "5G Ultra"],
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500"
    ]
  },
  {
    id: "e4",
    name: "CyberWatch Ultra",
    category: "electronics",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    description: "Advanced smartwatch with biometric health monitoring and AI fitness coach.",
    specs: ["AMOLED Display", "7-day Battery", "ECG + SpO2", "100m Water Resistant"],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500"
    ]
  },
  {
    id: "e5",
    name: "Gaming Beast RTX",
    category: "electronics",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500",
    description: "Ultimate gaming desktop with liquid cooling and RGB everything.",
    specs: ["RTX 4090", "AMD Ryzen 9", "64GB RAM", "2TB NVMe"],
    images: [
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500",
      "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=500",
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500"
    ]
  },
  {
    id: "e6",
    name: "4K ProCam",
    category: "electronics",
    price: 1899.99,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
    description: "Professional mirrorless camera with AI-powered autofocus.",
    specs: ["45MP Sensor", "8K Video", "Dual Card Slots", "Weather Sealed"],
    images: [
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
      "https://images.unsplash.com/photo-1606980875554-b57df129fe42?w=500",
      "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=500",
      "https://images.unsplash.com/photo-1606982988954-29a93c9d73c7?w=500"
    ]
  },
  {
    id: "e7",
    name: "UltraWide Pro Monitor",
    category: "electronics",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    description: "49-inch curved ultrawide monitor for ultimate productivity.",
    specs: ["5120x1440", "144Hz", "HDR1000", "USB-C Hub"],
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=500"
    ]
  },
  {
    id: "e8",
    name: "Mechanical RGB Keyboard",
    category: "electronics",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    description: "Premium mechanical keyboard with hot-swappable switches.",
    specs: ["Cherry MX Switches", "Per-Key RGB", "Aluminum Frame", "Programmable"],
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500"
    ]
  },
  {
    id: "e9",
    name: "Wireless Gaming Mouse",
    category: "electronics",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    description: "Ultra-light wireless gaming mouse with 20,000 DPI sensor.",
    specs: ["20000 DPI", "Wireless", "RGB Lighting", "70-hour Battery"],
    images: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
      "https://images.unsplash.com/photo-1622186509690-5b8b5b5c5b0d?w=500",
      "https://images.unsplash.com/photo-1619070565522-fb04aca9cdb5?w=500"
    ]
  },
  {
    id: "e10",
    name: "VR Headset Pro",
    category: "electronics",
    price: 549.99,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500",
    description: "Next-generation VR headset with eye tracking and haptic feedback.",
    specs: ["4K per Eye", "120Hz", "Inside-out Tracking", "Hand Tracking"],
    images: [
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500",
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500",
      "https://images.unsplash.com/photo-1617802690658-1173a812650d?w=500",
      "https://images.unsplash.com/photo-1606232920499-f3d6e1aa4c98?w=500"
    ]
  },
  {
    id: "e11",
    name: "Smart Home Hub",
    category: "electronics",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1558089687-22b21d9bbd4d?w=500",
    description: "Central control for all your smart home devices.",
    specs: ["Zigbee + WiFi", "Voice Assistant", "10\" Display", "All Integrations"],
    images: [
      "https://images.unsplash.com/photo-1558089687-22b21d9bbd4d?w=500",
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=500",
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=500",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500"
    ]
  },
  {
    id: "e12",
    name: "Portable SSD 2TB",
    category: "electronics",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500",
    description: "Ultra-fast portable storage with USB-C 3.2 Gen 2x2.",
    specs: ["2TB Capacity", "2000MB/s Read", "Shock Resistant", "Compact Design"],
    images: [
      "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500",
      "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=500",
      "https://images.unsplash.com/photo-1562408590-e32931084e23?w=500",
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=500"
    ]
  },
  {
    id: "e13",
    name: "Drone 4K Pro",
    category: "electronics",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500",
    description: "Professional camera drone with 4K 60fps and obstacle avoidance.",
    specs: ["4K 60fps", "30min Flight", "10km Range", "Intelligent Modes"],
    images: [
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500",
      "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500",
      "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=500",
      "https://images.unsplash.com/photo-1520263115673-610416f52ab6?w=500"
    ]
  },
  {
    id: "e14",
    name: "Studio Headphones",
    category: "electronics",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500",
    description: "Professional studio-grade headphones for audio production.",
    specs: ["50mm Drivers", "Hi-Res Audio", "Detachable Cable", "Memory Foam"],
    images: [
      "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
      "https://images.unsplash.com/photo-1598618443855-232ee0f819f2?w=500",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500"
    ]
  },
  {
    id: "e15",
    name: "Wireless Charger Station",
    category: "electronics",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1591290619762-e06dbf0c4f57?w=500",
    description: "3-in-1 wireless charging station for phone, watch, and earbuds.",
    specs: ["15W Fast Charge", "3 Devices", "LED Indicator", "Case Friendly"],
    images: [
      "https://images.unsplash.com/photo-1591290619762-e06dbf0c4f57?w=500",
      "https://images.unsplash.com/photo-1625994741318-e7c2f53a6b04?w=500",
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
      "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=500"
    ]
  },

  // Fashion (15 products)
  {
    id: "f1",
    name: "Cyber Leather Jacket",
    category: "fashion",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    description: "Premium synthetic leather jacket with LED accent strips.",
    specs: ["Vegan Leather", "LED Strips", "Water Resistant", "Multiple Sizes"],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
      "https://images.unsplash.com/photo-1520975867597-0af37a22e31e?w=500",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
      "https://images.unsplash.com/photo-1614252368350-8a6bfdc1fe5d?w=500"
    ]
  },
  {
    id: "f2",
    name: "Smart Running Shoes",
    category: "fashion",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    description: "Athletic shoes with built-in fitness tracking sensors.",
    specs: ["Built-in Sensors", "Breathable Mesh", "Responsive Cushion", "App Connected"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=500",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500"
    ]
  },
  {
    id: "f3",
    name: "Designer Sunglasses",
    category: "fashion",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    description: "Polarized sunglasses with titanium frame and smart UV protection.",
    specs: ["Polarized Lenses", "Titanium Frame", "UV400 Protection", "Anti-Scratch"],
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500",
      "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?w=500"
    ]
  },
  {
    id: "f4",
    name: "Premium Backpack",
    category: "fashion",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    description: "Tech-focused backpack with USB charging port and laptop compartment.",
    specs: ["USB Port", "Laptop Sleeve", "Water Resistant", "Anti-theft Design"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500",
      "https://images.unsplash.com/photo-1622560481175-5ff3d6f9c029?w=500"
    ]
  },
  {
    id: "f5",
    name: "Classic Watch",
    category: "fashion",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500",
    description: "Elegant automatic watch with sapphire crystal and leather strap.",
    specs: ["Automatic Movement", "Sapphire Crystal", "Leather Strap", "Water Resistant"],
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=500",
      "https://images.unsplash.com/photo-1587836374615-91d3512f8c94?w=500"
    ]
  },
  {
    id: "f6",
    name: "Wool Winter Coat",
    category: "fashion",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500",
    description: "Premium wool blend coat with thermal insulation.",
    specs: ["Wool Blend", "Thermal Lined", "Water Repellent", "Classic Cut"],
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500",
      "https://images.unsplash.com/photo-1544923408-75c5cef46f14?w=500",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500"
    ]
  },
  {
    id: "f7",
    name: "Designer Handbag",
    category: "fashion",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    description: "Luxury handbag with genuine leather and gold hardware.",
    specs: ["Genuine Leather", "Multiple Compartments", "Adjustable Strap", "Gold Hardware"],
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500"
    ]
  },
  {
    id: "f8",
    name: "Athletic Wear Set",
    category: "fashion",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    description: "Moisture-wicking athletic wear perfect for any workout.",
    specs: ["Moisture-Wicking", "4-Way Stretch", "Breathable", "Quick-Dry"],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500",
      "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?w=500",
      "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=500"
    ]
  },
  {
    id: "f9",
    name: "Silk Scarf",
    category: "fashion",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500",
    description: "Elegant silk scarf with artistic pattern.",
    specs: ["100% Silk", "Hand Rolled Edges", "Unique Design", "Versatile Styling"],
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500",
      "https://images.unsplash.com/photo-1612722432474-b971cdcea546?w=500"
    ]
  },
  {
    id: "f10",
    name: "Denim Jeans",
    category: "fashion",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    description: "Premium selvedge denim with perfect fit and durability.",
    specs: ["Selvedge Denim", "Slim Fit", "Stretch Comfort", "Fade Resistant"],
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
      "https://images.unsplash.com/photo-1604176354204-9268737febed?w=500",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=500",
      "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=500"
    ]
  },
  {
    id: "f11",
    name: "Cashmere Sweater",
    category: "fashion",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500",
    description: "Luxurious 100% cashmere sweater for ultimate comfort.",
    specs: ["100% Cashmere", "Soft Touch", "Multiple Colors", "Classic Fit"],
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500",
      "https://images.unsplash.com/photo-1617319683879-4b4b4809af3a?w=500",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500"
    ]
  },
  {
    id: "f12",
    name: "Leather Belt",
    category: "fashion",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    description: "Genuine leather belt with reversible buckle.",
    specs: ["Genuine Leather", "Reversible", "Adjustable", "Classic Design"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      "https://images.unsplash.com/photo-1624222247344-550fb60583c0?w=500",
      "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=500",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    ]
  },
  {
    id: "f13",
    name: "Summer Dress",
    category: "fashion",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    description: "Flowy summer dress with floral print pattern.",
    specs: ["Breathable Fabric", "Floral Print", "Adjustable Straps", "Multiple Sizes"],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500"
    ]
  },
  {
    id: "f14",
    name: "Business Suit",
    category: "fashion",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1593032465175-e7f5e3dbf0e1?w=500",
    description: "Tailored business suit with premium wool fabric.",
    specs: ["Wool Blend", "Slim Fit", "Two-Piece", "Professional Look"],
    images: [
      "https://images.unsplash.com/photo-1593032465175-e7f5e3dbf0e1?w=500",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500",
      "https://images.unsplash.com/photo-1614252235316-8c857d38f0b5?w=500"
    ]
  },
  {
    id: "f15",
    name: "Casual Sneakers",
    category: "fashion",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    description: "Comfortable casual sneakers for everyday wear.",
    specs: ["Canvas Upper", "Cushioned Sole", "Breathable", "Classic Style"],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500"
    ]
  },

  // Sports (13 products)
  {
    id: "s1",
    name: "Pro Yoga Mat",
    category: "sports",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500",
    description: "Premium non-slip yoga mat with alignment guides.",
    specs: ["6mm Thick", "Non-Slip", "Eco-Friendly", "Carrying Strap"],
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500",
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=500"
    ]
  },
  {
    id: "s2",
    name: "Adjustable Dumbbells",
    category: "sports",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
    description: "Space-saving adjustable dumbbells from 5 to 52.5 lbs.",
    specs: ["5-52.5 lbs", "Quick Change", "Compact", "Sturdy Stand"],
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
      "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=500"
    ]
  },
  {
    id: "s3",
    name: "Smart Bike Trainer",
    category: "sports",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500",
    description: "Interactive bike trainer with realistic road feel.",
    specs: ["2000W Power", "App Connected", "Quiet Operation", "Auto Resistance"],
    images: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500",
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=500",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=500"
    ]
  },
  {
    id: "s4",
    name: "Running Hydration Pack",
    category: "sports",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=500",
    description: "Lightweight hydration pack for long-distance running.",
    specs: ["2L Reservoir", "Multiple Pockets", "Reflective Strips", "Bounce-Free"],
    images: [
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=500",
      "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=500",
      "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=500",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    ]
  },
  {
    id: "s5",
    name: "Resistance Bands Set",
    category: "sports",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=500",
    description: "Complete set of resistance bands for full-body workouts.",
    specs: ["5 Bands", "Multiple Resistance", "Door Anchor", "Handles Included"],
    images: [
      "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=500",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500"
    ]
  },
  {
    id: "s6",
    name: "Basketball",
    category: "sports",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500",
    description: "Official size basketball with superior grip.",
    specs: ["Size 7", "Indoor/Outdoor", "Superior Grip", "Durable"],
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500",
      "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=500",
      "https://images.unsplash.com/photo-1628779238951-2d920975c439?w=500",
      "https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=500"
    ]
  },
  {
    id: "s7",
    name: "Tennis Racket Pro",
    category: "sports",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=500",
    description: "Professional tennis racket with carbon fiber frame.",
    specs: ["Carbon Fiber", "310g", "Head-Heavy", "Pro String"],
    images: [
      "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=500",
      "https://images.unsplash.com/photo-1617882515892-1e8c2e3ef3b8?w=500",
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=500",
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=500"
    ]
  },
  {
    id: "s8",
    name: "Golf Club Set",
    category: "sports",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=500",
    description: "Complete golf club set for all skill levels.",
    specs: ["11 Clubs", "Stand Bag", "Graphite Shafts", "Pro Design"],
    images: [
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=500",
      "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=500",
      "https://images.unsplash.com/photo-1587174147374-59c8eb1830b4?w=500",
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=500"
    ]
  },
  {
    id: "s9",
    name: "Swimming Goggles",
    category: "sports",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=500",
    description: "Anti-fog swimming goggles with UV protection.",
    specs: ["Anti-Fog", "UV Protection", "Adjustable", "Leak-Proof"],
    images: [
      "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=500",
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500",
      "https://images.unsplash.com/photo-1600603405959-6d623e92445c?w=500",
      "https://images.unsplash.com/photo-1581093577421-f561a654a353?w=500"
    ]
  },
  {
    id: "s10",
    name: "Foam Roller",
    category: "sports",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500",
    description: "High-density foam roller for muscle recovery.",
    specs: ["High Density", "18-inch", "Textured Surface", "Durable Core"],
    images: [
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
      "https://images.unsplash.com/photo-1574680088814-452a3e8622c5?w=500",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500"
    ]
  },
  {
    id: "s11",
    name: "Boxing Gloves",
    category: "sports",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",
    description: "Premium leather boxing gloves with wrist support.",
    specs: ["16 oz", "Real Leather", "Wrist Support", "Ventilated"],
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=500",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500"
    ]
  },
  {
    id: "s12",
    name: "Jump Rope",
    category: "sports",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1598266663439-2056e6900339?w=500",
    description: "Speed jump rope with adjustable length.",
    specs: ["Adjustable", "Ball Bearings", "Weighted Handles", "Tangle-Free"],
    images: [
      "https://images.unsplash.com/photo-1598266663439-2056e6900339?w=500",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500"
    ]
  },
  {
    id: "s13",
    name: "Kettlebell Set",
    category: "sports",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
    description: "Cast iron kettlebell set for strength training.",
    specs: ["3-Piece Set", "Cast Iron", "Wide Handles", "10/15/20 lbs"],
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500"
    ]
  },

  // Home & Living (12 products)
  {
    id: "h1",
    name: "Smart LED Strip",
    category: "home",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500",
    description: "WiFi-enabled RGB LED strip with millions of colors.",
    specs: ["16.4ft", "RGB + White", "App Control", "Voice Assistant"],
    images: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500",
      "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500",
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500"
    ]
  },
  {
    id: "h2",
    name: "Coffee Maker Pro",
    category: "home",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500",
    description: "Programmable coffee maker with built-in grinder.",
    specs: ["Built-in Grinder", "12-Cup", "Timer", "Thermal Carafe"],
    images: [
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500",
      "https://images.unsplash.com/photo-1585128720987-b2da58c86f04?w=500",
      "https://images.unsplash.com/photo-1514315384763-ba401779410f?w=500"
    ]
  },
  {
    id: "h3",
    name: "Memory Foam Pillow",
    category: "home",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500",
    description: "Ergonomic memory foam pillow with cooling gel.",
    specs: ["Memory Foam", "Cooling Gel", "Adjustable", "Hypoallergenic"],
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500",
      "https://images.unsplash.com/photo-1566041510632-9d141d3e10e4?w=500",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500"
    ]
  },
  {
    id: "h4",
    name: "Air Purifier",
    category: "home",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500",
    description: "HEPA air purifier for large rooms up to 500 sq ft.",
    specs: ["True HEPA", "500 sq ft", "Smart Sensor", "Quiet Mode"],
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500",
      "https://images.unsplash.com/photo-1585128903994-13d3049a4461?w=500",
      "https://images.unsplash.com/photo-1616046386798-9a3b4c67e971?w=500",
      "https://images.unsplash.com/photo-1625914188450-bc8f6f8e4e71?w=500"
    ]
  },
  {
    id: "h5",
    name: "Electric Kettle",
    category: "home",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1594385208974-2e75f8c35476?w=500",
    description: "Variable temperature electric kettle with keep-warm function.",
    specs: ["1.7L", "Variable Temp", "Keep Warm", "Fast Boil"],
    images: [
      "https://images.unsplash.com/photo-1594385208974-2e75f8c35476?w=500",
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500",
      "https://images.unsplash.com/photo-1571897034716-8d0e7cb93f89?w=500",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500"
    ]
  },
  {
    id: "h6",
    name: "Weighted Blanket",
    category: "home",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
    description: "Therapeutic weighted blanket for better sleep.",
    specs: ["15 lbs", "Cooling Fabric", "Queen Size", "Removable Cover"],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500"
    ]
  },
  {
    id: "h7",
    name: "Robot Vacuum",
    category: "home",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500",
    description: "Smart robot vacuum with mapping and auto-empty base.",
    specs: ["Auto-Empty", "Mapping", "App Control", "2-in-1 Vacuum"],
    images: [
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500",
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=500",
      "https://images.unsplash.com/photo-1625806786037-2af608423424?w=500"
    ]
  },
  {
    id: "h8",
    name: "Decorative Wall Art",
    category: "home",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500",
    description: "Modern abstract canvas wall art set of 3.",
    specs: ["Canvas Print", "3-Piece Set", "Ready to Hang", "Fade Resistant"],
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500",
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=500",
      "https://images.unsplash.com/photo-1582053433896-25c2e7fb5fe7?w=500",
      "https://images.unsplash.com/photo-1560015534-cee980ba7e13?w=500"
    ]
  },
  {
    id: "h9",
    name: "Aromatherapy Diffuser",
    category: "home",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500",
    description: "Ultrasonic aromatherapy diffuser with LED lights.",
    specs: ["400ml", "7 LED Colors", "Timer", "Quiet Operation"],
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500",
      "https://images.unsplash.com/photo-1591641937527-8e09ea3c904f?w=500",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500",
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=500"
    ]
  },
  {
    id: "h10",
    name: "Throw Pillows Set",
    category: "home",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
    description: "Decorative throw pillows with modern geometric patterns.",
    specs: ["4-Pack", "18x18 inches", "Removable Covers", "Machine Washable"],
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500",
      "https://images.unsplash.com/photo-1600494603989-9650cf6dfe51?w=500"
    ]
  },
  {
    id: "h11",
    name: "Dining Table Set",
    category: "home",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500",
    description: "Modern dining table set with 4 chairs.",
    specs: ["Seats 4", "Wood + Metal", "Space Saving", "Easy Assembly"],
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500"
    ]
  },
  {
    id: "h12",
    name: "Smart Thermostat",
    category: "home",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=500",
    description: "Energy-saving smart thermostat with learning capabilities.",
    specs: ["Learning AI", "Remote Control", "Energy Reports", "Voice Control"],
    images: [
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=500",
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=500",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500",
      "https://images.unsplash.com/photo-1558089687-22b21d9bbd4d?w=500"
    ]
  },
];
