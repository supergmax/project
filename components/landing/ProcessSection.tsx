"use client";

import { motion } from "framer-motion";
import { Check, Coins, UserPlus, Users, Wallet } from "lucide-react";

type ProcessStep = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
};

const steps: ProcessStep[] = [
  {
    id: 1,
    title: "Receive an invitation",
    description: "Get invited by one of our existing traders or partners.",
    icon: Users,
  },
  {
    id: 2,
    title: "Create an account",
    description: "Sign up using the invitation code and complete your profile.",
    icon: UserPlus,
  },
  {
    id: 3,
    title: "Buy a challenge",
    description: "Choose a challenge that matches your trading style and capital needs.",
    icon: Wallet,
  },
  {
    id: 4,
    title: "Trade",
    description: "Meet the challenge requirements by demonstrating your trading skills.",
    icon: Coins,
  },
  {
    id: 5,
    title: "Receive a payout",
    description: "Get your profit share directly to your account once you succeed.",
    icon: Check,
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-background w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our straightforward 5-step process to get you from registration to a funded trading account.
          </p>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Horizontal connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: steps.length * 0.2 }} // delay after all steps
            viewport={{ once: true }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-border origin-left z-0"
          />

          {/* Steps */}
          <div className="flex flex-col items-center space-y-12 lg:flex-row lg:space-y-0 lg:space-x-10 justify-center relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center bg-card border border-border rounded-xl shadow-md p-6 w-full max-w-[220px] min-h-[340px] justify-between"
              >
                <div className="flex flex-col items-center">
                  {/* Step Number Bubble */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-border/20 text-border text-base font-bold mb-4">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
                    <step.icon size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
