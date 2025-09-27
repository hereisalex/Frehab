export default function VisionPage() {
  const sections: Array<React.ReactNode> = [
    (
      <>
        <h2>Our Vision: A New Path to Recovery</h2>
        <p>
          The path to getting help can feel like a relic from a different world. It’s a rigid, one-size-fits-all system that demands a complete pause on your life—your career, your finances, your privacy. It often forces a public surrender, broadcasting a message of personal failure as the price of admission. Because of these barriers, the vast majority of people who need support never seek it, leaving millions to struggle in the silent gap between the life they have and the help they desperately need.
        </p>
      </>
    ),
    (
      <>
        <p>Frehab was built to fill that gap.</p>
        <p>
          Our vision is to create a modern, responsive, and deeply compassionate online ecosystem where anyone, anywhere, can find the tools and community needed to begin their journey toward freedom from addiction.
        </p>
      </>
    ),
    (
      <>
        <h3>Our Mission</h3>
        <p>
          To provide a comprehensive, evidence-based, and community-powered path to recovery that is accessible to everyone, forever. We empower our users with the practical skills to not only stop their destructive behaviors but also to build a life they don’t want to escape from.
        </p>
      </>
    ),
    (
      <>
        <h3>Our Philosophy: How We’re Different</h3>
        <p>
          Frehab is built on a unique set of principles designed to create a truly effective and supportive experience.
        </p>
      </>
    ),
    (
      <>
        <h4>1. A Structured, Guided Path</h4>
        <p>
          Inspired by the success of open-source learning platforms like The Odin Project, we believe in structure. Instead of offering a confusing toolbox of resources, Frehab provides a linear, step-by-step Core Program. Each module builds on the last, guiding users from an honest self-assessment to long-term relapse prevention, creating a clear and manageable journey.
        </p>
      </>
    ),
    (
      <>
        <h4>2. A Program as Unique as You Are</h4>
        <p>
          We recognize that every recovery journey is different. Our “Core + Multi-Specialization” model combines a universal curriculum—the “operating system” of recovery—with specialized content blocks tailored to the specific addictions a user selects. Whether your focus is on alcohol, stimulants, opiates, gambling, or a combination, the program adapts to provide relevant, specific insights that speak directly to your experience.
        </p>
      </>
    ),
    (
      <>
        <h4>3. All Paths Lead to a Better Life</h4>
        <p>
          Frehab is an inclusive platform that respects every path to recovery. We believe in empowering our users, not prescribing a single ideology. Our “Personal Goal Tracker” allows you to define success on your own terms, whether your goal is total abstinence, moderation, or building a new positive habit. Your journey is yours to define.
        </p>
      </>
    ),
    (
      <>
        <h4>4. The Dual-Track Curriculum: Surviving vs. Thriving</h4>
        <p>
          It’s not enough to simply remove a negative behavior. True recovery involves building a positive future. Our curriculum is built on two parallel tracks:
        </p>
        <p>
          <strong>The Foundation (How to Stop)</strong>: We provide the essential, evidence-based skills (from CBT, DBT, and more) to manage cravings, handle triggers, and regulate emotions.
        </p>
        <p>
          <strong>The Framework (How to Live)</strong>: We guide you through the process of proactively designing a life filled with purpose, healthy relationships, and new passions, creating a future that is more compelling than the past.
        </p>
      </>
    ),
    (
      <>
        <h4>5. Community, Connection, and Humor</h4>
        <p>
          Addiction thrives in isolation; recovery thrives in connection. Our platform is designed to foster a safe, supportive community where peers can share their experiences without judgment. We also believe in the healing power of humor—the ability to find lightness and solidarity in the shared absurdity of the journey. Frehab is a platform built for real people, with real personality.
        </p>
      </>
    ),
    (
      <>
        <h3>Our Promise</h3>
        <ul>
          <li>
            <strong>Free</strong>: Cost will never be a barrier to entry.
          </li>
          <li>
            <strong>Anonymous</strong>: Your privacy is sacred. You are in control of your data.
          </li>
          <li>
            <strong>Supportive</strong>: We are committed to creating a compassionate, non-judgmental space for healing and growth.
          </li>
        </ul>
      </>
    ),
    (
      <>
        <p>
          <strong>Welcome to Frehab. Welcome to your next chapter.</strong>
        </p>
      </>
    ),
  ]

  const blobPalettes: Array<{ a: string; b: string }> = [
    { a: 'bg-teal-200', b: 'bg-amber-200' },
    { a: 'bg-indigo-200', b: 'bg-sky-200' },
    { a: 'bg-emerald-200', b: 'bg-lime-200' },
    { a: 'bg-cyan-200', b: 'bg-fuchsia-200' },
    { a: 'bg-rose-200', b: 'bg-orange-200' },
    { a: 'bg-violet-200', b: 'bg-cyan-200' },
    { a: 'bg-amber-200', b: 'bg-teal-200' },
    { a: 'bg-sky-200', b: 'bg-indigo-200' },
    { a: 'bg-lime-200', b: 'bg-emerald-200' },
    { a: 'bg-orange-200', b: 'bg-rose-200' },
  ]

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-neutral-50 text-neutral-700">
      {sections.map((content, index) => {
        const palette = blobPalettes[index % blobPalettes.length]
        return (
          <section key={index} className="relative h-screen snap-start flex items-center overflow-hidden">
            {/* Decorative grid */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(2, 6, 23, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(2, 6, 23, 0.04) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                maskImage:
                  'radial-gradient(80% 60% at 50% 45%, black, transparent 75%)',
                WebkitMaskImage:
                  'radial-gradient(80% 60% at 50% 45%, black, transparent 75%)',
              }}
            />

            {/* Soft spotlight */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(60% 45% at 50% 40%, rgba(20, 184, 166, 0.06), transparent 70%)',
              }}
            />

            {/* Blurred color blobs */}
            <div
              aria-hidden
              className={`absolute -top-[12%] -right-[10%] h-72 w-72 rounded-full ${palette.a} opacity-40 blur-3xl`}
            />
            <div
              aria-hidden
              className={`absolute -bottom-[12%] -left-[10%] h-80 w-80 rounded-full ${palette.b} opacity-40 blur-3xl`}
            />

            <div className="relative max-w-4xl mx-auto px-6">
              <div className="glass-panel p-8 md:p-10 lg:p-12 prose prose-slate max-w-none">
                {content}
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
