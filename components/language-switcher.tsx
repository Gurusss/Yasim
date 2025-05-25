"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  const handleLanguageChange = (newLanguage: "en" | "ru") => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
    window.location.reload() // Перезагружаем страницу для применения изменений
  }

  return (
    <div className="flex items-center space-x-1 border rounded-md overflow-hidden">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        className="h-8 px-3 rounded-none"
        onClick={() => handleLanguageChange("en")}
      >
        EN
      </Button>
      <Button
        variant={language === "ru" ? "default" : "ghost"}
        size="sm"
        className="h-8 px-3 rounded-none"
        onClick={() => handleLanguageChange("ru")}
      >
        RU
      </Button>
    </div>
  )
}
