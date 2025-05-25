"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { User } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ProfileForm() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          {t("profile")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("contact-information")}</DialogTitle>
          <DialogDescription>{t("contact-form-description")}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">{t("name")}</Label>
              <Input id="name" placeholder={t("enter-name")} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">{t("phone")}</Label>
              <Input id="phone" type="tel" placeholder={t("enter-phone")} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="telegram">{t("telegram")}</Label>
              <Input id="telegram" placeholder={t("enter-telegram")} />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">{t("send")}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
