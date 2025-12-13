"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageCircle, Instagram, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to a server
    const whatsappMessage = `Hello! I'm ${formData.name}. ${formData.message}`
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-balance">Get in Touch</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Have a question or want to place an order? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground mb-4">Chat with us instantly for quick responses</p>
                    <Button asChild className="w-full">
                      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Open WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Instagram className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Instagram</h3>
                    <p className="text-sm text-muted-foreground mb-4">Follow us for updates and inspiration</p>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a href="https://instagram.com/crochetlove" target="_blank" rel="noopener noreferrer">
                        <Instagram className="mr-2 h-4 w-4" />
                        Visit Instagram
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground mb-2">hello@crochetlove.com</p>
                    <p className="text-xs text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 border-border/50">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 1234567890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about what you're looking for..."
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message via WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you'll be redirected to WhatsApp to complete your message.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-12">Additional Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">Location</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We are based in India and ship across the country. International shipping available on request.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">Response Time</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We typically respond to messages within 24 hours. WhatsApp messages are answered fastest!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Custom Orders</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Looking for something specific? We love working on custom orders! Whether you want a specific color
                    combination, a different size, or a completely unique design, we're here to bring your vision to
                    life. Just reach out and let's discuss your ideas.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      Custom colors available for most products
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      Size customization for bags and poshaks
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      Special occasion gifts and personalization
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      Bulk orders for events (minimum quantity applies)
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
