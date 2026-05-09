import { MapPin, Mail, Phone, Clock, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select a service...");
  const dropdownRef = useRef(null);

  const options = ["Web Development", "Digital Marketing", "Branding"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service:
        selected === "Select a service..." ? "" : selected,
      message: formData.get("message"),
    };

    console.log("Form submitted:", data);

    // add your API call here
  };

  return (
    <section className="bg-[#020d0a] px-4 py-16">
      <div className="mx-auto max-w-[1200px] rounded-3xl border border-green-900/40 bg-gradient-to-br from-[#021a14] via-[#02130f] to-[#010b08] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <p className="font-semibold text-green-400">— Connect with us</p>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Build <br />
              Something
              <span className="text-green-400"> Great?</span>
            </h2>

            <p className="mt-4 max-w-md text-sm text-white/60">
              Free 30-minute consultation. No pushy sales — just a real
              conversation about your project and whether we’re the right fit.
            </p>

            <div className="mt-6 space-y-4 text-sm text-white/80">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/10 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <MapPin size={18} />
                </div>
                <p>Kathmandu, Nepal</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/10 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <Mail size={18} />
                </div>
                <p>[email protected]</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/10 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <Phone size={18} />
                </div>
                <p>+977 9800000000</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/10 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <Clock size={18} />
                </div>
                <p>Response within 24 hours</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* CUSTOM SELECT */}
            <div className="relative w-full" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className={`flex w-full items-center justify-between rounded-xl border px-5 py-3 text-left text-white outline-none transition-all duration-300 ${
                  open
                    ? "border-green-500 bg-gradient-to-r from-green-500/10 to-transparent ring-2 ring-green-500/60"
                    : "border-white/10 bg-gradient-to-r from-green-500/10 to-transparent"
                }`}
              >
                <span
                  className={
                    selected === "Select a service..."
                      ? "text-white"
                      : "text-white"
                  }
                >
                  {selected}
                </span>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              <input
                type="hidden"
                name="service"
                value={selected === "Select a service..." ? "" : selected}
              />

              {open && (
                <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-[#0b1f1a] shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                  {options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleSelect(opt)}
                      className="block w-full cursor-pointer px-5 py-3 text-left text-white transition hover:bg-green-500/20"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <textarea
              rows={4}
              name="message"
              placeholder="Tell us about your project..."
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 py-3 font-bold text-white transition hover:bg-green-700"
            >
              Send Message →
            </button>

            <p className="text-center text-xs text-white/40">
              Your information is never shared. We respond within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}