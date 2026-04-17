type ServiceItem = {
  title: string
  description: string
}

type ServicesSectionProps = {
  title: string
  services: ServiceItem[]
}

function ServicesSection({ title, services }: ServicesSectionProps) {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
          Services
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-950">
          {title}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-stone-950">{service.title}</h3>
            <p className="mt-4 leading-7 text-stone-600">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection