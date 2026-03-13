import { motion, useScroll, useTransform, Variants } from "motion/react";
import { useRef } from "react";
import { Search, Pencil, Layers, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import process1 from "../../assets/1.svg";
import process2 from "../../assets/2.svg";
import process3 from "../../assets/3.svg";
import process4 from "../../assets/4.svg";

// Frequency disturbance animation variants
const distortionVariants: Variants = {
  animate: {
    scale: [1, 1.04, 0.98, 1.02, 1],
    skewX: [0, 2, -2, 1, 0],
    filter: [
      "contrast(1) brightness(1) blur(0px)",
      "contrast(1.1) brightness(1.1) blur(0.5px)",
      "contrast(0.9) brightness(0.9) blur(0px)",
      "contrast(1) brightness(1) blur(0px)",
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function ProcessStep({ step, index }: { step: any; index: number }) {
  const stepRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // New: Active state transforms based on scroll
  // Background color transitions to purple when in the middle of the screen
  const bgColor = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.55, 0.7],
    ["#000000", "#614DD5", "#614DD5", "#000000"]
  );

  // Subtle scale up when active
  const activeScale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    [1, 1.05, 1]
  );

  return (
    <motion.div
      ref={stepRef}
      style={{ opacity }}
      className="grid grid-cols-12 gap-12 items-center"
    >
      {/* Image Container */}
      <div className={`col-span-6 ${index % 2 === 0 ? "order-1" : "order-2"}`}>
        <div className="relative group overflow-hidden bg-black">
          <motion.div
            style={{ y: imageY, scale: activeScale }}
            className="aspect-square relative z-10 scale-110"
          >
            <motion.div
              style={{ backgroundColor: bgColor }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full h-full relative overflow-hidden"
            >
              <motion.div
                animate="animate"
                className="w-full h-full transform-gpu"
                variants={distortionVariants}
              >
                <div className="w-full h-full">
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className={`col-span-6 ${index % 2 === 0 ? "order-2" : "order-1"}`}>
        <motion.div style={{ y }} className="space-y-6">
          <h2 className="text-4xl tracking-tight uppercase">{step.title}</h2>
          <div className="flex items-center gap-4 pt-4">
            <div className="w-12 h-0.5 bg-black"></div>
            <p className="text-sm tracking-widest opacity-50">
              STEP {step.number}
            </p>
          </div>
          <p className="text-lg opacity-70 leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "01",
      title: "DISCOVERY & DIAGNOSIS",
      description:
        "I start by digging deep to figure out the real problem. I do user research and use tools like Hotjar to see exactly how people are behaving, which gives me concrete data on their frustrations and where we can improve.",
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

  return (
    <div ref={containerRef} className="min-h-screen px-8 pt-10 pb-20">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[160px] tracking-tighter mb-8 uppercase leading-[0.8]"
          >
            CREATIVE <br /> PROCESS
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            className="h-1 bg-[#614DD5] mb-8"
          ></motion.div>
        </div>

        {/* Process Steps */}
        <div className="space-y-48">
          {steps.map((step, i) => (
            <ProcessStep key={step.number} step={step} index={i} />
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="mt-40 py-20 border-t border-black/10">
          <div className="grid grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl tracking-tight mb-6 uppercase">
                [ PHILOSOPHY ]
              </h3>
              <p className="text-lg opacity-70 leading-relaxed">
                Great design is invisible. It doesn't just look good—it feels
                right. My goal is to create experiences that are intuitive,
                memorable, and truly serve the people who use them.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl tracking-tight mb-6 uppercase">
                [ PRINCIPLES ]
              </h3>
              <div className="space-y-3">
                {[
                  "SIMPLICITY IS SOPHISTICATION",
                  "FORM FOLLOWS FUNCTION",
                  "DETAILS MAKE THE DIFFERENCE",
                  "DESIGN FOR EVERYONE",
                ].map((principle) => (
                  <p
                    key={principle}
                    className="text-lg tracking-wide border-l-2 border-[#614DD5] pl-4 opacity-70"
                  >
                    {principle}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
