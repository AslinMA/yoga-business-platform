type PricingPlan = {
  title: string
  price: string
  description: string
  features: string[]
  featured?: boolean
}

type PricingSectionProps = {
  title: string
  description: string
  plans: PricingPlan[]
}

function PricingSection({
  title,
  description,
  plans,
}: PricingSectionProps) {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
          Pricing
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-950">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl leading-8 text-stone-600">{description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className={`rounded-3xl p-8 shadow-sm transition hover:-translate-y-1 ${
              plan.featured
                ? 'border border-stone-900 bg-stone-900 text-white'
                : 'bg-white text-stone-900'
            }`}
          >
            <p
              className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                plan.featured ? 'text-stone-300' : 'text-stone-500'
              }`}
            >
              {plan.title}
            </p>

            <h3 className="mt-4 text-4xl font-bold">{plan.price}</h3>

            <p
              className={`mt-4 leading-7 ${
                plan.featured ? 'text-stone-300' : 'text-stone-600'
              }`}
            >
              {plan.description}
            </p>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className={`text-sm ${
                    plan.featured ? 'text-stone-200' : 'text-stone-700'
                  }`}
                >
                  • {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`mt-8 inline-block rounded-full px-5 py-3 text-sm font-semibold transition ${
                plan.featured
                  ? 'bg-white text-stone-900 hover:bg-stone-200'
                  : 'bg-stone-900 text-white hover:bg-stone-700'
              }`}
            >
              Choose Plan
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PricingSection