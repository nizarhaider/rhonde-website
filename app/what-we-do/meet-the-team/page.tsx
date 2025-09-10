import React from "react"
import Image from "next/image"

export default function MeetTheTeamPage() {
  return (
    <div className="container py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Meet the Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Add team member cards here */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
            <Image
              src="/placeholder-user.jpg"
              alt="Team Member"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold">Team Member Name</h3>
          <p className="text-muted-foreground">Position</p>
        </div>
      </div>
    </div>
  )
}
