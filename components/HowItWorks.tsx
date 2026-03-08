"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Download & Sign Up",
    description: "Available on both iOS and Android. Create your profile in seconds and start exploring.",
  },
  {
    number: "02",
    title: "Pick Your Passions",
    description: "Select what you love. Our interest-based algorithm handles the rest.",
  },
  {
    number: "03",
    title: "Create & Share",
    description: "Use our built-in editor to record, trim, and post your first masterpiece.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-extrabold text-ticlu-dark mb-6"
          >
            Getting started is <span className="text-ticlu-blue">Simple</span>
          </motion.h2>
          <p className="text-xl text-gray-600">Three steps to join the global community of creators.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-8xl font-black text-ticlu-blue/5 absolute -top-12 -left-4 select-none">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-ticlu-blue rounded-xl flex items-center justify-center text-white font-bold mb-6 shadow-lg">
                   {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-ticlu-dark">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[120%] w-1/2 h-px bg-dashed border-t-2 border-dashed border-ticlu-blue/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}