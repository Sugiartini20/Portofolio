export const products = [
  // Produk yang sudah ada
  {
     id: 1,
  name: "iPhone 14 Pro Max",
  description: "iPhone 14 Pro Max dengan chip A16 Bionic, kamera terdepan dan layar Always-On Display",
  price: 18999000,
  category: "elektronik",
  image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
  stock: 15,
  rating: 4.8,
  reviews: 124,
  features: [  // TAMBAHKAN INI
    "Chip A16 Bionic",
    "Kamera 48MP Pro", 
    "Layar Always-On Display",
    "Baterai tahan lama"
  ]
  },
  {
    id: 2,
    name: "MacBook Air M2",
    description: "MacBook Air dengan chip M2, desain tipis, dan baterai tahan lama hingga 18 jam",
    price: 19999000,
    category: "elektronik",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400",
    stock: 8,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Samsung Galaxy S23 Ultra",
    description: "Smartphone flagship Samsung dengan S Pen, kamera 200MP, dan processor Snapdragon 8 Gen 2",
    price: 15999000,
    category: "elektronik",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    stock: 12,
    rating: 4.7,
    reviews: 156
  },

  // PRODUK BARU - Fashion Pria
  {
    id: 4,
    name: "Kemeja Formal Pria",
    description: "Kemeja formal pria bahan katun premium, cocok untuk kerja dan acara formal",
    price: 299000,
    category: "fashion-pria",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
    stock: 20,
    rating: 4.5,
    reviews: 67
  },
  {
    id: 5,
    name: "Sepatu Sneakers Pria",
    description: "Sepatu sneakers pria desain modern, nyaman untuk sehari-hari dan olahraga ringan",
    price: 499000,
    category: "fashion-pria",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    stock: 15,
    rating: 4.6,
    reviews: 89
  },

  // PRODUK BARU - Fashion Wanita
  {
    id: 6,
    name: "Dress Casual Wanita",
    description: "Dress casual wanita bahan nyaman, cocok untuk hangout dan acara informal",
    price: 259000,
    category: "fashion-wanita",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    stock: 18,
    rating: 4.7,
    reviews: 45
  },
  {
    id: 7,
    name: "Tas Wanita Trendy",
    description: "Tas wanita desain trendy, spacious dan cocok untuk berbagai gaya fashion",
    price: 389000,
    category: "fashion-wanita",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
    stock: 10,
    rating: 4.8,
    reviews: 78
  },

  // PRODUK BARU - Elektronik Rumah
  {
    id: 8,
    name: "Smart TV 55 Inch",
    description: "Smart TV 55 inch dengan resolusi 4K, Android TV dan suara surround",
    price: 6499000,
    category: "elektronik-rumah",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
    stock: 7,
    rating: 4.6,
    reviews: 34
  },

  // PRODUK BARU - Olahraga
  {
    id: 9,
    name: "Sepatu Running",
    description: "Sepatu running dengan teknologi cushioning terbaru, nyaman untuk lari jarak jauh",
    price: 799000,
    category: "olahraga",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    stock: 25,
    rating: 4.4,
    reviews: 112
  },
  {
    id: 10,
    name: "Dumbell Set 20kg",
    description: "Set dumbell 20kg adjustable, cocok untuk workout di rumah dan gym",
    price: 450000,
    category: "olahraga",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400",
    stock: 12,
    rating: 4.3,
    reviews: 56
  },

  // PRODUK BARU - Kecantikan
  {
    id: 11,
    name: "Skincare Set",
    description: "Complete skincare set untuk perawatan wajah sehari-hari, kulit lebih sehat dan glowing",
    price: 289000,
    category: "kecantikan",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400",
    stock: 30,
    rating: 4.9,
    reviews: 203
  },
  {
    id: 12,
    name: "Lipstick Matte Set",
    description: "Set lipstick matte dengan 6 varian warna, tahan lama dan tidak mudah luntur",
    price: 189000,
    category: "kecantikan",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
    stock: 22,
    rating: 4.7,
    reviews: 145
  },

  // PRODUK BARU TAMBAHAN
  {
    id: 13,
  name: "Smart Watch Series 8",
  description: "Smartwatch dengan fitur kesehatan lengkap, GPS, dan battery life hingga 18 jam",
  price: 5499000,
  category: "elektronik",
  image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400", // URL gambar yang diperbaiki
  stock: 14,
  rating: 4.8,
  reviews: 98
  },
  {
    id: 14,
    name: "Kamera Mirrorless",
    description: "Kamera mirrorless 24MP dengan 4K video, cocok untuk fotografi profesional",
    price: 12999000,
    category: "elektronik",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    stock: 6,
    rating: 4.9,
    reviews: 67
  },
  {
    id: 15,
    name: "Headphone Wireless",
    description: "Headphone wireless dengan noise cancellation, suara jernih dan bass yang dalam",
    price: 2999000,
    category: "elektronik",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    stock: 20,
    rating: 4.6,
    reviews: 178
  }
];

export const categories = [
  { id: "all", name: "Semua Produk", count: products.length },
  { id: "elektronik", name: "Elektronik", count: products.filter(p => p.category === "elektronik").length },
  { id: "fashion-pria", name: "Fashion Pria", count: products.filter(p => p.category === "fashion-pria").length },
  { id: "fashion-wanita", name: "Fashion Wanita", count: products.filter(p => p.category === "fashion-wanita").length },
  { id: "elektronik-rumah", name: "Elektronik Rumah", count: products.filter(p => p.category === "elektronik-rumah").length },
  { id: "olahraga", name: "Olahraga", count: products.filter(p => p.category === "olahraga").length },
  { id: "kecantikan", name: "Kecantikan", count: products.filter(p => p.category === "kecantikan").length }
];