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
    costSaved: string;
    timeframe: string;
    vaCount: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "E‑commerce Brand Doubles Engagement and Lifts ROAS with Reels‑first Strategy",
    company: "TechMart GmbH",
    industry: "E‑commerce",
    challenge: "Paid ads were plateauing and organic reach was declining. Creative fatigue and irregular posting hurt performance across Instagram and TikTok.",
    solution: "We built a Reels‑first content system: 12 monthly short‑form videos, weekly carousels, story polls, and UGC integration. Paid social used creative testing and audience exclusions.",
    results: [
      {
        metric: "Engagement Rate",
        value: "+118%",
        description: "Average ER rose from 2.1% to 4.6% in 90 days"
      },
      {
        metric: "Followers",
        value: "+32K",
        description: "Net new followers across IG + TikTok"
      },
      {
        metric: "ROAS",
        value: "4.2x",
        description: "After creative testing and budget reallocation"
      },
      {
        metric: "CPM",
        value: "−28%",
        description: "Lowered cost to reach qualified audiences"
      }
    ],
    testimonial: "Our social finally performs. Reels + creative testing turned things around fast—stronger engagement and profitable spend.",
    testimonialAuthor: "Stefan Richter",
    testimonialRole: "CEO, TechMart GmbH",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    stats: {
      costSaved: "4.2x ROAS",
      timeframe: "90 days",
      vaCount: "IG + TikTok + Meta Ads"
    }
  },
  {
    id: 2,
    title: "Local Restaurant Group Grows Reservations with UGC + Geo‑targeted Ads",
    company: "Digital Dynamics",
    industry: "Hospitality",
    challenge: "Low weekday footfall and poor attribution from social. Limited content variety and sparse community engagement.",
    solution: "Launched UGC program, influencer seeding, story highlights for menus, and geo‑targeted offers. Rolled out weekly reels and boosted top performers.",
    results: [
      {
        metric: "Reservations",
        value: "+63%",
        description: "Weekday bookings in 8 weeks"
      },
      {
        metric: "CPL",
        value: "−41%",
        description: "Lower cost per reservation lead"
      },
      {
        metric: "Reviews",
        value: "+1.2k",
        description: "More Google/IG reviews via community prompts"
      },
      {
        metric: "Reach",
        value: "+220%",
        description: "Across IG + TikTok near locations"
      }
    ],
    testimonial: "UGC and local ads worked. We saw sustained weekday growth and better reviews—exactly what we needed.",
    testimonialAuthor: "Julia Becker",
    testimonialRole: "Founder, Digital Dynamics",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    stats: {
      costSaved: "+63% reservations",
      timeframe: "8 weeks",
      vaCount: "UGC + IG + TikTok + Ads"
    }
  },
  {
    id: 3,
    title: "SaaS App Lowers CAC with Creative Testing and LinkedIn Distribution",
    company: "CloudFlow Solutions",
    industry: "SaaS",
    challenge: "Rising CPMs and stagnant CTRs on Meta; weak content distribution on LinkedIn limited demo pipeline.",
    solution: "Monthly creative sprints for hooks and angles, LinkedIn carousel series for founders, and retargeting to high‑intent visitors.",
    results: [
      {
        metric: "CAC",
        value: "−34%",
        description: "Lower customer acquisition cost from paid social"
      },
      {
        metric: "Demo Requests",
        value: "+78%",
        description: "From LinkedIn distribution and retargeting"
      },
      {
        metric: "CTR",
        value: "+52%",
        description: "On best performing creatives"
      },
      {
        metric: "Sales Cycle",
        value: "−19%",
        description: "Shorter time from MQL to demo"
      }
    ],
    testimonial: "The creative testing cadence changed our paid results, and the LinkedIn playbook filled the top of funnel.",
    testimonialAuthor: "Marco Schneider",
    testimonialRole: "CTO, CloudFlow Solutions",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    stats: {
      costSaved: "−34% CAC",
      timeframe: "3 months",
      vaCount: "Meta + LinkedIn"
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
            Social Media Success Stories
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            See how brands grew reach, engagement, and revenue with our dedicated SMM programs.
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
                    <div className="text-gold font-bold text-sm sm:text-base lg:text-lg">{study.stats.costSaved}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Result</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gold font-bold text-sm sm:text-base lg:text-lg">{study.stats.vaCount}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Channels</div>
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
