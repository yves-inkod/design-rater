
import { useState, useEffect } from 'react'

export default function Home() {
  const [sample, setSample] = useState(null)
  const [feedback, setFeedback] = useState('')
  const [rating, setRating] = useState(0)

  useEffect(() => {
    fetch('/api/sample').then(res => res.json()).then(setSample)
  }, [])

  const submit = async () => {
    await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: sample.id, feedback, rating })
    })
    window.location.reload()
  }

  if (!sample) return <div>Loading...</div>

  return (
    <div style={{ padding: 40 }}>
      <h1>{sample.title}</h1>
      <img src={sample.image_url} width="400" />
      <br />
      <label>Rating (1–5):</label>
      <input type="number" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)} />
      <br />
      <label>Feedback:</label>
      <textarea value={feedback} onChange={e => setFeedback(e.target.value)} />
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  )
}
