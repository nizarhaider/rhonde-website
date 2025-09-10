import React from "react"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function WavesToPeaksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/From_waves_to_peak.jpg"
              alt="From Waves to Peaks"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-16 md:py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">From Waves to Peaks</h1>
            <p className="mt-6 max-w-[600px] text-lg md:text-xl">
              Trace the rhythm of Sri Lanka, from sun-kissed shores to misty mountain heights.
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">From Waves to Peaks</h2>
                <div className="prose prose-lg">
                  <p>Experience the diverse landscapes of Sri Lanka in this carefully curated journey that takes you from coastal paradises to mountain retreats. Begin your adventure on pristine beaches, then gradually ascend through lush landscapes to reach the misty peaks of the hill country.</p>
                  <p className="mt-4">Immerse yourself in the changing scenery as you travel from the warm, tropical coastline through the cultural heart of the island, and up into the cool, misty highlands. Each day brings new perspectives and experiences, perfectly capturing Sri Lanka's incredible diversity in one seamless journey.</p>
                </div>
              </div>

              {/* Right Column - Tour Highlights */}
              <div className="bg-muted/30 rounded-lg p-8">
                <h2 className="text-2xl font-bold tracking-tighter mb-6">Tour Highlights</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>Explore pristine beaches and coastal villages along the southern coast</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>Visit ancient temples and historical sites in the Cultural Triangle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>Experience traditional tea plantations and colonial heritage in the hill country</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>Take a scenic train journey through mist-covered mountains</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>Stay in carefully selected boutique properties that complement each location</span>
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
