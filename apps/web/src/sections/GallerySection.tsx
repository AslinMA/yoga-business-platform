type GalleryItem = {
  title: string
  category: string
  imageUrl: string
  alt: string
}

type GallerySectionProps = {
  title: string
  description: string
  items: GalleryItem[]
}

function GallerySection({ title, description, items }: GallerySectionProps) {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
          Gallery
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-950">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl leading-8 text-stone-600">{description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={`${item.category}-${item.title}`}
            className="overflow-hidden rounded-3xl bg-white shadow-sm"
          >
            <div className="relative">
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="h-72 w-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-stone-800">
                {item.category}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-stone-950">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default GallerySection