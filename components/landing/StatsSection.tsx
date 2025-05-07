export function StatsSection() {
  return (
    <section id="stats" className="py-16 bg-soft-beige/30 dark:bg-navy-blue/30 transition-colors duration-300">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <p className="text-3xl md:text-4xl font-bold text-navy-blue dark:text-soft-beige mb-2 hover:scale-105 transition-transform duration-300">10,000+</p>
            <p className="text-sm font-medium text-charcoal/70 dark:text-warm-white/70 transition-colors duration-300">Active Traders</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-3xl md:text-4xl font-bold text-navy-blue dark:text-soft-beige mb-2 hover:scale-105 transition-transform duration-300">87%</p>
            <p className="text-sm font-medium text-charcoal/70 dark:text-warm-white/70 transition-colors duration-300">Success Rate</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-3xl md:text-4xl font-bold text-navy-blue dark:text-soft-beige mb-2 hover:scale-105 transition-transform duration-300">$250M+</p>
            <p className="text-sm font-medium text-charcoal/70 dark:text-warm-white/70 transition-colors duration-300">Volume Traded</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-3xl md:text-4xl font-bold text-navy-blue dark:text-soft-beige mb-2 hover:scale-105 transition-transform duration-300">$1.2M</p>
            <p className="text-sm font-medium text-charcoal/70 dark:text-warm-white/70 transition-colors duration-300">Monthly Payouts</p>
          </div>
        </div>
      </div>
    </section>
  );
}