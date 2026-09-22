"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { X, Send, Check, CheckCheck } from "lucide-react"

const WHATSAPP_NUMBER = "4917623100265"

interface Message {
  id: number
  text: string
  isUser: boolean
  time: string
  status?: "sent" | "delivered" | "read"
}

// Floating WhatsApp button for bottom-right corner
export function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2 bg-[#147d3c] hover:bg-[#106331] text-white font-medium pl-4 pr-5 py-3 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300"
        aria-label="WhatsApp Chat starten"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="text-sm font-medium">Chat starten</span>
      </button>

      {isOpen && <WhatsAppChatWindow onClose={() => setIsOpen(false)} />}
    </>
  )
}

// Export a standalone button that can be used anywhere
export function WhatsAppChatButton({ className = "" }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center gap-2 bg-[#147d3c] hover:bg-[#106331] text-white font-medium px-3 py-2 rounded-lg shadow-md shadow-[#25D366]/25 transition-all duration-300 ${className}`}
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
      </button>

      {isOpen && <WhatsAppChatWindow onClose={() => setIsOpen(false)} />}
    </>
  )
}

// Generic trigger button that accepts children - for custom styling
export function WhatsAppTriggerButton({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={className}
        type="button"
      >
        {children}
      </button>

      {isOpen && <WhatsAppChatWindow onClose={() => setIsOpen(false)} />}
    </>
  )
}

// Separate window component for reuse - uses portal to ensure proper stacking
function WhatsAppChatWindow({ onClose }: { onClose: () => void }) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hallo! Schreiben Sie mir hier Ihre Frage - ich antworte persönlich innerhalb weniger Minuten.",
      isUser: false,
      time: new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    // Trigger animation after mount
    requestAnimationFrame(() => setIsVisible(true))
    setTimeout(() => inputRef.current?.focus(), 100)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    const previousFocus = document.activeElement as HTMLElement | null
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
      if (event.key !== "Tab" || !dialogRef.current) return
      const elements = [...dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), textarea, a[href]')]
      const first = elements[0]
      const last = elements[elements.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }
    document.addEventListener("keydown", handleKey)
    return () => { document.removeEventListener("keydown", handleKey); previousFocus?.focus({ preventScroll: true }) }
  }, [mounted, onClose])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })
  }

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 200)
  }

  const handleSendMessage = () => {
    if (!message.trim()) return

    const userMessage = message.trim()
    
    const newMessage: Message = {
      id: Date.now(),
      text: userMessage,
      isUser: true,
      time: getCurrentTime(),
      status: "sent",
    }
    setMessages((prev) => [...prev, newMessage])
    setMessage("")

    setIsTyping(true)
    
    setTimeout(() => {
      setIsTyping(false)
      
      setMessages((prev) =>
        prev.map((m) => (m.id === newMessage.id ? { ...m, status: "delivered" } : m))
      )

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(userMessage)}`
      window.open(whatsappUrl, "_blank", "noopener,noreferrer")
      
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text: "WhatsApp wurde geöffnet. Ihre Nachricht wartet dort auf Sie!",
            isUser: false,
            time: getCurrentTime(),
          },
        ])
      }, 500)
    }, 800)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const suggestedMessages = [
    "Kostenlose Beratung anfragen",
    "Angebot für Malerarbeiten",
    "Termin vereinbaren",
  ]

  // Don't render until mounted (for portal)
  if (!mounted) return null

  const modalContent = (
    <div 
      className={`fixed inset-0 flex items-center justify-center p-4 transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        zIndex: 99999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/75 transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Chat Window */}
      <div 
        className={`relative w-full max-w-[420px] h-[min(600px,85vh)] bg-[#E5DDD5] rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
          isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="whatsapp-chat-title"
      >
        <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-[#147d3c] flex items-center justify-center shrink-0">
            <span className="text-lg font-bold">mb</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 id="whatsapp-chat-title" className="font-semibold truncate">mb.Raumtrend</h3>
            <p className="text-xs text-white/80">Antwort in wenigen Minuten</p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Chat schliessen"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#ECE5DD]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-lg px-3 py-2 shadow-sm ${
                  msg.isUser
                    ? "bg-[#DCF8C6] rounded-tr-none"
                    : "bg-white rounded-tl-none"
                }`}
              >
                <p className="text-sm text-gray-800 whitespace-pre-wrap break-words">
                  {msg.text}
                </p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <span className="text-[10px] text-gray-500">{msg.time}</span>
                  {msg.isUser && msg.status && (
                    <span className="text-gray-500">
                      {msg.status === "sent" && <Check className="h-3 w-3" />}
                      {msg.status === "delivered" && <CheckCheck className="h-3 w-3" />}
                      {msg.status === "read" && <CheckCheck className="h-3 w-3 text-[#53BDEB]" />}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {messages.length === 1 && (
          <div className="px-4 pb-2 flex flex-wrap gap-2">
            {suggestedMessages.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setMessage(suggestion)}
                className="text-xs bg-white/80 hover:bg-white text-gray-700 px-3 py-1.5 rounded-full border border-[#25D366]/30 hover:border-[#25D366] transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        <div className="bg-[#F0F0F0] px-3 py-2 flex items-end gap-2 shrink-0">
          <div className="flex-1 bg-white rounded-3xl px-4 py-2 flex items-end">
            <textarea
              ref={inputRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nachricht eingeben..."
              className="flex-1 bg-transparent text-sm resize-none outline-none max-h-24 min-h-[24px]"
              rows={1}
              style={{
                height: "auto",
                minHeight: "24px",
              }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement
                target.style.height = "auto"
                target.style.height = `${Math.min(target.scrollHeight, 96)}px`
              }}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className="w-10 h-10 rounded-full bg-[#147d3c] hover:bg-[#106331] disabled:bg-gray-300 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors shrink-0"
            aria-label="Nachricht senden"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>

        <div className="bg-[#F0F0F0] px-4 py-2 text-center border-t border-gray-200">
          <p className="text-[10px] text-gray-500">
            Powered by WhatsApp Business
          </p>
        </div>
      </div>
    </div>
  )

  // Render modal in a portal to escape any CSS stacking context issues
  return createPortal(modalContent, document.body)
}
