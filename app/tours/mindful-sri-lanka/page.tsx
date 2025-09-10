import React from "react"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function MindfulSriLankaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Mindful_Sri_Lanka.jpg"
              alt="Mindful Sri Lanka"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-16 md:py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Mindful Sri Lanka
            </h1>
            <p className="mt-6 max-w-[600px] text-lg md:text-xl">
              Step into a journey that flows gently between mindful movement, serene landscapes, and cultural immersion.
            </p>
            <div className="mt-4 text-lg font-medium">9 nights/10 days</div>
          </div>
        </section>

        {/* Two Column Layout Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Tour Overview */}
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Mindful Sri Lanka
                </h2>
                <div className="prose prose-lg">
                  <p>
                    Step into a journey that flows gently between mindful movement, serene landscapes,
                    and cultural immersion across Sri Lanka. From the quiet wilds of Wilpattu to the rolling tea
                    country of the highlands and the tranquil shores of Ahungalla, each day balances moments
                    of exploration with stillness and reflection.
                  </p>
                  <p className="mt-4">
                    Mornings unfold with yoga, breathwork, and meditation, setting the rhythm for mindful
                    connection to nature, history, and community. Along the way, you’ll witness sacred sites,
                    wander spice gardens, and engage with local families, discovering the traditions and
                    rhythms of island life.
                  </p>
                  <p className="mt-4">
                    The accommodations are chosen for their peaceful settings, eco-conscious design, and
                    ability to nurture presence, offering space to rest and rejuvenate. Ayurvedic consultations,
                    holistic treatments, and creative practices invite a deeper sense of balance, while
                    community visits remind you that travel can leave a positive footprint. By journey’s end,
                    you emerge with renewed vitality, a calm mind, and a collection of shared experiences
                    that linger long after you leave.
                  </p>
                </div>
              </div>

              {/* Right Column - Tour Highlights */}
              <div className="bg-muted/30 rounded-lg p-8 border-black border-2">
                <h2 className="text-2xl font-bold tracking-tighter mb-6">
                  Tour Highlights
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Grounding yoga, meditation, and breathwork sessions at each retreat location</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Safari exploration in Wilpattu National Park with opportunities to observe wildlife</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Sunrise hikes and visits to sacred historical sites, including Pidurangala Rock and Ritigala Monastery</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Hands-on cultural experiences: cooking with local families and exploring spice gardens</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Ayurvedic consultations, optional treatments, and wellness practices in Kandy and Ahungalla</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Scenic highland journey with tea factory visit, train ride through Ella, and waterfall views</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Creative and mindful activities: riverside painting, Yin Yoga, and optional sound baths</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Beachside relaxation, yoga, and meditation at Bogenvilya by One World Foundation</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Engagement with sustainable initiatives and community projects, including the local welfare school</span></li>
                  <li className="flex items-start"><span className="mr-2 mt-1">•</span><span>Farewell celebrations with Bhajan, Dance Fusion, and reflective beachside moments</span></li>
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
