"use client"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, ChevronDown, Filter, Grid3X3, LayoutList, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import PropertyCard from "@/components/property-card"
import ProfileForm from "@/components/profile-form"

// Property data
const allProperties = [
  {
    id: 1,
    title: "Строящийся комплекс Bang Tao Beach",
    location: "Bang Tao Beach",
    price: "от 4,553,000 бат",
    beds: 1,
    baths: 1,
    area: "29-148 sqm",
    type: "Apartment",
    imageUrl: "/images/Проект1/PHOTO-2025-05-24-22-48-36.jpg",
    features: ["swimming-pool", "garden", "sea-view", "security"],
    areaLocation: "bang-tao",
    dealType: "buy",
  },
  {
    id: 2,
    title: "Modern Sea View Apartment",
    location: "Kata Beach",
    price: "$450,000",
    beds: 2,
    baths: 2,
    area: "120 sqm",
    type: "Apartment",
    imageUrl: "/placeholder.svg?height=400&width=600",
    features: ["sea-view", "gym"],
    areaLocation: "kata",
    dealType: "buy",
  },
  {
    id: 3,
    title: "Tropical Pool Villa",
    location: "Nai Harn",
    price: "$780,000",
    beds: 3,
    baths: 3,
    area: "220 sqm",
    type: "Villa",
    imageUrl: "/placeholder.svg?height=400&width=600",
    features: ["swimming-pool", "garden", "security"],
    areaLocation: "nai-harn",
    dealType: "buy",
  },
  {
    id: 4,
    title: "Luxury Penthouse",
    location: "Patong",
    price: "$950,000",
    beds: 3,
    baths: 4,
    area: "280 sqm",
    type: "Penthouse",
    imageUrl: "/placeholder.svg?height=400&width=600",
    features: ["sea-view", "gym", "security"],
    areaLocation: "patong",
    dealType: "buy",
  },
  {
    id: 5,
    title: "Beachfront Condo",
    location: "Kamala Beach",
    price: "$320,000",
    beds: 1,
    baths: 1,
    area: "65 sqm",
    type: "Apartment",
    imageUrl: "/placeholder.svg?height=400&width=600",
    features: ["sea-view", "gym"],
    areaLocation: "kamala",
    dealType: "buy",
  },
  {
    id: 6,
    title: "Family Villa with Garden",
    location: "Chalong",
    price: "$650,000",
    beds: 4,
    baths: 3,
    area: "300 sqm",
    type: "Villa",
    imageUrl: "/placeholder.svg?height=400&width=600",
    features: ["swimming-pool", "garden"],
    areaLocation: "chalong",
    dealType: "buy",
  },
  {
    id: 7,
    title: "Modern Studio Apartment",
    location: "Phuket Town",
    price: "$120,000",
    beds: 1,
    baths: 1,
    area: "45 sqm",
    type: "Apartment",
    imageUrl: "/placeholder.svg?height=400&width=600",
    features: ["gym"],
    areaLocation: "phuket-town",
    dealType: "buy",
  },
  {
    id: 8,
    title: "Hillside Sea View Villa",
    location: "Cape Yamu",
    price: "$1,800,000",
    beds: 5,
    baths: 6,
    area: "450 sqm",
    type: "Villa",
    imageUrl: "/placeholder.svg?height=400&width=600",
    features: ["swimming-pool", "sea-view", "garden", "security"],
    areaLocation: "cape-yamu",
    dealType: "buy",
  },
  {
    id: 9,
    title: "Investment Apartment",
    location: "Rawai",
    price: "$230,000",
    beds: 2,
    baths: 2,
    area: "85 sqm",
    type: "Apartment",
    imageUrl: "/placeholder.svg?height=400&width=600",
    features: ["swimming-pool"],
    areaLocation: "rawai",
    dealType: "buy",
  },
  {
    id: 10,
    title: "Luxury Pool Villa",
    location: "Layan",
    price: "$950,000",
    beds: 3,
    baths: 4,
    area: "320 sqm",
    type: "Villa",
    imageUrl: "/placeholder.svg?height=400&width=600",
    features: ["swimming-pool", "garden", "security"],
    areaLocation: "layan",
    dealType: "buy",
  },
  {
    id: 11,
    title: "Beachside Apartment",
    location: "Karon Beach",
    price: "$380,000",
    beds: 2,
    baths: 2,
    area: "110 sqm",
    type: "Apartment",
    imageUrl: "/placeholder.svg?height=400&width=600",
    features: ["sea-view", "gym"],
    areaLocation: "karon",
    dealType: "buy",
  },
  {
    id: 12,
    title: "Exclusive Penthouse",
    location: "Surin Beach",
    price: "$1,100,000",
    beds: 3,
    baths: 3,
    area: "240 sqm",
    type: "Penthouse",
    imageUrl: "/placeholder.svg?height=400&width=600",
    features: ["sea-view", "swimming-pool", "gym", "security"],
    areaLocation: "surin",
    dealType: "buy",
  },
  {
    id: 13,
    title: "Beachfront Apartment Rental",
    location: "Patong Beach",
    price: "$2,500/month",
    beds: 2,
    baths: 2,
    area: "85 sqm",
    type: "Apartment",
    imageUrl: "/placeholder.svg?height=400&width=600",
    features: ["sea-view", "gym"],
    areaLocation: "patong",
    dealType: "rent",
  },
  {
    id: 14,
    title: "Luxury Villa Rental",
    location: "Bang Tao",
    price: "$4,200/month",
    beds: 3,
    baths: 3,
    area: "180 sqm",
    type: "Villa",
    imageUrl: "/placeholder.svg?height=400&width=600",
    features: ["swimming-pool", "garden"],
    areaLocation: "bang-tao",
    dealType: "rent",
  },
  {
    id: 15,
    title: "Modern Condo Rental",
    location: "Kamala",
    price: "$1,800/month",
    beds: 1,
    baths: 1,
    area: "65 sqm",
    type: "Apartment",
    imageUrl: "/placeholder.svg?height=400&width=600",
    features: ["sea-view"],
    areaLocation: "kamala",
    dealType: "rent",
  },
]

export default function PropertiesPage() {
  const { t, language } = useLanguage()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState<string[]>([])
  const [selectedArea, setSelectedArea] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [minBeds, setMinBeds] = useState("")
  const [minBaths, setMinBaths] = useState("")
  const [sortOption, setSortOption] = useState("featured")
  const [viewMode, setViewMode] = useState("grid")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedDealType, setSelectedDealType] = useState<string[]>([])
  
  // Состояния для сворачивания/разворачивания разделов фильтров
  const [expandedSections, setExpandedSections] = useState({
    propertyType: true,
    dealType: true,
    priceRange: true,
    bedrooms: true,
    bathrooms: true,
    area: true,
    features: true
  })
  
  // Функция для переключения состояния раздела
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const itemsPerPage = 9

  // Filter properties based on selected filters
  const filteredProperties = allProperties.filter((property) => {
    // Search term filter
    if (
      searchTerm &&
      !property.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !property.location.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    // Property type filter
    if (selectedType.length > 0 && !selectedType.includes(property.type)) {
      return false
    }

    // Area filter
    if (selectedArea.length > 0 && !selectedArea.includes(property.areaLocation)) {
      return false
    }

    // Features filter
    if (selectedFeatures.length > 0 && !selectedFeatures.every((feature) => property.features.includes(feature))) {
      return false
    }

    // Deal type filter
    if (selectedDealType.length > 0 && !selectedDealType.includes(property.dealType)) {
      return false
    }

    // Bedrooms filter
    if (minBeds && property.beds < Number.parseInt(minBeds)) {
      return false
    }

    // Bathrooms filter
    if (minBaths && property.baths < Number.parseInt(minBaths)) {
      return false
    }

    return true
  })

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortOption) {
      case "price-low-to-high":
        return Number.parseFloat(a.price.replace(/[^0-9.]/g, "")) - Number.parseFloat(b.price.replace(/[^0-9.]/g, ""))
      case "price-high-to-low":
        return Number.parseFloat(b.price.replace(/[^0-9.]/g, "")) - Number.parseFloat(a.price.replace(/[^0-9.]/g, ""))
      case "newest-first":
        return b.id - a.id
      default:
        return 0 // featured
    }
  })

  // Paginate properties
  const totalPages = Math.ceil(sortedProperties.length / itemsPerPage)
  const paginatedProperties = sortedProperties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Handle filter changes
  const handleTypeChange = (type: string) => {
    setSelectedType((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
    setCurrentPage(1)
  }

  const handleAreaChange = (area: string) => {
    setSelectedArea((prev) => (prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]))
    setCurrentPage(1)
  }

  const handleFeatureChange = (feature: string) => {
    setSelectedFeatures((prev) => (prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]))
    setCurrentPage(1)
  }

  const handleBedroomChange = (value: string) => {
    setMinBeds(value)
    setCurrentPage(1)
  }

  const handleBathroomChange = (value: string) => {
    setMinBaths(value)
    setCurrentPage(1)
  }

  const handleDealTypeChange = (dealType: string) => {
    setSelectedDealType((prev) => (prev.includes(dealType) ? prev.filter((d) => d !== dealType) : [...prev, dealType]))
    setCurrentPage(1)
  }

  const resetFilters = () => {
    setSearchTerm("")
    setSelectedType([])
    setSelectedArea([])
    setSelectedFeatures([])
    setMinBeds("")
    setMinBaths("")
    setCurrentPage(1)
    setSelectedDealType([])
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 overflow-hidden">
              <img
                src="/images/yasmin-logo.png"
                alt="Yasmin Gold Company Logo"
                className="h-full w-full object-contain"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">Yasmin</span>
              <span className="text-xs text-muted-foreground">Gold Company</span>
            </div>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {t("home")}
            </Link>
            <Link
              href="/properties"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t("properties")}
            </Link>
            <Link
              href="/new-developments"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t("new-developments")}
            </Link>
            <Link href="/investments" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
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
            <Button variant="ghost" size="icon" className="md:hidden">
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
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8 space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">{t("properties-title")}</h1>
            <p className="text-muted-foreground">{t("properties-subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
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
                        onClick={() => toggleSection('features')}
                      >
                        <label className="text-sm font-medium">{t("features")}</label>
                        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${expandedSections.features ? '' : 'transform rotate-180'}`} />
                      </div>
                      <div className={`space-y-1 ${expandedSections.features ? '' : 'hidden'}`}>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="feature-pool"
                            className="h-4 w-4 rounded border-gray-300"
                            checked={selectedFeatures.includes("swimming-pool")}
                            onChange={() => handleFeatureChange("swimming-pool")}
                          />
                          <label htmlFor="feature-pool" className="text-sm">
                            {t("swimming-pool")}
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="feature-garden"
                            className="h-4 w-4 rounded border-gray-300"
                            checked={selectedFeatures.includes("garden")}
                            onChange={() => handleFeatureChange("garden")}
                          />
                          <label htmlFor="feature-garden" className="text-sm">
                            {t("garden")}
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="feature-sea-view"
                            className="h-4 w-4 rounded border-gray-300"
                            checked={selectedFeatures.includes("sea-view")}
                            onChange={() => handleFeatureChange("sea-view")}
                          />
                          <label htmlFor="feature-sea-view" className="text-sm">
                            {t("sea-view")}
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="feature-gym"
                            className="h-4 w-4 rounded border-gray-300"
                            checked={selectedFeatures.includes("gym")}
                            onChange={() => handleFeatureChange("gym")}
                          />
                          <label htmlFor="feature-gym" className="text-sm">
                            {t("gym")}
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="feature-security"
                            className="h-4 w-4 rounded border-gray-300"
                            checked={selectedFeatures.includes("security")}
                            onChange={() => handleFeatureChange("security")}
                          />
                          <label htmlFor="feature-security" className="text-sm">
                            {t("security")}
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
            <div className="lg:col-span-3">
              <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder={t("search-properties")}
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value)
                      setCurrentPage(1)
                    }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setViewMode("list")}
                    >
                      <LayoutList className="h-4 w-4" />
                      <span className="sr-only">{t("list-view")}</span>
                    </Button>
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid3X3 className="h-4 w-4" />
                      <span className="sr-only">{t("grid-view")}</span>
                    </Button>
                  </div>
                  <select
                    className="flex h-8 items-center rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="featured">{t("sort-featured")}</option>
                    <option value="price-low-to-high">{t("price-low-to-high")}</option>
                    <option value="price-high-to-low">{t("price-high-to-low")}</option>
                    <option value="newest-first">{t("newest-first")}</option>
                  </select>
                </div>
              </div>

              {paginatedProperties.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">No properties match your search criteria.</p>
                  <Button variant="outline" className="mt-4" onClick={resetFilters}>
                    {t("reset")} {t("filters")}
                  </Button>
                </div>
              ) : (
                <div
                  className={`grid grid-cols-1 gap-6 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" : ""}`}
                >
                  {paginatedProperties.map((property) => (
                    <PropertyCard
                      key={property.id}
                      title={property.title}
                      location={property.location}
                      price={property.price}
                      beds={property.beds}
                      baths={property.baths}
                      area={property.area}
                      type={property.type}
                      imageUrl={property.imageUrl}
                    />
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    >
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
                        className="h-4 w-4"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      <span className="sr-only">{t("previous-page")}</span>
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    ))}

                    <Button
                      variant="outline"
                      size="icon"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    >
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
                        className="h-4 w-4"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <span className="sr-only">{t("next-page")}</span>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © 2025 Yasmin - Gold Company. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
