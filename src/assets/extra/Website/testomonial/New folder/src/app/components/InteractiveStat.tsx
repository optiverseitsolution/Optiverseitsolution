import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface InteractiveStatProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
  gradient: string;
  index: number;
}

export function InteractiveStat({
  icon: Icon,
  value,
  label,
  description,
  gradient,
  index,
}: InteractiveStatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="group relative cursor-pointer"
    >
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500`}></div>
      
      <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full overflow-hidden">
        {/* Decorative background element */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`}></div>
        
        <div className="relative z-10">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <div className="mb-4">
            <motion.h3
              className="text-5xl font-bold text-gray-900 mb-2"
              initial={{ scale: 1 }}
              whileInView={{ scale: [1, 1.1, 1] }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            >
              {value}
            </motion.h3>
            <p className="text-lg font-semibold text-gray-900">{label}</p>
          </div>
          
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
