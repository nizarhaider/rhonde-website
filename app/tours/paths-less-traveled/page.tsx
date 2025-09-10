import React from "react"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function PathsLessTraveledPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Paths_less_travelled.jpg"
              alt="Paths Less Traveled"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-16 md:py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Paths Less Traveled
            </h1>
            <p className="mt-6 max-w-[600px] text-lg md:text-xl">
              A mindful journey through hidden villages, sacred paths, and untouched landscapes of Sri Lanka.
            </p>
            <div className="mt-4 text-lg font-medium">12 nights/13 days</div>
          </div>
        </section>

        {/* Two Column Layout Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Tour Overview */}
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Paths Less Traveled
                </h2>
                <div className="prose prose-lg">
                  <p>
                    This journey through lesser-known Sri Lanka invites you to move at a gentle, mindful pace,
                    weaving together mountains, forests, lakes, and coastlines in a seamless rhythm. Begin in the
                    vibrant heart of Colombo, then flow into the misty highlands, where tea estates and mist-clad
                    mountains create moments of quiet reflection.
                  </p>
                  <p className="mt-4">
                    Trek through sacred paths to watch the sunrise from Adam’s Peak, wander alongside indigenous
                    Veddha guides, and glide across serene lakes as wildlife awakens around you. Each day blends
                    immersive cultural encounters, gentle adventure, and quiet contemplation, from the ancient ruins
                    of Polonnaruwa to hidden waterfalls and remote mountain villages.
                  </p>
                  <p className="mt-4">
                    Evenings offer space to unwind in eco-conscious lodges or by the tranquil shore, grounding your
                    senses in nature’s calm. Along the way, the landscapes, histories, and communities encountered
                    become part of a holistic rhythm—connecting you to the heartbeat of the island. This is a journey
                    designed for presence, curiosity, and mindful discovery.
                  </p>
                </div>
              </div>

              {/* Right Column - Tour Highlights */}
              <div className="bg-muted/30 rounded-lg p-8">
                <h2 className="text-2xl font-bold tracking-tighter mb-6">
                  Tour Highlights
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Evening city tour of Colombo, blending colonial charm and local culture</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>White-water rafting amidst Kitulgala’s lush rainforest</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Trek to Aberdeen Falls and connect with nature’s quiet power</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Midnight hike to Adam’s Peak for a sunrise over misty mountains</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Visit tea estates, pluck leaves, and experience traditional tea-making</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Scenic train journey from Hatton to Ella, passing rolling hills and valleys</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Explore Nine Arches Bridge and nearby verdant landscapes</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Jungle trek with a Veddha guide and boat safari on Sri Lanka’s largest lake</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Visit Dambana to learn from the Veddha community’s heritage and lifestyle</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Sunrise catamaran ride on Sora Bora Tank and waterfalls along the Knuckles Range</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Hike to Meemure Village and bathe in pristine natural pools</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Night walk in Polonnaruwa to spot the elusive slender loris</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Cycle through Polonnaruwa’s ancient ruins and hike Pidurangala Rock at dusk</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Explore Ritigala Forest Reserve and Anavilundawa Wetlands for tranquility and wildlife</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Leisure time at Kalpitiya to relax by the coast or engage in gentle water activities</span></li>
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
