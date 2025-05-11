"use client"
import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

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
          <nav className="hidden md:flex gap-8">
            {/* <Link href="/tours" className={`text-sm font-medium hover:opacity-80 ${isTransparent ? "text-white" : ""}`}>
              Tours
            </Link> */}
            <Link
              href="/what-we-do"
              className={`text-sm font-medium hover:opacity-80 ${isTransparent ? "text-white" : ""}`}
            >
              Services
            </Link>
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
            <Link href="/blog" className={`text-sm font-medium hover:opacity-80 ${isTransparent ? "text-white" : ""}`}>
              Blog
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
                  <Link href="/tours" className="text-sm font-medium transition-colors hover:text-primary">
                    Tours
                  </Link>
                  <Link href="/what-we-do" className="text-sm font-medium transition-colors hover:text-primary">
                    Services
                  </Link>
                  <Link href="/why-sri-lanka" className="text-sm font-medium transition-colors hover:text-primary">
                    Why Sri Lanka
                  </Link>
                  <Link
                    href="/responsible-tourism"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Responsible tourism
                  </Link>
                  <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
                    Blog
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
