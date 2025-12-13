import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sparkles, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-balance">Our Story</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Every stitch tells a story. Every piece is crafted with love, patience, and dedication to the art of
              crochet.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl font-bold">Handmade with Love</h2>
                <p className="text-muted-foreground leading-relaxed">
                  What started as a hobby has blossomed into a passion for creating beautiful, handmade crochet items.
                  Each piece we create is more than just a product—it's a labor of love, carefully crafted to bring joy
                  and beauty into your life.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From charming keychains to elegant purses, from traditional Krishna poshaks to everlasting flower
                  bouquets, every item is made with attention to detail and a commitment to quality that you can feel in
                  every stitch.
                </p>
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                <img
                  src="/woman-crocheting-handmade-crafts-cozy-workspace.jpg"
                  alt="Handmade crochet crafting"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square overflow-hidden rounded-2xl bg-muted order-2 md:order-1">
                <img
                  src="/colorful-yarn-balls-crochet-materials-aesthetic.jpg"
                  alt="Colorful yarn materials"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h2 className="font-serif text-3xl font-bold">Quality Materials, Lasting Beauty</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that beautiful creations start with beautiful materials. That's why we use only premium
                  quality yarns and materials in all our products. Each color is carefully selected, and every material
                  is chosen for its durability and feel.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our commitment to quality means your crochet items will not only look beautiful but will also stand
                  the test of time, becoming cherished pieces you'll enjoy for years to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">What We Value</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide every creation we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Handcrafted</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every single piece is made entirely by hand with love and care
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg">Unique</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Each item is one-of-a-kind, making your piece truly special
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Quality</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Premium materials and meticulous craftsmanship in every creation
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Custom</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Personalization options to make your piece perfectly yours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">The Art of Crochet</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Crochet is more than a craft—it's a meditation, a way of bringing beauty into the world one stitch at a
              time. Each piece goes through careful planning, selection of colors, and hours of dedicated work to ensure
              it meets our standards of excellence.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When you purchase from us, you're not just buying a product. You're supporting handmade artistry, you're
              getting a piece that carries the warmth of human touch, and you're becoming part of our story.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
