"use client"
import React from "react"
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
          <Link href="/" className={`text-3xl font-bold tracking-wider ${isTransparent ? "text-white" : ""}`}>
            RONDÈ
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
