import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function Gallery() {
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
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Sri Lanka Gallery</h1>
            <p className="mt-6 max-w-[600px] text-lg md:text-xl">
              Explore the breathtaking beauty of Sri Lanka through our photo collection
            </p>
          </div>
        </section>

        {/* Gallery Categories */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="#landscapes">Landscapes</Link>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="#wildlife">Wildlife</Link>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="#culture">Culture</Link>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="#cuisine">Cuisine</Link>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="#accommodations">Accommodations</Link>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="#activities">Activities</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Landscapes Gallery */}
        <section id="landscapes" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">Landscapes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/golden-sunset.png"
                  alt="Sri Lanka Landscape"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/tea-plantations.png"
                  alt="Tea Plantations"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/green-valley.png"
                  alt="Rice Fields"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/tea-hills.png"
                  alt="Rice Terraces"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/lake-view.png"
                  alt="Lake View"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/mountain-valley.png"
                  alt="Misty Lake"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Wildlife Gallery */}
        <section id="wildlife" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">Wildlife</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/mountain-road.png"
                  alt="Wildlife Safari"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/coastal-aerial.png"
                  alt="Coastal Wildlife"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/ocean-waves.png"
                  alt="Ocean Wildlife"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Culture Gallery */}
        <section id="culture" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/buddha-statues.png"
                  alt="Buddha Statues"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/temple-interior.png"
                  alt="Temple Interior"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cuisine Gallery */}
        <section id="cuisine" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">Cuisine</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cape-Weligama-Food05265-1819-x-2734-scaled.jpg-DWYnx2Bipr1EmimXplMoGuJXYOhwFv.png"
                  alt="Sri Lankan Cuisine"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5854-2917-x-2917-scaled.jpg-FGu9V3Qdh4EJeNz1MuWuWC8cYTqHfZ.jpeg"
                  alt="Elegant Sri Lankan Dish"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Accommodations Gallery */}
        <section id="accommodations" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">Accommodations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/mountain-road.png"
                  alt="Luxury Accommodation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Activities Gallery */}
        <section id="activities" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/train-journey.png"
                  alt="Train Journey"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/ocean-waves.png"
                  alt="Surfing"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Ready to Experience Sri Lanka in Person?
              </h2>
              <p className="max-w-[700px] mb-8 text-primary-foreground/90">
                Let us help you plan the perfect journey to capture your own memories of this beautiful island.
              </p>
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
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
