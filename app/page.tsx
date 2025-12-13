import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Heart, Sparkles, Star } from "lucide-react"

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Floral Keychain",
      category: "Keychains",
      price: "₹199 - ₹299",
      availability: "Available",
      image: "/cute-crochet-flower-keychain-pastel-colors.jpg",
    },
    {
      id: 2,
      name: "Handmade Tote Bag",
      category: "Purses & Bags",
      price: "₹599 - ₹899",
      availability: "Made to Order",
      image: "/handmade-crochet-tote-bag-beige-aesthetic.jpg",
    },
    {
      id: 3,
      name: "Kanha Ji Poshak",
      category: "Poshak",
      price: "₹799 - ₹1,299",
      availability: "Available",
      image: "/traditional-krishna-dress-crochet-colorful.jpg",
    },
    {
      id: 4,
      name: "Rose Bouquet",
      category: "Flowers",
      price: "₹399 - ₹699",
      availability: "Available",
      image: "/crochet-rose-flower-bouquet-pink-roses.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="mr-1 h-3 w-3" />
              Handcrafted with Love
            </Badge>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-balance leading-tight">
              Handmade Crochet with Love
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Discover unique handmade crochet pieces - from charming keychains to beautiful bouquets. Each item is
              lovingly crafted to bring joy to your everyday life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                <Link href="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-balance">Featured Collection</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Browse our most loved handmade crochet items, each crafted with attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id}>
                <Card className="group overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                      <Badge variant={product.availability === "Available" ? "default" : "outline"} className="text-xs">
                        {product.availability}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-primary font-medium">{product.price}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl md:text-5xl font-bold">Why Choose Our Crochet</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Handmade with Love</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every piece is carefully crafted by hand, ensuring unique quality and personal touch in each item.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Customizable</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Want a specific color or design? We offer customization options to make your crochet piece truly
                  yours.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Premium Quality</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We use only the finest yarn and materials to ensure durability and long-lasting beauty in every
                  creation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center border-border/50 shadow-lg">
            <CardContent className="p-8 md:p-12 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance">Ready to Order Your Crochet?</h2>
              <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
                Contact us on WhatsApp or Instagram to place your order or discuss custom designs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="text-base">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    Order on WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
