type AboutSectionProps = {
  title: string
  description: string
}

function AboutSection({ title, description }: AboutSectionProps) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2 md:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-950">
            {title}
          </h2>
        </div>

        <div>
          <p className="text-base leading-8 text-stone-600">{description}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection