import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const tours = [
  {
    id: "waves-to-peaks",
    name: "From Waves to Peaks",
    description: "Trace the rhythm of Sri Lanka, from sun-kissed shores to misty mountain heights.",
    duration: "7 nights/8 days",
    image: "/images/mountain-valley.png"
  },
  {
    id: "mindful-sri-lanka",
    name: "Mindful Sri Lanka",
    description: "Wander through serene forests and sacred spaces, letting each moment settle like a quiet breath.",
    duration: "9 nights/10 days",
    image: "/images/monk_meditating.jpg"
  },
  {
    id: "paths-less-traveled",
    name: "Paths Less Traveled",
    description: "Step off the beaten path and uncover hidden villages, secret waterfalls, and untouched landscapes.",
    duration: "12 nights/13 days",
    image: "/images/green-valley.png"
  },
  {
    id: "echoes-of-ramayana",
    name: "Echoes of the Ramayana",
    description: "Follow the footsteps of legends across timeless temples, forests, and coastal treasures.",
    duration: "8 nights/9 days",
    image: "/images/cave-temple.png"
  },
  {
    id: "northern-wonders",
    name: "Northern Wonders and Heritage",
    description: "Explore ancient cities and coastal gems where history whispers in every corner.",
    duration: "7 nights/8 days",
    image: "/images/buddha_statue_cave.jpg"
  },
  {
    id: "sri-lanka-classics",
    name: "Sri Lanka Classics",
    description: "Immerse in the iconic highlights, from cultural hubs to coastal charm, all in one journey.",
    duration: "6 nights/7 days",
    image: "/images/sigiriya-rock.png"
  }
]

export default function ToursPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/golden-sunset.png"
              alt="Sri Lanka Tours"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-16 md:py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Tours</h1>
            <p className="mt-6 max-w-[600px] text-lg md:text-xl">
              Discover Sri Lanka through our carefully crafted journeys
            </p>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tours.map((tour) => (
                <Link key={tour.id} href={`/tours/${tour.id}`}>
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={tour.image}
                        alt={tour.name}
                        fill
                        className="object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
                      <p className="text-muted-foreground mb-4">{tour.description}</p>
                      <p className="text-sm font-medium">{tour.duration}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
