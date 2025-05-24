"use client"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  location: string
  imageUrl: string
}

export default function TestimonialCard({ quote, author, location, imageUrl }: TestimonialCardProps) {
  const { t } = useLanguage()

  return (
    <Card className="overflow-hidden border-none shadow-md">
      <CardContent className="p-6">
        <div className="space-y-4">
          <Quote className="h-8 w-8 text-primary/20" />
          <p className="text-muted-foreground">{quote}</p>
          <div className="flex items-center space-x-3 pt-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image src={imageUrl || "/placeholder.svg"} alt={author} fill className="object-cover" />
            </div>
            <div>
              <div className="font-medium">{author}</div>
              <div className="text-sm text-muted-foreground">{location}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
