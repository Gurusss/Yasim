"use client"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, LocateIcon as LocationIcon, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()
  
  return (
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
  )
}
