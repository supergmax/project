import { Clock, Shield, Wallet, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Responsive Support",
    description: "24/7 dedicated support team to assist you throughout your trading journey"
  },
  {
    icon: Shield,
    title: "Full Transparency",
    description: "Clear rules, fair evaluation, and transparent profit-sharing system"
  },
  {
    icon: Wallet,
    title: "Fast Payouts",
    description: "Bi-weekly profit distributions with no hidden fees or delays"
  },
  {
    icon: GraduationCap,
    title: "Continuous Education",
    description: "Access to premium educational resources and trading workshops"
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide the tools and support you need to succeed as a funded trader
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card bg-card hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-body items-center text-center">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="card-title mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}