import { useState } from 'react'
import { supabase } from '../lib/supabase'

function ReviewForm() {
  const [fullName, setFullName] = useState('')
  const [studentRole, setStudentRole] = useState('')
  const [reviewText, setReviewText] = useState('')
  const [rating, setRating] = useState(5)
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('')
    setErrorMessage('')

    if (fullName.trim().length < 2) {
      setErrorMessage('Please enter your full name.')
      return
    }

    if (studentRole.trim().length < 2) {
      setErrorMessage('Please enter your student type or role.')
      return
    }

    if (reviewText.trim().length < 20) {
      setErrorMessage('Please write a slightly longer review.')
      return
    }

    setSubmitting(true)

    const { error } = await supabase.from('student_reviews').insert([
      {
        full_name: fullName.trim(),
        student_role: studentRole.trim(),
        review_text: reviewText.trim(),
        rating,
      },
    ])

    if (error) {
      setErrorMessage(error.message)
    } else {
      setMessage('Thank you. Your feedback was submitted for review.')
      setFullName('')
      setStudentRole('')
      setReviewText('')
      setRating(5)
    }

    setSubmitting(false)
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Share Your Experience
        </p>

        <h3 className="mt-3 text-3xl font-bold tracking-tight text-stone-950">
          Leave Your Feedback
        </h3>

        <p className="mt-4 max-w-2xl leading-8 text-stone-600">
          If you joined a session, you can submit your feedback here. Reviews are
          checked before they appear publicly on the website.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-stone-700">Full Name</span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-emerald-500"
                placeholder="Your full name"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-stone-700">Student Type</span>
              <input
                type="text"
                value={studentRole}
                onChange={(e) => setStudentRole(e.target.value)}
                className="rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-emerald-500"
                placeholder="Yoga Student / Private Session / Meditation Student"
              />
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-stone-700">Rating</span>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-emerald-500"
            >
              <option value={5}>5 - Excellent</option>
              <option value={4}>4 - Very Good</option>
              <option value={3}>3 - Good</option>
              <option value={2}>2 - Fair</option>
              <option value={1}>1 - Basic</option>
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-stone-700">Your Review</span>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={5}
              className="rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-emerald-500"
              placeholder="Write your experience here..."
            />
          </label>

          {errorMessage && (
            <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </p>
          )}

          {message && (
            <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              {message}
            </p>
          )}

          <div>
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ReviewForm