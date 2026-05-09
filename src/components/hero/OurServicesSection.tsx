import { useMemo, useState } from "react";
import {
  Globe,
  Share2,
  Video,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

type Highlight = {
  title: string;
  text: string;
};

type ServiceItem = {
  title: string;
  image: string;
  description: string;
  highlights: Highlight[];
};

type ServiceCategory = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  items: ServiceItem[];
};

const services: ServiceCategory[] = [
  {
    id: "web",
    label: "Web Development",
    icon: Globe,
    items: [
      {
        title: "Custom Website Development",
        image:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80&fit=crop",
        description:
          "A custom website is one of the strongest digital investments your business can make. We design and develop high-performance websites tailored to your brand, audience, and business goals, ensuring scalability, maintainability, and a strong conversion-focused experience.",
        highlights: [
          {
            title: "Bespoke UI/UX Design",
            text: "Layouts and interfaces designed specifically for your brand identity and user journey.",
          },
          {
            title: "Scalable Architecture",
            text: "Modern, maintainable codebases built for long-term growth and flexibility.",
          },
          {
            title: "Enterprise-Grade Security",
            text: "Secure development practices, reliable hosting readiness, and data protection measures.",
          },
        ],
      },
      {
        title: "Educational Website",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80&fit=crop",
        description:
          "We build professional websites for consultancies, training institutes, and education providers with course listings, inquiry forms, and clear conversion paths.",
        highlights: [
          {
            title: "Dynamic Course Listings",
            text: "Organized content for programs, services, and departments.",
          },
          {
            title: "Lead Capture Forms",
            text: "Inquiry and registration flows designed to improve conversion.",
          },
          {
            title: "Trust-Driven Design",
            text: "Faculty, testimonials, and credibility elements placed strategically.",
          },
        ],
      },
      {
        title: "E-Commerce Website",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&fit=crop",
        description:
          "From product display to checkout experience, we build e-commerce websites that improve shopping flow, trust, and conversion.",
        highlights: [
          {
            title: "Advanced Product Management",
            text: "Flexible product listings, variants, filters, and categories.",
          },
          {
            title: "Secure Checkout",
            text: "Smooth cart and payment experience built around trust and usability.",
          },
          {
            title: "Conversion Optimization",
            text: "Layouts structured to improve product discovery and purchase intent.",
          },
        ],
      },
    ],
  },
  {
    id: "social",
    label: "Social Media",
    icon: Share2,
    items: [
      {
        title: "Social Media Management",
        image:
          "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&q=80&fit=crop",
        description:
          "We manage social media strategically across platforms with consistent branding, content planning, posting, and audience engagement.",
        highlights: [
          {
            title: "Strategic Content Calendar",
            text: "Planned monthly content aligned to campaigns, seasons, and business goals.",
          },
          {
            title: "Audience Engagement",
            text: "Comment, DM, and community management to humanize your brand.",
          },
          {
            title: "Performance Optimization",
            text: "Content adjustments based on analytics, platform behavior, and audience response.",
          },
        ],
      },
      {
        title: "Brand Strategy Development",
        image:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80&fit=crop",
        description:
          "We help define your brand voice, positioning, and visual direction so your business communicates consistently across every channel.",
        highlights: [
          {
            title: "Brand Positioning",
            text: "Clear market direction and messaging that differentiates your business.",
          },
          {
            title: "Visual Identity Thinking",
            text: "A more cohesive foundation for design, color, and storytelling.",
          },
          {
            title: "Brand Playbook",
            text: "Guidelines that keep your communication aligned everywhere.",
          },
        ],
      },
      {
        title: "Content Calendar Planning",
        image:
          "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80&fit=crop",
        description:
          "We turn social media into a structured growth system through content planning and coordinated publishing.",
        highlights: [
          {
            title: "Multi-Format Content Mix",
            text: "Balanced use of reels, posts, carousels, stories, and campaigns.",
          },
          {
            title: "Timing Strategy",
            text: "Publishing schedules built around audience activity and visibility.",
          },
          {
            title: "Approval Workflow",
            text: "Review-ready content planning for fast collaboration and consistency.",
          },
        ],
      },
    ],
  },
  {
    id: "video",
    label: "Video Production",
    icon: Video,
    items: [
      {
        title: "Video & Reels Production",
        image:
          "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80&fit=crop",
        description:
          "We create short-form and promotional video content that captures attention, improves engagement, and communicates your brand effectively.",
        highlights: [
          {
            title: "Platform-Focused Formats",
            text: "Content tailored for Instagram, Facebook, TikTok, YouTube, and LinkedIn.",
          },
          {
            title: "Creative Editing",
            text: "Fast-paced edits, clean transitions, and modern visual rhythm.",
          },
          {
            title: "Marketing Alignment",
            text: "Every video is developed with communication and conversion goals in mind.",
          },
        ],
      },
      {
        title: "Video Editing",
        image:
          "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80&fit=crop",
        description:
          "We transform raw footage into polished, compelling videos with strong pacing, audio refinement, and visual consistency.",
        highlights: [
          {
            title: "Cinematic Polish",
            text: "Professional editing flow that improves watchability and quality perception.",
          },
          {
            title: "Sound & Clarity",
            text: "Refined audio and cleaner delivery of your message.",
          },
          {
            title: "Fast Turnaround",
            text: "Efficient production cycles without sacrificing quality.",
          },
        ],
      },
      {
        title: "Corporate Video Production",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&fit=crop",
        description:
          "Corporate videos help showcase your business, culture, services, and credibility in a polished and professional format.",
        highlights: [
          {
            title: "Company Profile Films",
            text: "A strong digital representation of your mission, team, and capability.",
          },
          {
            title: "Executive Storytelling",
            text: "Leadership and business narratives made more engaging and credible.",
          },
          {
            title: "Professional Brand Image",
            text: "Video assets that strengthen trust across clients, partners, and audiences.",
          },
        ],
      },
    ],
  },
  {
    id: "mkt",
    label: "Digital Marketing",
    icon: TrendingUp,
    items: [
      {
        title: "Meta Ads Campaign",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80&fit=crop",
        description:
          "We plan and manage paid campaigns on Facebook and Instagram to improve reach, lead generation, and measurable return.",
        highlights: [
          {
            title: "Audience Targeting",
            text: "Campaigns refined by behavior, interest, geography, and funnel stage.",
          },
          {
            title: "Creative Direction",
            text: "Ad visuals and copy structured to improve engagement and conversion.",
          },
          {
            title: "ROAS Optimization",
            text: "Continuous testing and refinement to improve campaign performance.",
          },
        ],
      },
      {
        title: "Custom Creative Graphics",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80&fit=crop",
        description:
          "We create branded graphics for ads, social media, promotions, and campaigns that stop the scroll and communicate clearly.",
        highlights: [
          {
            title: "Brand Consistency",
            text: "Visuals aligned with your business identity across channels.",
          },
          {
            title: "Rapid Creative Production",
            text: "Fast delivery for ongoing campaigns and content calendars.",
          },
          {
            title: "Conversion-Oriented Design",
            text: "Design decisions guided by communication hierarchy and action intent.",
          },
        ],
      },
      {
        title: "Content Writing & Scheduling",
        image:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80&fit=crop",
        description:
          "We write and schedule digital content that supports your branding, audience engagement, and long-term communication strategy.",
        highlights: [
          {
            title: "Platform-Native Copy",
            text: "Content adapted for different channels and audience expectations.",
          },
          {
            title: "Scheduled Publishing",
            text: "Consistent posting workflows for stronger digital presence.",
          },
          {
            title: "Strategic Messaging",
            text: "Copy that supports campaigns, awareness, and business growth.",
          },
        ],
      },
    ],
  },
];

export default function OurServicesSection() {
  const [activeCategoryId, setActiveCategoryId] = useState("web");
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const activeCategory = useMemo(
    () => services.find((service) => service.id === activeCategoryId) ?? services[0],
    [activeCategoryId]
  );

  const activeItem = activeCategory.items[activeItemIndex] ?? activeCategory.items[0];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setActiveItemIndex(0);
  };

  return (
    <section className="relative overflow-hidden bg-[#080c14] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(6,182,212,0.08)_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="bg-gradient-to-r from-cyan-100 via-cyan-400 to-blue-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl lg:text-5xl">
            Our Services
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            We offer comprehensive digital solutions to help your business thrive —
            from stunning websites to powerful marketing strategies.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-cyan-500/15 bg-[#0f1520] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <div className="grid lg:grid-cols-[220px_minmax(0,1fr)_260px]">
            {/* Left Category Nav */}
            <aside className="border-b border-cyan-500/10 bg-gradient-to-b from-[#0a0e1a] to-[#0c1222] lg:border-b-0 lg:border-r">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1">
                {services.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategoryId === category.id;

                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`group flex flex-col items-center gap-3 border-b border-white/5 px-3 py-5 text-center transition lg:border-b-0 lg:border-l-4 ${
                        isActive
                          ? "border-cyan-400 bg-cyan-500/10 text-white"
                          : "border-transparent text-slate-300 hover:bg-cyan-500/5 hover:text-white"
                      }`}
                    >
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl transition ${
                          isActive
                            ? "bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-[0_8px_24px_rgba(6,182,212,0.4)]"
                            : "bg-white/5 text-slate-300 group-hover:bg-cyan-500/15 group-hover:text-cyan-300"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-xs font-bold leading-5 sm:text-sm">
                        {category.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Center Content */}
            <div className="border-b border-cyan-500/10 lg:border-b-0 lg:border-r">
              <div className="relative h-64 overflow-hidden sm:h-72 lg:h-80">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#0f1520]" />

                <div className="absolute bottom-0 left-0 right-0 flex items-center gap-4 p-5 sm:p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-[0_8px_24px_rgba(6,182,212,0.4)]">
                    <ChevronRight className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="text-lg font-extrabold text-white sm:text-2xl">
                    {activeItem.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-6 p-5 sm:p-6 lg:p-7">
                <p className="text-sm leading-8 text-slate-300 sm:text-[15px]">
                  {activeItem.description}
                </p>

                <div className="space-y-3">
                  {activeItem.highlights.map((highlight) => (
                    <div
                      key={highlight.title}
                      className="rounded-2xl border border-cyan-500/15 bg-cyan-500/5 p-4 transition hover:border-cyan-400/30 hover:bg-cyan-500/10"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-300">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-slate-100">
                            {highlight.title}
                          </h4>
                          <p className="mt-1 text-sm leading-7 text-slate-400">
                            {highlight.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Subnav */}
            <aside className="bg-gradient-to-b from-[#0a0e1a] to-[#0c1222]">
              <div className="border-b border-cyan-500/10 px-4 py-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
                Sub Services
              </div>

              <div className="flex gap-2 overflow-x-auto p-4 lg:block lg:space-y-2 lg:overflow-visible">
                {activeCategory.items.map((item, index) => {
                  const isActive = activeItemIndex === index;

                  return (
                    <button
                      key={item.title}
                      onClick={() => setActiveItemIndex(index)}
                      className={`group min-w-max rounded-2xl border px-4 py-3 text-left transition lg:flex lg:w-full lg:min-w-0 lg:items-center lg:gap-3 ${
                        isActive
                          ? "border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-white"
                          : "border-cyan-500/10 bg-cyan-500/[0.03] text-slate-300 hover:border-cyan-400/25 hover:bg-cyan-500/10 hover:text-white"
                      }`}
                    >
                      <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-cyan-300 lg:flex">
                        <span className="text-xs font-bold">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold leading-5">{item.title}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}