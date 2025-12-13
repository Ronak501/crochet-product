export interface Product {
  id: number
  name: string
  category: string
  price: string
  availability: string
  image: string
  description: string
  fullDescription: string
  material: string
  size: string
  colors: string[]
  relatedProducts: number[]
}

export const products: Product[] = [
  {
    id: 1,
    name: "Floral Keychain",
    category: "Keychains",
    price: "₹199 - ₹299",
    availability: "Available",
    image: "/cute-crochet-flower-keychain-pastel-colors.jpg",
    description: "Adorable flower-shaped keychain perfect for keys or bags",
    fullDescription:
      "This charming floral keychain is handcrafted with love using premium quality yarn. Perfect for adding a touch of handmade charm to your keys, bags, or as a decorative accessory. Each petal is carefully crocheted to create a beautiful, long-lasting piece that makes a wonderful gift or personal keepsake.",
    material: "100% premium acrylic yarn, metal keyring",
    size: "Approximately 8cm x 8cm (flower diameter)",
    colors: ["Pink", "Lavender", "Yellow", "White"],
    relatedProducts: [2, 3, 9],
  },
  {
    id: 2,
    name: "Heart Keychain",
    category: "Keychains",
    price: "₹199 - ₹249",
    availability: "Available",
    image: "/crochet-heart-keychain-red-pink.jpg",
    description: "Cute heart keychain in vibrant colors",
    fullDescription:
      "Show some love with this adorable heart-shaped keychain! Carefully handcrafted with soft, durable yarn, this keychain is perfect for expressing your affection. Whether as a gift for someone special or to brighten up your own accessories, this piece brings joy wherever it goes.",
    material: "100% cotton yarn, stainless steel keyring",
    size: "Approximately 6cm x 6cm",
    colors: ["Red", "Pink", "Purple", "White"],
    relatedProducts: [1, 3, 9],
  },
  {
    id: 3,
    name: "Animal Keychain",
    category: "Keychains",
    price: "₹249 - ₹349",
    availability: "Made to Order",
    image: "/crochet-animal-keychain-cute-bear.jpg",
    description: "Adorable animal-themed keychains",
    fullDescription:
      "Bring your favorite animals with you wherever you go! These cute animal keychains are perfect for animal lovers. Each piece is meticulously handcrafted with attention to detail. Available in various animals including bears, bunnies, cats, and more. Custom requests welcome!",
    material: "Premium soft acrylic yarn, safety eyes, metal keyring",
    size: "Approximately 7cm - 10cm height (varies by animal)",
    colors: ["Brown", "White", "Grey", "Custom colors available"],
    relatedProducts: [1, 2, 9],
  },
  {
    id: 4,
    name: "Handmade Tote Bag",
    category: "Purses & Bags",
    price: "₹599 - ₹899",
    availability: "Made to Order",
    image: "/handmade-crochet-tote-bag-beige-aesthetic.jpg",
    description: "Spacious and stylish tote bag for everyday use",
    fullDescription:
      "This beautiful handmade tote bag combines style with functionality. Perfect for shopping, beach trips, or everyday use. The sturdy construction ensures it can carry your essentials while maintaining its elegant appearance. Each bag is made to order, allowing for customization in colors and patterns.",
    material: "Durable cotton blend yarn, lined interior (optional)",
    size: "40cm x 35cm x 10cm (Width x Height x Depth)",
    colors: ["Beige", "Natural", "Light Grey", "Custom colors available"],
    relatedProducts: [5, 6],
  },
  {
    id: 5,
    name: "Mini Shoulder Bag",
    category: "Purses & Bags",
    price: "₹499 - ₹699",
    availability: "Available",
    image: "/crochet-mini-shoulder-bag-crossbody.jpg",
    description: "Compact crossbody bag perfect for outings",
    fullDescription:
      "Compact yet spacious enough for your essentials, this mini shoulder bag is perfect for casual outings. Features an adjustable strap for comfortable crossbody wear. The handcrafted design makes each bag unique, and the sturdy construction ensures long-lasting use.",
    material: "Premium cotton yarn, adjustable strap, secure button closure",
    size: "20cm x 18cm x 8cm",
    colors: ["Cream", "Dusty Rose", "Sage Green", "Lavender"],
    relatedProducts: [4, 6],
  },
  {
    id: 6,
    name: "Bucket Bag",
    category: "Purses & Bags",
    price: "₹799 - ₹1,099",
    availability: "Out of Stock",
    image: "/crochet-bucket-bag-trendy-pastel.jpg",
    description: "Trendy bucket bag with drawstring closure",
    fullDescription:
      "This trendy bucket bag features a stylish drawstring closure and spacious interior. Perfect for carrying your daily essentials in style. The handcrafted design and quality materials make this a statement piece that complements any outfit. Currently out of stock but available for pre-order.",
    material: "Thick cotton yarn, drawstring closure, shoulder strap",
    size: "25cm diameter x 28cm height",
    colors: ["Pastel Pink", "Mint Green", "Soft Yellow"],
    relatedProducts: [4, 5],
  },
  {
    id: 7,
    name: "Kanha Ji Poshak - Red",
    category: "Poshak",
    price: "₹799 - ₹1,299",
    availability: "Available",
    image: "/traditional-krishna-dress-crochet-colorful.jpg",
    description: "Traditional dress for Lord Krishna idol",
    fullDescription:
      "Beautiful traditional poshak (dress) for Lord Krishna idols, lovingly handcrafted with intricate details. This red poshak features traditional patterns and embellishments that honor the divine. Perfect for home temples and religious ceremonies. Each piece is crafted with devotion and care.",
    material: "Fine quality yarn, decorative embellishments, golden details",
    size: "Available in multiple sizes for different idol heights (6 inches to 12 inches)",
    colors: ["Red with Gold", "Maroon with Gold"],
    relatedProducts: [8],
  },
  {
    id: 8,
    name: "Kanha Ji Poshak - Yellow",
    category: "Poshak",
    price: "₹799 - ₹1,299",
    availability: "Made to Order",
    image: "/krishna-poshak-yellow-golden-crochet.jpg",
    description: "Beautiful yellow poshak with golden details",
    fullDescription:
      "Radiant yellow poshak adorned with golden details, perfect for adorning your Krishna idol. This poshak captures the traditional essence while being handcrafted with modern techniques. The intricate work and attention to detail make it a special offering for your deity.",
    material: "Premium yarn, golden thread work, decorative borders",
    size: "Customizable for idol heights from 6 inches to 12 inches",
    colors: ["Yellow with Gold", "Saffron with Gold"],
    relatedProducts: [7],
  },
  {
    id: 9,
    name: "Rose Bouquet",
    category: "Flowers",
    price: "₹399 - ₹699",
    availability: "Available",
    image: "/crochet-rose-flower-bouquet-pink-roses.jpg",
    description: "Everlasting rose bouquet in soft pink",
    fullDescription:
      "Express your love with this beautiful bouquet of handcrafted crochet roses that never wilt. Perfect for anniversaries, birthdays, or as home decor. Each rose is carefully crafted to capture the beauty of real flowers while lasting forever. Comes with 5-7 roses depending on size selection.",
    material: "Soft cotton yarn, wire stems wrapped in green yarn",
    size: "Each rose approximately 8cm diameter, 30cm total stem length",
    colors: ["Pink", "Red", "White", "Peach", "Mixed"],
    relatedProducts: [10, 11, 12],
  },
  {
    id: 10,
    name: "Sunflower Bouquet",
    category: "Flowers",
    price: "₹449 - ₹749",
    availability: "Available",
    image: "/crochet-sunflower-bouquet-yellow-cheerful.jpg",
    description: "Bright and cheerful sunflower arrangement",
    fullDescription:
      "Bring sunshine into your home with this cheerful sunflower bouquet. These handcrafted sunflowers capture the joy and warmth of real sunflowers without the need for water or care. Perfect as a gift or to brighten up any room. Each bouquet contains 5-7 sunflowers.",
    material: "Premium cotton yarn, wire stems, felt centers",
    size: "Each flower approximately 10cm diameter, 35cm stem length",
    colors: ["Yellow with Brown", "Orange with Brown"],
    relatedProducts: [9, 11, 12],
  },
  {
    id: 11,
    name: "Mixed Flower Bouquet",
    category: "Flowers",
    price: "₹599 - ₹899",
    availability: "Made to Order",
    image: "/crochet-mixed-flower-bouquet-colorful.jpg",
    description: "Colorful mix of crochet flowers",
    fullDescription:
      "A vibrant collection of various crochet flowers arranged in a beautiful bouquet. This mixed arrangement includes roses, daisies, tulips, and more, creating a stunning display of colors and textures. Perfect for those who want variety and a burst of color. Customization available.",
    material: "Assorted premium yarns, wire stems, decorative wrapping",
    size: "Bouquet approximately 25cm diameter, 35cm height",
    colors: ["Rainbow Mix", "Pastel Mix", "Custom selection available"],
    relatedProducts: [9, 10, 12],
  },
  {
    id: 12,
    name: "Tulip Arrangement",
    category: "Flowers",
    price: "₹499 - ₹799",
    availability: "Available",
    image: "/crochet-tulip-bouquet-spring-pastel.jpg",
    description: "Elegant tulips in spring colors",
    fullDescription:
      "Elegant and timeless, these handcrafted tulips bring the beauty of spring into your home year-round. Each tulip is carefully shaped and colored to mimic real tulips. Perfect for adding a touch of sophistication to any space. Bouquet includes 7-9 tulips.",
    material: "Soft cotton yarn, wire stems with leaf details",
    size: "Each tulip approximately 6cm diameter, 30cm stem length",
    colors: ["Pink", "Purple", "White", "Yellow", "Mixed Pastels"],
    relatedProducts: [9, 10, 11],
  },
]

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(productIds: number[]): Product[] {
  return products.filter((p) => productIds.includes(p.id))
}
