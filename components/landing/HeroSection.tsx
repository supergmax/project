export function HeroSection() {
  return (
    <section id="hero" className="relative pt-20 pb-24 lg:py-32 overflow-hidden">
      {/* Background lettrine "W" */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[40rem] font-bold text-light-brown/20 dark:text-navy-blue/20 select-none leading-none transition-colors duration-300">
        W
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-6 text-navy-blue dark:text-warm-white transition-colors duration-300">
            Prove Your Trading Skills.
            <span className="block text-charcoal dark:text-soft-beige transition-colors duration-300">Get Funded.</span>
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/80 dark:text-warm-white/80 mb-8 max-w-xl animate-slide-up transition-colors duration-300">
            Join our exclusive trading challenge and gain access to professional capital. Trade, perform, and earn real profits.
          </p>
          <a href="#process" className="btn btn-primary btn-lg animate-scale hover:scale-105 transition-transform duration-300">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}