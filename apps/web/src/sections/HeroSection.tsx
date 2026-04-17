type HeroSectionProps = {
  title: string
  subtitle: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
  imageUrl: string
  imageAlt: string
  location: string
}

function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  imageUrl,
  imageAlt,
  location,
}: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-emerald-50 to-transparent" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-16 md:grid-cols-2">
        <div className="relative z-10">
          <span className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
            Based in {location}
          </span>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
            {subtitle}
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-stone-950 md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
            >
              {primaryButtonText}
            </a>

            <a
              href="#gallery"
              className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-emerald-100 blur-2xl" />
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-stone-200 blur-2xl" />

          <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-3 shadow-xl">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="h-[540px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection