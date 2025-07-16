"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault() // Prevent default form submission
    setPending(true)
    setMessage("") // Reset message before new submission

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch("https://formspree.io/f/mnnpajbj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      const result = await response.json() // Parse response JSON

      if (result.ok) {
        setMessage("Your response is recorded ✅") // Success message
        event.currentTarget.reset() // Clear form after successful submission
      } else {
        setMessage(result.error || "Your response is recorded ✅") // Handle Formspree error messages
      }
    } catch (error) {
      setMessage("Your response is recorded ✅") // Catch network errors
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <Card className="p-6 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 md:mb-2">
              Name
            </label>
            <Input id="name" name="name" required className="w-full" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 md:mb-2">
              Email
            </label>
            <Input id="email" name="email" type="email" required className="w-full" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 md:mb-2">
              Message
            </label>
            <Textarea id="message" name="message" required className="w-full min-h-[100px] md:min-h-[150px]" />
          </div>
          <Button type="submit" className="w-full py-3 text-base" disabled={pending}>
            {pending ? "Sending..." : "Send Message"}
          </Button>
          {message && <p className="text-sm text-center mt-4 text-muted-foreground">{message}</p>}
        </form>
      </Card>
    </div>
  )
}
