import { MessageCircle } from "lucide-react"

export function WhatsAppButton(props:any) {
  return (
    <a
      
      href="https://wa.me/5547999678465"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 ${props.className || ""}`}
    >
      <img src="/images/whatsapp.png" alt="WhatsApp" width={24} height={24} />
    </a>
  )
}