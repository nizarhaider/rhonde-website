import React from "react"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function NorthernWondersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/nothern_wonders_and_heritage.jpg"
              alt="Northern Wonders and Heritage"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-16 md:py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Northern Wonders and Heritage</h1>
            <p className="mt-6 max-w-[600px] text-lg md:text-xl">
              Explore ancient cities and coastal gems where history whispers in every corner.
            </p>
            <div className="mt-4 text-lg font-medium">7 nights/8 days</div>
          </div>
        </section>

        {/* Two Column Layout Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Tour Overview */}
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Northern Wonders and Heritage</h2>
                <div className="prose prose-lg">
                  <p>Venture into Sri Lanka's northern realm, where ancient kingdoms once flourished and unique cultures thrive. This tour explores the rich heritage and natural beauty of the island's northern provinces.</p>
                  <p className="mt-4">Discover the fascinating blend of cultures, religions, and architectural styles that make this region unique. From ancient cities to pristine coastlines, experience the untold stories of Sri Lanka's northern heritage.</p>
                </div>
              </div>

              {/* Right Column - Tour Highlights */}
              <div className="bg-muted/30 rounded-lg p-8">
                <h2 className="text-2xl font-bold tracking-tighter mb-6">Tour Highlights</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>Explore ancient cities and archaeological sites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>Visit historic Hindu temples and Buddhist stupas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>Experience unique northern Sri Lankan cuisine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>Discover pristine beaches and coastal landscapes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>Learn about the region's rich cultural heritage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Begin Your Journey?</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-[600px]">
                Contact us to customize this tour to your preferences and start planning your Sri Lankan adventure.
              </p>
              <div className="mt-8">
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-11 px-8"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
