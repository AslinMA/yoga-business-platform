import ReviewForm from '../components/ReviewForm'
import { useApprovedReviews } from '../hooks/useApprovedReviews'

type FallbackTestimonial = {
  name: string
  role: string
  quote: string
}

type TestimonialsSectionProps = {
  title: string
  description: string
  testimonials: FallbackTestimonial[]
}

function TestimonialsSection({
  title,
  description,
  testimonials,
}: TestimonialsSectionProps) {
  const { reviews, loading, error } = useApprovedReviews()

  const displayedReviews =
    reviews.length > 0
      ? reviews.map((review) => ({
          name: review.full_name,
          role: `${review.student_role} • ${review.rating}/5`,
          quote: review.review_text,
        }))
      : testimonials

  return (
    <>
      <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-950">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-stone-600">{description}</p>

          {loading && (
            <p className="mt-4 text-sm text-stone-500">Loading approved reviews...</p>
          )}

          {error && (
            <p className="mt-4 text-sm text-red-600">
              Could not load live reviews. Showing saved content instead.
            </p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {displayedReviews.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.role}-${testimonial.quote.slice(0, 20)}`}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <p className="text-base leading-8 text-stone-600">
                “{testimonial.quote}”
              </p>

              <div className="mt-6 border-t border-stone-200 pt-5">
                <h3 className="font-semibold text-stone-950">{testimonial.name}</h3>
                <p className="text-sm text-stone-500">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ReviewForm />
    </>
  )
}

export default TestimonialsSection