"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Building2,
  Home,
  MapPin,
  Search,
  Check,
  Facebook,
  Twitter,
  Linkedin,
  LocateIcon as LocationIcon,
  Phone,
  Mail,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Logo from "@/components/logo"
import PropertyCard from "@/components/property-card"
import FeatureCard from "@/components/feature-card"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"
import ProfileForm from "@/components/profile-form"
import ContactFormDialog from "@/components/contact-form-dialog"
import { useState } from "react"

export default function HomePage() {
  const { t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              {t("home")}
            </Link>
            <Link
              href="/properties"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t("properties")}
            </Link>
            <Link
              href="/new-developments"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
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
      </header>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white border-b z-40">
          <div className="container py-4 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium transition-colors hover:text-primary text-left pl-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              href="/properties"
              className="block text-sm font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("properties")}
            </Link>
            <Link
              href="/new-developments"
              className="block text-sm font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("new-developments")}
            </Link>
            <Link
              href="/investments"
              className="block text-sm font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("investments")}
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      )}
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/vela2.png"
              alt="Luxury beachfront property"
              fill
              className="object-cover object-[center_70%] brightness-[0.8]"
              priority
            />
          </div>
          <div className="container relative z-10 py-28 md:py-36 lg:py-44">
            <div className="max-w-3xl space-y-5 text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Недвижимость на Пхукете для жизни и инвестиций</h1>
              <p className="text-lg md:text-xl text-white/90">Подбор проверенных объектов с юридическим сопровождением от Yasmin – Gold Company</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  {t("explore-properties")}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-transparent hover:text-white hover:bg-white/10 whitespace-nowrap"
                >
                  {t("investment-opportunities")}
                </Button>
              </div>
            </div>
            
            <div className="mt-12 max-w-5xl">
              <Card className="overflow-hidden border-none shadow-lg">
                <CardContent className="p-0">
                  <Tabs defaultValue="buy" className="w-full">
                    <div className="flex items-center justify-between p-4 md:p-6 bg-muted/50">
                      <TabsList className="grid w-full max-w-md grid-cols-3">
                        <TabsTrigger value="buy">{t("buy")}</TabsTrigger>
                        <TabsTrigger value="rent">{t("rent")}</TabsTrigger>
                        <TabsTrigger value="invest">{t("invest")}</TabsTrigger>
                      </TabsList>
                    </div>
                    <TabsContent value="buy" className="p-4 md:p-6 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t("location")}</label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <select className="flex h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option>{t("any-location")}</option>
                              <option>{t("phuket")}</option>
                              <option>{t("pattaya")}</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t("property-type")}</label>
                          <div className="relative">
                            <Home className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <select className="flex h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option>{t("any-type")}</option>
                              <option>{t("apartment")}</option>
                              <option>{t("villa")}</option>
                              <option>{t("penthouse")}</option>
                              <option>{t("land")}</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t("price-range")}</label>
                          <div className="relative">
                            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option>{t("any-price")}</option>
                              <option>$100k - $300k</option>
                              <option>$300k - $500k</option>
                              <option>$500k - $1M</option>
                              <option>$1M+</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">&nbsp;</label>
                          <div className="relative">
                            <Link href="/properties" className="block">
                              <Button className="w-full">
                                <Search className="mr-2 h-4 w-4" /> {t("search")}
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="rent" className="p-4 md:p-6 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t("location")}</label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <select className="flex h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option>{t("any-location")}</option>
                              <option>{t("phuket")}</option>
                              <option>{t("pattaya")}</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t("property-type")}</label>
                          <div className="relative">
                            <Home className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <select className="flex h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option>{t("any-type")}</option>
                              <option>{t("apartment")}</option>
                              <option>{t("villa")}</option>
                              <option>{t("penthouse")}</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t("monthly-rent")}</label>
                          <div className="relative">
                            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option>{t("any-price")}</option>
                              <option>$500 - $1,000</option>
                              <option>$1,000 - $2,000</option>
                              <option>$2,000 - $5,000</option>
                              <option>$5,000+</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">&nbsp;</label>
                          <div className="relative">
                            <Link href="/properties" className="block">
                              <Button className="w-full">
                                <Search className="mr-2 h-4 w-4" /> {t("search")}
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="invest" className="p-4 md:p-6 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t("location")}</label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <select className="flex h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option>{t("any-location")}</option>
                              <option>{t("phuket")}</option>
                              <option>{t("pattaya")}</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t("investment-type")}</label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <select className="flex h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option>{t("any-type")}</option>
                              <option>{t("new-developments")}</option>
                              <option>{t("rental-services")}</option>
                              <option>Commercial</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t("roi-range")}</label>
                          <div className="relative">
                            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option>{t("any-roi")}</option>
                              <option>5% - 8%</option>
                              <option>8% - 12%</option>
                              <option>12% - 15%</option>
                              <option>15%+</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">&nbsp;</label>
                          <div className="relative">
                            <Link href="/investments" className="block">
                              <Button className="w-full">
                                <Search className="mr-2 h-4 w-4" /> {t("search")}
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t("featured-properties")}
              </h2>
              <p className="text-muted-foreground text-lg">{t("featured-properties-subtitle")}</p>
            </div>
            <Link
              href="/properties"
              className="group inline-flex items-center text-sm font-medium text-primary mt-4 md:mt-0"
            >
              {t("view-all-properties")}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PropertyCard
              title="Строящийся комплекс Bang Tao Beach"
              location="Bang Tao Beach"
              price="от 4,553,000 бат"
              beds={1}
              baths={1}
              area="29-148 м²"
              type="Apartment"
              imageUrl="/images/Проект1/PHOTO-2025-05-24-22-48-40 3.jpg"
              id="1"
            />
            <PropertyCard
              title="Строящийся проект от надежного застройщика!"
              location="Наянг, Phuket"
              price="По запросу"
              beds={3}
              baths={3}
              area="25-120 м²"
              type="Apartment"
              imageUrl="/images/Проект2/PHOTO-2025-05-24-22-50-23.jpg"
              id="2"
            />
            <PropertyCard
              title={t("tropical-pool-villa")}
              location="Nai Harn"
              price="$780,000"
              beds={3}
              baths={3}
              area="220 sqm"
              type="Villa"
              imageUrl="/images/tropical-pool-villa.jpeg"
            />
          </div>
        </section>

        {/* Rental section */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("rental-properties")}</h2>
              <p className="text-muted-foreground text-lg">{t("rental-properties-subtitle")}</p>
            </div>
            <Link
              href="/properties"
              className="group inline-flex items-center text-sm font-medium text-primary mt-4 md:mt-0"
            >
              {t("view-all-rentals")}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <PropertyCard
              title={t("beachfront-apartment-rental")}
              location="Patong Beach"
              price="$2,500/month"
              beds={2}
              baths={2}
              area="85 sqm"
              type="Rental"
              imageUrl="/images/modern-sea-view-apartment.jpeg"
            />
            <PropertyCard
              title={t("luxury-villa-rental")}
              location="Bang Tao"
              price="$4,200/month"
              beds={3}
              baths={3}
              area="180 sqm"
              type="Rental"
              imageUrl="/images/tropical-pool-villa.jpeg"
            />
            <PropertyCard
              title={t("modern-condo-rental")}
              location="Kamala"
              price="$1,800/month"
              beds={1}
              baths={1}
              area="65 sqm"
              type="Rental"
              imageUrl="/images/Проект1/PHOTO-2025-05-24-22-48-37.jpg"
            />
          </div>

          {/* Rental benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/vela2.png" alt="Rental property" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-md bg-green-50 px-3 py-1 text-sm text-green-700">
                {t("rental-services")}
              </div>
              <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("hassle-free-rentals")}</h3>
              <p className="text-muted-foreground">{t("hassle-free-rentals-subtitle")}</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>{t("fully-furnished-properties")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>{t("24-7-maintenance-support")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>{t("flexible-lease-terms")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>{t("prime-locations")}</span>
                </li>
              </ul>
              <Link href="/properties">
                <Button className="mt-4">{t("browse-rentals")}</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                {t("why-choose-velaestate")}
              </h2>
              <p className="text-muted-foreground text-lg">{t("why-choose-subtitle")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon="Shield"
                title={t("trusted-expertise")}
                description={t("trusted-expertise-description")}
              />
              <FeatureCard
                icon="Globe"
                title={t("international-network")}
                description={t("international-network-description")}
              />
              <FeatureCard icon="FileCheck" title={t("legal-support")} description={t("legal-support-description")} />
              <FeatureCard
                icon="TrendingUp"
                title={t("investment-guidance")}
                description={t("investment-guidance-description")}
              />
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("new-developments")}</h2>
              <p className="text-muted-foreground text-lg">{t("new-developments-subtitle")}</p>
            </div>
            <Link
              href="/new-developments"
              className="group inline-flex items-center text-sm font-medium text-primary mt-4 md:mt-0"
            >
              {t("view-all-developments")}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-none shadow-md">
              <div className="relative h-80">
                <Image
                  src="/images/резидент.jpg"
                  alt="Luxury development"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-full">
                  {t("pre-launch")}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{t("the-horizon-residences")}</h3>
                  <p className="text-muted-foreground">Kamala Beach</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {t("beachfront")}
                    </span>
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9h18" />
                      </svg>
                      Q4 2025
                    </span>
                  </div>
                  <p className="pt-2">{t("the-horizon-residences-description")}</p>
                  <div className="pt-4 flex items-center justify-between">
                    <div className="font-bold text-xl">{t("from")} $280,000</div>
                    <Button>{t("view-details")}</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none shadow-md">
              <div className="relative h-80">
                <Image
                  src="/images/вила.jpg"
                  alt="Luxury development"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                  {t("under-construction")}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{t("serenity-villas")}</h3>
                  <p className="text-muted-foreground">Layan Beach</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {t("beachfront")}
                    </span>
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9h18" />
                      </svg>
                      Q4 2025
                    </span>
                  </div>
                  <p className="pt-2">{t("serenity-villas-description")}</p>
                  <div className="pt-4 flex items-center justify-between">
                    <div className="font-bold text-xl">{t("from")} $350,000</div>
                    <Button>{t("view-details")}</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Investment section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-md bg-blue-50 px-3 py-1 text-sm text-primary">
                  {t("investment-opportunities")}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("maximize-your-investment")}
                </h2>
                <p className="text-muted-foreground">{t("maximize-your-investment-subtitle")}</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{t("guaranteed-rental-returns")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{t("professional-property-management")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{t("flexible-exit-strategies")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{t("transparent-fee-structure")}</span>
                  </li>
                </ul>
                <Button className="mt-4">{t("download-investment-guide")}</Button>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image src="/images/vela2.png" alt="Luxury investment property" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">{t("ready-to-find-your-dream-property")}</h2>
                <p className="text-primary-foreground/90">{t("ready-to-find-your-dream-property-subtitle")}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <ContactFormDialog
                  buttonText={t("contact-us")}
                  buttonVariant="secondary"
                  buttonSize="lg"
                  title={t("contact-us")}
                  description={t("ready-to-find-your-dream-property-subtitle")}
                  defaultMessage={"Я хотел бы получить информацию о недвижимости."}
                />
                <ContactFormDialog
                  buttonText={t("schedule-consultation")}
                  buttonVariant="outline"
                  buttonSize="lg"
                  buttonClassName="border-primary text-primary hover:bg-primary/10"
                  title={t("schedule-consultation")}
                  description={t("ready-to-find-your-dream-property-subtitle")}
                  defaultMessage={"Я хотел бы запланировать консультацию по вопросу недвижимости."}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
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
              </div>
              <p className="text-sm text-muted-foreground mb-4">{t("footer-description")}</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">{t("quick-links")}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/properties" className="text-muted-foreground hover:text-primary">
                    {t("properties")}
                  </Link>
                </li>
                <li>
                  <Link href="/new-developments" className="text-muted-foreground hover:text-primary">
                    {t("new-developments")}
                  </Link>
                </li>
                <li>
                  <Link href="/investments" className="text-muted-foreground hover:text-primary">
                    {t("investment-opportunities")}
                  </Link>
                </li>
                <li>
                  <Link href="/areas-guide" className="text-muted-foreground hover:text-primary">
                    {t("areas-guide")}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary">
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary">
                    {t("contact")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">{t("services")}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    {t("buying-property")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    {t("selling-property")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    {t("rental-services")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    {t("legal-services")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    {t("visa-residency")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    {t("property-management-service")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">{t("contact-us-footer")}</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <LocationIcon className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Phuket, Thailand</span>
                </li>
                <li className="flex items-start">
                  <Phone className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>080 949 4041</span>
                </li>
                <li className="flex items-start">
                  <Mail className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Yasmin.gold.company@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <Clock className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                    <div>Sat: 10:00 AM - 4:00 PM</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground">
              © 2025 Yasmin - Gold Company. {t("all-rights-reserved")}
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                {t("terms-conditions")}
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                {t("privacy-policy")}
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                {t("cookies-policy")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
