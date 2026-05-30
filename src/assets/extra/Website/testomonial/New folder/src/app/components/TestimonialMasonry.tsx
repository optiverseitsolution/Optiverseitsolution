import { motion } from "motion/react";
import { Star, Verified, Building2, Calendar } from "lucide-react";

interface TestimonialProps {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  testimonial: string;
  date: string;
  companySize: string;
  featured?: boolean;
}

const colorSchemes = [
  {
    gradient: "from-blue-50 via-cyan-50 to-blue-50",
    borderGradient: "from-blue-400 via-cyan-400 to-blue-500",
    iconBg: "from-blue-100 to-cyan-100",
    iconColor: "text-blue-600",
    badgeBg: "from-blue-500 to-cyan-500",
    accentColor: "blue-600",
  },
  {
    gradient: "from-green-50 via-emerald-50 to-green-50",
    borderGradient: "from-green-400 via-emerald-400 to-green-500",
    iconBg: "from-green-100 to-emerald-100",
    iconColor: "text-green-600",
    badgeBg: "from-green-500 to-emerald-500",
    accentColor: "green-600",
  },
  {
    gradient: "from-yellow-50 via-amber-50 to-yellow-50",
    borderGradient: "from-yellow-400 via-amber-400 to-yellow-500",
    iconBg: "from-yellow-100 to-amber-100",
    iconColor: "text-yellow-600",
    badgeBg: "from-yellow-500 to-amber-500",
    accentColor: "yellow-600",
  },
  {
    gradient: "from-purple-50 via-pink-50 to-purple-50",
    borderGradient: "from-purple-400 via-pink-400 to-purple-500",
    iconBg: "from-purple-100 to-pink-100",
    iconColor: "text-purple-600",
    badgeBg: "from-purple-500 to-pink-500",
    accentColor: "purple-600",
  },
  {
    gradient: "from-orange-50 via-red-50 to-orange-50",
    borderGradient: "from-orange-400 via-red-400 to-orange-500",
    iconBg: "from-orange-100 to-red-100",
    iconColor: "text-orange-600",
    badgeBg: "from-orange-500 to-red-500",
    accentColor: "orange-600",
  },
  {
    gradient: "from-teal-50 via-cyan-50 to-teal-50",
    borderGradient: "from-teal-400 via-cyan-400 to-teal-500",
    iconBg: "from-teal-100 to-cyan-100",
    iconColor: "text-teal-600",
    badgeBg: "from-teal-500 to-cyan-500",
    accentColor: "teal-600",
  },
];

export function TestimonialMasonry({ testimonial }: { testimonial: TestimonialProps }) {
  const colorScheme = colorSchemes[(testimonial.id - 1) % colorSchemes.length];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div className="relative h-full">
        {/* Colorful hover glow effect */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${colorScheme.borderGradient} rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500`}></div>
        
        <div className={`relative h-full bg-gradient-to-br ${colorScheme.gradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white flex flex-col overflow-hidden`}>
          {/* Decorative colorful orbs */}
          <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${colorScheme.borderGradient} opacity-20 rounded-full blur-3xl`}></div>
          <div className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br ${colorScheme.borderGradient} opacity-20 rounded-full blur-3xl`}></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className={`absolute -inset-1 bg-gradient-to-br ${colorScheme.borderGradient} rounded-2xl blur-md opacity-60`}></div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="relative w-14 h-14 rounded-2xl object-cover ring-2 ring-white"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br ${colorScheme.badgeBg} rounded-lg flex items-center justify-center shadow-lg`}>
                    <Verified className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${colorScheme.badgeBg} bg-clip-text text-transparent`}>{testimonial.role}</p>
                </div>
              </div>
              
              {/* Rating with colorful stars */}
              <div className={`flex gap-0.5 p-2 bg-gradient-to-br ${colorScheme.iconBg} rounded-xl`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-500" />
                ))}
              </div>
            </div>

            {/* Testimonial text */}
            <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
              {testimonial.testimonial}
            </p>

            {/* Footer metadata with colorful icons */}
            <div className="space-y-3 pt-6 border-t-2 border-white/80">
              <div className="flex items-center gap-3 text-sm">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorScheme.iconBg} flex items-center justify-center shadow-md`}>
                  <Building2 className={`w-5 h-5 ${colorScheme.iconColor}`} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.company}</p>
                  <p className="text-xs text-gray-600">{testimonial.companySize}</p>
                </div>
              </div>
              
              <div className={`flex items-center gap-2 text-xs font-semibold bg-gradient-to-r ${colorScheme.badgeBg} bg-clip-text text-transparent`}>
                <Calendar className={`w-4 h-4 ${colorScheme.iconColor}`} />
                <span className="text-gray-700">{testimonial.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}