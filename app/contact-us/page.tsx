"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Instagram } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function ContactUs() {
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    const res = await fetch("/api/send-inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      alert("Inquiry submitted successfully!")
    } else {
      alert("Failed to submit inquiry. Please try again.")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/stilt-fishermen.png"
              alt="Sri Lanka Beach"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-16 md:py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="mt-6 max-w-[600px] text-lg md:text-xl">
              Get in touch to start planning your perfect Sri Lankan adventure
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about planning your Sri Lankan adventure? Our travel experts are here to help. Reach
                  out to us through any of the following channels.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">hello@rondeceylon.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">WhatsApp</h3>
                      <p className="text-muted-foreground">+94 71 673 0898</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Instagram className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Instagram</h3>
                      <p className="text-muted-foreground">@rondeceylon</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="font-medium mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <Link
                      href="https://www.instagram.com/rondeceylon"
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="https://wa.link/21mpaw"
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80"
                    >
                      <Phone className="h-5 w-5" />
                      <span className="sr-only">WhatsApp</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Inquiry Form</h3>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="nationality" className="text-sm font-medium">
                          Nationality
                        </label>
                        <input
                          id="nationality"
                          name="nationality"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                          placeholder="e.g. British"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                          placeholder="youremail@gmail.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="guests" className="text-sm font-medium">
                          Number of Guests
                        </label>
                        <input
                          id="guests"
                          name="guests"
                          type="number"
                          min="1"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                          placeholder="2"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="tour-type" className="text-sm font-medium">
                          Tour Type
                        </label>
                        <select
                          id="tour-type"
                          name="tour-type"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        >
                          <option value="">Select a tour type</option>
                          <option value="cultural">Cultural Triangle Explorer</option>
                          <option value="wildlife">Wildlife Safari Adventure</option>
                          <option value="coastal">Coastal Escape</option>
                          <option value="hill-country">Hill Country Retreat</option>
                          <option value="culinary">Culinary Journey</option>
                          <option value="adventure">Adventure Tour</option>
                          <option value="custom">Custom Tour</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="start-date" className="text-sm font-medium">
                          Tour Start Date
                        </label>
                        <input
                          id="start-date"
                          name="start-date"
                          type="date"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="end-date" className="text-sm font-medium">
                          Tour End Date
                        </label>
                        <input
                          id="end-date"
                          name="end-date"
                          type="date"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="remarks" className="text-sm font-medium">
                        Special Remarks
                      </label>
                      <textarea
                        id="remarks"
                        name="remarks"
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        placeholder="Tell us about your preferences, special requirements, or any questions you have..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-black hover:bg-gray-600">
                      Submit Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
