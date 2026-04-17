import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export type ApprovedReview = {
  id: number
  full_name: string
  student_role: string
  review_text: string
  rating: number
  created_at: string
}

export function useApprovedReviews() {
  const [reviews, setReviews] = useState<ApprovedReview[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadReviews() {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase
        .from('student_reviews')
        .select('id, full_name, student_role, review_text, rating, created_at')
        .eq('approved', true)
        .order('created_at', { ascending: false })

      if (error) {
        setError(error.message)
        setReviews([])
      } else {
        setReviews(data ?? [])
      }

      setLoading(false)
    }

    loadReviews()
  }, [])

  return { reviews, loading, error }
}