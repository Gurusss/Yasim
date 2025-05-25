"use client"
import { useLanguage } from "@/contexts/language-context"
import Footer from "@/components/footer"
import LanguageSwitcher from "@/components/language-switcher"
import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import ContactFormDialog from "@/components/contact-form-dialog"
import ProfileForm from "@/components/profile-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function ContactPage() {
  const { t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
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
              <span className="text-xs text-muted-foreground">Gold Company</span>
            </div>
          </Link>
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
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t("contact")}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ProfileForm />
            <Button variant="ghost" size="icon" className="md:hidden p-2" onClick={toggleMobileMenu}>
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
            <div className="container py-4 flex flex-col gap-2">
              <Button variant="outline" size="sm" className="w-full justify-center">
                {t("sign-in")}
              </Button>
              <Button size="sm" className="w-full justify-center">
                {t("get-started")}
              </Button>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">
        <section className="bg-muted/30 py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("contact-us-title")}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{t("contact-subtitle")}</p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">{t("get-in-touch")}</h2>
                <p className="mt-2 text-muted-foreground">{t("contact-form-description")}</p>
                <form className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        {t("first-name")}
                      </label>
                      <Input id="first-name" placeholder={t("enter-first-name")} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        {t("last-name")}
                      </label>
                      <Input id="last-name" placeholder={t("enter-last-name")} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {t("email")}
                    </label>
                    <Input id="email" type="email" placeholder={t("enter-email")} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      {t("phone")}
                    </label>
                    <Input id="phone" type="tel" placeholder={t("enter-phone")} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="inquiry-type" className="text-sm font-medium">
                      {t("inquiry-type")}
                    </label>
                    <Select>
                      <SelectTrigger id="inquiry-type">
                        <SelectValue placeholder={t("select-inquiry-type")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buying">{t("buying-property")}</SelectItem>
                        <SelectItem value="selling">{t("selling-property")}</SelectItem>
                        <SelectItem value="renting">{t("renting-property")}</SelectItem>
                        <SelectItem value="investment">{t("investment-opportunities")}</SelectItem>
                        <SelectItem value="legal">{t("legal-services")}</SelectItem>
                        <SelectItem value="visa">{t("visa-residency")}</SelectItem>
                        <SelectItem value="other">{t("other")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {t("message")}
                    </label>
                    <Textarea id="message" placeholder={t("enter-message")} rows={5} />
                  </div>
                  <Button type="submit" className="w-full">
                    {t("send-message")}
                  </Button>
                </form>
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">{t("contact-information")}</h2>
                  <p className="mt-2 text-muted-foreground">{t("contact-info-description")}</p>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="mr-3 h-5 w-5 text-primary shrink-0" />
                      <div>
                        <h3 className="font-medium">{t("office-address")}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">Phuket, Thailand</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="mr-3 h-5 w-5 text-primary shrink-0" />
                      <div>
                        <h3 className="font-medium">{t("phone")}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">080 949 4041</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="mr-3 h-5 w-5 text-primary shrink-0" />
                      <div>
                        <h3 className="font-medium">{t("email")}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">Yasmin.gold.company@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="font-medium">{t("office-hours")}</h3>
                  <div className="mt-3 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">{t("monday-friday")}</span>
                      <span className="text-sm">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">{t("saturday")}</span>
                      <span className="text-sm">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">{t("sunday")}</span>
                      <span className="text-sm">{t("closed")}</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden h-64 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252173.91544942895!2d98.25992887866913!3d7.838255711219283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031e2c462524f%3A0xe9ca9a85063dba21!2sPhuket%2C%20Thailand!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="VelaEstate Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight">{t("faq")}</h2>
              <p className="mt-2 text-muted-foreground">{t("faq-description")}</p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="font-medium">{t("faq-question-1")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t("faq-answer-1")}</p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="font-medium">{t("faq-question-2")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t("faq-answer-2")}</p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="font-medium">{t("faq-question-3")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t("faq-answer-3")}</p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="font-medium">{t("faq-question-4")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t("faq-answer-4")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
