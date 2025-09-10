import React from "react"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"

export default function HowItStartedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/golden-sunset.png"
              alt="How It Started"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-16 md:py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">How It Started</h1>
            <p className="mt-6 max-w-[600px] text-lg md:text-xl">
              Our journey of crafting authentic Sri Lankan experiences
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            {/* First Paragraph */}
            <div className="flex flex-col-reverse md:flex-row gap-12 items-center mb-24">
              <div className="flex-1">
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">
                    Rondè was born on a quiet April evening in 2023, while Tharu found herself at her corporate job, crafting
                    itineraries as she always did. But she noticed something missing—the trips she was asked to plan felt
                    boxed in, predictable, lacking the freedom and spontaneity that made travel truly alive. She dreamed of a
                    different kind of journey: one where detours are welcomed when something intriguing appears, where
                    mingling with locals and saying "yes" to unexpected experiences is part of the story, and where every
                    adventure stretches you just enough to create memories that last.
                  </p>
                  <p className="text-2xl font-serif italic text-gray-600">
                    That's how Rondè came to life.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/images/mountain-valley.png"
                    alt="Sri Lankan Landscape"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Second Paragraph */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/images/green-valley.png"
                    alt="Sustainable Tourism"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="prose prose-lg max-w-none">
                  <p className="mb-4">
                    The word Rondè (pronounced rōn-dey) is Sinhala slang without a perfect translation, but it roughly captures
                    the joy of roaming—wandering, exploring, circling back, and discovering the layers of a place with curiosity.
                  </p>
                  <p>
                    From the beginning, Rondè has quietly curated sustainable journeys across Sri Lanka for travelers from
                    every corner of the globe, blending high-end experiences with a mindful, down-to-earth approach. Every
                    trip is designed with sustainability at its core: zero animal cruelty, zero single-use plastics, zero
                    unnecessary paper. With guests who share a love for leaving destinations better than they found them,
                    Rondè continues its journey, crafting bespoke adventures that celebrate the spirit, culture, and heart of Sri
                    Lanka.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
