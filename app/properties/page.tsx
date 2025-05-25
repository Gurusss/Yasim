"use client"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"
import Logo from "@/components/logo"
import Footer from "@/components/footer"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, ChevronDown, Filter, Grid3X3, LayoutList, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import PropertyCard from "@/components/property-card"
import ProfileForm from "@/components/profile-form"

// Импортируем утилиты для работы с данными о недвижимости
import { getAllProperties, filterProperties, Property } from "@/lib/utils/property-utils"

export default function PropertiesPage() {
  const { t, language } = useLanguage()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState<string[]>([])
  const [selectedArea, setSelectedArea] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [selectedDealType, setSelectedDealType] = useState<string[]>([])
  const [minBeds, setMinBeds] = useState<string>("")
  const [minBaths, setMinBaths] = useState<string>("")
  const [sortOption, setSortOption] = useState<string>("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
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

  // Получаем все объекты недвижимости из централизованного хранилища
  const allProperties = getAllProperties()

  // Подготавливаем параметры фильтрации
  const filterParams: any = {
    areaLocation: selectedArea.length > 0 ? selectedArea : undefined,
    dealType: selectedDealType.length > 0 ? selectedDealType : undefined,
    features: selectedFeatures.length > 0 ? selectedFeatures : undefined,
    minBeds: minBeds ? Number.parseInt(minBeds) : undefined,
    minBaths: minBaths ? Number.parseInt(minBaths) : undefined
  }
  
  // Обрабатываем типы недвижимости и теги
  const regularTypes = selectedType.filter(type => type !== "NewProperties")
  const hasNewPropertiesFilter = selectedType.includes("NewProperties")
  
  // Если есть обычные типы, добавляем их в фильтр
  if (regularTypes.length > 0) {
    filterParams.type = regularTypes
  }
  
  // Если выбран фильтр "Новостройки", добавляем тег "New Properties"
  if (hasNewPropertiesFilter) {
    filterParams.tags = ["New Properties"]
  }
  
  // Фильтруем свойства
  const filteredProperties = filterProperties(filterParams).filter((property) => {
    // Search term filter
    if (
      searchTerm &&
      !property.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !property.location.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
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
      case "newest":
        return 0 // Здесь можно добавить сортировку по дате, если она будет добавлена в данные
      default:
        return 0 // featured
    }
  })

  // Paginate properties
  const totalPages = Math.ceil(sortedProperties.length / itemsPerPage)
  const paginatedProperties = sortedProperties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Handle filter changes
  const handleTypeChange = (type: string) => {
    // Если выбран тип "NewProperties", добавляем его в массив тегов для фильтрации
    if (type === "NewProperties") {
      // Если "NewProperties" уже есть в выбранных типах, удаляем его
      if (selectedType.includes(type)) {
        setSelectedType(prev => prev.filter(t => t !== type))
      } else {
        // Иначе добавляем его
        setSelectedType(prev => [...prev, type])
      }
    } else {
      // Для остальных типов обрабатываем как обычно
      setSelectedType(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type])
    }
  }

  const handleAreaChange = (area: string) => {
    setSelectedArea(prev => prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area])
  }

  const handleFeatureChange = (feature: string) => {
    setSelectedFeatures(prev => prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature])
  }

  const handleBedroomChange = (value: string) => {
    setMinBeds(value)
  }

  const handleBathroomChange = (value: string) => {
    setMinBaths(value)
  }

  const handleDealTypeChange = (dealType: string) => {
    setSelectedDealType(prev => prev.includes(dealType) ? prev.filter(dt => dt !== dealType) : [...prev, dealType])
  }

  const resetFilters = () => {
    setSelectedType([])
    setSelectedArea([])
    setSelectedFeatures([])
    setSelectedDealType([])
    setMinBeds("")
    setMinBaths("")
    setSearchTerm("")
    setSortOption("featured")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              {t("home")}
            </Link>
            <Link href="/properties" className="text-sm font-medium text-primary transition-colors">
              {t("properties")}
            </Link>
            <Link href="/new-developments" className="text-sm font-medium transition-colors hover:text-primary">
              {t("new-developments")}
            </Link>
            <Link href="/investments" className="text-sm font-medium transition-colors hover:text-primary">
              {t("investments")}
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              {t("about")}
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              {t("contact")}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Link href="/profile">
              <Button variant="outline" size="sm">
                {t("profile")}
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6 md:py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
            <div className={`w-full md:max-w-[240px] md:flex-none ${showFilters ? "block" : "hidden md:block"}`}>
              <div className="sticky top-24 rounded-lg border p-4">
                <div className="flex items-center justify-between pb-4">
                  <h2 className="text-lg font-semibold">Фильтры</h2>
                  <Button variant="ghost" size="sm" onClick={resetFilters}>
                    {t("reset")}
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="border-t pt-4">
                    <button
                      className="flex w-full items-center justify-between"
                      onClick={() => toggleSection("propertyType")}
                    >
                      <h3 className="font-medium">{t("property-type")}</h3>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expandedSections.propertyType ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedSections.propertyType && (
                      <div className="mt-2 space-y-1">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedType.includes("Apartment")}
                            onChange={() => handleTypeChange("Apartment")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>{t("apartment")}</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedType.includes("Villa")}
                            onChange={() => handleTypeChange("Villa")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>{t("villa")}</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedType.includes("Penthouse")}
                            onChange={() => handleTypeChange("Penthouse")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>{t("penthouse")}</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedType.includes("Land")}
                            onChange={() => handleTypeChange("Land")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>{t("land")}</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedType.includes("NewProperties")}
                            onChange={() => handleTypeChange("NewProperties")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>Новостройки</span>
                        </label>
                      </div>
                    )}
                  </div>
                  <div className="border-t pt-4">
                    <button
                      className="flex w-full items-center justify-between"
                      onClick={() => toggleSection("dealType")}
                    >
                      <h3 className="font-medium">{t("deal-type")}</h3>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expandedSections.dealType ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedSections.dealType && (
                      <div className="mt-2 space-y-1">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedDealType.includes("buy")}
                            onChange={() => handleDealTypeChange("buy")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>{t("buy")}</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedDealType.includes("rent")}
                            onChange={() => handleDealTypeChange("rent")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>{t("rent")}</span>
                        </label>
                      </div>
                    )}
                  </div>
                  <div className="border-t pt-4">
                    <button
                      className="flex w-full items-center justify-between"
                      onClick={() => toggleSection("bedrooms")}
                    >
                      <h3 className="font-medium">{t("bedrooms")}</h3>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expandedSections.bedrooms ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedSections.bedrooms && (
                      <div className="mt-2 space-y-1">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="bedrooms"
                            checked={minBeds === ""}
                            onChange={() => handleBedroomChange("")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>{t("any")}</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="bedrooms"
                            checked={minBeds === "1"}
                            onChange={() => handleBedroomChange("1")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>1+</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="bedrooms"
                            checked={minBeds === "2"}
                            onChange={() => handleBedroomChange("2")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>2+</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="bedrooms"
                            checked={minBeds === "3"}
                            onChange={() => handleBedroomChange("3")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>3+</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="bedrooms"
                            checked={minBeds === "4"}
                            onChange={() => handleBedroomChange("4")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>4+</span>
                        </label>
                      </div>
                    )}
                  </div>
                  <div className="border-t pt-4">
                    <button
                      className="flex w-full items-center justify-between"
                      onClick={() => toggleSection("bathrooms")}
                    >
                      <h3 className="font-medium">{t("bathrooms")}</h3>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expandedSections.bathrooms ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedSections.bathrooms && (
                      <div className="mt-2 space-y-1">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="bathrooms"
                            checked={minBaths === ""}
                            onChange={() => handleBathroomChange("")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>{t("any")}</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="bathrooms"
                            checked={minBaths === "1"}
                            onChange={() => handleBathroomChange("1")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>1+</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="bathrooms"
                            checked={minBaths === "2"}
                            onChange={() => handleBathroomChange("2")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>2+</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="bathrooms"
                            checked={minBaths === "3"}
                            onChange={() => handleBathroomChange("3")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>3+</span>
                        </label>
                      </div>
                    )}
                  </div>
                  <div className="border-t pt-4">
                    <button
                      className="flex w-full items-center justify-between"
                      onClick={() => toggleSection("area")}
                    >
                      <h3 className="font-medium">{t("area")}</h3>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expandedSections.area ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedSections.area && (
                      <div className="mt-2 space-y-1">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedArea.includes("bang-tao")}
                            onChange={() => handleAreaChange("bang-tao")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>Bang Tao</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedArea.includes("kamala")}
                            onChange={() => handleAreaChange("kamala")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>Kamala</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedArea.includes("patong")}
                            onChange={() => handleAreaChange("patong")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>Patong</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedArea.includes("kata")}
                            onChange={() => handleAreaChange("kata")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>Kata</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedArea.includes("rawai")}
                            onChange={() => handleAreaChange("rawai")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>Rawai</span>
                        </label>
                      </div>
                    )}
                  </div>
                  <div className="border-t pt-4">
                    <button
                      className="flex w-full items-center justify-between"
                      onClick={() => toggleSection("features")}
                    >
                      <h3 className="font-medium">{t("features")}</h3>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expandedSections.features ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedSections.features && (
                      <div className="mt-2 space-y-1">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedFeatures.includes("swimming-pool")}
                            onChange={() => handleFeatureChange("swimming-pool")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>{t("swimming-pool")}</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedFeatures.includes("sea-view")}
                            onChange={() => handleFeatureChange("sea-view")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>{t("sea-view")}</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedFeatures.includes("garden")}
                            onChange={() => handleFeatureChange("garden")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>{t("garden")}</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedFeatures.includes("gym")}
                            onChange={() => handleFeatureChange("gym")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>{t("gym")}</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedFeatures.includes("security")}
                            onChange={() => handleFeatureChange("security")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span>{t("security")}</span>
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="md:hidden"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    {t("filters")}
                  </Button>
                  <div className="relative flex-1 md:w-[300px]">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder={t("search-properties")}
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <select
                      className="rounded-md border border-input bg-background px-3 py-1 text-sm"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                    >
                      <option value="featured">{t("featured")}</option>
                      <option value="price-low-to-high">{t("price-low-to-high")}</option>
                      <option value="price-high-to-low">{t("price-high-to-low")}</option>
                      <option value="newest">{t("newest")}</option>
                    </select>
                  </div>
                  <div className="flex items-center rounded-md border border-input p-1">
                    <Button
                      variant={viewMode === "grid" ? "secondary" : "ghost"}
                      size="sm"
                      className="h-7 w-7 p-0"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid3X3 className="h-4 w-4" />
                      <span className="sr-only">{t("grid-view")}</span>
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "secondary" : "ghost"}
                      size="sm"
                      className="h-7 w-7 p-0"
                      onClick={() => setViewMode("list")}
                    >
                      <LayoutList className="h-4 w-4" />
                      <span className="sr-only">{t("list-view")}</span>
                    </Button>
                  </div>
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
                      id={property.id}
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
      <Footer />
    </div>
  )
}
