import { useState } from "react";
import { motion } from "motion/react";
import { FeaturedTestimonial } from "./components/FeaturedTestimonial";
import { TestimonialMasonry } from "./components/TestimonialMasonry";
import { InteractiveStat } from "./components/InteractiveStat";
import { VideoShowcase } from "./components/VideoShowcase";
import { CompanyLogos } from "./components/CompanyLogos";
import {
  Star,
  Sparkles,
  ArrowRight,
  Target,
  Rocket,
  Shield,
  Zap,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All Stories");

  const categories = [
    "All Stories",
    "Digital Transformation",
    "Cloud Migration",
    "AI & Machine Learning",
    "Cybersecurity",
    "DevOps Excellence",
  ];

  const featuredStory = {
    name: "Alexandra Martinez",
    role: "Chief Technology Officer",
    company: "FinTech Innovations Group",
    image: "https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBjZW8lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1MzE5MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote:
      "Partnering with this team revolutionized our entire technology stack and accelerated our market dominance.",
    results: [
      { metric: "Revenue Growth", value: "247%", change: "+197% YoY" },
      { metric: "System Performance", value: "99.99%", change: "Uptime achieved" },
      { metric: "Development Speed", value: "3.5x", change: "Faster deployment" },
    ],
    industry: "Financial Technology",
    projectType:
      "End-to-end cloud infrastructure modernization with AI-powered fraud detection and real-time analytics platform",
  };

  const testimonials = [
    {
      id: 1,
      name: "Marcus Chen",
      role: "VP of Engineering",
      company: "TechVenture Global",
      image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGFzaWFufGVufDF8fHx8MTc3NTMxOTAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial:
        "The AI-driven analytics platform they built for us has fundamentally changed how we make business decisions. We're now predicting market trends with 94% accuracy and staying ahead of our competitors. The team's expertise in machine learning is unmatched.",
      date: "March 2026",
      companySize: "Enterprise (5000+ employees)",
      category: "AI & Machine Learning",
    },
    {
      id: 2,
      name: "Samantha Rodriguez",
      role: "Chief Information Security Officer",
      company: "Healthcare Systems United",
      image: "https://images.unsplash.com/photo-1552127966-d24b805b9be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGxlYWRlcnxlbnwxfHx8fDE3NzUzMTkwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial:
        "Their zero-trust security architecture implementation exceeded all expectations. We achieved SOC 2 Type II and HIPAA compliance within 6 months. The proactive threat detection system has blocked over 10,000 potential breaches. Patient data has never been more secure.",
      date: "February 2026",
      companySize: "Large (1000-5000 employees)",
      category: "Cybersecurity",
    },
    {
      id: 3,
      name: "James Whitaker",
      role: "Director of Cloud Operations",
      company: "RetailNext Commerce",
      image: "https://images.unsplash.com/photo-1758518727984-17b37f2f0562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmUlMjBtYW58ZW58MXx8fHwxNzc1MzE5MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial:
        "The multi-cloud migration strategy was flawless. Moving 500+ microservices from legacy systems to AWS and Azure with zero downtime was incredible. Our operational costs dropped 62% while performance improved dramatically. Black Friday handled 10M+ transactions seamlessly.",
      date: "January 2026",
      companySize: "Medium (250-1000 employees)",
      category: "Cloud Migration",
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "Head of Digital Innovation",
      company: "Manufacturing Excellence Corp",
      image: "https://images.unsplash.com/photo-1760037028517-e5cc6e3ebd3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwaW5kdXN0cnklMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1MzE5MDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial:
        "They transformed our 50-year-old manufacturing company into a digital-first organization. IoT sensors, predictive maintenance AI, and real-time supply chain optimization have increased our production efficiency by 156%. Industry 4.0 is now our reality.",
      date: "December 2025",
      companySize: "Enterprise (5000+ employees)",
      category: "Digital Transformation",
    },
    {
      id: 5,
      name: "David Kim",
      role: "DevOps Lead",
      company: "StreamTech Media",
      image: "https://images.unsplash.com/photo-1758525588523-7b7fe92143ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwdGVjaG5vbG9neSUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NzUzMTkwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial:
        "The CI/CD pipeline they engineered is a masterpiece. We went from monthly releases to deploying 50+ times per day with automated testing, security scanning, and rollback capabilities. Development velocity increased 4x while bugs decreased 80%.",
      date: "November 2025",
      companySize: "Medium (250-1000 employees)",
      category: "DevOps Excellence",
    },
    {
      id: 6,
      name: "Isabella Foster",
      role: "CEO & Founder",
      company: "EduTech Innovations",
      image: "https://images.unsplash.com/photo-1653566031535-bcf33e1c2893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDF8fHx8MTc3NTIyOTA2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial:
        "Our AI-powered learning platform now serves 2.5 million students across 45 countries. The scalable architecture handles peak loads during exam seasons effortlessly. The personalized learning algorithms have improved student outcomes by 73%. Simply phenomenal work.",
      date: "October 2025",
      companySize: "Large (1000-5000 employees)",
      category: "AI & Machine Learning",
    },
  ];

  const filteredTestimonials =
    activeCategory === "All Stories"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  const stats = [
    {
      icon: Target,
      value: "1,200+",
      label: "Projects Delivered",
      description: "Successfully completed enterprise-grade solutions across 40+ industries",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      value: "99.2%",
      label: "Client Satisfaction",
      description: "Consistently exceeding expectations with world-class service and support",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Rocket,
      value: "387%",
      label: "Avg ROI Increase",
      description: "Delivering measurable business value and transformational results",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Security Compliance",
      description: "Zero breaches with enterprise-grade security and compliance standards",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const videos = [
    {
      thumbnail: "https://images.unsplash.com/photo-1603219950587-b4f3f7ee87e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlJTIwbW9kZXJufGVufDF8fHx8MTc3NTMxOTAxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Alexandra Martinez",
      company: "FinTech Innovations",
      title: "How we achieved 247% revenue growth through digital transformation",
      duration: "8:42",
      views: "125K",
      category: "Case Study",
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGFzaWFufGVufDF8fHx8MTc3NTMxOTAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Marcus Chen",
      company: "TechVenture Global",
      title: "Building AI systems that predict market trends with 94% accuracy",
      duration: "12:15",
      views: "98K",
      category: "Innovation",
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1552127966-d24b805b9be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGxlYWRlcnxlbnwxfHx8fDE3NzUzMTkwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Samantha Rodriguez",
      company: "Healthcare Systems",
      title: "Achieving zero breaches with next-gen cybersecurity architecture",
      duration: "10:28",
      views: "156K",
      category: "Security",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white py-32 px-6">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          ></motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">Transforming businesses since 2015</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
              Real Stories.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Real Results.
              </span>
            </h1>

            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover how we've helped over 1,200 organizations achieve
              breakthrough results through cutting-edge technology solutions and
              strategic innovation
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
              >
                Explore Success Stories
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Company Logos */}
        <CompanyLogos />

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <InteractiveStat key={index} {...stat} index={index} />
          ))}
        </div>

        {/* Featured Success Story */}
        <FeaturedTestimonial {...featuredStory} />

        {/* Category Filter */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="w-6 h-6 text-cyan-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Client Testimonials
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialMasonry key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Video Testimonials */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Video Testimonials
                </h2>
              </div>
              <p className="text-gray-600 text-lg">
                Watch our clients share their transformation journeys
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <VideoShowcase key={index} {...video} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-[3rem] blur-2xl opacity-30"></div>
          
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-[3rem] p-16 text-center border border-gray-200 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -ml-32 -mb-32 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-5 py-2 rounded-full mb-6 font-semibold shadow-lg">
                <Rocket className="w-4 h-4" />
                Start Your Transformation
              </div>
              
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join 1,200+ forward-thinking companies that have transformed their
                business with our expertise. Let's discuss your vision.
              </p>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-3"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-gray-900 rounded-2xl font-bold text-lg border-2 border-gray-200 hover:border-cyan-300 transition-all duration-300"
                >
                  View Case Studies
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}