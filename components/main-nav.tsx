"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function MainNav({ isTransparent = false }) {
  const [open, setOpen] = React.useState(false)

  const underlineClass =
    "relative after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"

  const tours = [
    { name: "From Waves to Peaks", href: "/tours/waves-to-peaks", duration: "7 nights/8 days" },
    { name: "Mindful Sri Lanka", href: "/tours/mindful-sri-lanka", duration: "9 nights/10 days" },
    { name: "Paths Less Traveled", href: "/tours/paths-less-traveled", duration: "12 nights/13 days" },
    { name: "Echoes of the Ramayana", href: "/tours/echoes-of-ramayana", duration: "8 nights/9 days" },
    { name: "Northern Wonders and Heritage", href: "/tours/northern-wonders", duration: "7 nights/8 days" },
    { name: "Sri Lanka Classics", href: "/tours/sri-lanka-classics", duration: "6 nights/7 days" },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] w-full">
      <div
        className={`w-full transition-colors duration-300 ${
          isTransparent
            ? "bg-transparent"
            : "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={isTransparent ? "/images/logo_white.png" : "/images/logo_black.png"}
              alt="RONDE Logo"
              width={150}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link
              href="/what-we-do"
              className={`${underlineClass} ${isTransparent ? "text-white" : ""} text-sm font-medium`}
            >
              What We Do
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`${underlineClass} ${isTransparent ? "text-white" : ""} text-sm font-medium cursor-default`}
                    onClick={(e) => e.preventDefault()}
                  >
                    How It Started
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[300px] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 rounded-md shadow-lg">
                      <li>
                        <Link
                          href="/what-we-do/how-it-started"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Our Story</div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/what-we-do/meet-the-team"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Meet the Team</div>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`${underlineClass} ${isTransparent ? "text-white" : ""} text-sm font-medium cursor-default`}
                    onClick={(e) => e.preventDefault()}
                  >
                    Tours
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 rounded-md shadow-lg">
                      {tours.map((tour) => (
                        <li key={tour.href}>
                          <Link
                            href={tour.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{tour.name}</div>
                            <p className="text-sm text-muted-foreground mt-1">{tour.duration}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/why-sri-lanka"
              className={`${underlineClass} ${isTransparent ? "text-white" : ""} text-sm font-medium`}
            >
              Why Sri Lanka
            </Link>
            <Link
              href="/responsible-tourism"
              className={`${underlineClass} ${isTransparent ? "text-white" : ""} text-sm font-medium`}
            >
              Responsible tourism
            </Link>
            <Link
              href="/contact-us"
              className={`${underlineClass} ${isTransparent ? "text-white" : ""} text-sm font-medium`}
            >
              Contact us
            </Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={`md:hidden ${isTransparent ? "text-black border-white" : ""} ${open ? "hidden" : ""}`}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 py-6">
                <Link href="/" className="text-2xl font-bold tracking-wider">
                  RONDÈ
                </Link>
                <div className="grid gap-4">
                  <Link href="/what-we-do" className={`${underlineClass} text-sm font-medium`}>
                    What We Do
                  </Link>
                  <div>
                    <div className="text-sm font-medium mb-2">How It Started</div>
                    <div className="grid gap-2 pl-4">
                      <Link href="/what-we-do/how-it-started" className={`${underlineClass} text-sm font-medium`}>
                        Our Story
                      </Link>
                      <Link href="/what-we-do/meet-the-team" className={`${underlineClass} text-sm font-medium`}>
                        Meet the Team
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">Tours</div>
                    <div className="grid gap-2 pl-4">
                      {tours.map((tour) => (
                        <Link
                          key={tour.href}
                          href={tour.href}
                          className={`${underlineClass} text-sm font-medium`}
                        >
                          {tour.name}
                          <span className="text-sm text-muted-foreground block">{tour.duration}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link href="/why-sri-lanka" className={`${underlineClass} text-sm font-medium`}>
                    Why Sri Lanka
                  </Link>
                  <Link href="/responsible-tourism" className={`${underlineClass} text-sm font-medium`}>
                    Responsible tourism
                  </Link>
                  <Link href="/contact-us" className={`${underlineClass} text-sm font-medium`}>
                    Contact us
                  </Link>
                </div>
                <Button asChild>
                  <Link href="/contact-us">Get started</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}
