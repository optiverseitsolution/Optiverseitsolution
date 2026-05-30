import logo from "../../assets/Logo/Logo.png";
import { Mail, Phone, MapPin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="relative bg-[#020d0a] text-white pt-16 pb-6 px-4 overflow-hidden">
      {/* Gradient Glow Layers (same style as form) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        {/* TOP GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-white/10">
          {/* BRAND */}
          <div>
            <div className="flex items-center">
              <img
                src={logo}
                alt="Company Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="mt-4 text-sm text-white/60">
              We help businesses across Nepal and beyond design, build, and grow
              their digital presence with clarity and craft.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/70">
              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white/80" />
                <p>contact@optiverseitsolution.com</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-white/80" />
                <p>+977 - 9803713931 | +977 - 9824790012</p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-white/80" />
                <p>Jawalakhel, Lalitpur</p>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-bold mb-8">Services</h4>
            <ul className="space-y-6 text-sm text-white/60">
              <li>Website Development</li>
              <li>Digital Marketing</li>
              <li>Video Production</li>
              <li>Graphics Design</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="font-bold mb-8">Resources</h4>
            <ul className="space-y-6 text-sm text-white/60">
              <li>Blogs</li>
              <li>Process</li>
              <li>Testimonials</li>
              <li>About</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="font-bold mb-8">Newsletter</h4>
            <p className="text-sm text-white/60 mb-4">Subscribe for updates</p>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mb-3 rounded-lg border border-white bg-white/5 px-4 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-green-500"
            />

            <input
              type="email"
              placeholder="Your email"
              className="w-full mb-3 rounded-lg border border-white bg-white/5 px-4 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-green-500"
            />

            <button className="w-full rounded-lg bg-green-600 py-2 font-bold hover:bg-green-700">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-6 flex flex-col gap-4 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          {/* LEFT: Social */}
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-white">F</span>
            <span className="cursor-pointer hover:text-white">I</span>
            <span className="cursor-pointer hover:text-white">L</span>
            <span className="cursor-pointer hover:text-white">Y</span>
          </div>

          {/* RIGHT: Copyright */}
          <p className="text-left sm:text-right">
            © 2025, All rights reserved. Optiverse I.T. Solution Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
