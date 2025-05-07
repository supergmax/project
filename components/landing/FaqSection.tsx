"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "What is a trading challenge?",
    answer: "A trading challenge is a risk-free opportunity to prove your trading skills. You trade with our capital, and if you meet the performance targets, you get funded with a larger account and keep a percentage of the profits."
  },
  {
    question: "How do I qualify for funding?",
    answer: "To qualify for funding, you need to achieve the profit target while respecting the maximum drawdown and other risk management rules specified in your chosen challenge package."
  },
  {
    question: "What markets can I trade?",
    answer: "You can trade forex, indices, commodities, and cryptocurrencies. We provide access to a wide range of financial instruments to suit your trading style."
  },
  {
    question: "How much funding can I get?",
    answer: "We offer funding accounts ranging from $10,000 to $200,000, depending on the challenge level you successfully complete."
  },
  {
    question: "What is the profit split?",
    answer: "After successfully completing the challenge, you'll receive up to 90% of the profits generated with our capital."
  },
  {
    question: "How long does the evaluation process take?",
    answer: "The evaluation process typically takes between 1 to 30 days, depending on how quickly you reach the profit targets while respecting the risk management rules."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about our trading challenges
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <div
                className={`collapse collapse-arrow ${openIndex === index ? 'collapse-open' : 'collapse-closed'} bg-background border rounded-lg`}
              >
                <input 
                  type="radio" 
                  name="faq-accordion" 
                  checked={openIndex === index}
                  onChange={() => toggleFaq(index)}
                />
                <div className="collapse-title text-lg font-medium pr-10">
                  {item.question}
                </div>
                <div className="collapse-content">
                  <p className="text-muted-foreground pt-2">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}