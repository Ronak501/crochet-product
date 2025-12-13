import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getProductById, getRelatedProducts } from "@/lib/products"
import { MessageCircle, Instagram, ArrowLeft, Palette, Ruler, Package } from "lucide-react"

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const productId = Number.parseInt(id)
  const product = getProductById(productId)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.relatedProducts)

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-balance">{product.name}</h1>
                <p className="text-2xl md:text-3xl text-primary font-semibold">{product.price}</p>
              </div>

              <Badge
                variant={
                  product.availability === "Available"
                    ? "default"
                    : product.availability === "Out of Stock"
                      ? "destructive"
                      : "outline"
                }
                className="text-sm px-4 py-1"
              >
                {product.availability}
              </Badge>

              <div className="space-y-4 pt-4">
                <p className="text-muted-foreground leading-relaxed">{product.fullDescription}</p>
              </div>

              {/* Product Specifications */}
              <div className="space-y-4 pt-4">
                <div className="flex gap-3">
                  <Package className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Material</h3>
                    <p className="text-sm text-muted-foreground">{product.material}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Ruler className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Size</h3>
                    <p className="text-sm text-muted-foreground">{product.size}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Palette className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Available Colors</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {product.colors.map((color) => (
                        <Badge key={color} variant="outline" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 pt-6">
                <Button asChild size="lg" className="w-full text-base">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Order on WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full text-base bg-transparent">
                  <a href="https://instagram.com/crochetlove" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" />
                    Contact on Instagram
                  </a>
                </Button>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 mt-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Note:</strong> Each item is handmade to order. Please allow 5-7
                  business days for creation. Colors may vary slightly from images due to handcrafted nature and screen
                  settings.
                </p>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <h2 className="font-serif text-2xl md:text-3xl font-bold">You May Also Like</h2>
                <p className="text-muted-foreground">Discover more handmade crochet items</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link href={`/products/${relatedProduct.id}`} key={relatedProduct.id}>
                    <Card className="group overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="aspect-square overflow-hidden bg-muted">
                        <img
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4 space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {relatedProduct.category}
                          </Badge>
                          <Badge
                            variant={
                              relatedProduct.availability === "Available"
                                ? "default"
                                : relatedProduct.availability === "Out of Stock"
                                  ? "destructive"
                                  : "outline"
                            }
                            className="text-xs"
                          >
                            {relatedProduct.availability}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-primary font-medium">{relatedProduct.price}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
