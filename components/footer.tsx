import Link from "next/link"
import { Instagram, MessageCircle, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-primary">Crochet Love</h3>
            <p className="text-sm text-muted-foreground">
              Handmade crochet products crafted with love and care. Each piece is unique and made to order.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products?category=keychains"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Keychains
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=purses"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Purses & Bags
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=poshak"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kanha Ji Poshak
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=flowers"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Flowers & Bouquets
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/crochetlove"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@crochetlove.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Crochet Love. All rights reserved. Made with love.</p>
        </div>
      </div>
    </footer>
  )
}
