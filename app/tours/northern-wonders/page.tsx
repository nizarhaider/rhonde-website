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
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Northern Wonders and Heritage
            </h1>
            <p className="mt-6 max-w-[600px] text-lg md:text-xl">
              Begin your journey in Sri Lanka’s tranquil north, where sacred sites, coastal serenity, and
              cultural immersion unfold at a gentle pace.
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Northern Wonders and Heritage
                </h2>
                <div className="prose prose-lg">
                  <p>
                    Begin your journey in Sri Lanka’s tranquil north, where ancient forests, sacred sites,
                    and coastal serenity unfold at a gentle pace. From the quiet wilderness of Wilpattu’s
                    villus to the spiritual heart of Jaffna, each day invites presence and mindful exploration.
                  </p>
                  <p className="mt-4">
                    Glide through mangroves at dusk, cycle among centuries-old ruins in Polonnaruwa,
                    and feel the healing warmth of Kanniya’s hot springs, allowing both body and mind
                    to settle. Along the way, encounters with local markets, temples, and family kitchens
                    offer a glimpse into authentic rhythms of life and culture.
                  </p>
                  <p className="mt-4">
                    The journey flows naturally between calm moments of reflection, immersive wellness
                    experiences, and the soft thrill of discovery. As you move toward Kandy and witness
                    evening ceremonies or stroll in botanical gardens, each experience is designed to
                    deepen connection—with the land, the people, and yourself. By the end, the north
                    leaves an imprint of quiet wonder, grounded in mindful presence and holistic
                    wellbeing.
                  </p>
                </div>
              </div>

              {/* Right Column - Tour Highlights */}
              <div className="bg-muted/30 rounded-lg p-8">
                <h2 className="text-2xl font-bold tracking-tighter mb-6">
                  Tour Highlights
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Morning safari in Wilpattu National Park, exploring villus and spotting wildlife</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Dusk canoe ride through mangrove ecosystems and guided nocturnal wildlife walk</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Cultural immersion in Jaffna: Dutch Fortress, Hanuman Temple, Kadurugoda, Nallur Temple ceremony</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Learn to cook the iconic Jaffna Crab curry with a local host</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Healing experiences at Kanniya hot springs and visits to coastal temples in Trincomalee</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Explore Polonnaruwa by bicycle among ancient ruins and serene reservoirs</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Optional adventure: Minneriya safari to see elephants or Sigiriya hike for panoramic views</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Spiritual and sensory experiences in Dambulla and Kandy: cave temple, spice garden, Temple of the Tooth Relic, evening ceremony</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Moments of calm and reflection in local markets, family kitchens, and botanical gardens</span></li>
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
