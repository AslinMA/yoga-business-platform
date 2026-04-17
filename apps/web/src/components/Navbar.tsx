type NavbarProps = {
  brandName: string
}

function Navbar({ brandName }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-tight text-stone-900">
          {brandName}
        </a>

        <nav className="hidden gap-6 text-sm font-medium text-stone-600 md:flex">
          <a href="#profile" className="transition hover:text-emerald-700">
            Profile
          </a>
          <a href="#gallery" className="transition hover:text-emerald-700">
            Gallery
          </a>
          <a href="#services" className="transition hover:text-emerald-700">
            Services
          </a>
          <a href="#pricing" className="transition hover:text-emerald-700">
            Pricing
          </a>
          <a href="#testimonials" className="transition hover:text-emerald-700">
            Reviews
          </a>
          <a href="#contact" className="transition hover:text-emerald-700">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar