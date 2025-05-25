"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"
import ContactFormDialog from "@/components/contact-form-dialog"
import ProfileForm from "@/components/profile-form"
import { useState } from "react"

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

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
              className="text-sm font-medium transition-colors hover:text-primary"
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
              className="block text-sm font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2"
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
              className="block text-sm font-medium transition-colors hover:text-primary text-left pl-2"
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
        <section className="bg-muted/30 py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">О нас</h1>
              <p className="mt-4 text-lg text-muted-foreground">Yasmin - Gold Company — ваш надежный партнер в мире недвижимости</p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
              <div>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/images/about.png"
                    alt="Yasmin Gold Company team"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Наша компания</h2>
                <p className="text-muted-foreground">Yasmin - Gold Company — ваш надежный партнер в мире недвижимости. Мы предлагаем полный спектр услуг, связанных с покупкой, продажей и арендой объектов недвижимости и земли.</p>
                <p className="text-muted-foreground">Наша миссия — обеспечить прозрачные и безопасные сделки с максимальной выгодой для наших клиентов.</p>
                <p className="text-muted-foreground">Мы ценим доверие клиентов и гарантируем индивидуальный подход, оперативность и экспертность в каждом решении.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted/30 py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">Наши направления</h2>
              <p className="mt-4 text-muted-foreground">Мы предлагаем комплексные решения для всех ваших потребностей в сфере недвижимости</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
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
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Продажа недвижимости</h3>
                <p className="mt-2 text-muted-foreground">Жилые и коммерческие объекты, проверенные на юридическую чистоту.</p>
              </div>
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
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
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Продажа земли</h3>
                <p className="mt-2 text-muted-foreground">Участки для строительства, инвестиций и сельскохозяйственных нужд.</p>
              </div>
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
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
                    <rect width="16" height="16" x="4" y="4" rx="2" />
                    <path d="m9 9 6 6" />
                    <path d="m15 9-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Юридическое сопровождение</h3>
                <p className="mt-2 text-muted-foreground">Профессиональная поддержка на каждом этапе сделки.</p>
              </div>
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
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
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                    <path d="M12 3v6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Аренда и управление</h3>
                <p className="mt-2 text-muted-foreground">Помощь в сдаче объектов в аренду и последующем управлении.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Наша команда</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                {
                  name: "Александр Миллер",
                  position: "Основатель и CEO",
                  bio: "Более 15 лет опыта в сфере недвижимости и инвестиций в Таиланде",
                  image: "/images/team/team1.jpg",
                },
                {
                  name: "Софья Чен",
                  position: "Директор по продажам",
                  bio: "Эксперт по элитной недвижимости с глубоким знанием рынка Пхукета",
                  image: "/images/team/team2.jpg",
                },
                {
                  name: "Михаил Петров",
                  position: "Специалист по инвестициям",
                  bio: "Помогает клиентам выбрать наиболее выгодные инвестиционные объекты",
                  image: "/images/team/team3.jpg",
                },
                {
                  name: "Анна Ковальски",
                  position: "Юридический консультант",
                  bio: "Обеспечивает юридическую чистоту и безопасность всех сделок",
                  image: "/images/team/team4.jpg",
                },
                {
                  name: "Давид Томпсон",
                  position: "Управляющий недвижимостью",
                  bio: "Специализируется на управлении и обслуживании объектов недвижимости",
                  image: "/images/team/team5.jpg",
                },
                {
                  name: "Наталья Сирисават",
                  position: "Эксперт по местному рынку",
                  bio: "Глубокое знание особенностей рынка недвижимости Таиланда",
                  image: "/images/team/team6.jpg",
                },
                {
                  name: "Ярослав Вильсон",
                  position: "Директор по маркетингу",
                  bio: "Отвечает за стратегию продвижения и привлечение клиентов",
                  image: "/images/team/team7.jpg",
                },
                {
                  name: "Елена Волкова",
                  position: "Специалист по работе с клиентами",
                  bio: "Обеспечивает высокий уровень сервиса и поддержки клиентов",
                  image: "/images/team/team8.jpg",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={member.image || "/images/team/placeholder.jpg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.position}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Готовы к сотрудничеству?</h2>
                <p className="text-primary-foreground/90">Мы всегда рады помочь вам в поиске идеального объекта недвижимости в Таиланде. Свяжитесь с нами для консультации.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <ContactFormDialog
                  buttonText="Связаться с нами"
                  buttonVariant="secondary"
                  buttonSize="lg"
                  buttonClassName="text-secondary-foreground"
                  title="Связаться с нами"
                  description="Заполните форму, и мы свяжемся с вами в ближайшее время"
                />
                <ContactFormDialog
                  buttonText="Запланировать консультацию"
                  buttonVariant="outline"
                  buttonSize="lg"
                  buttonClassName="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                  title="Запланировать консультацию"
                  description="Укажите удобное время для консультации, и мы свяжемся с вами"
                  defaultMessage="Я хотел бы запланировать консультацию по вопросу недвижимости."
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © 2025 Yasmin - Gold Company. {t("all-rights-reserved")}
        </div>
      </footer>
    </div>
  )
}
