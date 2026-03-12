import { motion } from "motion/react";
import { Search, Pencil, Layers, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import process1 from "../../assets/1.svg";
import process2 from "../../assets/2.svg";
import process3 from "../../assets/3.svg";
import process4 from "../../assets/4.svg";

export function Process() {
  const steps = [
    {
      number: "01",
      title: "DISCOVERY & DIAGNOSIS",
      description:
        "I start by digging deep to figure out the rEeal problem. I do user research and use tools like Hotjar to see exactly how people are behaving, which gives me concrete data on their frustrations and where we can improve.",
      icon: Search,
      image: process1,
    },
    {
      number: "02",
      title: "ARCHITECTURE & IDEATION",
      description:
        "Once I have a solid grasp on the problem, I start mapping out the solution. I begin with simple wireframes and user flows to figure out the most straightforward path for a person to take. At this early stage, it's all about getting the core experience right.",
      icon: Pencil,
      image: process2,
    },
    {
      number: "03",
      title: "PROTOTYPING & VALIDATION",
      description:
        "Next, I turn those sketches into interactive prototypes. Because I can code, I often build these as high-fidelity mockups or even small, functional websites. This gives the team and our test users something realistic to click through, which leads to much better feedback. We’ll discuss, test, and refine the flow together until it feels completely intuitive.",
      icon: Layers,
      image: process3,
    },
    {
      number: "04",
      title: "EXECUTION & ITERATION",
      description:
        "With the user experience locked in, I focus on designing the final, polished UI. My goal is always to create a look that's clean, elegant, and feels human. From there, I work hand-in-hand with the developers to make sure the final product is built exactly as designed. The work doesn't stop at launch, though—I'm always watching user feedback and performance data to figure out what we can improve in the next cycle.",
      icon: Sparkles,
      image: process4,
    },
  ];

  // Frequency disturbance animation variants
  const distortionVariants = {
    animate: {
      scale: [1, 1.02, 0.99, 1.01, 1],
      skewX: [0, 1, -1, 0.5, 0],
      filter: [
        "contrast(1) brightness(1)",
        "contrast(1.1) brightness(1.05)",
        "contrast(0.95) brightness(0.98)",
        "contrast(1) brightness(1)",
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen px-8 pt-10 pb-20">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-8xl tracking-tighter mb-8 uppercase">
            CREATIVE PROCESS
          </h1>
          <div className="w-32 h-1 bg-black mb-8"></div>
        </div>

        {/* Process Steps */}
        <div className="space-y-32">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`grid grid-cols-12 gap-12 items-center ${
                i % 2 === 0 ? "" : "direction-reverse"
              }`}
            >
              {/* Image Container with Hover Background Transition */}
              <div
                className={`col-span-6 ${i % 2 === 0 ? "order-1" : "order-2"}`}
              >
                <div className="relative group">
                  <motion.div 
                    initial={{ backgroundColor: "#000000" }}
                    whileHover={{ backgroundColor: "#614DD5" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="aspect-square overflow-hidden relative z-10"
                  >
                    {/* Distorted Image */}
                    <motion.div
                      variants={distortionVariants}
                      animate="animate"
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`col-span-6 ${i % 2 === 0 ? "order-2" : "order-1"}`}
              >
                <div className="space-y-6">
                  {/* Title */}
                  <h2 className="text-4xl tracking-tight uppercase">
                    {step.title}
                  </h2>
                  {/* Step Number */}
                  <div className="flex items-center gap-4 pt-4">
                    <div className="w-12 h-0.5 bg-black"></div>
                    <p className="text-sm tracking-widest opacity-50">
                      STEP {step.number}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-lg opacity-70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="mt-40 py-20 border-t border-black/10">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl tracking-tight mb-6 uppercase">
                [ PHILOSOPHY ]
              </h3>
              <p className="text-lg opacity-70 leading-relaxed">
                Great design is invisible. It doesn't just look good—it feels
                right. My goal is to create experiences that are intuitive,
                memorable, and truly serve the people who use them.
              </p>
            </div>
            <div>
              <h3 className="text-3xl tracking-tight mb-6 uppercase">
                [ PRINCIPLES ]
              </h3>
              <div className="space-y-3">
                {[
                  "SIMPLICITY IS SOPHISTICATION",
                  "FORM FOLLOWS FUNCTION",
                  "DETAILS MAKE THE DIFFERENCE",
                  "DESIGN FOR EVERYONE",
                ].map((principle, i) => (
                  <p
                    key={i}
                    className="text-lg tracking-wide border-l-2 border-black pl-4 opacity-70"
                  >
                    {principle}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
