import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, User } from "lucide-react"
import { getAllPosts, type BlogPost } from "@/lib/markdown"

export default async function Blog() {
  // Get all blog posts
  let blogPosts: BlogPost[] = []

  try {
    blogPosts = await getAllPosts()
  } catch (error) {
    console.error("Error loading blog posts:", error)
    // Use sample data if there's an error or no posts
    blogPosts = sampleBlogPosts
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/nine-arch-bridge.png"
              alt="Nine Arch Bridge in Ella, Sri Lanka"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-16 md:py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Travel Blog</h1>
            <p className="mt-6 max-w-[600px] text-lg md:text-xl">
              Stories, tips, and insights from our adventures across Sri Lanka
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
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
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                    <Button asChild variant="outline" className="w-full mt-auto">
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground mb-6">
                Get the latest travel tips, destination guides, and exclusive offers delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" className="sm:w-auto">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

// Sample blog data (used as fallback if no markdown files exist)
const sampleBlogPosts = [
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
    slug: "wildlife-safari-adventures",
    title: "Wildlife Safari Adventures: Encountering Sri Lanka's Majestic Elephants",
    excerpt:
      "Our guide to the best national parks and wildlife sanctuaries to spot elephants in their natural habitat.",
    image: "/images/mountain-road.png",
    date: "April 20, 2025",
    author: "David Chen",
    category: "Wildlife",
  },
  {
    slug: "surfing-paradise-arugam-bay",
    title: "Surfing Paradise: Catching Waves at Arugam Bay",
    excerpt: "Why Sri Lanka's east coast has become a hotspot for surfers from around the world.",
    image: "/images/ocean-waves.png",
    date: "April 15, 2025",
    author: "Emma Wilson",
    category: "Adventure",
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
  {
    slug: "culinary-journey-sri-Lankan-cuisine",
    title: "A Culinary Journey Through Sri Lankan Cuisine",
    excerpt: "From spicy curries to hoppers, explore the flavors and techniques that make Sri Lankan food unique.",
    image: "/images/handicraft.png",
    date: "April 1, 2025",
    author: "Lisa Nguyen",
    category: "Food & Dining",
  },
]
