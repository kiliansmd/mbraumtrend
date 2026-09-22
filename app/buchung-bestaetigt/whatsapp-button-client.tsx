"use client"

import { WhatsAppTriggerButton } from "@/components/whatsapp-chat"
import { MessageCircle } from "lucide-react"

export function WhatsAppButtonClient() {
  return (
    <WhatsAppTriggerButton className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium h-10 px-4 py-2 rounded-md transition-colors">
      <MessageCircle className="h-4 w-4" />
      WhatsApp schreiben
    </WhatsAppTriggerButton>
  )
}
