"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function Logo() {
  const { t } = useLanguage()

  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative h-10 w-10 overflow-hidden">
        <Image
          src="/images/yasmin-logo.png"
          alt="Yasmin Gold Company Logo"
          width={40}
          height={40}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight">Yasmin</span>
        <span className="text-xs text-muted-foreground">{t("phuket-real-estate")}</span>
      </div>
    </Link>
  )
}
