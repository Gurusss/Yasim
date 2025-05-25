"use client"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Mail, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import ProfileForm from "@/components/profile-form"
import ContactFormDialog from "@/components/contact-form-dialog"
import Logo from "@/components/logo"

export default function InvestmentsPage() {
  const { t, language } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Calculator state
  const [investmentAmount, setInvestmentAmount] = useState(500000)
  const [propertyType, setPropertyType] = useState("condo")
  const [investmentPeriod, setInvestmentPeriod] = useState(5)
  const [annualReturn, setAnnualReturn] = useState(11)
  const [totalReturn, setTotalReturn] = useState(0)
  const [monthlyIncome, setMonthlyIncome] = useState(0)

  // Calculate returns when inputs change
  useEffect(() => {
    // Set ROI based on property type
    let roi = 11 // default for condo
    switch (propertyType) {
      case "villa":
        roi = 13.5 // average of 12-15%
        break
      case "condo":
        roi = 11 // average of 10-12%
        break
      case "commercial":
        roi = 17.5 // average of 15-20%
        break
      case "newbuild":
        roi = 9 // average of 8-10%
        break
    }

    setAnnualReturn(roi)

    // Calculate total return over investment period
    const totalReturnValue = investmentAmount * Math.pow(1 + roi / 100, investmentPeriod)
    setTotalReturn(totalReturnValue)

    // Calculate monthly income
    const yearlyIncome = investmentAmount * (roi / 100)
    setMonthlyIncome(yearlyIncome / 12)
  }, [investmentAmount, propertyType, investmentPeriod])

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
            <Link
              href="/new-developments"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t("new-developments")}
            </Link>
            <Link href="/investments" className="text-sm font-medium transition-colors hover:text-primary">
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
            <Button variant="ghost" size="icon" className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 w-full bg-white border-b z-40">
            <div className="container py-4 flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2">
                {t("home")}
              </Link>
              <Link
                href="/properties"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2"
              >
                {t("properties")}
              </Link>
              <Link
                href="/new-developments"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2"
              >
                {t("new-developments")}
              </Link>
              <Link href="/investments" className="text-sm font-medium transition-colors hover:text-primary text-left pl-2">
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
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/90 to-primary/70 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
            <Image
              src="/images/phuket-villa-sunset.jpeg"
              alt="Luxury villa in Phuket at sunset"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative z-10 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {t("investment-page-title")}
                  </h1>
                  <p className="mt-4 text-xl text-white/90">{t("investment-page-subtitle")}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <ContactFormDialog
                    buttonText={t("get-consultation")}
                    buttonSize="lg"
                    buttonClassName="bg-white text-primary hover:bg-white/90"
                    title="Получить консультацию"
                    description="Заполните форму, и мы свяжемся с вами для консультации по инвестициям"
                    defaultMessage="Я хотел бы получить консультацию по инвестициям в недвижимость Таиланда."
                  />
                  <ContactFormDialog
                    buttonText={t("download-investment-guide")}
                    buttonSize="lg"
                    buttonVariant="outline"
                    buttonClassName="border-white text-white bg-transparent hover:text-white hover:bg-white/10"
                    title="Скачать инвестиционное руководство"
                    description="Заполните форму, и мы отправим вам подробное руководство по инвестициям в недвижимость Таиланда"
                    defaultMessage="Я хотел бы получить инвестиционное руководство по недвижимости в Таиланде."
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold mb-2">8-15%</div>
                  <div className="text-sm text-white/80">{t("annual-return")}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold mb-2">$150K</div>
                  <div className="text-sm text-white/80">{t("minimum-entry")}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold mb-2">3-5 {language === "ru" ? "лет" : "years"}</div>
                  <div className="text-sm text-white/80">{t("payback-period")}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Products Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("investment-products")}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("investment-products-subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Beach Villas */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl bg-white">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src="/images/Проект1/PHOTO-2025-05-24-22-48-36.jpg"
                    alt="Beach villas"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                    12-15% ROI
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🏖️</span>
                    <h3 className="text-2xl font-bold">{t("beach-villas")}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">{t("starting-amount")}:</div>
                      <div className="font-medium">{language === "ru" ? "от $600K" : "from $600K"}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("annual-yield")}:</div>
                      <div className="font-medium">{language === "ru" ? "12-15% годовых" : "12-15% annually"}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("payback")}:</div>
                      <div className="font-medium">{language === "ru" ? "5-7 лет" : "5-7 years"}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("locations")}:</div>
                      <div className="font-medium">Bang Tao, Laguna</div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{t("beach-villas-description")}</p>

                  <Button className="w-full">{t("select-villa")}</Button>
                </div>
              </div>

              {/* Condominiums */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl bg-white">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src="/images/Проект1/PHOTO-2025-05-24-22-48-38.jpg"
                    alt="Condominiums"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                    10-12% ROI
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🏢</span>
                    <h3 className="text-2xl font-bold">{t("condominiums")}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">{t("starting-amount")}:</div>
                      <div className="font-medium">{language === "ru" ? "от $150K" : "from $150K"}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("annual-yield")}:</div>
                      <div className="font-medium">{language === "ru" ? "10-12% годовых" : "10-12% annually"}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("payback")}:</div>
                      <div className="font-medium">{language === "ru" ? "4-5 лет" : "4-5 years"}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("locations")}:</div>
                      <div className="font-medium">Patong, Kata, Karon</div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{t("condominiums-description")}</p>

                  <Button className="w-full">{t("choose-condo")}</Button>
                </div>
              </div>

              {/* Commercial Real Estate */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl bg-white">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src="/images/Проект1/PHOTO-2025-05-24-22-48-40.jpg"
                    alt="Commercial real estate"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                    15-20% ROI
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🏪</span>
                    <h3 className="text-2xl font-bold">{t("commercial-real-estate")}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">{t("starting-amount")}:</div>
                      <div className="font-medium">{language === "ru" ? "от $300K" : "from $300K"}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("annual-yield")}:</div>
                      <div className="font-medium">{language === "ru" ? "15-20% годовых" : "15-20% annually"}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("payback")}:</div>
                      <div className="font-medium">{language === "ru" ? "3-4 года" : "3-4 years"}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("format")}:</div>
                      <div className="font-medium">{t("hotels-restaurants-spa")}</div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{t("commercial-real-estate-description")}</p>

                  <Button className="w-full">{t("explore-offers")}</Button>
                </div>
              </div>

              {/* New Developments */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl bg-white">
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src="/images/new-development.jpeg"
                    alt="New developments"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                    8-10% ROI
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🏗️</span>
                    <h3 className="text-2xl font-bold">{language === "ru" ? t("newbuild-investments-ru") : t("new-developments")}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">{t("starting-amount")}:</div>
                      <div className="font-medium">{language === "ru" ? "от $120K" : "from $120K"}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("annual-yield")}:</div>
                      <div className="font-medium">
                        {language === "ru" ? "8-10% + рост цены" : "8-10% + price growth"}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("payback")}:</div>
                      <div className="font-medium">{language === "ru" ? "6-8 лет" : "6-8 years"}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{t("advantage")}:</div>
                      <div className="font-medium">{t("price-growth")}</div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{language === "ru" ? t("newbuild-investments-description-ru") : t("new-developments-description")}</p>

                  <Button className="w-full">{t("view-projects")}</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("profitability-calculator")}</h2>
                <p className="text-lg text-muted-foreground">{t("calculator-subtitle")}</p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 bg-gradient-to-br from-primary to-primary/80 text-white">
                    <h3 className="text-2xl font-bold mb-6">{t("calculate-profit")}</h3>

                    <div className="space-y-6">
                      <div>
                        <label className="block mb-2 font-medium">{t("investment-amount")}</label>
                        <Input
                          type="number"
                          value={investmentAmount}
                          onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus-visible:ring-white"
                        />
                        <Slider
                          value={[investmentAmount]}
                          min={100000}
                          max={2000000}
                          step={50000}
                          onValueChange={(value) => setInvestmentAmount(value[0])}
                          className="mt-2"
                        />
                        <div className="flex justify-between text-xs mt-1">
                          <span>$100K</span>
                          <span>$2M</span>
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 font-medium">{t("property-type-investment")}</label>
                        <select
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-full h-10 rounded-md border border-white/30 bg-white/20 px-3 py-2 text-white"
                        >
                          <option value="condo">{language === "ru" ? t("condo-type") : t("condo")}</option>
                          <option value="villa">{language === "ru" ? t("villa-type") : t("villa")}</option>
                          <option value="commercial">{t("commercial")}</option>
                          <option value="newbuild">{t("newbuild")}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block mb-2 font-medium">{t("investment-period")}</label>
                        <div className="flex gap-2">
                          {[3, 5, 7, 10, 15].map((year) => (
                            <button
                              key={year}
                              onClick={() => setInvestmentPeriod(year)}
                              className={`flex-1 py-2 rounded-md border ${
                                investmentPeriod === year
                                  ? "bg-white text-primary border-white"
                                  : "bg-transparent text-white border-white/30 hover:bg-white/10"
                              }`}
                            >
                              {year}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-center">
                    <div className="space-y-8">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{t("annual-return")}</div>
                        <div className="text-4xl font-bold text-primary">{annualReturn}%</div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">{t("monthly-income")}</div>
                          <div className="text-2xl font-bold">${Math.round(monthlyIncome).toLocaleString()}</div>
                        </div>

                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            {t("total-income")} {investmentPeriod} {t("years")}
                          </div>
                          <div className="text-2xl font-bold">
                            ${Math.round(totalReturn - investmentAmount).toLocaleString()}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${Math.min(100, (totalReturn / investmentAmount - 1) * 100)}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between mt-2 text-sm">
                          <span>
                            {t("investments")}: ${investmentAmount.toLocaleString()}
                          </span>
                          <span>
                            {t("total")}: ${Math.round(totalReturn).toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <Button className="w-full">{t("get-detailed-calculation")}</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Phuket Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("why-phuket")}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("why-phuket-subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-xl font-bold mb-3">{t("tourist-hub")}</h3>
                <p className="text-muted-foreground">{t("tourist-hub-description")}</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-3">{t("price-growth-title")}</h3>
                <p className="text-muted-foreground">{t("price-growth-description")}</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">🏖️</div>
                <h3 className="text-xl font-bold mb-3">{t("year-round-season")}</h3>
                <p className="text-muted-foreground">{t("year-round-description")}</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3">{t("legal-protection")}</h3>
                <p className="text-muted-foreground">{t("legal-protection-description")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Process Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("how-to-start")}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("simple-process")}</p>
            </div>

            <div className="relative">
              {/* Connection line */}
              <div className="absolute top-24 left-0 right-0 h-0.5 bg-primary/20 hidden lg:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                {[
                  {
                    step: 1,
                    title: t("consultation"),
                    description: t("consultation-description"),
                  },
                  {
                    step: 2,
                    title: t("property-selection"),
                    description: t("property-selection-description"),
                  },
                  {
                    step: 3,
                    title: t("verification"),
                    description: t("verification-description"),
                  },
                  {
                    step: 4,
                    title: t("registration"),
                    description: t("registration-description"),
                  },
                  {
                    step: 5,
                    title: t("management"),
                    description: t("management-description"),
                  },
                  {
                    step: 6,
                    title: t("income-generation"),
                    description: t("income-generation-description"),
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
        <section className="py-20 bg-primary text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("start-investing-today")}</h2>
                <p className="text-xl text-white/80">{t("get-consultation-calculation")}</p>
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
                  <h3 className="text-xl font-bold mb-2">{t("consultation")}</h3>
                  <p className="text-white/80 mb-4">{t("consultation-hours")}</p>
                  <Button className="bg-white text-primary hover:bg-white/90 mt-auto">{t("get-consultation")}</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © 2025 Yasmin - Gold Company. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
