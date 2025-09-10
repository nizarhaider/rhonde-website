import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function WhatWeDo() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/tea-hills.png"
              alt="Sri Lanka Experience"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-16 md:py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">What We Do</h1>
            <p className="mt-6 max-w-[600px] text-lg md:text-xl">
              Creating unforgettable Sri Lankan experiences tailored to your preferences
            </p>
            <Link href="/what-we-do/meet-the-team">
              <Button variant="outline" size="lg" className="mt-8 bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors">
                Meet the Team
              </Button>
            </Link>
          </div>
        </section>

        {/* Bespoke Tours */}
        <section id="bespoke-tours" className="py-16 md:py-16">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Bespoke Tours</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Personalized itineraries crafted to match your interests, timeframe, and travel style
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: "waves-to-peaks",
                  name: "From Waves to Peaks",
                  description: "Trace the rhythm of Sri Lanka, from sun-kissed shores to misty mountain heights.",
                  duration: "7 nights/8 days",
                  image: "/images/From_waves_to_peak.jpg"
                },
                {
                  id: "mindful-sri-lanka",
                  name: "Mindful Sri Lanka",
                  description: "Wander through serene forests and sacred spaces, letting each moment settle like a quiet breath.",
                  duration: "9 nights/10 days",
                  image: "/images/Mindful_Sri_Lanka.jpg"
                },
                {
                  id: "paths-less-traveled",
                  name: "Paths Less Traveled",
                  description: "Step off the beaten path and uncover hidden villages, secret waterfalls, and untouched landscapes.",
                  duration: "12 nights/13 days",
                  image: "/images/Paths_less_travelled.jpg"
                },
                {
                  id: "echoes-of-ramayana",
                  name: "Echoes of the Ramayana",
                  description: "Follow the footsteps of legends across timeless temples, forests, and coastal treasures.",
                  duration: "8 nights/9 days",
                  image: "/images/Echoes_of_Ramayana.JPG"
                },
                {
                  id: "northern-wonders",
                  name: "Northern Wonders and Heritage",
                  description: "Explore ancient cities and coastal gems where history whispers in every corner.",
                  duration: "7 nights/8 days",
                  image: "/images/nothern_wonders_and_heritage.jpg"
                },
                {
                  id: "sri-lanka-classics",
                  name: "Sri Lanka Classics",
                  description: "Immerse in the iconic highlights, from cultural hubs to coastal charm, all in one journey.",
                  duration: "6 nights/7 days",
                  image: "/images/srilanka_classics.png"
                }
              ].map((tour) => (
                <Link key={tour.id} href={`/tours/${tour.id}`}>
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                    <div className="relative h-60">
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

        {/* Retreat Planning */}
        {/* <section id="retreat-planning" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Retreat Planning</h2>
                <p className="text-muted-foreground mb-6">
                  We specialize in organizing wellness and yoga retreats in Sri Lanka's most serene locations. Our team
                  handles all aspects of retreat planning, from finding the perfect venue to arranging activities and
                  meals.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center text-primary ">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-medium">Venue Selection</h4>
                      <p className="text-sm text-muted-foreground">
                        From beachfront properties to mountain retreats, we'll find the perfect setting for your group.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-medium">Wellness Activities</h4>
                      <p className="text-sm text-muted-foreground">
                        Yoga sessions, meditation, Ayurvedic treatments, and more, tailored to your retreat's focus.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-medium">Nutrition & Dining</h4>
                      <p className="text-sm text-muted-foreground">
                        Healthy, locally-sourced meals that cater to all dietary requirements.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center text-primary ">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-medium">Excursions & Cultural Experiences</h4>
                      <p className="text-sm text-muted-foreground">
                        Complement your retreat with immersive local experiences and nature excursions.
                      </p>
                    </div>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact-us">Inquire About Retreat Planning</Link>
                </Button>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden order-1 lg:order-2">
                <Image src="/images/lake-view.png" alt="Luxury Retreat in Sri Lanka" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section> */}

        {/* Experiences */}
        <section id="experiences" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Authentic Experiences</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Immersive cultural activities and unique adventures that showcase the real Sri Lanka
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image src="/images/buddha-statues.png" alt="Cultural Immersion" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cultural Immersion</h3>
                <p className="text-muted-foreground mb-4">
                  Participate in traditional ceremonies, learn local crafts, and connect with Sri Lankan communities.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image src="/images/handicraft.png" alt="Culinary Journeys" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Culinary Journeys</h3>
                <p className="text-muted-foreground mb-4">
                  Cooking classes, spice garden visits, and food tours exploring Sri Lanka's rich culinary heritage.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image src="/images/coastal-aerial.png" alt="Wildlife Encounters" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Wildlife Encounters</h3>
                <p className="text-muted-foreground mb-4">
                  Ethical wildlife experiences including safaris, whale watching, and conservation activities.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image src="/images/ocean-waves.png" alt="Adventure Activities" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Adventure Activities</h3>
                <p className="text-muted-foreground mb-4">
                  Hiking, surfing, white water rafting, and more for thrill-seekers of all levels.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image src="/images/lake-view.png" alt="Wellness Experiences" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Wellness Experiences</h3>
                <p className="text-muted-foreground mb-4">
                  Traditional Ayurvedic treatments, yoga sessions, and meditation in tranquil settings.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image src="/images/tea-plantations.png" alt="Tea Plantation Visits" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Tea Plantation Visits</h3>
                <p className="text-muted-foreground mb-4">
                  Explore Sri Lanka's famous tea country, learn about tea production, and sample the finest Ceylon teas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-white text-black">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Let's Plan Your Sri Lankan Journey
              </h2>
              <p className="max-w-[700px] mb-8 text-gray-600">
                Contact us to discuss your travel preferences and let our experts craft the perfect itinerary for you.
              </p>
              <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
                <Link href="/contact-us">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

// Sample data
const tours = [
  {
    id: "cultural-triangle",
    name: "Cultural Triangle Explorer",
    description: "Discover Sri Lanka's ancient cities, temples, and cultural heritage.",
    duration: "7 Days",
    image: "/images/temple-interior.png",
  },
  {
    id: "wildlife-safari",
    name: "Wildlife Safari Adventure",
    description: "Encounter elephants, leopards, and diverse wildlife in national parks.",
    duration: "5 Days",
    image: "/images/safari-adventure.jpg",
  },
  {
    id: "coastal-escape",
    name: "Coastal Escape",
    description: "Relax on pristine beaches and explore charming coastal towns.",
    duration: "6 Days",
    image: "/images/coastal-aerial.png",
  },
  {
    id: "hill-country-retreat",
    name: "Hill Country Retreat",
    description: "Experience tea plantations, misty mountains, and colonial charm.",
    duration: "4 Days",
    image: "/images/tea-plantations.png",
  },
  {
    id: "culinary-journey",
    name: "Culinary Journey",
    description: "Taste your way through Sri Lanka's diverse and flavorful cuisine.",
    duration: "8 Days",
    image: "/images/handicraft.png",
  },
  {
    id: "adventure-tour",
    name: "Adventure Tour",
    description: "Hiking, rafting, surfing, and more for thrill-seekers.",
    duration: "9 Days",
    image: "/images/mountain-valley.png",
  },
]
