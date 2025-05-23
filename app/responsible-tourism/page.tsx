import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function ResponsibleTourism() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 pt-16">
        {" "}
        {/* Add padding-top to account for fixed header */}
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/green-valley.png"
              alt="Sri Lanka Nature"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-16 md:py-24 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Responsible Tourism</h1>
            <p className="mt-6 max-w-[600px] text-lg md:text-xl">
              Our commitment to sustainable travel that benefits people, planet, and you
            </p>
          </div>
        </section>
        {/* Introduction */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-[800px] mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 text-center">Our Approach</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                At Rondè Ceylon, we believe that tourism should be a force for good. Our responsible tourism approach
                focuses on three key pillars: People, Planet, and You.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
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
                        className="h-8 w-8 text-green-700"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">People</h3>
                    <p className="text-muted-foreground">
                      Supporting local communities through ethical partnerships with accommodations, suppliers, and
                      guides.
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
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
                        className="h-8 w-8 text-green-700"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Planet</h3>
                    <p className="text-muted-foreground">
                      Protecting oceans, wildlife, and ecosystems through sustainable practices and conservation
                      efforts.
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
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
                        className="h-8 w-8 text-green-700"
                      >
                        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">You</h3>
                    <p className="text-muted-foreground">
                      Transparency in how your money is spent, ensuring it contributes to local economies and
                      conservation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        {/* People Section */}
        <section id="people" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/fishing-boats.png"
                  alt="Local Community in Sri Lanka"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
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
                      className="h-6 w-6 text-black"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">People</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  We believe that tourism should benefit the local communities that make your travel experience special.
                  Here's how we ensure our tours have a positive impact on the people of Sri Lanka:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Accommodations</h3>
                    <p className="text-muted-foreground">
                      We partner with locally-owned hotels, guesthouses, and eco-lodges that employ local staff and
                      follow fair labor practices. This ensures that tourism revenue stays within the community.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Suppliers</h3>
                    <p className="text-muted-foreground">
                      From restaurants to activity providers, we work with local businesses that share our values of
                      sustainability and community support. We prioritize suppliers who source locally and minimize
                      waste.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Tour Guides</h3>
                    <p className="text-muted-foreground">
                      Our guides are local experts who are passionate about sharing their culture and knowledge. We
                      provide fair wages and ongoing training to ensure they can deliver exceptional experiences.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Vehicles</h3>
                    <p className="text-muted-foreground">
                      We work with local drivers who know the roads and maintain their vehicles to high standards. This
                      provides employment and ensures your safety during transportation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Planet Section */}
        <section id="planet" className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
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
                      className="h-6 w-6 text-black"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">Planet</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Sri Lanka's natural beauty is one of its greatest treasures. We're committed to preserving the
                  environment for future generations through these initiatives:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Oceans</h3>
                    <p className="text-muted-foreground">
                      We support beach clean-ups and marine conservation efforts. Our tours avoid activities that harm
                      marine life, and we educate travelers about responsible behavior in coastal areas.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Wildlife</h3>
                    <p className="text-muted-foreground">
                      We only partner with ethical wildlife experiences that prioritize animal welfare. We never promote
                      activities that exploit animals for entertainment, and we support wildlife conservation projects.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ecosystems</h3>
                    <p className="text-muted-foreground">
                      From rainforests to wetlands, we follow strict guidelines to minimize our impact on fragile
                      ecosystems. We stay on designated trails, respect wildlife, and practice "leave no trace"
                      principles.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Waste Reduction</h3>
                    <p className="text-muted-foreground">
                      We're working to eliminate single-use plastics from our tours and encourage our partners to do the
                      same. We provide travelers with reusable water bottles and minimize waste throughout your journey.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden order-1 lg:order-2">
                <Image src="/images/coastal-aerial.png" alt="Sri Lanka Wildlife" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
        {/* You Section */}
        <section id="you" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image src="/images/train-journey.png" alt="Travelers in Sri Lanka" fill className="object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
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
                      className="h-6 w-6 text-black"
                    >
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">You</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  We believe in transparency and want you to know exactly how your travel dollars are making a positive
                  impact. Here's what you can expect when you travel with us:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Fair Pricing</h3>
                    <p className="text-muted-foreground">
                      We offer competitive pricing that reflects the true cost of providing quality, sustainable travel
                      experiences. We don't cut corners on ethical practices to reduce prices.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Local Economic Impact</h3>
                    <p className="text-muted-foreground">
                      Approximately 80% of your tour cost stays within the local economy, supporting jobs, small
                      businesses, and community development projects throughout Sri Lanka.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Conservation Contribution</h3>
                    <p className="text-muted-foreground">
                      A portion of every booking goes directly to local conservation initiatives and community projects.
                      We'll share information about the specific projects your trip is supporting.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Meaningful Experiences</h3>
                    <p className="text-muted-foreground">
                      Beyond financial transparency, we create opportunities for genuine cultural exchange and
                      connection. Your travel experience will be enriched by knowing you're making a positive
                      difference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Commitments */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-[800px] mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Our Commitments</h2>
              <p className="text-lg text-muted-foreground mb-12">
                We're constantly working to improve our sustainability practices and make a positive impact through
                tourism. Here are some of our ongoing commitments:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
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
                      className="h-6 w-6 text-black"
                    >
                      <path d="M3 6v18h18V6"></path>
                      <path d="M3 6V3h18v3"></path>
                      <path d="M3 10h18"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Plastic Reduction</h3>
                  <p className="text-muted-foreground">
                    We aim to eliminate single-use plastics from all our tours by providing reusable alternatives and
                    working with suppliers who share this commitment.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
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
                      className="h-6 w-6 text-black"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    We provide resources and information to help travelers understand the environmental and cultural
                    context of the places they visit, promoting respectful and responsible behavior.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
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
                      className="h-6 w-6 text-black"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Carbon Offsetting</h3>
                  <p className="text-muted-foreground">
                    We're developing a carbon offsetting program to mitigate the environmental impact of travel,
                    investing in local renewable energy and reforestation projects.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
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
                      className="h-6 w-6 text-black"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Community Projects</h3>
                  <p className="text-muted-foreground">
                    We support local initiatives focused on education, healthcare, and environmental conservation,
                    creating opportunities for travelers to engage with these projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-primary text-black">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Travel With Purpose</h2>
              <p className="max-w-[700px] mb-8 text-gray-800">
                Experience the beauty of Sri Lanka while making a positive impact. Contact us to learn more about our
                responsible tourism initiatives and start planning your journey.
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
