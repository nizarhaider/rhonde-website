import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ArrowRight, CalendarIcon } from 'lucide-react'
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import Whatsapp  from "@/components/ui/whatsapp"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 home-main">

        {/* Hero Section */}
        <section className="relative h-screen pt-16">
          <MainNav isTransparent={true} />
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/sigiriya-aerial.png"
              alt="Sigiriya Rock Fortress in Sri Lanka"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative z-10 h-full flex flex-col justify-end items-center pb-32">
            <div className="text-center space-y-6">
              <h1>
                <span className="text-white px-4 py-2 rounded-lg inline-block text-5xl md:text-6xl lg:text-5xl font-bold">
                  We create art out of travel.
                </span>
              </h1>
              <p>
                <span className="text-white px-4 py-2 rounded-lg inline-block text-md md:text-lg max-w-xl">
                  Welcome to Sri Lanka – our slice of paradise in the Indian Ocean. You've heard of the magic; now it's
                  your turn to dive in!
                </span>
              </p>
              <Button
                asChild
                className="mt-6 border border-white bg-transparent text-white px-8 py-3 text-lg font-medium 
                          hover:bg-green-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <Link href="/what-we-do">Explore What We Do</Link>
              </Button>
            </div>
          </div>
        </section>




        {/* About Us Description */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light italic mb-8">Sri Lanka, curated</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  We craft journeys that invite you to explore Sri Lanka intentionally, with every moment thoughtfully 
                  designed to connect you to the island's culture, nature, and people. Our approach blends mindful travel 
                  with accessible luxury—experiences that feel indulgent without ever being over the top. From hidden 
                  retreats to authentic local encounters, we carefully curate every step of your journey so that each detail 
                  matters.
                </p>
                <p className="text-lg leading-relaxed">
                  Responsibility is at the heart of what we do; from eco-conscious stays to supporting local communities, 
                  every choice is made with care. Whether it's a sunrise over a misty tea estate or a quiet village story waiting 
                  to be discovered, we ensure these moments are yours to savor.
                </p>
                <p className="text-xl font-medium mt-8">With Ronde, Sri Lanka comes alive.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Snippet */}
        <section className="py-16 md:py-12 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What We Do</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Crafting bespoke experiences that showcase the best of Sri Lanka
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <div className="relative h-48">
                  <Image src="/images/bespoke_tours.jpg" alt="Bespoke Tours" fill className="object-cover rounded-t-lg" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Bespoke Tours</h3>
                  <p className="text-muted-foreground mb-4">
                    Personalized itineraries tailored to your interests, timeframe, and preferences.
                  </p>
                  <Button asChild variant="outline" className="w-full hover:bg-black hover:text-white">
                    <Link href="/what-we-do" className="flex items-center justify-between">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <div className="relative h-48">
                  <Image src="/images/yoga_pose.jpg" alt="Retreat Planning" fill className="object-cover rounded-t-lg" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Wellness Retreat</h3>
                  <p className="text-muted-foreground mb-4">
                    Wellness and yoga retreats in serene locations across the island.
                  </p>
                  <Button asChild variant="outline" className="w-full hover:bg-black hover:text-white">
                    <Link href="/what-we-do#retreat-planning" className="flex items-center justify-between">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <div className="relative h-48">
                  <Image src="/images/buddha_statue_cave.jpg" alt="Cultural Experiences" fill className="object-cover rounded-t-lg" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Cultural Experiences</h3>
                  <p className="text-muted-foreground mb-4">
                    Authentic cultural immersions and unique adventures across Sri Lanka.
                  </p>
                  <Button asChild variant="outline" className="w-full hover:bg-black hover:text-white">
                    <Link href="/what-we-do#experiences" className="flex items-center justify-between">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Sri Lanka Snippet */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/tea-train.png" alt="Sri Lanka Tea Plantations" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Why Sri Lanka?</h2>
                <p className="text-muted-foreground mb-6">
                  A tropical paradise with diverse landscapes, rich cultural heritage, and warm hospitality. From
                  ancient cities to pristine beaches, Sri Lanka offers unforgettable experiences for every traveler.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col p-4 bg-green-900 rounded-lg">
                    <span className="text-xl font-bold text-primary mb-2">Rich Heritage</span>
                    <span className="text-sm text-gray-300">8 UNESCO World Heritage Sites</span>
                  </div>
                  <div className="flex flex-col p-4 bg-green-900 rounded-lg">
                    <span className="text-xl font-bold text-primary mb-2">Biodiversity</span>
                    <span className="text-sm text-gray-300">26 National Parks</span>
                  </div>
                  <div className="flex flex-col p-4 bg-green-900 rounded-lg">
                    <span className="text-xl font-bold text-primary mb-2">Beaches</span>
                    <span className="text-sm text-gray-300">1,340km of Coastline</span>
                  </div>
                  <div className="flex flex-col p-4 bg-green-900 rounded-lg">
                    <span className="text-xl font-bold text-primary mb-2">Climate</span>
                    <span className="text-sm text-gray-300">Year-round Tropical Weather</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsible Tourism Snippet */}
        <section className="py-16 md:py-24 bg-green-900">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Responsible Tourism
              </h2>
              <p className="mt-4 max-w-[700px] text-green-100">
                Our commitment to sustainable travel that benefits people, planet, and you
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-green-700 flex items-center justify-center mb-4">
                  {/* Icon color changed to text-green-200 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-green-200"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">People</h3>
                <p className="text-green-100">
                  Supporting local communities through ethical partnerships with accommodations, suppliers, and guides.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-green-700 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-green-200"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Planet</h3>
                <p className="text-green-100">
                  Protecting oceans, wildlife, and ecosystems through sustainable practices and conservation efforts.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-green-700 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-green-200"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">You</h3>
                <p className="text-green-100">
                  Transparency in how your money is spent, ensuring it contributes to local economies and conservation.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Button asChild className="bg-white text-green-900 hover:bg-green-100">
                <Link href="/responsible-tourism">Learn More About Our Approach</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Experiences */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Experiences</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Unforgettable moments that make Sri Lanka special
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((experience) => (
                <Card key={experience.name} className="overflow-hidden">
                  <div className="relative h-60">
                    <Image
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.name}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{experience.location}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{experience.name}</h3>
                    <p className="text-muted-foreground mb-4">{experience.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sri Lanka Gallery</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">A glimpse of the beauty that awaits you</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/train-journey.png"
                  alt="Train Journey Through Tea Country"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/tea-hills.png"
                  alt="Tea Plantations"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/stilt-fishermen.png"
                  alt="Traditional Stilt Fishing"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/coastal-aerial.png"
                  alt="Coastal View"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/green-valley.png"
                  alt="Lush Green Valley"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/cave-temple.png"
                  alt="Cave Temple"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Button asChild className="bg-white text-black hover:bg-black hover:text-white">
                <Link href="/gallery">View Full Gallery</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">From Our Blog</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Stories and insights from our adventures across Sri Lanka
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(0, 3).map((post) => (
                <Card key={post.slug} className="overflow-hidden flex flex-col">
                  <div className="relative h-60">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                    <Button asChild variant="outline" className="w-full mt-auto hover:bg-black hover:text-white">
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button asChild>
                <Link href="/blog">View All Posts</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-primary text-black">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Ready to Experience Sri Lanka?
              </h2>
              <p className="max-w-[700px] mb-8 text-gray-500">
                Get in touch with our travel experts to start planning your perfect Sri Lankan adventure.
              </p>
              <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
                <Link href="/contact-us">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Whatsapp Component */}
        <div className="fixed bottom-4 right-4 z-50">
          <Whatsapp />
        </div>

      </main>
      <SiteFooter />
    </div>
  )
}

// Sample data
let experiences = [
  {
    id: "tea-country",
    name: "Mediate with a Monk",
    location: "Mihintale",
    description: "Meditate and share stories with a monk atop an ancient monastery.",
    image: "/images/monk_meditating.jpg",
  },
  {
    id: "safari-journey",
    name: "Discover Northern Flavors",
    location: "Jaffna",
    description: "Cook Jaffna crab curry with locals.",
    image: "/images/crab_curry.jpg",
  },
  {
    id: "cultural-immersion",
    name: "Forgotten Crops",
    location: "Ella",
    description: "Follow Sri Lanka’s hidden coffee trails and forgotten crops",
    image: "/images/tea_plantation_show.avif",
  },
]

// Sample blog data
const blogPosts = [
  {
    slug: "exploring-sigiriya-rock-fortress",
    title: "Exploring the Ancient Marvel of Sigiriya Rock Fortress",
    excerpt: "Discover the history and breathtaking views of Sri Lanka's most iconic UNESCO World Heritage site.",
    image: "/images/sigiriya-rock.png",
    date: "May 5, 2025",
    author: "Sarah Johnson",
    category: "History & Culture",
  },
  {
    slug: "train-journey-through-tea-country",
    title: "The Most Scenic Train Journey Through Sri Lanka's Tea Country",
    excerpt:
      "Experience the unforgettable rail adventure from Kandy to Ella through misty mountains and tea plantations.",
    image: "/images/nine-arch-bridge.png",
    date: "April 28, 2025",
    author: "Michael Wong",
    category: "Travel Tips",
  },
  {
    slug: "mangrove-exploration-madu-river",
    title: "Mangrove Exploration: A Journey Through Madu River",
    excerpt:
      "Navigate through the intricate waterways and discover the rich biodiversity of Sri Lanka's mangrove ecosystems.",
    image: "/images/fishing-boats.png",
    date: "April 8, 2025",
    author: "Raj Patel",
    category: "Nature",
  },
]
