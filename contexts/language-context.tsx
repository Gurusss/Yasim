"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ru"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Initialize with browser language or default to English
  const [language, setLanguage] = useState<Language>("en")

  // Load saved language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ru")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    const translation = translations[language][key]
    return translation || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Translations object
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    home: "Home",
    properties: "Properties",
    rentals: "Rentals",
    "new-developments": "New Developments",
    investments: "Investments",
    about: "About",
    contact: "Contact",
    
    // 404 Page
    "page-not-found": "Page Not Found",
    "page-not-found-message": "Sorry, the page you are looking for doesn't exist or has been moved.",
    "back-to-home-404": "Back to Home",
    "sign-in": "Sign In",
    "get-started": "Get Started",
    "phuket-real-estate": "Gold Company",
    profile: "Profile",
    name: "Name",
    "enter-name": "Enter your name",
    telegram: "Telegram",
    "enter-telegram": "Enter your Telegram username",
    send: "Send",
    phuket: "Phuket",
    pattaya: "Pattaya",

    // Hero section
    "hero-title": "Find Your Dream Property in Paradise",
    "hero-subtitle":
      "Discover exclusive properties in Phuket's most desirable locations with Yasmin - Gold Company, your trusted partner in Thai real estate.",
    "explore-properties": "Explore Properties",
    "investment-opportunities": "Investment Opportunities",

    // Search tabs
    buy: "Buy",
    rent: "Rent",
    invest: "Invest",
    location: "Location",
    "any-location": "Any location",
    "property-type": "Property Type",
    "any-type": "Any type",
    apartment: "Apartment",
    villa: "Villa",
    penthouse: "Penthouse",
    land: "Land",
    "price-range": "Price Range",
    "any-price": "Any price",
    "monthly-rent": "Monthly Rent",
    "investment-type": "Investment Type",
    "roi-range": "ROI Range",
    "any-roi": "Any ROI",
    search: "Search",
    min: "Min",
    max: "Max",

    // Featured properties
    "featured-properties": "Featured Properties",
    "featured-properties-subtitle":
      "Discover our handpicked selection of premium properties in Phuket's most desirable locations.",
    "view-all-properties": "View all properties",
    "luxury-beachfront-villa": "Luxury Beachfront Villa",
    "modern-sea-view-apartment": "Modern Sea View Apartment",
    "tropical-pool-villa": "Tropical Pool Villa",
    beds: "Beds",
    baths: "Baths",

    // Rental properties
    "rental-properties": "Rental Properties",
    "rental-properties-subtitle": "Discover premium rental properties in Thailand's most sought-after destinations.",
    "view-all-rentals": "View all rentals",
    "beachfront-apartment-rental": "Beachfront Apartment",
    "luxury-villa-rental": "Luxury Villa",
    "modern-condo-rental": "Modern Condo",
    "hassle-free-rentals": "Hassle-Free Rental Experience",
    "hassle-free-rentals-subtitle":
      "Experience the best of Thailand with our premium rental services and full support.",
    "fully-furnished-properties": "Fully furnished properties ready to move in",
    "24-7-maintenance-support": "24/7 maintenance and customer support",
    "flexible-lease-terms": "Flexible lease terms from monthly to yearly",
    "prime-locations": "Prime locations near beaches, shopping, and amenities",
    "browse-rentals": "Browse Rentals",

    // Why choose section
    "why-choose-velaestate": "Why Choose Yasmin - Gold Company",
    "why-choose-subtitle":
      "With years of experience in the Phuket real estate market, we offer unparalleled expertise and personalized service.",
    "trusted-expertise": "Trusted Expertise",
    "trusted-expertise-description":
      "Our team of local experts has in-depth knowledge of the Phuket real estate market.",
    "international-network": "International Network",
    "international-network-description":
      "We serve clients from around the world with multilingual support and global perspective.",
    "legal-support": "Legal Support",
    "legal-support-description": "Full legal assistance with property transactions and Thai regulations.",
    "investment-guidance": "Investment Guidance",
    "investment-guidance-description":
      "Strategic investment advice to maximize your returns in the Thai property market.",
      
    // New Developments Page
    "new-developments-title": "New Developments in Phuket",
    "new-developments-subtitle": "Discover the best upcoming residential projects with excellent investment potential",
    "schedule-viewing": "Schedule Viewing",
    "download-brochure": "Download Brochure",
    "filter-properties": "Filter Properties",
    "reset-filters": "Reset Filters",
    "completion-date": "Completion Date",
    "sort-by": "Sort By",
    "featured": "Featured",
    "total-units": "Total Units",
    "unit-size": "Unit Size",
    "completion-status": "Completion Status",
    "payment-plan": "Payment Plan",
    "investment-potential": "Investment Potential",
    "buying-process": "Buying Process",
    "buying-process-subtitle": "Simple and straightforward process of buying a new property in Phuket",
    "step-1": "Consultation",
    "step-1-description": "Free consultation with our real estate experts",
    "step-2": "Property Selection",
    "step-2-description": "Selection of a property that meets your needs and budget",
    "step-3": "Reservation",
    "step-3-description": "Reserving the property with a deposit",
    "step-4": "Contract",
    "step-4-description": "Signing the purchase contract and agreeing on the payment schedule",
    "step-5": "Payment",
    "step-5-description": "Making payments according to the schedule or chosen payment plan",
    "step-6": "Handover",
    "step-6-description": "Receiving the keys after construction completion",
    "ready-to-invest": "Ready to Invest in a New Development in Phuket?",
    "ready-to-invest-subtitle": "Contact our team of experts for detailed information about new projects",
    "contact-sales-team": "Contact Sales Team",

    // New developments
    "new-dev-projects": "New Developments",
    "new-dev-projects-subtitle": "Exclusive pre-launch and off-plan properties with attractive early-bird pricing.",
    "view-all-developments": "View all developments",
    "pre-launch": "Pre-Launch",
    "under-construction": "Under Construction",
    beachfront: "Beachfront",
    hillside: "Hillside",
    "view-details": "View Details",
    from: "From",
    "the-horizon-residences": "The Horizon Residences",
    "the-horizon-residences-description":
      "Luxury beachfront condominiums with panoramic sea views, infinity pools, and 5-star amenities. Early investors enjoy up to 25% discount.",
    "serenity-villas": "Serenity Villas",
    "serenity-villas-description":
      "Private pool villas with tropical gardens, smart home technology, and 24/7 security. Only 12 exclusive units available.",

    // Investment section
    "maximize-your-investment": "Maximize Your Investment in Thailand's Growing Market",
    "maximize-your-investment-subtitle":
      "Phuket's real estate market offers attractive returns with property appreciation of 5-15% annually and rental yields of 6-10%. Our investment packages are designed to maximize your ROI while minimizing hassle.",
    "guaranteed-rental-returns": "Guaranteed rental returns of 6-10% for the first 5 years",
    "professional-property-management": "Professional property management services",
    "flexible-exit-strategies": "Flexible exit strategies with resale assistance",
    "transparent-fee-structure": "Transparent fee structure with no hidden costs",
    "download-investment-guide": "Download Investment Guide",

    // CTA section
    "ready-to-find-your-dream-property": "Ready to Find Your Dream Property in Phuket?",
    "ready-to-find-your-dream-property-subtitle":
      "Schedule a consultation with our expert team to discuss your real estate needs and investment goals.",
    "contact-us": "Contact Us",
    "schedule-consultation": "Schedule Consultation",

    // Footer
    "footer-description":
      "Your trusted partner for real estate in Phuket, Thailand. We help you find your dream property or maximize your investment.",
    "quick-links": "Quick Links",
    "services-footer": "Services",
    "buying-property": "Buying Property",
    "selling-property": "Selling Property",
    "rental-services": "Rental Services",
    "legal-services": "Legal Support",
    "visa-residency": "Visa & Residency",
    "property-management-service": "Property Management",
    "contact-us-footer": "Contact Us",
    "office-address": "Office Address",
    phone: "Phone",
    email: "Email",
    copyright: "© 2025 Yasmin - Gold Company. All rights reserved.",
    "terms-conditions": "Terms & Conditions",
    "privacy-policy": "Privacy Policy",
    "cookies-policy": "Cookies Policy",
    "areas-guide": "Areas Guide",
    "all-rights-reserved": "All rights reserved",

    // Properties page
    "properties-title": "Properties",
    "properties-subtitle": "Browse our exclusive selection of properties in Phuket",
    "back-to-home": "Back to Home",
    "filters-property": "Filters",
    reset: "Reset",
    bedrooms: "Bedrooms",
    bathrooms: "Bathrooms",
    area: "Area",
    features: "Features",
    "swimming-pool": "Swimming Pool",
    garden: "Garden",
    "sea-view": "Sea View",
    gym: "Gym",
    security: "24/7 Security",
    "apply-filters": "Apply Filters",
    "search-properties": "Search properties...",
    "sort-featured": "Sort: Featured",
    "price-low-to-high": "Price: Low to High",
    "price-high-to-low": "Price: High to Low",
    "newest-first": "Newest First",
    any: "Any",
    language: "Language",
    "list-view": "List view",
    "grid-view": "Grid view",
    "previous-page": "Previous page",
    "next-page": "Next page",
    other: "Other",
    "deal-type": "Deal Type",

    // Property Detail Page
    "per-sqm": "per m²",
    "more-photos": "more photos",
    "show-all-photos": "Show all photos",
    "property-description": "Property Description",
    "property-highlights": "Property Highlights",
    "property-details": "Property Details",
    "floor-area": "Floor Area",
    "land-area": "Land Area",
    "year-built": "Year Built",
    floor: "Floor",
    parking: "Parking",
    spaces: "spaces",
    furnished: "Furnished",
    ownership: "Ownership",
    "features-amenities": "Features & Amenities",
    "interactive-map": "Interactive Map",
    "contact-agent": "Contact Agent",
    "first-name": "First Name",
    "last-name": "Last Name",
    "message-placeholder": "I would like to know more about this property...",
    "send-inquiry": "Send Inquiry",
    "call-now": "Call Now",
    whatsapp: "WhatsApp",
    "agent-info": "Agent Information",
    "similar-properties": "Similar Properties",
  },
  ru: {
    // Navigation
    home: "Главная",
    properties: "Объекты",
    rentals: "Аренда",
    "new-developments": "Новостройки",
    investments: "Инвестиции",
    about: "О нас",
    contact: "Контакты",
    "sign-in": "Войти",
    "get-started": "Начать",
    "phuket-real-estate": "Gold Company",
    profile: "Профиль",
    name: "Имя",
    "enter-name": "Введите ваше имя",
    telegram: "Телеграм",
    "enter-telegram": "Введите ваш Телеграм",
    send: "Отправить",
    phuket: "Пхукет",
    pattaya: "Паттайя",

    // Hero section
    "hero-title": "Найдите недвижимость своей мечты в раю",
    "hero-subtitle":
      "Откройте для себя эксклюзивные объекты недвижимости в самых желанных местах Пхукета с Yasmin - Gold Company, вашим надежным партнером на рынке недвижимости Таиланда.",
    "explore-properties": "Изучить объекты",
    "investment-opportunities": "Инвестиционные возможности",

    // Search tabs
    buy: "Купить",
    rent: "Аренда",
    invest: "Инвестировать",
    location: "Расположение",
    "any-location": "Любое расположение",
    "property-type": "Тип недвижимости",
    "any-type": "Любой тип",
    apartment: "Апартаменты",
    villa: "Вилла",
    penthouse: "Пентхаус",
    land: "Земля",
    "price-range": "Ценовой диапазон",
    "any-price": "Любая цена",
    "monthly-rent": "Ежемесячная аренда",
    "investment-type": "Тип инвестиций",
    "roi-range": "Диапазон доходности",
    "any-roi": "Любая доходность",
    search: "Поиск",
    min: "Мин",
    max: "Макс",

    // Featured properties
    "featured-properties": "Избранные объекты",
    "featured-properties-subtitle":
      "Откройте для себя нашу тщательно отобранную коллекцию премиальных объектов недвижимости в самых желанных местах Пхукета.",
    "view-all-properties": "Посмотреть все объекты",
    "luxury-beachfront-villa": "Роскошная вилла на берегу",
    "modern-sea-view-apartment": "Современные апартаменты с видом на море",
    "tropical-pool-villa": "Тропическая вилла с бассейном",
    beds: "Спальни",
    baths: "Ванные",

    // Rental properties
    "rental-properties": "Аренда недвижимости",
    "rental-properties-subtitle": "Откройте для себя премиальную аренду в самых востребованных местах Таиланда.",
    "view-all-rentals": "Посмотреть всю аренду",
    "beachfront-apartment-rental": "Апартаменты у пляжа",
    "luxury-villa-rental": "Роскошная вилла",
    "modern-condo-rental": "Современное кондо",
    "hassle-free-rentals": "Беззаботная аренда",
    "hassle-free-rentals-subtitle":
      "Испытайте лучшее в Таиланде с нашими премиальными услугами аренды и полной поддержкой.",
    "fully-furnished-properties": "Полностью меблированные объекты готовые к заселению",
    "24-7-maintenance-support": "Круглосуточная поддержка и обслуживание",
    "flexible-lease-terms": "Гибкие условия аренды от месячной до годовой",
    "prime-locations": "Престижные локации рядом с пляжами, магазинами и удобствами",
    "browse-rentals": "Просмотреть аренду",

    // Why choose section
    "why-choose-velaestate": "Почему выбирают Yasmin - Gold Company",
    "why-choose-subtitle":
      "Благодаря многолетнему опыту на рынке недвижимости Пхукета, мы предлагаем непревзойденный опыт и персонализированный сервис.",
    "trusted-expertise": "Проверенный опыт",
    "trusted-expertise-description":
      "Наша команда местных экспертов обладает глубокими знаниями рынка недвижимости Пхукета.",
    "international-network": "Международная сеть",
    "international-network-description":
      "Мы обслуживаем клиентов со всего мира с многоязычной поддержкой и глобальной перспективой.",
    "legal-support": "Юридическая поддержка",
    "legal-support-description": "Полная юридическая помощь при сделках с недвижимостью и тайским законодательством.",
    "investment-guidance-description":
      "",

    // New developments
    "new-dev-projects-ru": "",
    "new-dev-projects": "New Projects",
    "new-dev-projects-subtitle-ru":
      "",
    "view-all-developments": "",
    "pre-launch": "",
    "under-construction": "",
    beachfront: "",
    hillside: "",

    // New Developments Page
    "new-developments-title": "Новые жилые комплексы на Пхукете",
    "new-developments-subtitle": "Откройте для себя лучшие строящиеся комплексы с отличным инвестиционным потенциалом",
    "schedule-viewing": "Запланировать просмотр",
    "download-brochure": "Скачать брошюру",
    "filter-properties": "Фильтр объектов",
    "reset-filters": "Сбросить фильтры",
    "completion-date": "Дата завершения",
    "sort-by": "Сортировать по",
    "featured": "Рекомендуемые",
    "total-units": "Всего юнитов",
    "unit-size": "Размер юнита",
    "completion-status": "Статус строительства",
    "payment-plan": "План оплаты",
    "investment-potential": "Инвестиционный потенциал",
    "view-details": "Подробнее",
    "buying-process": "Процесс покупки",
    "buying-process-subtitle": "Простой и понятный процесс покупки новостройки на Пхукете",
    "step-1": "Консультация",
    "step-1-description": "Бесплатная консультация с нашими экспертами по недвижимости",
    "step-2": "Выбор объекта",
    "step-2-description": "Подбор объекта, соответствующего вашим потребностям и бюджету",
    "step-3": "Бронирование",
    "step-3-description": "Бронирование объекта с внесением депозита",
    "step-4": "Договор",
    "step-4-description": "Подписание договора купли-продажи и согласование графика платежей",
    "step-5": "Оплата",
    "step-5-description": "Внесение платежей согласно графику или выбранному плану оплаты",
    "step-6": "Передача ключей",
    "step-6-description": "Получение ключей после завершения строительства",
    "ready-to-invest": "Готовы инвестировать в новостройку на Пхукете?",
    "ready-to-invest-subtitle": "Свяжитесь с нашей командой экспертов для получения подробной информации о новых проектах",
    "contact-sales-team": "Связаться с отделом продаж",
    from: "От",
    "the-horizon-residences": "Резиденции Горизонт",
    "the-horizon-residences-description":
      "Роскошные кондоминиумы на берегу моря с панорамным видом на море, бассейнами-инфинити и удобствами 5 звезд. Ранние инвесторы получают скидку до 25%.",
    "serenity-villas": "Виллы Безмятежность",
    "serenity-villas-description":
      "Частные виллы с бассейном, тропическими садами, технологией умного дома и круглосуточной охраной. Доступно только 12 эксклюзивных объектов.",

    // Investment section
    "investment-page-title": "Инвестиции в недвижимость Таиланда",
    "investment-page-subtitle": "Надежные инвестиции с высокой доходностью в одном из самых популярных туристических направлений мира",
    "annual-return": "Годовая доходность",
    "minimum-entry": "Минимальная сумма",
    "payback-period": "Срок окупаемости",
    "investment-products": "Инвестиционные продукты",
    "investment-products-subtitle": "Выберите инвестиционный продукт, который соответствует вашим целям и бюджету",
    "beach-villas": "Виллы на пляже",
    "beach-villas-description": "Роскошные виллы с видом на море в престижных районах с высоким потенциалом роста стоимости и стабильным доходом от аренды",
    "condominiums": "Кондоминиумы",
    "condominiums-description": "Современные апартаменты в популярных районах с полным управлением и гарантированной доходностью",
    "commercial-real-estate": "Коммерческая недвижимость",
    "commercial-property": "Коммерческая недвижимость",
    "commercial-property-description": "Высокодоходные объекты коммерческой недвижимости с долгосрочными арендаторами и стабильным денежным потоком",
    "newbuild-investments-ru": "Новостройки",
    "newbuild-investments-description-ru": "Инвестиции на ранней стадии строительства с максимальным потенциалом роста стоимости и привлекательными скидками",
    "starting-amount": "Начальная сумма",
    "annual-yield": "Годовая доходность",
    "payback": "Окупаемость",
    "locations": "Локации",
    "format": "Формат",
    "hotels-restaurants-spa": "Отели, рестораны, спа",
    "select-villa": "Выбрать виллу",
    "choose-condo": "Выбрать кондоминиум",
    "select-commercial": "Выбрать коммерческий объект",
    "select-newbuild": "Выбрать новостройку",
    "investment-calculator": "Калькулятор инвестиций",
    "investment-calculator-subtitle": "Рассчитайте потенциальную доходность вашей инвестиции в недвижимость Таиланда",
    "property-type-investment": "Тип недвижимости",
    "villa-type": "Вилла",
    "condo-type": "Кондоминиум",
    "profitability-calculator": "Калькулятор доходности",
    "calculator-subtitle": "Рассчитайте потенциальную доходность ваших инвестиций в недвижимость Таиланда",
    "calculate-profit": "Рассчитайте вашу прибыль",
    "commercial": "Коммерческая",
    "newbuild": "Новостройка",
    "investment-amount": "Сумма инвестиций",
    "investment-period": "Период инвестиций",
    "years": "лет",
    "your-results": "Ваши результаты",
    "total-return": "Общая доходность",
    "monthly-income": "Ежемесячный доход",
    "total-income": "Общий доход за",
    "get-consultation": "Получить консультацию",
    "maximize-your-investment": "Максимизируйте свои инвестиции на растущем рынке Таиланда",
    "maximize-your-investment-subtitle":
      "Рынок недвижимости Пхукета предлагает привлекательную доходность с ростом стоимости недвижимости 5-15% в год и доходностью от аренды 6-10%. Наши инвестиционные пакеты разработаны для максимизации вашей прибыли при минимальных хлопотах.",
    "guaranteed-rental-returns": "Гарантированная доходность от аренды 6-10% в течение первых 5 лет",
    "professional-property-management": "Профессиональные услуги управления недвижимостью",
    "flexible-exit-strategies": "Гибкие стратегии выхода с помощью в перепродаже",
    "transparent-fee-structure": "Прозрачная структура комиссий без скрытых расходов",
    "download-investment-guide": "Скачать инвестиционное руководство",
    "consultation": "Консультация",
    "consultation-hours": "Пн-Пт: 10:00 - 18:00",
    "write": "Написать",
    "send-email": "Отправить email",
    "whatsapp-telegram": "WhatsApp / Telegram",
    "advantage": "Преимущество",
    "price-growth": "Рост стоимости до 30%",
    "view-projects": "Посмотреть проекты",

    // CTA section
    "ready-to-find-your-dream-property": "Готовы найти недвижимость своей мечты на Пхукете?",
    "ready-to-find-your-dream-property-subtitle":
      "Запланируйте консультацию с нашей командой экспертов для обсуждения ваших потребностей в недвижимости и инвестиционных целей.",
    "contact-us": "Связаться с нами",
    "schedule-consultation": "Запланировать консультацию",

    // Footer
    "footer-description":
      "Ваш надежный партнер по недвижимости на Пхукете, Таиланд. Мы помогаем вам найти недвижимость мечты или максимизировать ваши инвестиции.",
    "quick-links": "Быстрые ссылки",
    "services-footer": "Услуги",
    "buying-property": "Покупка недвижимости",
    "selling-property": "Продажа недвижимости",
    "rental-services": "Услуги аренды",
    "legal-services": "Юридическая поддержка",
    "visa-residency": "Виза и резидентство",
    "property-management-service": "Управление недвижимостью",

    // 404 Page
    "page-not-found": "Страница не найдена",
    "page-not-found-message": "Извините, страница, которую вы ищете, не существует или была перемещена.",
    "back-to-home-404": "Вернуться на главную",
    "contact-us-footer": "Связаться с нами",
    "office-address": "Адрес офиса",
    phone: "Телефон",
    email: "Электронная почта",
    copyright: "© 2025 Yasmin - Gold Company. Все права защищены.",
    "terms-conditions": "Условия использования",
    "privacy-policy": "Политика конфиденциальности",
    "cookies-policy": "Политика файлов cookie",
    "areas-guide": "Гид по районам",
    "all-rights-reserved": "Все права защищены",

    // Properties page
    "properties-title": "Объекты недвижимости",
    "properties-subtitle": "Просмотрите нашу эксклюзивную подборку недвижимости на Пхукете",
    "back-to-home": "Вернуться на главную",
    "filters-property": "Фильтры",
    reset: "Сбросить",
    bedrooms: "Спальни",
    bathrooms: "Ванные комнаты",
    area: "Район",
    features: "Особенности",
    "swimming-pool": "Бассейн",
    garden: "Сад",
    "sea-view": "Вид на море",
    gym: "Спортзал",
    security: "Охрана 24/7",
    "apply-filters": "Применить фильтры",
    "search-properties": "Поиск недвижимости...",
    "sort-featured": "Рекомендуемые",
    "price-low-to-high": "Цена: от низкой к высокой",
    "price-high-to-low": "Цена: от высокой к низкой",
    "newest-first": "Сначала новые",
    any: "Любой",
    language: "Язык",
    "list-view": "Список",
    "grid-view": "Сетка",
    "previous-page": "Предыдущая страница",
    "next-page": "Следующая страница",
    other: "Другое",
    "deal-type": "Тип сделки",

    // Property Detail Page
    "per-sqm": "за м²",
    "more-photos": "еще фото",
    "show-all-photos": "Показать все фото",
    "property-description": "Описание объекта",
    "property-highlights": "Особенности объекта",
    "property-details": "Детали объекта",
    "floor-area": "Площадь",
    "land-area": "Площадь участка",
    "year-built": "Год постройки",
    floor: "Этаж",
    parking: "Парковка",
    spaces: "мест",
    furnished: "Мебель",
    ownership: "Право собственности",
    "features-amenities": "Особенности и удобства",
    "interactive-map": "Интерактивная карта",
    "contact-agent": "Связаться с агентом",
    "first-name": "Имя",
    "last-name": "Фамилия",
    "message-placeholder": "Я хотел бы узнать больше об этом объекте...",
    "send-inquiry": "Отправить запрос",
    "call-now": "Позвонить",
    whatsapp: "WhatsApp",
    "agent-info": "Информация об агенте",
    "similar-properties": "Похожие объекты",
  },
}
