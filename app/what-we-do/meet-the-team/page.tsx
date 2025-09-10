import React from "react"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function MeetTheTeamPage() {
  const team = [
    {
      name: "Tharu",
      position: "Founder & Journey Architect",
      image: "/images/tharupama.jpeg",
      intro: "Since a teen, Tharu had spent years travelling and shaping journeys across Sri Lanka as a travel designer and National Tourist Guide, leading many groups through the island's hidden corners and celebrated wonders.",
      story: "Today, she proudly guides and empowers a team of talented young women, all united by a passion for creating meaningful, responsible travel experiences.",
      vision: "Through every journey, Tharu invites you to see Sri Lanka through her eyes—authentic, adventurous, and unlike anywhere else in the world.",
    },
    {
      name: "Oshi",
      position: "Wellness Mentor",
      image: "/images/oshi.jpg",
      intro: "Oshi first began her career in the corporate world before following a calling that led her to the heart of holistic living.",
      story: "Starting as a self-taught yogi and later training in the birthplace of Yoga amidst the Himalayas, she is now a Yoga Alliance-certified practitioner and certified in Sound Healing and Therapy. She shares her practice through yoga and sound baths, bringing depth and balance to every experience.",
      vision: "On our tours, Oshi personally guides guests on a mindful journey through Sri Lanka, blending wellness, adventure, and authentic local experiences. Her presence turns each day into an opportunity to reconnect, restore, and explore the island with intention and curiosity.",
    },
    {
      name: "Isora",
      position: "Culture Curator",
      image: "/images/isora.jpg",
      intro: "A lover of all art forms, a practicing artist, and a historian with a passion for stories that bring Sri Lanka to life, Isora brings life and depth in to the silent details that you may forget to see at once.",
      story: "She shapes the journey behind the scenes, weaving together every detail and keeping the team connected. From speaking with travelers to sharing the rich history of each destination, she makes every experience seamless and meaningful.",
      vision: "With her guiding the narrative, exploring Sri Lanka becomes a journey of discovery, curiosity, and connection.",
    },
  ]

  return (
    <div className="relative flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <div className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-4xl font-bold mb-12 text-center">Meet Our Team</h1>
            <div className="grid grid-cols-1 gap-12">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row"
                >
                  <div className="md:w-1/3 relative">
                    <div className="relative h-full md:absolute inset-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="p-8 md:w-2/3 space-y-6">
                    <div>
                      <h3 className="text-3xl font-semibold mb-2">{member.name}</h3>
                      <p className="text-gray-500 font-medium text-lg">{member.position}</p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{member.intro}</p>
                      <p className="text-muted-foreground leading-relaxed">{member.story}</p>
                      <p className="text-muted-foreground leading-relaxed italic">{member.vision}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
