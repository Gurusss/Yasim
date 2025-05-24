"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="flex items-center space-x-1 border rounded-md overflow-hidden">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        className="h-8 px-3 rounded-none"
        onClick={() => setLanguage("en")}
      >
        EN
      </Button>
      <Button
        variant={language === "ru" ? "default" : "ghost"}
        size="sm"
        className="h-8 px-3 rounded-none"
        onClick={() => setLanguage("ru")}
      >
        RU
      </Button>
    </div>
  )
}
