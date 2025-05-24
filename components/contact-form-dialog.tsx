"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface ContactFormDialogProps {
  buttonText: string
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  buttonSize?: "default" | "sm" | "lg" | "icon"
  buttonClassName?: string
  title?: string
  description?: string
  defaultMessage?: string
}

export default function ContactFormDialog({
  buttonText,
  buttonVariant = "default",
  buttonSize = "default",
  buttonClassName = "",
  title = "Связаться с нами",
  description = "Заполните форму, и мы свяжемся с вами в ближайшее время",
  defaultMessage = "",
}: ContactFormDialogProps) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setOpen(false)
    // Можно добавить уведомление об успешной отправке
    alert("Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} size={buttonSize} className={buttonClassName}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Имя</Label>
              <Input id="name" placeholder="Введите ваше имя" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" type="tel" placeholder="Введите ваш телефон" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Введите ваш email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea 
                id="message" 
                placeholder="Введите ваше сообщение" 
                rows={4}
                defaultValue={defaultMessage}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">
              <Mail className="mr-2 h-4 w-4" />
              Отправить
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
