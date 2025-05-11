import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function WhySriLanka() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/golden-sunset.png"
              alt="Sri Lanka Landscape"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-16 md:py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Why Sri Lanka?</h1>
            <p className="mt-6 max-w-[600px] text-lg md:text-xl">
              Discover the wonders of this tropical paradise in the Indian Ocean
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">A World in One Island</h2>
                <p className="text-muted-foreground mb-6">
                  Sri Lanka may be small in size, but it offers an incredible diversity of experiences. From ancient
                  cities and sacred temples to pristine beaches and misty mountains, this island nation packs an
                  extraordinary range of destinations into a compact space.
                </p>
                <p className="text-muted-foreground mb-6">
                  With a rich cultural heritage spanning over 2,500 years, breathtaking landscapes, abundant wildlife,
                  and some of the warmest hospitality you'll ever encounter, Sri Lanka truly deserves its nickname as
                  the "Pearl of the Indian Ocean."
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col p-4 bg-green-900 rounded-lg">
                    <span className="text-xl font-bold text-white mb-2">8</span>
                    <span className="text-sm text-gray-300">UNESCO World Heritage Sites</span>
                  </div>
                  <div className="flex flex-col p-4 bg-green-900 rounded-lg">
                    <span className="text-xl font-bold text-white mb-2">1,340km</span>
                    <span className="text-sm text-gray-300">of Pristine Coastline</span>
                  </div>
                  <div className="flex flex-col p-4 bg-green-900 rounded-lg">
                    <span className="text-xl font-bold text-white mb-2">26</span>
                    <span className="text-sm text-gray-300">National Parks</span>
                  </div>
                  <div className="flex flex-col p-4 bg-green-900 rounded-lg">
                    <span className="text-xl font-bold text-white mb-2">25,000+</span>
                    <span className="text-sm text-gray-300">Wild Elephants</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image src="/images/train-journey.png" alt="Sri Lanka Landscape" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Facts */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Facts About Sri Lanka</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Essential information to know before your journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Geography & Climate</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-black">
                        ✓
                      </div>
                      <p className="text-muted-foreground">
                        Tropical island located in the Indian Ocean, southeast of India
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-black">
                        ✓
                      </div>
                      <p className="text-muted-foreground">
                        Two monsoon seasons create distinct wet and dry periods in different regions
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-black">
                        ✓
                      </div>
                      <p className="text-muted-foreground">
                        Central highlands rise to over 2,500 meters, creating diverse microclimates
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-black">
                        ✓
                      </div>
                      <p className="text-muted-foreground">
                        Year-round warm temperatures (average 26-30°C in lowlands, cooler in highlands)
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Culture & People</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-black ">
                        ✓
                      </div>
                      <p className="text-muted-foreground">
                        Rich multicultural society with Sinhalese, Tamil, Moor, and other ethnic groups
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-black ">
                        ✓
                      </div>
                      <p className="text-muted-foreground">
                        Buddhism is the predominant religion, with significant Hindu, Muslim, and Christian communities
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-black ">
                        ✓
                      </div>
                      <p className="text-muted-foreground">
                        Official languages are Sinhala and Tamil, with English widely spoken in tourist areas
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-black ">
                        ✓
                      </div>
                      <p className="text-muted-foreground">
                        Known for exceptional hospitality and a warm, welcoming attitude toward visitors
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Practical Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-black">
                        ✓
                      </div>
                      <p className="text-muted-foreground">Currency: Sri Lankan Rupee (LKR)</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-black">
                        ✓
                      </div>
                      <p className="text-muted-foreground">
                        Visa required for most visitors (easily obtained online through ETA system)
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-black">
                        ✓
                      </div>
                      <p className="text-muted-foreground">Time zone: GMT+5:30</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-black">
                        ✓
                      </div>
                      <p className="text-muted-foreground">Driving is on the left side of the road</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Unique Experiences */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Unique Experiences</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Unforgettable moments that make Sri Lanka special
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative h-48 md:h-auto md:w-48 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image src="/images/safari-adventure.jpg" alt="Wildlife Safari" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Witness the Elephant Gathering</h3>
                  <p className="text-muted-foreground">
                    Experience one of the greatest wildlife spectacles in the world at Minneriya National Park, where
                    hundreds of elephants gather around the ancient reservoir during the dry season (June to September).
                    This natural phenomenon, known as "The Gathering," is the largest concentration of Asian elephants
                    in one place.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative h-48 md:h-auto md:w-48 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image src="/images/tea-train.png" alt="Train Journey" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Scenic Train Journey Through Tea Country</h3>
                  <p className="text-muted-foreground">
                    Take one of the world's most beautiful train rides from Kandy to Ella, winding through misty
                    mountains, lush tea plantations, and picturesque villages. The 7-hour journey offers breathtaking
                    views and a glimpse into rural Sri Lankan life as you traverse bridges, tunnels, and dramatic
                    landscapes.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative h-48 md:h-auto md:w-48 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image src="/images/sigiriya-rock.png" alt="Sigiriya" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Climb the Ancient Rock Fortress of Sigiriya</h3>
                  <p className="text-muted-foreground">
                    Ascend the 1,200 steps to the top of Sigiriya, a UNESCO World Heritage site and one of Sri Lanka's
                    most iconic landmarks. This 5th-century fortress, built atop a massive 200-meter rock, features
                    ancient frescoes, water gardens, and the remains of a royal palace, offering panoramic views of the
                    surrounding jungle.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative h-48 md:h-auto md:w-48 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image src="/images/coastal-aerial.png" alt="Whale Watching" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Blue Whale Watching in Mirissa</h3>
                  <p className="text-muted-foreground">
                    Embark on a dawn boat trip off the southern coast to witness the largest animals on Earth. Sri Lanka
                    is one of the best places in the world to see blue whales, with high sighting rates between December
                    and April. You might also encounter sperm whales, dolphins, and other marine life in these rich
                    waters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground">Common questions about traveling to Sri Lanka</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>When is the best time to visit Sri Lanka?</AccordionTrigger>
                  <AccordionContent>
                    Sri Lanka has a complex climate affected by two monsoons. The best time to visit depends on which
                    regions you plan to explore:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>
                        <strong>South & West Coast:</strong> December to March (dry and sunny)
                      </li>
                      <li>
                        <strong>East Coast:</strong> April to September (ideal beach weather)
                      </li>
                      <li>
                        <strong>Cultural Triangle & Hill Country:</strong> Year-round, but December to March offers the
                        most reliable weather
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do I need a visa to visit Sri Lanka?</AccordionTrigger>
                  <AccordionContent>
                    Yes, most visitors need a visa to enter Sri Lanka. The good news is that obtaining one is simple
                    through the Electronic Travel Authorization (ETA) system. You can apply online before your trip, and
                    the process typically takes 24-48 hours. Tourist visas are usually valid for 30 days and can be
                    extended if needed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is Sri Lanka safe for travelers?</AccordionTrigger>
                  <AccordionContent>
                    Sri Lanka is generally considered a safe destination for travelers. The country has a low crime
                    rate, and violent crimes against tourists are rare. As with any destination, it's advisable to take
                    standard precautions: be aware of your surroundings, avoid isolated areas at night, and keep
                    valuables secure. The biggest safety concerns are typically related to road safety and natural
                    hazards like strong ocean currents during certain seasons.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How many days do I need to explore Sri Lanka?</AccordionTrigger>
                  <AccordionContent>
                    While you could see some highlights in a week, we recommend at least 10-14 days to properly
                    experience Sri Lanka without feeling rushed. The country may be compact, but travel times between
                    destinations can be longer than expected due to winding roads and traffic. A two-week itinerary
                    allows you to explore several regions, including the Cultural Triangle, hill country, and at least
                    one coastal area, while still having time to relax and immerse yourself in the local culture.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What is the local currency and can I use credit cards?</AccordionTrigger>
                  <AccordionContent>
                    The local currency is the Sri Lankan Rupee (LKR). While credit cards are widely accepted in hotels,
                    upscale restaurants, and larger shops in tourist areas, it's advisable to carry cash for smaller
                    establishments, local markets, and transportation. ATMs are readily available in cities and tourist
                    destinations, but may be limited in rural areas. We recommend carrying a mix of payment options and
                    exchanging some currency upon arrival.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>What should I pack for a trip to Sri Lanka?</AccordionTrigger>
                  <AccordionContent>
                    Pack light, breathable clothing suitable for warm weather, along with:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Modest attire for visiting temples (shoulders and knees covered)</li>
                      <li>A light sweater or jacket for hill country, which can be cool in the evenings</li>
                      <li>Comfortable walking shoes for exploring</li>
                      <li>Sun protection (hat, sunglasses, sunscreen)</li>
                      <li>Insect repellent</li>
                      <li>Rain jacket or umbrella, especially during monsoon season</li>
                      <li>Swimwear for beaches and hotel pools</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-black">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Ready to Experience Sri Lanka?
              </h2>
              <p className="max-w-[700px] mb-8 text-gray-400">
                Let us help you plan the perfect journey through this incredible island paradise.
              </p>
              <Button asChild size="lg" className="bg-gray-800 text-primary hover:bg-black">
                <Link href="/contact-us">Start Planning Your Trip</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
