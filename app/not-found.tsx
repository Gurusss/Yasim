"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  const { t } = useLanguage()
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">{t("page-not-found")}</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        {t("page-not-found-message")}
      </p>
      <Button asChild>
        <Link href="/">{t("back-to-home-404")}</Link>
      </Button>
    </div>
  )
}
