import React from "react"
import Image from "next/image"

export default function MindfulSriLankaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/monk_meditating.jpg"
              alt="Mindful Sri Lanka"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-16 md:py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Mindful Sri Lanka</h1>
            <p className="mt-6 max-w-[600px] text-lg md:text-xl">
              Wander through serene forests and sacred spaces, letting each moment settle like a quiet breath.
            </p>
            <div className="mt-4 text-lg font-medium">9 nights/10 days</div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Tour Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p>Embark on a mindful journey through Sri Lanka's most serene locations. This thoughtfully designed tour combines meditation retreats, ancient Buddhist temples, and peaceful natural settings to create a truly contemplative experience.</p>
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
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
