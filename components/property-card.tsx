"use client"
import Image from "next/image"
import Link from "next/link"
import { Bath, BedDouble, Heart, MapPin, Maximize } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

interface PropertyCardProps {
  title: string
  location: string
  price: string
  beds: number
  baths: number
  area: string
  type: string
  imageUrl: string
  id?: string | number
}

export default function PropertyCard({ title, location, price, beds, baths, area, type, imageUrl, id = 1 }: PropertyCardProps) {
  const { t } = useLanguage()
  return (
    <Card className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
      <div className="relative">
        <div className="absolute right-3 top-3 z-10">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm">
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to favorites</span>
          </Button>
        </div>
        <div className="absolute left-3 top-3 z-10">
          <span className="inline-block rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
            {type}
          </span>
        </div>
        <Link href={`/properties/property-detail?id=${id}`}>
          <div className="relative h-60 overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </Link>
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold">{title}</h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-3.5 w-3.5" />
                {location}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Price</div>
              <div className="font-bold text-primary">{price}</div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t pt-2">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm">
                <BedDouble className="mr-1 h-4 w-4 text-muted-foreground" />
                <span>
                  {beds} {t("beds")}
                </span>
              </div>
              <div className="flex items-center text-sm">
                <Bath className="mr-1 h-4 w-4 text-muted-foreground" />
                <span>
                  {baths} {t("baths")}
                </span>
              </div>
              <div className="flex items-center text-sm">
                <Maximize className="mr-1 h-4 w-4 text-muted-foreground" />
                <span>{area}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
