import { motion } from "motion/react";
import { Play, Clock, Eye } from "lucide-react";

interface VideoShowcaseProps {
  thumbnail: string;
  name: string;
  company: string;
  title: string;
  duration: string;
  views: string;
  category: string;
}

export function VideoShowcase({
  thumbnail,
  name,
  company,
  title,
  duration,
  views,
  category,
}: VideoShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="group cursor-pointer"
    >
      <div className="relative rounded-3xl overflow-hidden shadow-xl">
        {/* Thumbnail */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          
          {/* Category badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 text-white text-xs font-bold">
            {category}
          </div>
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="relative"
            >
              {/* Animated pulse rings */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-white rounded-full"
              ></motion.div>
              
              <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <Play className="w-8 h-8 text-cyan-600 ml-1" fill="currentColor" />
              </div>
            </motion.div>
          </div>
          
          {/* Duration badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full flex items-center gap-1.5 text-white text-xs font-semibold">
            <Clock className="w-3.5 h-3.5" />
            {duration}
          </div>
        </div>

        {/* Info section */}
        <div className="bg-white p-6">
          <h4 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2">
            {title}
          </h4>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                {name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{name}</p>
                <p className="text-xs text-gray-600">{company}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
              <Eye className="w-3.5 h-3.5" />
              {views}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
