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
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function MainNav({ isTransparent = false }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="absolute top-0 left-0 right-0 z-[100] w-full">
      <div
        className={`w-full transition-colors duration-300 ${isTransparent ? "bg-transparent" : "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"}`}
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

          <nav className="hidden md:flex gap-8 items-center">
            <Link
              href="/what-we-do"
              className={`text-sm font-medium hover:opacity-80 ${isTransparent ? "text-white" : ""}`}
            >
              What We Do
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`text-sm font-medium cursor-default ${isTransparent ? "text-white" : ""}`} onClick={(e) => e.preventDefault()}>
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
                  <NavigationMenuTrigger className={`text-sm font-medium cursor-default ${isTransparent ? "text-white" : ""}`} onClick={(e) => e.preventDefault()}>
                    Tours
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 rounded-md shadow-lg">
                      <li>
                        <Link
                          href="/tours/waves-to-peaks"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">From Waves to Peaks</div>
                          <p className="text-sm text-muted-foreground mt-1">7 nights/8 days</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/tours/mindful-sri-lanka"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Mindful Sri Lanka</div>
                          <p className="text-sm text-muted-foreground mt-1">9 nights/10 days</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/tours/paths-less-traveled"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Paths Less Traveled</div>
                          <p className="text-sm text-muted-foreground mt-1">12 nights/13 days</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/tours/echoes-of-ramayana"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Echoes of the Ramayana</div>
                          <p className="text-sm text-muted-foreground mt-1">8 nights/9 days</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/tours/northern-wonders"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Northern Wonders and Heritage</div>
                          <p className="text-sm text-muted-foreground mt-1">7 nights/8 days</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/tours/sri-lanka-classics"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Sri Lanka Classics</div>
                          <p className="text-sm text-muted-foreground mt-1">6 nights/7 days</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="/why-sri-lanka"
              className={`text-sm font-medium hover:opacity-80 ${isTransparent ? "text-white" : ""}`}
            >
              Why Sri Lanka
            </Link>
            <Link
              href="/responsible-tourism"
              className={`text-sm font-medium hover:opacity-80 ${isTransparent ? "text-white" : ""}`}
            >
              Responsible tourism
            </Link>
            <Link
              href="/contact-us"
              className={`text-sm font-medium hover:opacity-80 ${isTransparent ? "text-white" : ""}`}
            >
              Contact us
            </Link>
          </nav>
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
                  <Link href="/what-we-do" className="text-sm font-medium transition-colors hover:text-primary">
                    What We Do
                  </Link>
                  <div>
                    <div className="text-sm font-medium mb-2">How It Started</div>
                    <div className="grid gap-2 pl-4">
                      <Link href="/what-we-do/how-it-started" className="text-sm font-medium transition-colors hover:text-primary">
                        Our Story
                      </Link>
                      <Link href="/what-we-do/meet-the-team" className="text-sm font-medium transition-colors hover:text-primary">
                        Meet the Team
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">Tours</div>
                    <div className="grid gap-2 pl-4">
                      <Link href="/tours/waves-to-peaks" className="text-sm font-medium transition-colors hover:text-primary">
                        From Waves to Peaks
                        <span className="text-sm text-muted-foreground block">7 nights/8 days</span>
                      </Link>
                      <Link href="/tours/mindful-sri-lanka" className="text-sm font-medium transition-colors hover:text-primary">
                        Mindful Sri Lanka
                        <span className="text-sm text-muted-foreground block">9 nights/10 days</span>
                      </Link>
                      <Link href="/tours/paths-less-traveled" className="text-sm font-medium transition-colors hover:text-primary">
                        Paths Less Traveled
                        <span className="text-sm text-muted-foreground block">12 nights/13 days</span>
                      </Link>
                      <Link href="/tours/echoes-of-ramayana" className="text-sm font-medium transition-colors hover:text-primary">
                        Echoes of the Ramayana
                        <span className="text-sm text-muted-foreground block">8 nights/9 days</span>
                      </Link>
                      <Link href="/tours/northern-wonders" className="text-sm font-medium transition-colors hover:text-primary">
                        Northern Wonders and Heritage
                        <span className="text-sm text-muted-foreground block">7 nights/8 days</span>
                      </Link>
                      <Link href="/tours/sri-lanka-classics" className="text-sm font-medium transition-colors hover:text-primary">
                        Sri Lanka Classics
                        <span className="text-sm text-muted-foreground block">6 nights/7 days</span>
                      </Link>
                    </div>
                  </div>
                  <Link href="/why-sri-lanka" className="text-sm font-medium transition-colors hover:text-primary">
                    Why Sri Lanka
                  </Link>
                  <Link
                    href="/responsible-tourism"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Responsible tourism
                  </Link>
                  <Link href="/contact-us" className="text-sm font-medium transition-colors hover:text-primary">
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
