export const BRAND_CATEGORIES = [
  {
    id: "bakery-premixes",
    name: "Bakery Premixes",
    icon: "ChefHat",
    productCount: 140,
    brandCount: 3,
    description: "Consistent, professional-grade premixes for cakes, breads, and muffins."
  },
  {
    id: "compound-chocolates",
    name: "Compound Chocolates",
    icon: "Cookie",
    productCount: 85,
    brandCount: 2,
    description: "Premium chocolate compounds, cocoa powders, and chocolate drops for baking."
  },
  {
    id: "dairy-ingredients",
    name: "Dairy Ingredients",
    icon: "Milk",
    productCount: 120,
    brandCount: 4,
    description: "Quality butter, cheese, whipping creams, and dairy bases for bakery items."
  },
  {
    id: "fruit-crushes-syrups",
    name: "Fruit Crushes & Syrups",
    icon: "CupSoda",
    productCount: 95,
    brandCount: 3,
    description: "Authentic fruit toppings, crushes, and syrups for mocktails and desserts."
  },
  {
    id: "frozen-products",
    name: "Frozen Products",
    icon: "IceCream",
    productCount: 150,
    brandCount: 3,
    description: "Frozen snacks, potato products, pre-baked items, and dessert bases."
  },
  {
    id: "packaging-solutions",
    name: "Packaging Solutions",
    icon: "PackageCheck",
    productCount: 60,
    brandCount: 2,
    description: "Elegant, food-safe boxes, containers, wrapping sheets, and bakery essentials."
  }
];

export const ENRICHED_BRANDS = [
  {
    id: "br-1",
    name: "Pillsbury",
    slug: "pillsbury",
    category: "bakery-premixes",
    logoText: "Pillsbury",
    logoBg: "bg-blue-50 text-blue-600 border-blue-200",
    description: "Global leader in bakery premixes, high-gluten flour, and cake bases.",
    story: "For over 150 years, Pillsbury has set the global standard for baking ingredients. Since partnering with Shreepathy & Co, we have brought their professional range of cake and bread premixes to bakeries across Tamil Nadu, ensuring consistency and taste at scale.",
    whyDistribute: "Pillsbury's strict quality control guarantees that every bag of premix yields identical, high-volume results, saving commercial kitchens precious time and minimizing waste.",
    categoriesSupplied: ["Cake Premixes", "Bread Mixes", "Commercial Flour"],
    featuredProducts: ["Vanilla Sponge Premix", "Rich Chocolate Premix", "Multigrain Bread Mix"],
    popularProducts: [
      "Pillsbury Vanilla Sponge Premix (5kg)",
      "Pillsbury Chocolate Sponge Premix (5kg)",
      "Pillsbury Red Velvet Cake Premix (1kg)",
      "Pillsbury High-Gluten Flour (25kg)"
    ],
    partnershipBadge: "Exclusive Partner",
    banner: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    stats: { productCount: 35, partnershipYears: 12 }
  },
  {
    id: "br-2",
    name: "Rich's",
    slug: "richs",
    category: "dairy-ingredients",
    logoText: "RICH'S",
    logoBg: "bg-red-50 text-red-600 border-red-200",
    description: "Pioneering non-dairy whipping creams, toppings, and fillings.",
    story: "Rich Products Corporation pioneered the non-dairy whipping cream industry in 1945. Today, their products are synonymous with cake decoration excellence. We distribute Rich's range of high-performance toppings to premium bakeries throughout Tamil Nadu.",
    whyDistribute: "Rich's topping creams offer exceptional whip volume, outstanding stability under warm conditions, and clean cream notes that match the standards of elite pastry chefs.",
    categoriesSupplied: ["Whipping Creams", "Fruit Fillings", "Glazes & Toppings"],
    featuredProducts: ["Whip Topping Gold", "Niagara Farms Topping", "Strawberry Fruit Filling"],
    popularProducts: [
      "Rich's Whip Topping Gold (1kg)",
      "Rich's Niagara Farms Premium Topping (1kg)",
      "Rich's Chocolate Whipping Cream (1kg)",
      "Rich's Red Strawberry Fruit Filling (5kg)"
    ],
    partnershipBadge: "Authorised Distributor",
    banner: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
    stats: { productCount: 22, partnershipYears: 10 }
  },
  {
    id: "br-5",
    name: "Morde",
    slug: "morde",
    category: "compound-chocolates",
    logoText: "MORDE",
    logoBg: "bg-amber-950 text-amber-100 border-amber-800",
    description: "India's premier manufacturer of professional cocoa and compound chocolates.",
    story: "Established in 1983, Morde has grown to become the absolute backbone of the Indian baking and confectionery industry. They provide high-grade compounds and pure chocolate products to home bakers and industrial snack manufacturers alike.",
    whyDistribute: "We distribute Morde because of its unmatched versatility, exceptional fluidity, and rich cocoa profile, which form the base of countless desserts across the state.",
    categoriesSupplied: ["Chocolate Compounds", "Cocoa Powder", "Chocolate Chips & Pastes"],
    featuredProducts: ["Dark Compound Slab", "White Compound Slab", "Premium Cocoa Powder"],
    popularProducts: [
      "Morde Dark Compound Slab (400g)",
      "Morde White Compound Slab (400g)",
      "Morde Milk Compound Slab (400g)",
      "Morde Premium Cocoa Powder (1kg)",
      "Morde Chocolate Chips Dark (1kg)"
    ],
    partnershipBadge: "Strategic Partner",
    banner: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=800",
    stats: { productCount: 48, partnershipYears: 15 }
  },
  {
    id: "br-6",
    name: "Monin",
    slug: "monin",
    category: "fruit-crushes-syrups",
    logoText: "MONIN",
    logoBg: "bg-stone-100 text-stone-800 border-stone-300",
    description: "French premium syrups, sauces, and purées for gourmet beverages.",
    story: "Monin has been crafting gourmet syrups and fruit preparations in France for over a century. Known globally as the choice of top bartenders and baristas, Monin syrups elevate beverages in the finest cafes and hotels in Tamil Nadu.",
    whyDistribute: "Monin offers highly concentrated, authentic flavors made from natural ingredients that deliver true taste, whether in hot coffees, cold frappes, or mocktails.",
    categoriesSupplied: ["Flavoured Syrups", "Gourmet Sauces", "Fruit Purées"],
    featuredProducts: ["Mojito Mint Syrup", "Caramel Gourmet Sauce", "Blue Curacao Syrup"],
    popularProducts: [
      "Monin Mojito Mint Syrup (700ml)",
      "Monin Caramel Syrup (700ml)",
      "Monin Blue Curacao (700ml)",
      "Monin Dark Chocolate Sauce (1.89L)"
    ],
    partnershipBadge: "Authorised Distributor",
    banner: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    stats: { productCount: 65, partnershipYears: 8 }
  },
  {
    id: "br-7",
    name: "Mapro",
    slug: "mapro",
    category: "fruit-crushes-syrups",
    logoText: "mapro",
    logoBg: "bg-green-50 text-green-700 border-green-200",
    description: "Delicious fruit crushes, squashes, jams, and toppings from Mahabaleshwar.",
    story: "Born in the hill station of Mahabaleshwar, Mapro has spent decades bringing the taste of fresh fruits directly to commercial kitchens. Their crushes are an essential ingredient in ice cream parlors and bakeries for fruit-flavored cakes and shakes.",
    whyDistribute: "Mapro's high real-fruit content provides a premium taste and appealing fruit pulp texture that synthetic flavorings simply cannot replicate.",
    categoriesSupplied: ["Fruit Crushes", "Dessert Toppings", "Fruit Jams"],
    featuredProducts: ["Strawberry Crush", "Alphonso Mango Crush", "Rose Syrup"],
    popularProducts: [
      "Mapro Strawberry Crush (750ml)",
      "Mapro Alphonso Mango Crush (750ml)",
      "Mapro Rose Syrup (750ml)",
      "Mapro Blueberry Crush (750ml)"
    ],
    partnershipBadge: "Authorised Distributor",
    banner: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
    stats: { productCount: 30, partnershipYears: 11 }
  },
  {
    id: "br-8",
    name: "Amul",
    slug: "amul",
    category: "dairy-ingredients",
    logoText: "Amul",
    logoBg: "bg-sky-50 text-sky-700 border-sky-200",
    description: "India's iconic dairy brand, offering premium butter, cheese, and milk solids.",
    story: "As the brand that powered India's White Revolution, Amul needs no introduction. Shreepathy & Co partners with Amul to distribute bulk butter blocks, processed cheese, and mozzarella to restaurants, caterers, and bakeries across the region.",
    whyDistribute: "Amul represents absolute trust. Their dairy products offer the highest standards of taste and melting properties necessary for pizzas, sandwiches, and premium puff pastries.",
    categoriesSupplied: ["Butter Blocks", "Catering Cheese", "Fresh Dairy Solids"],
    featuredProducts: ["Pasteurised Table Butter Block", "Mozzarella Cheese Blend", "Amul Cream 30% Fat"],
    popularProducts: [
      "Amul Table Butter Block (500g / 1kg)",
      "Amul Mozzarella Diced Cheese (1kg)",
      "Amul Processed Cheese Slices (1kg)",
      "Amul Fresh Cream (1L)"
    ],
    partnershipBadge: "Strategic Distributor",
    banner: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800",
    stats: { productCount: 52, partnershipYears: 14 }
  },
  {
    id: "br-9",
    name: "Milky Mist",
    slug: "milky-mist",
    category: "dairy-ingredients",
    logoText: "Milky Mist",
    logoBg: "bg-blue-950 text-blue-100 border-blue-800",
    description: "Premium paneer, curd, butter, and cheese sourced from automated dairy plants.",
    story: "Milky Mist operates state-of-the-art fully automated dairy processing facilities in South India. They have emerged as a premium provider of fresh paneer, curds, and specialty cheeses which we distribute directly to corporate clients and hotels.",
    whyDistribute: "Their vacuum-packed products offer superior shelf life and texture. Milky Mist paneer and curd are popular for their velvety consistency and high protein retention.",
    categoriesSupplied: ["Fresh Paneer Blocks", "Gourmet Cheese", "Curds & Yogurt"],
    featuredProducts: ["Fresh Paneer Block", "Dairy Butter Unsalted", "Natural Set Curd"],
    popularProducts: [
      "Milky Mist Fresh Paneer (1kg / 5kg)",
      "Milky Mist Salted Butter (500g)",
      "Milky Mist Cream Cheese (1kg)",
      "Milky Mist Mozzarella Cheese (1kg)"
    ],
    partnershipBadge: "Authorised Distributor",
    banner: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=800",
    stats: { productCount: 28, partnershipYears: 9 }
  },
  {
    id: "br-12",
    name: "McCain",
    slug: "mccian",
    category: "frozen-products",
    logoText: "McCain",
    logoBg: "bg-yellow-50 text-yellow-700 border-yellow-200",
    description: "The global gold standard in frozen French fries and potato specialty snacks.",
    story: "McCain Foods is the world's largest manufacturer of frozen potato products. From multi-national fast food chains to local cafes, McCain French fries are the preferred choice for crispiness and shelf holding. We distribute McCain products across Tamil Nadu.",
    whyDistribute: "McCain's signature fries offer high solids content, minimal breakage, and consistent frying performance, yielding more portions per kilogram compared to generic brands.",
    categoriesSupplied: ["Frozen French Fries", "Potato Specialties", "Veggie Snacks"],
    featuredProducts: ["Straight Cut French Fries", "Potato Bites (Chilli Garlic)", "Veggie Burger Patties"],
    popularProducts: [
      "McCain Straight Cut Fries 3/8 (2.5kg)",
      "McCain Super Crisps Fries (2.5kg)",
      "McCain Chilli Garlic Potato Bites (1.5kg)",
      "McCain Veggie Burger Patty (1.2kg)"
    ],
    partnershipBadge: "Distribution Partner",
    banner: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800",
    stats: { productCount: 40, partnershipYears: 10 }
  },
  {
    id: "br-13",
    name: "Angel Yeast",
    slug: "angel",
    category: "bakery-premixes",
    logoText: "Angel",
    logoBg: "bg-red-50 text-red-700 border-red-200",
    description: "High-activity baking yeast, bread improvers, and fermentation solutions.",
    story: "Angel Yeast is one of the world's largest yeast manufacturers. Known for high fermentation activity and dough tolerance, Angel yeast is widely used by industrial bakeries and local bread makers to ensure uniform rises and fluffy crumb textures.",
    whyDistribute: "Angel Instant Dry Yeast requires no pre-activation and acts consistently across varied temperature ranges, making it a reliable staple for busy bakers.",
    categoriesSupplied: ["Instant Dry Yeast", "Bread Improvers", "Dough Conditioners"],
    featuredProducts: ["Instant Dry Yeast (Gold)", "Super Bread Improver", "Dough Relaxer"],
    popularProducts: [
      "Angel Instant Dry Yeast Gold (500g)",
      "Angel Instant Dry Yeast Blue (500g)",
      "Angel Bread Improver (1kg)",
      "Angel Active Dry Yeast (500g)"
    ],
    partnershipBadge: "Authorized Importer",
    banner: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    stats: { productCount: 15, partnershipYears: 7 }
  },
  {
    id: "br-14",
    name: "Skei",
    slug: "skei",
    category: "frozen-products",
    logoText: "Skei",
    logoBg: "bg-pink-50 text-pink-700 border-pink-200",
    description: "Delicious ice cream flavour bases, soft-serve mixes, and parlour ingredients.",
    story: "Skei supplies high-quality commercial base ingredients for ice cream parlors, dessert bars, and shake stations. They provide the creamy, rich textures that form the foundation of premium desserts.",
    whyDistribute: "Skei bases are formulate-ready, allowing ice cream makers to easily customize flavors while guaranteeing premium fat emulsification and smooth texture.",
    categoriesSupplied: ["Ice Cream Mix Bases", "Soft-Serve Premixes", "Syrup Drizzles"],
    featuredProducts: ["Vanilla Ice Cream Base", "Premium Alphonso Mango Base", "Chocolate Waffle Cone Mix"],
    popularProducts: [
      "Skei Vanilla Ice Cream Base (1kg)",
      "Skei Alphonso Mango Base (1kg)",
      "Skei Premium Soft-Serve Mix (1kg)",
      "Skei Chocolate Base Mix (1kg)"
    ],
    partnershipBadge: "Exclusive Distributor",
    banner: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800",
    stats: { productCount: 18, partnershipYears: 6 }
  },
  {
    id: "br-pack",
    name: "PackPro Solutions",
    slug: "packpro",
    category: "packaging-solutions",
    logoText: "PackPro",
    logoBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
    description: "Premium, food-safe paper packaging, cake boxes, and eco-friendly containers.",
    story: "PackPro is dedicated to manufacturing elegant, greaseproof, and structural packaging specifically for cakes, pastries, and takeaway foods. We distribute their boxes and wrapping to help bakeries elevate their brand presentation.",
    whyDistribute: "Their packaging is 100% food-grade, highly resistant to moisture/grease, and features robust construction that ensures delicate cakes reach customers in pristine condition.",
    categoriesSupplied: ["Greaseproof Cake Boxes", "Pastry Trays", "Takeaway Paper Bags"],
    featuredProducts: ["Corrugated Cake Box 10-inch", "Gold Cake Boards", "Pastry Window Boxes"],
    popularProducts: [
      "PackPro Corrugated Cake Box 8-inch (Pack of 50)",
      "PackPro Gold Cake Boards 1kg (Pack of 100)",
      "PackPro Pastry Window Box (Pack of 100)",
      "PackPro Greaseproof Baking Paper Roll (100m)"
    ],
    partnershipBadge: "Exclusive Partner",
    banner: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800",
    stats: { productCount: 35, partnershipYears: 5 }
  },
  {
    id: "br-3",
    name: "IFF",
    slug: "iff",
    category: "bakery-premixes",
    logoText: "iff",
    logoBg: "bg-teal-50 text-teal-800 border-teal-200",
    description: "International Flavors & Fragrances — world-class baking enzyme solutions.",
    story: "IFF is a global leader in bioscience and food ingredients. They produce highly specialized enzymes, bread improvers, and natural preservatives. We distribute their raw materials to industrial bread manufacturers looking to improve shelf life and volume.",
    whyDistribute: "IFF products provide precise molecular enhancements to flour, enabling consistent baking volume, crumb softness, and extended freshness naturally.",
    categoriesSupplied: ["Baking Enzymes", "Natural Food Colorants", "Food Grade Flavours"],
    featuredProducts: ["Grindamyl Bread Improver", "Natural Vanilla Extract Base", "Flour Strengthening Enzymes"],
    popularProducts: [
      "IFF Grindamyl Bread Improver (1kg)",
      "IFF Natural Butter Flavour (1L)",
      "IFF Lecithin Powders (5kg)"
    ],
    partnershipBadge: "Authorised Distributor",
    banner: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    stats: { productCount: 20, partnershipYears: 8 }
  },
  {
    id: "br-4",
    name: "3F Foods",
    slug: "3f",
    category: "frozen-products",
    logoText: "3F",
    logoBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    description: "High-quality fast food ingredients, premade fillings, and culinary oils.",
    story: "3F Foods manufactures specialized fats, margarine, and frozen snacks for commercial catering and fast food kitchens. They provide affordable, shelf-stable ingredients designed for quick-service speed.",
    whyDistribute: "Their products bridge the gap between price and premium culinary performance, helping commercial outlets maintain strong food margins without sacrificing taste.",
    categoriesSupplied: ["Commercial Margarine", "Premade Frozen Fillings", "Fast Food Edible Fats"],
    featuredProducts: ["Premium Puff Margarine", "Frozen Veg Spring Roll Mix", "Frying Fat Solids"],
    popularProducts: [
      "3F Premium Puff Margarine (15kg)",
      "3F Frozen Vegetable Spring Roll (1kg)",
      "3F Fry-Safe Commercial Fat (15kg)"
    ],
    partnershipBadge: "Strategic Partner",
    banner: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=800",
    stats: { productCount: 25, partnershipYears: 9 }
  },
  {
    id: "br-10",
    name: "Veeba",
    slug: "veeba",
    category: "frozen-products",
    logoText: "VEEBA",
    logoBg: "bg-orange-50 text-orange-700 border-orange-200",
    description: "Premium sauces, dressings, dips, and spreads for professional kitchens.",
    story: "Veeba is India's leading foodservice brand for culinary sauces. Formulated by professional chefs, Veeba dressings are free from synthetic colors and are the primary choice for sandwich shops, pizzerias, and fast-food chains.",
    whyDistribute: "Veeba's convenient catering pack designs, excellent emulsion stability, and vibrant profiles make them indispensable in high-speed cloud kitchens.",
    categoriesSupplied: ["Eggless Mayonnaise", "Burger Sauces", "Pizza Pasta Spreads"],
    featuredProducts: ["Professional Eggless Mayonnaise", "Cheese Blend Dressing", "Pizza Pasta Sauce"],
    popularProducts: [
      "Veeba Chef's Special Mayonnaise (1kg / 2kg)",
      "Veeba Burger Dressing (1kg)",
      "Veeba Pizza Pasta Sauce (1kg)",
      "Veeba Sweet Onion Sauce (1kg)"
    ],
    partnershipBadge: "Authorised Distributor",
    banner: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=800",
    stats: { productCount: 42, partnershipYears: 8 }
  },
  {
    id: "br-11",
    name: "Del Monte",
    slug: "delmonte",
    category: "fruit-crushes-syrups",
    logoText: "Del Monte",
    logoBg: "bg-green-100 text-green-800 border-green-300",
    description: "World-famous canned fruits, pizza sauces, condiments, and beverage bases.",
    story: "Del Monte is a global brand with over a century of food packing expertise. They supply high-quality canned pineapple slices, cherries, and pizza sauces that are widely used as toppings in the baking and dining sectors.",
    whyDistribute: "Their selection processes guarantee uniform fruit sizing and syrup density, helping bakers achieve consistent dessert aesthetics and weights.",
    categoriesSupplied: ["Canned Fruit Slices", "Tomato Pasta Bases", "Egg Mayonnaise"],
    featuredProducts: ["Canned Pineapple Tidbits", "Maraschino Cherries in Syrup", "Premium Tomato Ketchup"],
    popularProducts: [
      "Del Monte Pineapple Slices Tin (850g)",
      "Del Monte Pizza Pasta Sauce (1kg)",
      "Del Monte Egg Mayonnaise (900g)",
      "Del Monte Canned Peach Halves (850g)"
    ],
    partnershipBadge: "Key Distributor",
    banner: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
    stats: { productCount: 30, partnershipYears: 9 }
  }
];
