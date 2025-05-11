import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { CalendarIcon, Clock, User, ArrowLeft, Tag } from "lucide-react"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts, type BlogPost } from "@/lib/markdown"

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts()
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post: BlogPost | null = null

  try {
    post = await getPostBySlug(params.slug)
  } catch (error) {
    console.error(`Error loading blog post with slug ${params.slug}:`, error)
    // Try to find the post in sample data
    const samplePost = sampleBlogPosts.find((p) => p.slug === params.slug)
    if (!samplePost) {
      notFound()
    }
    post = samplePost
  }

  if (!post) {
    notFound()
  }

  // Get related posts
  let relatedPosts: BlogPost[] = []
  try {
    const allPosts = await getAllPosts()
    relatedPosts = allPosts.filter((p) => p.slug !== post?.slug && p.category === post?.category).slice(0, 2)
  } catch (error) {
    console.error("Error loading related posts:", error)
    // Use sample data for related posts
    relatedPosts = sampleBlogPosts.filter((p) => p.slug !== post?.slug && p.category === post?.category).slice(0, 2)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-16 md:py-24 text-center text-white">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-4 w-4" />
              <span className="text-sm">{post.category}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl max-w-4xl">{post.title}</h1>
            <div className="flex items-center gap-6 mt-6 text-sm">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              {post.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {post.imageGallery && (
                <div className="my-12">
                  <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {post.imageGallery.map((image, index) => (
                      <div key={index} className="relative h-60 rounded-lg overflow-hidden">
                        <Image src={image.url || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12 pt-8 border-t">
                <Button asChild variant="outline">
                  <Link href="/blog" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                  </Link>
                </Button>
              </div>

              {relatedPosts.length > 0 && (
                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-xl font-bold mb-6">Related Posts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.slug} className="flex gap-4">
                        <div className="relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">
                            <Link href={`/blog/${relatedPost.slug}`} className="hover:underline">
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-muted-foreground">{relatedPost.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

// Sample blog data (used as fallback if markdown files don't exist)
const sampleBlogPosts = [
  {
    slug: "exploring-sigiriya-rock-fortress",
    title: "Exploring the Ancient Marvel of Sigiriya Rock Fortress",
    excerpt: "Discover the history and breathtaking views of Sri Lanka's most iconic UNESCO World Heritage site.",
    image: "/images/sigiriya-rock.png",
    date: "May 5, 2025",
    author: "Sarah Johnson",
    category: "History & Culture",
    readTime: 8,
    content: `
      <p>Rising dramatically from the central plains of Sri Lanka, Sigiriya Rock Fortress is one of the most remarkable archaeological sites in Asia. This ancient rock fortress, also known as Lion Rock, stands at nearly 200 meters tall and features the ruins of a palace complex built during the reign of King Kasyapa (477-495 CE).</p>
      <p>Our journey to Sigiriya began at dawn, when the morning light casts a golden glow on the massive rock formation. The early start helped us avoid both the crowds and the midday heat, which can be intense in Sri Lanka's Cultural Triangle region.</p>
      <p>The climb to the top involves ascending a series of staircases and walkways built into the rock face. While moderately challenging, the ascent is manageable for most visitors with reasonable fitness levels. Along the way, you'll encounter several noteworthy features that make Sigiriya truly special.</p>
      <p>About halfway up, we reached the famous Sigiriya Frescoes, a series of colorful paintings depicting celestial nymphs that have remarkably survived for over 1,500 years. These ancient artworks are protected in a small cave recess and photography is prohibited to help preserve them.</p>
      <p>Continuing our climb, we arrived at the Lion Platform, where enormous lion paws carved from stone flank the final staircase to the summit. These are all that remain of what was once a massive lion figure through whose mouth visitors would pass to reach the palace above.</p>
      <p>The panoramic views from the top are simply breathtaking. The ancient gardens and water features below are laid out in perfect symmetry, while the surrounding jungle and distant mountains create a spectacular backdrop. It's easy to understand why King Kasyapa chose this location for his royal residence.</p>
      <p>Exploring the ruins of the palace complex at the summit, we could still see the foundations of various buildings, bathing pools, and throne areas. Our guide explained how advanced the water management systems were for their time, bringing water to the top of the rock through a sophisticated hydraulic system.</p>
      <p>For history enthusiasts and photographers alike, Sigiriya offers an unparalleled experience. The combination of natural beauty, archaeological significance, and engineering ingenuity makes it a must-visit destination in Sri Lanka.</p>
    `,
    imageGallery: [
      {
        url: "/images/sigiriya-rock.png",
        alt: "Sigiriya Rock Fortress panoramic view",
      },
      {
        url: "/images/sigiriya-aerial.png",
        alt: "Aerial view of Sigiriya Rock Fortress",
      },
    ],
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
    readTime: 7,
    content: `
      <p>Often described as one of the most beautiful train journeys in the world, the rail route from Kandy to Ella takes travelers through Sri Lanka's stunning hill country, offering breathtaking views of lush tea plantations, misty mountains, and picturesque villages.</p>
      <p>Our adventure began at the colonial-era Kandy railway station, where we boarded the blue train bound for Ella. While first-class observation cars with air conditioning are available, we opted for second-class seats to enjoy the fresh mountain air through open windows and doors – perfect for photography and truly immersing ourselves in the experience.</p>
      <p>The journey covers approximately 140 kilometers and takes around 7 hours, though delays are common. Rather than seeing this as an inconvenience, we embraced the leisurely pace as part of the charm. The slow train allows passengers to fully appreciate the changing landscapes and capture stunning photographs along the way.</p>
      <p>As we climbed higher into the hills, the scenery transformed dramatically. The urban surroundings of Kandy gave way to verdant valleys and eventually the emerald-green tea plantations that Sri Lanka is famous for. Tamil tea pickers in colorful saris could be spotted working among the precisely manicured tea bushes that carpet the hillsides.</p>
      <p>One of the journey's highlights came about three hours in when we reached Nanu Oya station, the access point for the colonial hill station of Nuwara Eliya. The temperature dropped noticeably as we reached this elevation, and the mist rolling across the tea plantations created an almost mystical atmosphere.</p>
      <p>The section between Nanu Oya and Ella is widely considered the most spectacular part of the journey. The train winds around steep cliffs, through numerous tunnels carved through the mountains, and across viaducts offering vertigo-inducing views of the valleys below. The famous Nine Arch Bridge near Ella is an engineering marvel and one of the most photographed spots in Sri Lanka.</p>
      <p>Throughout the journey, local vendors move through the carriages selling an array of snacks, from fresh mango sprinkled with chili salt to crispy vadai (savory fritters). These make for a delicious and authentic culinary experience as you take in the scenery.</p>
      <p>For the best views, try to secure seats on the right side of the train when traveling from Kandy to Ella. However, passengers frequently hang from the open doorways (carefully and at their own risk) to take in views from both sides – an exhilarating experience that has become somewhat iconic of this journey.</p>
    `,
    imageGallery: [
      {
        url: "/images/nine-arch-bridge.png",
        alt: "Train crossing Nine Arch Bridge in Ella",
      },
      {
        url: "/images/train-journey.png",
        alt: "Train journey through tea plantations",
      },
    ],
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
    readTime: 6,
    content: `
      <p>The Madu River and its extensive mangrove ecosystem offer one of Sri Lanka's most unique ecological experiences. Located in the southern part of the island near Balapitiya, this complex network of islands and waterways is home to an incredible variety of flora and fauna.</p>
      <p>Our exploration began early in the morning when the water was calm and wildlife most active. We boarded a traditional wooden boat piloted by a local guide whose family has navigated these waters for generations. His intimate knowledge of the ecosystem proved invaluable throughout our journey.</p>
      <p>As we glided through the narrow channels, the dense mangrove forests created natural tunnels overhead. Our guide explained how these remarkable trees have adapted to thrive in brackish water, with their distinctive prop roots providing stability in the soft mud while also serving as nurseries for numerous fish species.</p>
      <p>The biodiversity within this ecosystem is truly remarkable. We spotted several monitor lizards sunning themselves on overhanging branches, various kingfisher species darting across the water, and even a troop of purple-faced langur monkeys moving through the canopy. The mangroves support over 300 species of plants and animals, many of which are endemic to Sri Lanka.</p>
      <p>One of the highlights of our tour was visiting a small island where local families demonstrate traditional cinnamon processing. Sri Lankan cinnamon, known as 'true cinnamon,' is considered the finest in the world. We watched as skilled workers carefully peeled the inner bark from freshly cut branches and dried it into the familiar quills that are exported globally.</p>
      <p>Another fascinating stop was at a Buddhist temple situated on one of the river's 64 islands. The temple offers a peaceful retreat for monks who live in harmony with the surrounding nature. Our guide explained how the local communities have traditionally viewed the mangrove ecosystem as sacred, which has contributed to its preservation over centuries.</p>
      <p>The Madu River estuary was designated as a Ramsar Wetland of International Importance in 2003, recognizing its ecological significance. However, our guide shared concerns about increasing development pressures and the impacts of climate change on this fragile ecosystem.</p>
      <p>For travelers seeking to experience Sri Lanka beyond its beaches and cultural sites, the Madu River offers an unforgettable glimpse into one of the island's most important yet often overlooked natural treasures. The boat journey typically takes 2-3 hours and is suitable for all ages, making it an excellent activity for families and nature enthusiasts alike.</p>
    `,
    imageGallery: [
      {
        url: "/images/fishing-boats.png",
        alt: "Traditional fishing boats in Sri Lanka",
      },
      {
        url: "/images/coastal-aerial.png",
        alt: "Aerial view of Sri Lankan coastline",
      },
    ],
  },
]
