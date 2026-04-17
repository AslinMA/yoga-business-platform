type ContactItem = {
  label: string
  value: string
  href: string
}

type ContactSectionProps = {
  title: string
  description: string
  contacts: ContactItem[]
}

function ContactSection({
  title,
  description,
  contacts,
}: ContactSectionProps) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl bg-stone-900 p-8 text-white md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight">{title}</h2>

        <p className="mt-4 max-w-2xl leading-8 text-stone-300">{description}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <p className="text-sm text-stone-300">{contact.label}</p>
              <p className="mt-2 font-medium text-white">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection