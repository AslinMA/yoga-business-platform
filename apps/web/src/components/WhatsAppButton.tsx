type WhatsAppButtonProps = {
  phoneNumber: string
  message: string
}

function WhatsAppButton({ phoneNumber, message }: WhatsAppButtonProps) {
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-600"
    >
      WhatsApp
    </a>
  )
}

export default WhatsAppButton