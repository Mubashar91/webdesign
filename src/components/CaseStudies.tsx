import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CaseStudy {
  id: number;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
  image: string;
  stats: {
    mainResult: string;
    timeframe: string;
    seoFocus: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "E‑commerce Redesign Lifts Conversions 2.7x and Doubles AOV",
    company: "TechMart Online",
    industry: "E‑commerce",
    challenge: "Outdated UI, slow load times, and high checkout abandonment. Mobile users bounced due to poor performance.",
    solution: "UX overhaul with clearer product hierarchy, optimized images (AVIF/WebP), streamlined checkout, and performance budget targeting LCP < 2s.",
    results: [
      { metric: "Conversion Rate", value: "×2.7", description: "Checkout flow redesign and trust cues" },
      { metric: "Avg. Order Value", value: "+92%", description: "Bundling and cross‑sell modules" },
      { metric: "LCP (P95)", value: "< 2.0s", description: "Image/CDN, font, and script optimizations" },
      { metric: "Bounce Rate", value: "-38%", description: "Faster loads and improved product pages" }
    ],
    testimonial: "Our store finally feels premium and fast. Sales jumped immediately after launch.",
    testimonialAuthor: "Stefan Richter",
    testimonialRole: "CEO, TechMart Online",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    stats: {
      mainResult: "2.7× CVR",
      timeframe: "6 weeks",
      seoFocus: "Redesign + Performance"
    }
  },
  {
    id: 2,
    title: "Local Service Brand Sees 3× More Bookings After Website Relaunch",
    company: "Digital Dynamics",
    industry: "Professional Services",
    challenge: "Legacy site was confusing, not mobile‑friendly, and forms were failing. Trust signals were missing.",
    solution: "Mobile‑first layout with service pages, testimonials, and schema; rebuilt forms with analytics + CRM integration; clearer CTAs.",
    results: [
      { metric: "Bookings", value: "×3.0", description: "New IA and conversion‑focused pages" },
      { metric: "Mobile Speed", value: "+68%", description: "Font, image, and JS reductions" },
      { metric: "Form Submissions", value: "+220%", description: "Reliable forms + event tracking" },
      { metric: "Time on Site", value: "+41%", description: "Cleaner UX and content structure" }
    ],
    testimonial: "The site looks incredible and finally works on mobile. We get quality inquiries every day.",
    testimonialAuthor: "Julia Becker",
    testimonialRole: "Founder, Digital Dynamics",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    stats: {
      mainResult: "×3 Bookings",
      timeframe: "4 weeks",
      seoFocus: "UX + CRO"
    }
  },
  {
    id: 3,
    title: "SaaS Marketing Site Redesign Boosts Demo Requests 120%",
    company: "CloudFlow Solutions",
    industry: "SaaS",
    challenge: "Dense content and unclear messaging. Slow pages from heavy scripts and unoptimized illustrations.",
    solution: "New visual system, clarified value prop, sectioned storytelling, code‑split scripts, and optimized SVG/PNG assets.",
    results: [
      { metric: "Demo Requests", value: "+120%", description: "Clearer messaging and CTAs" },
      { metric: "Core Web Vitals", value: "All Green", description: "CLS, LCP, INP within thresholds" },
      { metric: "Bounce Rate", value: "-29%", description: "Improved hero and nav IA" },
      { metric: "Build Time", value: "-35%", description: "Simplified stack and components" }
    ],
    testimonial: "Leads spiked the week we launched. The brand finally matches our product.",
    testimonialAuthor: "Marco Schneider",
    testimonialRole: "CTO, CloudFlow Solutions",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    stats: {
      mainResult: "+120% Demos",
      timeframe: "5 weeks",
      seoFocus: "Messaging + Performance"
    }
  }
];

export { caseStudies };

export const CaseStudies = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      id="case-studies"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-background via-muted/30 to-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gold/10 text-gold text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Web Design Success Stories
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            See how brands launched faster sites, improved UX, and lifted conversions with our modern web design process.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card border border-border/50 rounded-xl sm:rounded-2xl overflow-hidden hover:border-gold/50 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer w-full"
              onClick={() => navigate(`/case-study/${study.id}`)}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-44 sm:h-52 md:h-48 lg:h-56 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-gold text-foreground text-xs font-bold rounded-full mb-1.5 sm:mb-2">
                    {study.industry}
                  </span>
                  <h3 className="text-white font-bold text-base sm:text-lg line-clamp-2">
                    {study.company}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-border">
                  <div className="text-center">
                    <div className="text-gold font-bold text-sm sm:text-base lg:text-lg">{study.stats.mainResult}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Result</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gold font-bold text-sm sm:text-base lg:text-lg">{study.stats.seoFocus}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Focus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gold font-bold text-sm sm:text-base lg:text-lg">{study.stats.timeframe}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Timeframe</div>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                  {study.title}
                </h4>

                {/* Challenge snippet */}
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                  {study.challenge}
                </p>

                {/* Read more */}
                <div className="flex items-center gap-1 sm:gap-2 text-gold font-semibold text-xs sm:text-sm group-hover:gap-2 sm:group-hover:gap-3 transition-all">
                  <span className="hidden sm:inline">View Full Case Study</span>
                  <span className="sm:hidden">View Study</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
        >
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6">
            Ready to write your own success story?
          </p>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gold text-foreground font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg">
            <span className="hidden sm:inline">Book Your Free Consultation →</span>
            <span className="sm:hidden">Get Started →</span>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};
