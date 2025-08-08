import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: -2 }}
      >
        <source src="/leaves.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for text readability */}
      <div 
        className="absolute inset-0 bg-black/30"
        style={{ zIndex: -1 }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          A Free, Anonymous, and Community-Powered Path to Recovery
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Frehab is an online addiction recovery platform that provides a safe, supportive environment 
          for individuals seeking recovery. Join our community and discover a path to healing that&apos;s 
          built on compassion, understanding, and shared experience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="lg" className="shadow-lg">
            Explore the Vision
          </Button>
          <Button variant="secondary" size="lg" className="shadow-lg bg-white/90 hover:bg-white text-slate-700">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
} 