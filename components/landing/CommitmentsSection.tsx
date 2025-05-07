import { CheckCircle, Lock, Lightbulb, LineChart } from "lucide-react";

const commitments = [
  {
    icon: Lock,
    title: "100% Secure",
    description: "Enterprise-grade security for your funds and data"
  },
  {
    icon: Lightbulb,
    title: "Simplified Process",
    description: "Clear and straightforward evaluation system"
  },
  {
    icon: LineChart,
    title: "Trading Rules Compliance",
    description: "Fair and transparent trading guidelines"
  },
  {
    icon: CheckCircle,
    title: "Financial Transparency",
    description: "Clear profit-sharing and payout structure"
  }
];

export function CommitmentsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitments</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We stand by our promises to provide you with the best trading experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {commitments.map((commitment, index) => (
            <div
              key={commitment.title}
              className="flex items-start space-x-4 p-6 rounded-lg bg-background animate-fade-in hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <commitment.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{commitment.title}</h3>
                <p className="text-muted-foreground">{commitment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}