import { motion } from "motion/react";
import { Star, TrendingUp, Users, Award, ArrowUpRight } from "lucide-react";

interface FeaturedTestimonialProps {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  results: {
    metric: string;
    value: string;
    change: string;
  }[];
  industry: string;
  projectType: string;
}

export function FeaturedTestimonial({
  name,
  role,
  company,
  image,
  quote,
  results,
  industry,
  projectType,
}: FeaturedTestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mb-20"
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-[3rem] blur-3xl"></div>
      
      <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left side - Content */}
          <div className="p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white text-sm font-bold shadow-lg">
                  Featured Success
                </div>
                <div className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs font-semibold">
                  {industry}
                </div>
              </div>

              <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {quote}
              </h3>

              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-cyan-100">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{name}</h4>
                  <p className="text-gray-600">{role}</p>
                  <p className="text-cyan-600 font-semibold">{company}</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-cyan-600" />
                  <h5 className="font-bold text-gray-900">Project Type</h5>
                </div>
                <p className="text-gray-700">{projectType}</p>
              </div>
            </div>
          </div>

          {/* Right side - Metrics */}
          <div className="bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 p-12 lg:p-16 flex flex-col justify-center">
            <h4 className="text-2xl font-bold text-white mb-8">
              Measurable Impact
            </h4>
            <div className="space-y-6">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-white/80 text-sm font-medium">
                      {result.metric}
                    </p>
                    <ArrowUpRight className="w-5 h-5 text-green-300" />
                  </div>
                  <p className="text-4xl font-bold text-white mb-1">
                    {result.value}
                  </p>
                  <p className="text-green-300 text-sm font-semibold">
                    {result.change}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
