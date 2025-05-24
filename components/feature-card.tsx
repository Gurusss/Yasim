"use client"
import { useLanguage } from "@/contexts/language-context"
import { Shield, Globe, FileCheck, TrendingUp, type LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const { t } = useLanguage()
  const IconComponent = getIconComponent(icon)

  return (
    <Card className="border-none shadow-sm">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <IconComponent className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function getIconComponent(iconName: string): LucideIcon {
  switch (iconName) {
    case "Shield":
      return Shield
    case "Globe":
      return Globe
    case "FileCheck":
      return FileCheck
    case "TrendingUp":
      return TrendingUp
    default:
      return Shield
  }
}
