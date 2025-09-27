'use client'

import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white border-b border-neutral-200 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-text mb-2">Terms of Use</h1>
          <p className="text-neutral-600">Effective: 2025-01-01</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8 prose max-w-none">
        <h2>1. Educational Purpose Only</h2>
        <p>Frehab provides educational content and self-help tools. It is not a substitute for medical or mental health care. If you are in crisis, call 988 (US) or your local emergency number.</p>

        <h2>2. No Medical Advice</h2>
        <p>Content is for informational purposes and does not constitute medical advice, diagnosis, or treatment.</p>

        <h2>3. Privacy</h2>
        <p>See our <Link href="/privacy">Privacy Policy</Link> for how we handle data.</p>

        <h2>4. User Responsibilities</h2>
        <ul>
          <li>Use the platform lawfully and respectfully.</li>
          <li>Consult professionals for medical decisions.</li>
          <li>Do not misuse interactive tools or community features.</li>
        </ul>

        <h2>5. Warranty Disclaimer</h2>
        <p>Provided "as is" without warranties of any kind. We do not guarantee outcomes.</p>

        <h2>6. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Frehab is not liable for damages arising from platform use.</p>

        <h2>7. Changes</h2>
        <p>We may update these terms. Continued use means acceptance.</p>

        <h2>Contact</h2>
        <p>Questions? Email us at here.is.alex@gmail.com.</p>
      </div>
    </div>
  )
}


