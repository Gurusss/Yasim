"use client"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Calendar, ChevronDown, Filter, Mail, Phone, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import ProfileForm from "@/components/profile-form"
import Logo from "@/components/logo"
import Footer from "@/components/footer"

export default function NewDevelopmentsPage() {
  const { t, language } = useLanguage()
  const [selectedPropertyType, setSelectedPropertyType] = useState<string[]>([])
  const [selectedLocation, setSelectedLocation] = useState<string[]>([])
  const [selectedPrice, setSelectedPrice] = useState<string>("")
  const [selectedBedrooms, setSelectedBedrooms] = useState<string>("")
  const [selectedCompletion, setSelectedCompletion] = useState<string>("")
  const [sortOption, setSortOption] = useState("featured")
  const [activeTab, setActiveTab] = useState("all")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Состояния для работы фильтров как на странице "Объекты"
  const [selectedType, setSelectedType] = useState<string[]>([])
  const [selectedArea, setSelectedArea] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [minBeds, setMinBeds] = useState<string>("")
  const [minBaths, setMinBaths] = useState<string>("")
  const [selectedDealType, setSelectedDealType] = useState<string[]>([])
  const [expandedSections, setExpandedSections] = useState({
    propertyType: true,
    dealType: true,
    priceRange: true,
    bedrooms: true,
    bathrooms: true,
    area: true,
    features: true
  })

  // Toggle property type selection
  const togglePropertyType = (type: string) => {
    setSelectedPropertyType((prev) => (prev.includes(type) ? prev.filter((item) => item !== type) : [...prev, type]))
  }

  // Toggle location selection
  const toggleLocation = (location: string) => {
    setSelectedLocation((prev) =>
      prev.includes(location) ? prev.filter((item) => item !== location) : [...prev, location],
    )
  }

  // Reset all filters
  const resetFilters = () => {
    setSelectedPropertyType([])
    setSelectedLocation([])
    setSelectedPrice("")
    setSelectedBedrooms("")
    setSelectedCompletion("")
    setSelectedType([])
    setSelectedArea([])
    setSelectedFeatures([])
    setMinBeds("")
    setMinBaths("")
    setSelectedDealType([])
  }
  
  // Функции для работы с фильтрами как на странице "Объекты"
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }
  
  const handleTypeChange = (type: string) => {
    setSelectedType(prev => 
      prev.includes(type) ? prev.filter(item => item !== type) : [...prev, type]
    )
  }
  
  const handleAreaChange = (area: string) => {
    setSelectedArea(prev => 
      prev.includes(area) ? prev.filter(item => item !== area) : [...prev, area]
    )
  }
  
  const handleFeatureChange = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) ? prev.filter(item => item !== feature) : [...prev, feature]
    )
  }
  
  const handleBedroomChange = (beds: string) => {
    setMinBeds(beds)
  }
  
  const handleBathroomChange = (baths: string) => {
    setMinBaths(baths)
  }
  
  const handleDealTypeChange = (dealType: string) => {
    setSelectedDealType(prev => 
      prev.includes(dealType) ? prev.filter(item => item !== dealType) : [...prev, dealType]
    )
  }

  // Properties data
  const properties = [
    {
      id: 1,
      title: t("bright-phuket-title"),
      location: t("bright-phuket-location"),
      type: "apartment",
      price: 240822,
      pricePerSqm: 3885,
      bedrooms: 1,
      totalUnits: 34,
      unitSize: 62,
      completionDate: "2024",
      description: t("bright-phuket-description"),
      features: t("bright-phuket-features"),
      completionStatus: t("bright-phuket-completion"),
      paymentPlan: t("bright-phuket-payment"),
      investmentPotential: t("bright-phuket-investment"),
      imageUrl: "/images/new-development.jpeg",
    },
    {
      id: 2,
      title: "Vista Del Mar Villas",
      location: "Ката Ной, Пхукет, Таиланд",
      type: "Villa",
      price: 1130000,
      pricePerSqm: 3767,
      bedrooms: 4,
      totalUnits: 12,
      unitSize: 300,
      completionDate: "2024",
      description: "Роскошные виллы с панорамным видом на море в престижном районе Ката Ной. Эксклюзивный проект всего из 12 вилл, выполненных в современном стиле с использованием высококачественных материалов и передовых технологий.",
      features: "Частный бассейн, панорамные окна, современная кухня, просторные террасы, ландшафтный дизайн, умный дом, система безопасности 24/7",
      completionStatus: "Строительство завершается в 2024 году",
      paymentPlan: "Гибкий план оплаты с возможностью рассрочки",
      investmentPotential: "Высокий доход от аренды + рост капитала",
      imageUrl: "/images/new-development.jpeg",
    },
    {
      id: 3,
      title: t("title-serenity-title"),
      location: t("title-serenity-location"),
      type: "condo",
      price: 350000,
      pricePerSqm: 3500,
      bedrooms: 2,
      totalUnits: 814,
      unitSize: 100,
      completionDate: "2025",
      description: t("title-serenity-description"),
      features: t("title-serenity-features"),
      completionStatus: t("title-serenity-completion"),
      paymentPlan: t("title-serenity-payment"),
      investmentPotential: t("title-serenity-investment"),
      imageUrl: "/images/title-serenity.jpeg",
    },
  ]

  // Filter properties based on selected filters
  const filteredProperties = properties.filter((property) => {
    // Filter by property type
    if (selectedPropertyType.length > 0 && !selectedPropertyType.includes(property.type)) {
      return false
    }

    // Filter by location
    if (selectedLocation.length > 0 && !selectedLocation.includes(property.location)) {
      return false
    }

    // Filter by price
    if (selectedPrice) {
      switch (selectedPrice) {
        case "up-to-300k":
          if (property.price > 300000) return false
          break
        case "300k-500k":
          if (property.price < 300000 || property.price > 500000) return false
          break
        case "500k-1m":
          if (property.price < 500000 || property.price > 1000000) return false
          break
        case "above-1m":
          if (property.price < 1000000) return false
          break
      }
    }

    // Filter by bedrooms
    if (selectedBedrooms) {
      switch (selectedBedrooms) {
        case "1-bedroom":
          if (property.bedrooms !== 1) return false
          break
        case "2-bedrooms":
          if (property.bedrooms !== 2) return false
          break
        case "3-bedrooms":
          if (property.bedrooms !== 3) return false
          break
        case "4-bedrooms":
          if (property.bedrooms < 4) return false
          break
      }
    }

    // Filter by completion date
    if (selectedCompletion) {
      switch (selectedCompletion) {
        case "ready-to-move":
          if (property.completionDate !== "Ready") return false
          break
        case "2024-completion":
          if (property.completionDate !== "2024") return false
          break
        case "2025-completion":
          if (property.completionDate !== "2025") return false
          break
        case "2026-completion":
          if (property.completionDate !== "2026" && property.completionDate !== "2026+") return false
          break
      }
    }

    // Filter by tab
    if (activeTab !== "all") {
      if (activeTab === "apartment" && property.type !== "apartment") return false
      if (activeTab === "villa" && property.type !== "villa") return false
      if (activeTab === "condo" && property.type !== "condo") return false
    }

    return true
  })

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "newest":
        return b.id - a.id
      default:
        return 0 // featured
    }
  })

  // Format price with commas
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {t("home")}
            </Link>
            <Link
              href="/properties"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t("properties")}
            </Link>
            <Link href="/new-developments" className="text-sm font-medium transition-colors hover:text-primary">
              {t("new-developments")}
            </Link>
            <Link
              href="/investments"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t("investments")}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t("about")}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t("contact")}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ProfileForm />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 w-full bg-white border-b z-40">
            <nav className="flex flex-col gap-4 container py-4">
              <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2">
                {t("home")}
              </Link>
              <Link
                href="/properties"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2"
              >
                {t("properties")}
              </Link>
              <Link href="/new-developments" className="text-sm font-medium transition-colors hover:text-primary text-left pl-2">
                {t("new-developments")}
              </Link>
              <Link
                href="/investments"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2"
              >
                {t("investments")}
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2"
              >
                {t("about")}
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2"
              >
                {t("contact")}
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t("new-developments-title")}</h1>
              <p className="text-lg text-white/80 mb-8">{t("new-developments-subtitle")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  {t("schedule-viewing")}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-primary-foreground bg-primary hover:bg-primary/80"
                >
                  {t("download-brochure")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filter and Properties Section */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="font-medium">{t("filters")}</h3>
                      <Button variant="ghost" size="sm" className="h-auto p-0 text-sm font-medium" onClick={resetFilters}>
                        {t("reset")}
                      </Button>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div 
                          className="flex items-center justify-between cursor-pointer" 
                          onClick={() => toggleSection('propertyType')}
                        >
                          <label className="text-sm font-medium">{t("property-type")}</label>
                          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${expandedSections.propertyType ? '' : 'transform rotate-180'}`} />
                        </div>
                        <div className={`space-y-1 ${expandedSections.propertyType ? '' : 'hidden'}`}>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="type-apartment"
                              className="h-4 w-4 rounded border-gray-300"
                              checked={selectedType.includes("Apartment")}
                              onChange={() => handleTypeChange("Apartment")}
                            />
                            <label htmlFor="type-apartment" className="text-sm">
                              {t("apartment")}
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="type-villa"
                              className="h-4 w-4 rounded border-gray-300"
                              checked={selectedType.includes("Villa")}
                              onChange={() => handleTypeChange("Villa")}
                            />
                            <label htmlFor="type-villa" className="text-sm">
                              {t("villa")}
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="type-penthouse"
                              className="h-4 w-4 rounded border-gray-300"
                              checked={selectedType.includes("Penthouse")}
                              onChange={() => handleTypeChange("Penthouse")}
                            />
                            <label htmlFor="type-penthouse" className="text-sm">
                              {t("penthouse")}
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="type-land"
                              className="h-4 w-4 rounded border-gray-300"
                              checked={selectedType.includes("Land")}
                              onChange={() => handleTypeChange("Land")}
                            />
                            <label htmlFor="type-land" className="text-sm">
                              {t("land")}
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div 
                          className="flex items-center justify-between cursor-pointer" 
                          onClick={() => toggleSection('dealType')}
                        >
                          <label className="text-sm font-medium">{t("deal-type")}</label>
                          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${expandedSections.dealType ? '' : 'transform rotate-180'}`} />
                        </div>
                        <div className={`space-y-1 ${expandedSections.dealType ? '' : 'hidden'}`}>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="deal-buy"
                              className="h-4 w-4 rounded border-gray-300"
                              checked={selectedDealType.includes("buy")}
                              onChange={() => handleDealTypeChange("buy")}
                            />
                            <label htmlFor="deal-buy" className="text-sm">
                              {t("buy")}
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="deal-rent"
                              className="h-4 w-4 rounded border-gray-300"
                              checked={selectedDealType.includes("rent")}
                              onChange={() => handleDealTypeChange("rent")}
                            />
                            <label htmlFor="deal-rent" className="text-sm">
                              {t("rent")}
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="deal-invest"
                              className="h-4 w-4 rounded border-gray-300"
                              checked={selectedDealType.includes("invest")}
                              onChange={() => handleDealTypeChange("invest")}
                            />
                            <label htmlFor="deal-invest" className="text-sm">
                              {t("invest")}
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Area Filter */}
                      <div className="space-y-2">
                        <div 
                          className="flex items-center justify-between cursor-pointer" 
                          onClick={() => toggleSection('area')}
                        >
                          <label className="text-sm font-medium">{t("area")}</label>
                          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${expandedSections.area ? '' : 'transform rotate-180'}`} />
                        </div>
                        <div className={`space-y-1 ${expandedSections.area ? '' : 'hidden'}`}>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="area-bang-tao"
                              className="h-4 w-4 rounded border-gray-300"
                              checked={selectedArea.includes("bang-tao")}
                              onChange={() => handleAreaChange("bang-tao")}
                            />
                            <label htmlFor="area-bang-tao" className="text-sm">
                              Bang Tao
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="area-kata"
                              className="h-4 w-4 rounded border-gray-300"
                              checked={selectedArea.includes("kata")}
                              onChange={() => handleAreaChange("kata")}
                            />
                            <label htmlFor="area-kata" className="text-sm">
                              Kata
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="area-kamala"
                              className="h-4 w-4 rounded border-gray-300"
                              checked={selectedArea.includes("kamala")}
                              onChange={() => handleAreaChange("kamala")}
                            />
                            <label htmlFor="area-kamala" className="text-sm">
                              Kamala
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="area-nai-harn"
                              className="h-4 w-4 rounded border-gray-300"
                              checked={selectedArea.includes("nai-harn")}
                              onChange={() => handleAreaChange("nai-harn")}
                            />
                            <label htmlFor="area-nai-harn" className="text-sm">
                              Nai Harn
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="area-patong"
                              className="h-4 w-4 rounded border-gray-300"
                              checked={selectedArea.includes("patong")}
                              onChange={() => handleAreaChange("patong")}
                            />
                            <label htmlFor="area-patong" className="text-sm">
                              Patong
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div 
                          className="flex items-center justify-between cursor-pointer" 
                          onClick={() => toggleSection('priceRange')}
                        >
                          <label className="text-sm font-medium">{t("price-range")}</label>
                          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${expandedSections.priceRange ? '' : 'transform rotate-180'}`} />
                        </div>
                        <div className={`grid grid-cols-2 gap-2 ${expandedSections.priceRange ? '' : 'hidden'}`}>
                          <div>
                            <Input placeholder={t("min")} type="number" className="text-sm" />
                          </div>
                          <div>
                            <Input placeholder={t("max")} type="number" className="text-sm" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div 
                          className="flex items-center justify-between cursor-pointer" 
                          onClick={() => toggleSection('bedrooms')}
                        >
                          <label className="text-sm font-medium">{t("bedrooms")}</label>
                          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${expandedSections.bedrooms ? '' : 'transform rotate-180'}`} />
                        </div>
                        <div className={`flex flex-wrap gap-2 ${expandedSections.bedrooms ? '' : 'hidden'}`}>
                          <Button
                            variant={minBeds === "" ? "default" : "outline"}
                            size="sm"
                            className="h-8 rounded-full"
                            onClick={() => handleBedroomChange("")}
                          >
                            {t("any")}
                          </Button>
                          <Button
                            variant={minBeds === "1" ? "default" : "outline"}
                            size="sm"
                            className="h-8 rounded-full"
                            onClick={() => handleBedroomChange("1")}
                          >
                            1+
                          </Button>
                          <Button
                            variant={minBeds === "2" ? "default" : "outline"}
                            size="sm"
                            className="h-8 rounded-full"
                            onClick={() => handleBedroomChange("2")}
                          >
                            2+
                          </Button>
                          <Button
                            variant={minBeds === "3" ? "default" : "outline"}
                            size="sm"
                            className="h-8 rounded-full"
                            onClick={() => handleBedroomChange("3")}
                          >
                            3+
                          </Button>
                          <Button
                            variant={minBeds === "4" ? "default" : "outline"}
                            size="sm"
                            className="h-8 rounded-full"
                            onClick={() => handleBedroomChange("4")}
                          >
                            4+
                          </Button>
                          <Button
                            variant={minBeds === "5" ? "default" : "outline"}
                            size="sm"
                            className="h-8 rounded-full"
                            onClick={() => handleBedroomChange("5")}
                          >
                            5+
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div 
                          className="flex items-center justify-between cursor-pointer" 
                          onClick={() => toggleSection('bathrooms')}
                        >
                          <label className="text-sm font-medium">{t("bathrooms")}</label>
                          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${expandedSections.bathrooms ? '' : 'transform rotate-180'}`} />
                        </div>
                        <div className={`flex flex-wrap gap-2 ${expandedSections.bathrooms ? '' : 'hidden'}`}>
                          <Button
                            variant={minBaths === "" ? "default" : "outline"}
                            size="sm"
                            className="h-8 rounded-full"
                            onClick={() => handleBathroomChange("")}
                          >
                            {t("any")}
                          </Button>
                          <Button
                            variant={minBaths === "1" ? "default" : "outline"}
                            size="sm"
                            className="h-8 rounded-full"
                            onClick={() => handleBathroomChange("1")}
                          >
                            1+
                          </Button>
                          <Button
                            variant={minBaths === "2" ? "default" : "outline"}
                            size="sm"
                            className="h-8 rounded-full"
                            onClick={() => handleBathroomChange("2")}
                          >
                            2+
                          </Button>
                          <Button
                            variant={minBaths === "3" ? "default" : "outline"}
                            size="sm"
                            className="h-8 rounded-full"
                            onClick={() => handleBathroomChange("3")}
                          >
                            3+
                          </Button>
                          <Button
                            variant={minBaths === "4" ? "default" : "outline"}
                            size="sm"
                            className="h-8 rounded-full"
                            onClick={() => handleBathroomChange("4")}
                          >
                            4+
                          </Button>
                        </div>
                      </div>

                      {/* Completion Date Filter */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium">{t("completion-date")}</label>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="completion-any"
                              name="completion-date"
                              className="h-4 w-4 rounded border-gray-300"
                              checked={selectedCompletion === ""}
                              onChange={() => setSelectedCompletion("")}
                            />
                            <label htmlFor="completion-any" className="text-sm">
                              {t("any-date")}
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="completion-ready"
                              name="completion-date"
                              className="h-4 w-4 rounded border-gray-300"
                              checked={selectedCompletion === "ready-to-move"}
                              onChange={() => setSelectedCompletion("ready-to-move")}
                            />
                            <label htmlFor="completion-ready" className="text-sm">
                              {t("ready-to-move")}
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="completion-2024"
                              name="completion-date"
                              className="h-4 w-4 rounded border-gray-300"
                              checked={selectedCompletion === "2024-completion"}
                              onChange={() => setSelectedCompletion("2024-completion")}
                            />
                            <label htmlFor="completion-2024" className="text-sm">
                              {t("2024-completion")}
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="completion-2025"
                              name="completion-date"
                              className="h-4 w-4 rounded border-gray-300"
                              checked={selectedCompletion === "2025-completion"}
                              onChange={() => setSelectedCompletion("2025-completion")}
                            />
                            <label htmlFor="completion-2025" className="text-sm">
                              {t("2025-completion")}
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="completion-2026"
                              name="completion-date"
                              className="h-4 w-4 rounded border-gray-300"
                              checked={selectedCompletion === "2026-completion"}
                              onChange={() => setSelectedCompletion("2026-completion")}
                            />
                            <label htmlFor="completion-2026" className="text-sm">
                              {t("2026-completion")}
                            </label>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full">
                        <Filter className="mr-2 h-4 w-4" />
                        {t("apply-filters")}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Properties List */}
              <div className="lg:col-span-3">
                <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder={t("search-properties")} className="pl-9" />
                  </div>
                  <div className="flex items-center gap-2">
                    <select
                      className="flex h-9 items-center rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                    >
                      <option value="featured">{t("sort-featured")}</option>
                      <option value="price-low">{t("sort-price-low")}</option>
                      <option value="price-high">{t("sort-price-high")}</option>
                      <option value="newest">{t("sort-newest")}</option>
                    </select>
                  </div>
                </div>

                <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="apartment">{t("apartment")}</TabsTrigger>
                    <TabsTrigger value="villa">{t("villa")}</TabsTrigger>
                    <TabsTrigger value="condo">{t("condo")}</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">
                    {t("found-properties")}: {sortedProperties.length}
                  </p>
                </div>

                <div className="space-y-8">
                  {sortedProperties.map((property) => (
                    <Card
                      key={property.id}
                      className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="relative h-64 md:h-full">
                          <Image
                            src={property.imageUrl || "/placeholder.svg"}
                            alt={property.title}
                            fill
                            className="object-cover"
                          />
                          <Badge className="absolute top-4 left-4 bg-primary text-white">
                            {property.completionDate}
                          </Badge>
                        </div>
                        <div className="p-6 md:col-span-2">
                          {property.id === 1 ? (
                            <div className="flex flex-col h-full">
                              <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-xl font-bold">🏖️ Пляжные виллы</h3>
                                  <Badge variant="outline">{property.type}</Badge>
                                </div>
                                <p className="text-muted-foreground mb-4">Bang Tao, Laguna</p>
                                <p className="text-sm mb-4">Эксклюзивные виллы на первой линии с частными пляжами и максимальной доходностью от аренды</p>
                              </div>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div>
                                  <p className="text-sm text-muted-foreground">Стартовая сумма:</p>
                                  <p className="font-bold text-primary">от $600K</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Годовая доходность:</p>
                                  <p className="font-medium">12-15% годовых</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Окупаемость:</p>
                                  <p className="font-medium">5-7 лет</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Локации:</p>
                                  <p className="font-medium">Bang Tao, Laguna</p>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 gap-4 mb-6">
                                <div>
                                  <p className="text-sm text-muted-foreground">Эксклюзивные виллы на первой линии с частными пляжами и максимальной доходностью от аренды</p>
                                </div>
                              </div>
                              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                <Link href={`/properties/property-detail?id=${property.id}`} className="flex-1">
                                  <Button className="w-full">Подробнее</Button>
                                </Link>
                                <Button variant="secondary" className="flex-1">
                                  Запросить инфо
                                </Button>
                              </div>
                            </div>
                          ) : property.id === 2 ? (
                            <div className="flex flex-col h-full">
                              <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-xl font-bold">🏢 Кондоминиумы</h3>
                                  <Badge variant="outline">{property.type}</Badge>
                                </div>
                                <p className="text-muted-foreground mb-4">Patong, Kata, Karon</p>
                                <p className="text-sm mb-4">Современные апартаменты в престижных комплексах с развитой инфраструктурой и стабильным доходом</p>
                              </div>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div>
                                  <p className="text-sm text-muted-foreground">Стартовая сумма:</p>
                                  <p className="font-bold text-primary">от $150K</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Годовая доходность:</p>
                                  <p className="font-medium">10-12% годовых</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Окупаемость:</p>
                                  <p className="font-medium">4-5 лет</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Локации:</p>
                                  <p className="font-medium">Patong, Kata, Karon</p>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-1 gap-4 mb-6">
                                <div>
                                  <p className="text-sm text-muted-foreground">Современные апартаменты в престижных комплексах с развитой инфраструктурой и стабильным доходом</p>
                                </div>
                              </div>
                              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                <Link href={`/properties/property-detail?id=${property.id}`} className="flex-1">
                                  <Button className="w-full">Подробнее</Button>
                                </Link>
                                <Button variant="secondary" className="flex-1">
                                  Запросить инфо
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col h-full">
                              <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-xl font-bold">{property.title}</h3>
                                  <Badge variant="outline">{property.type}</Badge>
                                </div>
                                <p className="text-muted-foreground mb-4">{property.location}</p>
                                <p className="text-sm mb-4">{property.description}</p>
                              </div>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div>
                                  <p className="text-sm text-muted-foreground">{t("starting-price")}</p>
                                  <p className="font-bold text-primary">${formatPrice(property.price)}</p>
                                  <p className="text-xs text-muted-foreground">
                                    ${formatPrice(property.pricePerSqm)} {t("per-sqm")}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">{t("bedrooms")}</p>
                                  <p className="font-medium">{property.bedrooms}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">{t("total-units")}</p>
                                  <p className="font-medium">
                                    {property.totalUnits} {t("units")}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">{t("unit-sizes")}</p>
                                  <p className="font-medium">
                                    {property.unitSize} {t("sqm")}
                                  </p>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div>
                                  <p className="text-sm font-medium mb-1">{t("property-features")}</p>
                                  <p className="text-sm text-muted-foreground">{property.features}</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium mb-1">{t("investment-potential")}</p>
                                  <p className="text-sm text-muted-foreground">{property.investmentPotential}</p>
                                </div>
                              </div>
                              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                <Link href={`/properties/property-detail?id=${property.id}`} className="flex-1">
                                  <Button className="w-full">Подробнее</Button>
                                </Link>
                                <Button variant="secondary" className="flex-1">
                                  Запросить инфо
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}

                  {sortedProperties.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-lg text-muted-foreground">No properties match your search criteria.</p>
                      <Button variant="outline" className="mt-4" onClick={resetFilters}>
                        {t("reset-filters")}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Buy New Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("why-buy-new")}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("why-buy-new-subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" x2="9.01" y1="9" y2="9" />
                      <line x1="15" x2="15.01" y1="9" y2="9" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t("better-prices")}</h3>
                  <p className="text-sm text-muted-foreground">{t("better-prices-description")}</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t("customization")}</h3>
                  <p className="text-sm text-muted-foreground">{t("customization-description")}</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t("capital-appreciation")}</h3>
                  <p className="text-sm text-muted-foreground">{t("capital-appreciation-description")}</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" />
                      <path d="M19 17v4" />
                      <path d="M3 5h4" />
                      <path d="M17 19h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t("modern-features")}</h3>
                  <p className="text-sm text-muted-foreground">{t("modern-features-description")}</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t("payment-flexibility")}</h3>
                  <p className="text-sm text-muted-foreground">{t("payment-flexibility-description")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Buying Process Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("buying-process")}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("buying-process-subtitle")}</p>
            </div>

            <div className="relative">
              {/* Connection line */}
              <div className="absolute top-24 left-0 right-0 h-0.5 bg-primary/20 hidden lg:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                {[
                  {
                    step: 1,
                    title: t("step-1"),
                    description: t("step-1-description"),
                  },
                  {
                    step: 2,
                    title: t("step-2"),
                    description: t("step-2-description"),
                  },
                  {
                    step: 3,
                    title: t("step-3"),
                    description: t("step-3-description"),
                  },
                  {
                    step: 4,
                    title: t("step-4"),
                    description: t("step-4-description"),
                  },
                  {
                    step: 5,
                    title: t("step-5"),
                    description: t("step-5-description"),
                  },
                  {
                    step: 6,
                    title: t("step-6"),
                    description: t("step-6-description"),
                  },
                ].map((item) => (
                  <div key={item.step} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 z-10 text-lg font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ready-to-invest")}</h2>
                <p className="text-xl text-white/80">{t("ready-to-invest-subtitle")}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("whatsapp-telegram")}</h3>
                  <p className="text-white/80 mb-4">080 949 4041</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 mt-auto">
                    {t("write")}
                  </Button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("email")}</h3>
                  <p className="text-white/80 mb-4">Yasmin.gold.company@gmail.com</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 mt-auto">
                    {t("send-email")}
                  </Button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("schedule-viewing")}</h3>
                  <p className="text-white/80 mb-4">{t("consultation-hours")}</p>
                  <Button className="bg-white text-primary hover:bg-white/90 mt-auto">{t("contact-sales-team")}</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
