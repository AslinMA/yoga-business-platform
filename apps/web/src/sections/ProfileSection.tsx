type ProfileSectionProps = {
  title: string
  description: string
  highlights: string[]
  location: string
  languages: string
  linkedinUrl: string
  showLinkedIn: boolean
}

function ProfileSection({
  title,
  description,
  highlights,
  location,
  languages,
  linkedinUrl,
  showLinkedIn,
}: ProfileSectionProps) {
  return (
    <section id="profile" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-[1.5fr_1fr] md:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Profile
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-950">
            {title}
          </h2>

          <p className="mt-5 leading-8 text-stone-600">{description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-6">
          <h3 className="text-lg font-semibold text-stone-950">
            Professional Details
          </h3>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                Location
              </p>
              <p className="mt-2 font-medium text-stone-900">{location}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                Teaching Language
              </p>
              <p className="mt-2 font-medium text-stone-900">{languages}</p>
            </div>

            {showLinkedIn && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  LinkedIn
                </p>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block font-medium text-emerald-700 transition hover:text-emerald-600"
                >
                  View Profile
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection