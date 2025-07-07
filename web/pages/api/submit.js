
export default async function handler(req, res) {
  const { id, feedback, rating } = req.body
  const resp = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/design_samples?id=eq.${id}`, {
    method: 'PATCH',
    headers: {
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ feedback_text: feedback, rating: parseInt(rating) })
  })
  res.status(200).json({ success: true })
}
