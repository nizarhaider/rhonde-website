import React from "react"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function EchoesOfRamayanaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Echoes_of_Ramayana.JPG"
              alt="Echoes of the Ramayana"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-16 md:py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Echoes of the Ramayana
            </h1>
            <p className="mt-6 max-w-[600px] text-lg md:text-xl">
              Step into a journey where legend, nature, and mindful presence intertwine.
            </p>
            <div className="mt-4 text-lg font-medium">8 nights/9 days</div>
          </div>
        </section>

        {/* Two Column Layout Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Tour Overview */}
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Echoes of the Ramayana
                </h2>
                <div className="prose prose-lg">
                  <p>
                    Step into a journey where legend, nature, and mindful presence intertwine. From the
                    golden sands of Mannar to the misty hills of Nuwara Eliya, each day flows gently between
                    sacred sites, serene landscapes, and immersive local experiences. Climb ancient fortresses,
                    wander through sacred temples, and feel the quiet pulse of waterfalls and forests, all while
                    savoring moments of calm and reflection.
                  </p>
                  <p className="mt-4">
                    Wildlife encounters in Yala and the otherworldly red plains of Ussangoda invite stillness
                    and awe, while coastal evenings in Unawatuna offer time to breathe, swim, and simply be.
                    Along the way, the stories of the Ramayana come alive—not as distant myth, but as a living
                    connection to the land and its people. This retreat blends gentle adventure with mindful
                    pauses, weaving together cultural insight, natural beauty, and personal reflection into a
                    holistic journey of wellness.
                  </p>
                </div>
              </div>

              {/* Right Column - Tour Highlights */}
              <div className="bg-muted/30 rounded-lg p-8">
                <h2 className="text-2xl font-bold tracking-tighter mb-6">
                  Tour Highlights
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>Witness the legendary Adam’s Bridge at sunset, where myth and sea meet.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>
                      Explore sacred temples perched on cliffs and along the coast, including Thirukoneshwaram
                      and Seetha Amman Kovil.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>Climb Sigiriya Lion Rock and stroll through Dunuwila, sites of history and legend.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>Discover the mystery of Ravana’s Caves and the cascading beauty of Ravana Falls.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>Observe leopards, elephants, and other wildlife on a mindful safari at Yala National Park.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>Walk the fiery-red plains of Ussangoda, a landscape steeped in myth.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>
                      Relax and reconnect along Unawatuna’s beaches and the secluded Jungle Beach at Rumassala
                      Mountain.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>Visit the sacred Kelaniya Temple, absorbing its spiritual calm and intricate murals.</span>
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
