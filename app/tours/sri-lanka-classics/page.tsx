import React from "react"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function SriLankaClassicsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/srilanka_classics.png"
              alt="Sri Lanka Classics"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-16 md:py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Sri Lanka Classics
            </h1>
            <p className="mt-6 max-w-[600px] text-lg md:text-xl">
              Journey through timeless landscapes, ancient heritage, and coastal charm in one unforgettable trip.
            </p>
            <div className="mt-4 text-lg font-medium">6 nights/7 days</div>
          </div>
        </section>

        {/* Two Column Layout Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Tour Overview */}
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Sri Lanka Classics
                </h2>
                <div className="prose prose-lg">
                  <p>
                    Journey through Sri Lanka’s timeless landscapes and cultural heart, from ancient ruins and
                    sacred temples to misty tea plantations and serene coastlines. Cycle among the storied stupas
                    of Anuradhapura, catch sunsets atop Sigiriya, and experience the quiet rituals at Kandy’s
                    Temple of the Tooth.
                  </p>
                  <p className="mt-4">
                    Ride the scenic train to Ella, hike to sweeping viewpoints, and witness wildlife on a twilight
                    safari at Yala. Explore local traditions, from tea plucking to pottery making, and end your days
                    wandering the charming streets of Galle Fort. Each moment balances gentle adventure with
                    mindful presence, letting the island’s beauty and culture unfold naturally.
                  </p>
                </div>
              </div>

              {/* Right Column - Tour Highlights */}
              <div className="bg-muted/30 rounded-lg p-8 border-black border-2">
                <h2 className="text-2xl font-bold tracking-tighter mb-6">
                  Tour Highlights
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Cycle through Anuradhapura’s ancient city</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Sunset from Sigiriya’s Lion Rock</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Explore Dambulla’s Cave Temples</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Discover local spices and aromatic gardens</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Morning rituals at the Temple of the Tooth Relic in Kandy</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Tea plantation walks and leaf plucking in Nuwara Eliya</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Scenic train ride to Ella and visit Nine Arch Bridge</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Hike to Ella Rock for panoramic views</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Twilight safari at Yala National Park</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Observe traditional pottery at Debara Wewa</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Stroll the historic streets of Galle Fort</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Begin Your Journey?
              </h2>
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
