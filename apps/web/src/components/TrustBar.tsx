type TrustItem = {
  label: string
  value: string
}

type TrustBarProps = {
  items: TrustItem[]
}

function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8">
      <div className="grid gap-4 rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl bg-emerald-50/70 px-5 py-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              {item.label}
            </p>
            <p className="mt-2 text-base font-semibold text-stone-900">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar