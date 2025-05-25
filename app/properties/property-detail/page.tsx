"use client"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"
import Link from "next/link"
import Image from "next/image"
import {
  Heart,
  Share2,
  Download,
  ChevronLeft,
  ChevronRight,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Car,
  Wifi,
  Waves,
  Trees,
  Shield,
  Dumbbell,
  Phone,
  Mail,
  MessageCircle,
  Film,
  Library,
  Utensils,
  Sofa,
  Building,
  Landmark,
  Users,
  Flame,
  Thermometer,
  MonitorPlay,
  Flag,
  Video,
  Building2,
  HeartPulse,
  BookOpen,
  PanelTop,
  Music,
  Coffee,
  Mountain,
  Key,
  Activity
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import PropertyCard from "@/components/property-card"
import ProfileForm from "@/components/profile-form"
import Logo from "@/components/logo"

export default function PropertyDetailPage() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [propertyId, setPropertyId] = useState('1')
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  
  // Получаем ID из URL при загрузке страницы
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('id');
      if (id) {
        setPropertyId(id);
      }
    }
  }, [])
  
  // Объекты недвижимости
  const properties: Record<string, any> = {
    '2': {
      id: 2,
      title: "Комплекс апартаментов Kamala Beach",
      location: "Kamala Beach, Phuket (300м от моря)",
      price: "от 6,200,000 бат",
      pricePerSqm: "от 180,000 бат/м²",
      beds: "1-2",
      baths: "1-2",
      area: "35-120 м²",
      landArea: "",
      type: "Apartment",
      dealType: "Sale",
      yearBuilt: "2026 (4 квартал)",
      floor: "Различные этажи",
      parking: "Да",
      furnished: "Полностью",
      ownership: "Freehold",
      images: [
        "/images/Проект2/PHOTO-2025-05-24-22-50-23.jpg",
        "/images/Проект2/PHOTO-2025-05-24-22-50-23 2.jpg",
        "/images/Проект2/PHOTO-2025-05-24-22-50-24.jpg",
        "/images/Проект2/PHOTO-2025-05-24-22-50-25.jpg",
        "/images/Проект2/PHOTO-2025-05-24-22-50-25 2.jpg",
        "/images/Проект2/PHOTO-2025-05-24-22-50-26.jpg",
        "/images/Проект2/PHOTO-2025-05-24-22-50-26 2.jpg",
        "/images/Проект2/PHOTO-2025-05-24-22-50-26 3.jpg",
        "/images/Проект2/PHOTO-2025-05-24-22-50-26 4.jpg",
      ],
      video: "/images/Проект2/VIDEO-2025-05-24-22-50-42.mp4",
      features: [
        { icon: Waves, name: "400м до моря" },
        { icon: Waves, name: "Бассейны на 1м этаже" },
        { icon: Waves, name: "Панорамный бассейн на крыше" },
        { icon: Waves, name: "Бассейн гидротерапии" },
        { icon: Waves, name: "Зона водных развлечений" },
        { icon: Bath, name: "Джакузи" },
        { icon: Thermometer, name: "Сауна" },
        { icon: Dumbbell, name: "Фитнес" },
        { icon: Activity, name: "Площадка для йоги и тренировок" },
        { icon: Music, name: "Караоке" },
        { icon: Coffee, name: "Кафе, бар" },
        { icon: Wifi, name: "Коворкинг" },
        { icon: Users, name: "Детский бассейн и площадка" },
        { icon: Mountain, name: "Стена для скалолазания" },
        { icon: Flame, name: "Зона барбекю" },
        { icon: Car, name: "Здание парковки" },
        { icon: Shield, name: "Охрана и видеонаблюдение 24/7" },
        { icon: Key, name: "Доступ на территорию по картам" },
      ],
      description: "Новый комплекс апартаментов в популярном районе Kamala Beach. Всего 300 метров от пляжа. Современная архитектура, премиальные материалы и полная инфраструктура для комфортной жизни.",
      apartmentTypes: [
        "Studio",
        "1 bedroom",
        "2 bedroom",
        "3 bedroom"
      ],
      paymentOptions: [
        "При оплате 100% в течении 30 дней после бронирования - скидка 8%",
        "Рассрочка на 2 года строительства"
      ],
      highlights: [
        "Прямой доступ к пляжу",
        "Панорамные виды на море",
        "Полная инфраструктура",
        "Гарантия от застройщика"
      ],
      roi: "7-9% годовых",
      mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0376526218166!2d98.27850931477958!3d7.9500952941638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031c2e3f9a59f%3A0xf10c0b562ae3ad38!2sKamala%20Beach!5e0!3m2!1sen!2sth!4v1622000000000!5m2!1sen!2sth"
    },
    '1': {
      id: 1,
      title: "Строящийся комплекс Bang Tao Beach",
      location: "Bang Tao Beach, Phuket (500м от моря)",
      price: "от 4,553,000 бат",
      pricePerSqm: "от 157,000 бат/м²",
      beds: "1-3",
      baths: "1-3",
      area: "29-148 м²",
      landArea: "",
      type: "Apartment",
      dealType: "Sale",
      yearBuilt: "2027 (1 квартал)",
      floor: "Различные этажи",
      parking: "Да",
      furnished: "По запросу",
      ownership: "Freehold",
      images: [
        "/images/Проект1/PHOTO-2025-05-24-22-48-36.jpg",
        "/images/Проект1/PHOTO-2025-05-24-22-48-37.jpg",
        "/images/Проект1/PHOTO-2025-05-24-22-48-38.jpg",
        "/images/Проект1/PHOTO-2025-05-24-22-48-38 2.jpg",
        "/images/Проект1/PHOTO-2025-05-24-22-48-38 3.jpg",
        "/images/Проект1/PHOTO-2025-05-24-22-48-39.jpg",
        "/images/Проект1/PHOTO-2025-05-24-22-48-40.jpg",
        "/images/Проект1/PHOTO-2025-05-24-22-48-41.jpg",
        "/images/Проект1/PHOTO-2025-05-24-22-48-42.jpg",
        "/images/Проект1/PHOTO-2025-05-24-22-48-43.jpg",
      ],
      video: "/images/Проект1/VIDEO-2025-05-24-22-49-38.mp4",
      features: [
        { icon: Waves, name: "400м до моря" },
        { icon: Waves, name: "Бассейны на 1м этаже" },
        { icon: Waves, name: "Панорамный бассейн на крыше" },
        { icon: Waves, name: "Бассейн гидротерапии" },
        { icon: Waves, name: "Зона водных развлечений" },
        { icon: Bath, name: "Джакузи" },
        { icon: Thermometer, name: "Сауна" },
        { icon: Dumbbell, name: "Фитнес зал" },
        { icon: Activity, name: "Площадка для йоги и тренировок" },
        { icon: Music, name: "Караоке" },
        { icon: Coffee, name: "Кафе, бар" },
        { icon: Wifi, name: "Коворкинг" },
        { icon: Users, name: "Детский бассейн и площадка" },
        { icon: Mountain, name: "Стена для скалолазания" },
        { icon: Flame, name: "Зона барбекю" },
        { icon: Car, name: "Здание парковки" },
        { icon: Shield, name: "Охрана и видеонаблюдение 24/7" },
        { icon: Key, name: "Доступ на территорию по картам" },
      ],
      description: "Строящийся кондоминиум Bang Tao Beach расположен всего в 500 метрах от моря в одном из самых популярных районов Пхукета. Комплекс предлагает апартаменты различных планировок от студий до трехкомнатных квартир с современным дизайном и высококачественной отделкой. На территории комплекса расположены многочисленные удобства, включая несколько бассейнов, фитнес-центр, спа, детскую площадку и многое другое.",
      neighborhood: "Район Bang Tao Beach известен своими прекрасными пляжами с белым песком, развитой инфраструктурой и множеством ресторанов, магазинов и развлечений. В непосредственной близости находятся международные школы, медицинские центры и торговые комплексы.",
      investmentPotential: "Инвестиции в недвижимость в районе Bang Tao Beach предлагают отличный потенциал для роста капитала благодаря постоянно растущему спросу на недвижимость в этом районе. Апартаменты можно использовать как для собственного проживания, так и для сдачи в аренду с ожидаемой доходностью от 6% до 8% годовых.",
      apartmentTypes: [
        "1-комнатная квартира площадью 29-58 м² (от 4.553.000 бат)",
        "2-комнатная квартира площадью 65-118 м²",
        "3-комнатная квартира площадью 130-148 м²"
      ],
      paymentOptions: [
        "При оплате 100% в течении 30 дней после бронирования - СКИДКА 10%",
        "При оплате в беспроцентную рассрочку - СКИДКА 5%",
        "Беспроцентная рассрочка на весь период строительства"
      ],
      highlights: [
        "Район Наянг - пляж без волн круглый год",
        "Всего 400м до моря",
        "Развитая инфраструктура района",
        "Богатая инфраструктура комплекса"
      ]
    }
  };
  
  // Выбираем объект по ID
  const property = properties[propertyId] || properties['1'];

  // Similar properties
  const similarProperties = [
    {
      id: 2,
      title: "Modern Sea View Apartment",
      location: "Kata Beach",
      price: "$450,000",
      beds: 2,
      baths: 2,
      area: "120 sqm",
      type: "Apartment",
      imageUrl: "/images/modern-sea-view-apartment.jpeg",
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
      imageUrl: "/images/tropical-pool-villa.jpeg",
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
      imageUrl: "/images/phuket-villa-sunset.jpeg",
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {t("home")}
            </Link>
            <Link href="/properties" className="text-sm font-medium transition-colors hover:text-primary">
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
            <nav className="flex flex-col gap-6">
              <Link 
                href="/" 
                className="text-lg font-medium transition-colors hover:text-primary text-left pl-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("home")}
              </Link>
              <Link 
                href="/properties" 
                className="text-lg font-medium transition-colors hover:text-primary text-left pl-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("properties")}
              </Link>
              <Link
                href="/new-developments"
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("new-developments")}
              </Link>
              <Link
                href="/investments"
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("investments")}
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("about")}
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary text-left pl-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("contact")}
              </Link>
              <div className="mt-4">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        </div>
      )}

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="border-b bg-muted/30">
          <div className="container py-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                {t("home")}
              </Link>
              <span>/</span>
              <Link href="/properties" className="hover:text-primary">
                {t("properties")}
              </Link>
              <span>/</span>
              <span className="text-foreground">{property.title}</span>
            </nav>
          </div>
        </div>

        {/* Property Header */}
        <section className="py-6">
          <div className="container">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{property.dealType}</Badge>
                  <Badge variant="outline">{property.type}</Badge>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{property.title}</h1>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center">
                    <BedDouble className="h-4 w-4 mr-1" />
                    {property.beds} {t("beds")}
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    {property.baths} {t("baths")}
                  </div>
                  <div className="flex items-center">
                    <Maximize className="h-4 w-4 mr-1" />
                    {property.area}
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:items-end gap-4">
                <div className="text-left lg:text-right">
                  <div className="text-3xl font-bold text-primary">{property.price}</div>
                  <div className="text-sm text-muted-foreground">
                    {property.pricePerSqm} {t("per-sqm")}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={isFavorite ? "text-red-500 border-red-500" : ""}
                  >
                    <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-6 mb-8">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[600px] sm:h-[500px]">
              {/* Main Image or Video */}
              <div className="lg:col-span-3 relative overflow-hidden rounded-lg">
                {isVideoPlaying && property.video ? (
                  <div className="w-full h-full relative">
                    <video 
                      src={property.video} 
                      controls 
                      autoPlay
                      className="w-full h-full object-cover"
                      playsInline
                    >
                      Ваш браузер не поддерживает воспроизведение видео.
                    </video>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm z-10"
                      onClick={() => setIsVideoPlaying(false)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm z-10"
                      onClick={() => setIsVideoPlaying(false)}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
                      Видео
                    </div>
                  </div>
                ) : (
                  <>
                    <Image
                      src={property.images[currentImageIndex] || "/placeholder.svg"}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {property.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail Grid - Desktop */}
              <div className="hidden lg:flex flex-col gap-4">
                {property.images.slice(1, 4).map((image, index) => (
                  <div
                    key={index}
                    className="relative h-[115px] overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => {
                      setIsVideoPlaying(false);
                      setCurrentImageIndex(index + 1);
                    }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${property.title} ${index + 2}`}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                ))}
                
                {/* Video Thumbnail */}
                {property.video && (
                  <div
                    className="relative h-[115px] overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                      <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                        <Video className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <Image
                      src={property.images[0] || "/placeholder.svg"}
                      alt={`${property.title} video`}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                )}
                
                {property.images.length > 4 && (
                  <div
                    className="relative h-[115px] overflow-hidden rounded-lg cursor-pointer flex items-center justify-center text-white"
                    onClick={() => setShowAllPhotos(true)}
                  >
                    <Image
                      src={property.images[4] || "/placeholder.svg"}
                      alt={`${property.title} more photos`}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      +{property.images.length - 3} {t("more-photos")}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Mobile Thumbnails */}
              <div className="lg:hidden flex gap-2 mt-4 overflow-x-auto pb-2">
                {property.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative h-[80px] w-[80px] flex-shrink-0 overflow-hidden rounded-lg cursor-pointer ${currentImageIndex === index ? 'ring-2 ring-primary' : ''}`}
                    onClick={() => {
                      setIsVideoPlaying(false);
                      setCurrentImageIndex(index);
                    }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${property.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                
                {/* Video Thumbnail for Mobile */}
                {property.video && (
                  <div
                    className="relative h-[80px] w-[80px] flex-shrink-0 overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                      <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                        <Video className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <Image
                      src={property.images[0] || "/placeholder.svg"}
                      alt={`${property.title} video`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Property Details */}


        {/* Property Details */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">{t("property-description")}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{property.description}</p>

                  {property.apartmentTypes && (
                    <>
                      <h3 className="text-lg font-semibold mb-3">Типы квартир:</h3>
                      <ul className="space-y-2 mb-6">
                        {property.apartmentTypes.map((type, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{type}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <h3 className="text-lg font-semibold mb-3">{t("property-highlights")}</h3>
                  <ul className="space-y-2">
                    {property.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Property Details */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">{t("property-details")}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{t("property-type")}</span>
                        <span className="font-medium">{property.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{t("bedrooms")}</span>
                        <span className="font-medium">{property.beds}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{t("bathrooms")}</span>
                        <span className="font-medium">{property.baths}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{t("floor-area")}</span>
                        <span className="font-medium">{property.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{t("land-area")}</span>
                        <span className="font-medium">{property.landArea}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{t("year-built")}</span>
                        <span className="font-medium">{property.yearBuilt}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{t("floor")}</span>
                        <span className="font-medium">{property.floor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{t("parking")}</span>
                        <span className="font-medium">
                          {property.parking} {t("spaces")}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{t("furnished")}</span>
                        <span className="font-medium">{property.furnished}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{t("ownership")}</span>
                        <span className="font-medium">{property.ownership}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Информация о застройщике и условиях оплаты */}
                <div className="mb-8 mt-4">
                  <h2 className="text-2xl font-bold mb-4">Условия оплаты</h2>
                  <div className="border rounded-lg p-6 space-y-4">
                    <div className="pb-4 border-b">
                      <p className="font-medium">
                        Более 10 лет все проекты застройщика успешно сдаются в аренду и имеют высокую заполняемость.
                      </p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>При оплате 100% в течении 30 дней после бронирования - <strong>СКИДКА 10%</strong></span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>При оплате в беспроцентную рассрочку на 2 года - <strong>СКИДКА 5%</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Инфраструктура */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Инфраструктура</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border">
                        <feature.icon className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">{t("location")}</h2>
                  <div className="bg-muted/30 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium">{property.location}</span>
                    </div>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.9054441178745!2d98.28${propertyId === '1' ? '9' : '2'}!3d7.9${propertyId === '1' ? '9' : '8'}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031e2c462524f%3A0xe9ca9a85063dba21!2s${propertyId === '1' ? 'Bang+Tao+Beach' : 'Nayang+Beach'}%2C+Phuket%2C+Thailand!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title={`${property.title} Location Map`}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">{t("contact-agent")}</h3>
                      <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <Input placeholder={t("first-name")} />
                          <Input placeholder={t("last-name")} />
                        </div>
                        <Input placeholder={t("email")} type="email" />
                        <Input placeholder={t("phone")} type="tel" />
                        <Textarea
                          placeholder={t("message-placeholder")}
                          rows={4}
                          defaultValue={`I'm interested in ${property.title}`}
                        />
                        <Button className="w-full">
                          <Mail className="h-4 w-4 mr-2" />
                          {t("send-inquiry")}
                        </Button>
                      </form>

                      <Separator className="my-6" />

                      <div className="space-y-3">
                        <Button variant="outline" className="w-full">
                          <Phone className="h-4 w-4 mr-2" />
                          {t("call-now")}
                        </Button>
                        <Button variant="outline" className="w-full">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {t("whatsapp")}
                        </Button>
                      </div>

                      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-2">{t("agent-info")}</div>
                        <div className="font-medium">Yasmin Gold Company</div>
                        <div className="text-sm text-muted-foreground">080 949 4041</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Properties */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("similar-properties")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((property) => (
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
            <div className="text-center mt-8">
              <Link href="/properties">
                <Button variant="outline" size="lg">
                  {t("view-all-properties")}
                </Button>
              </Link>
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
