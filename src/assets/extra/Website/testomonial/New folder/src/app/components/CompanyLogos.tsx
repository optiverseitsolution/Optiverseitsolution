import { motion } from "motion/react";

export function CompanyLogos() {
  const companies = [
    "Microsoft",
    "Amazon",
    "Google",
    "Meta",
    "Apple",
    "Tesla",
    "Netflix",
    "Adobe",
  ];

  return (
    <div className="mb-20">
      <p className="text-center text-gray-400 mb-8 font-semibold">
        Trusted by industry leaders worldwide
      </p>
      
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-12"
        >
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-100"
            >
              <span className="text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                {company}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
