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
    title: "E-Commerce Giant Reduces Costs by 70% While Scaling Operations",
    company: "TechMart GmbH",
    industry: "E-Commerce",
    challenge: "TechMart was spending €42,000/month on customer service with a team of 7 full-time employees. Response times were slow, and scaling for peak seasons was expensive and complicated.",
    solution: "We implemented a team of 5 dedicated VAs handling customer inquiries, order processing, and basic technical support. Native German managers ensured quality control on all customer communications.",
    results: [
      {
        metric: "Cost Reduction",
        value: "70%",
        description: "Monthly operational costs dropped from €42,000 to €12,600"
      },
      {
        metric: "Response Time",
        value: "65% Faster",
        description: "Average response time improved from 4 hours to 1.4 hours"
      },
      {
        metric: "Customer Satisfaction",
        value: "4.8/5",
        description: "Up from 3.9/5, with 95% positive feedback"
      },
      {
        metric: "Scalability",
        value: "3x Capacity",
        description: "Can now handle 3x more inquiries during peak seasons"
      }
    ],
    testimonial: "DON VA transformed our customer service operations. We're saving €350,000 annually while providing better service than ever before. The native German quality control was the game-changer.",
    testimonialAuthor: "Stefan Richter",
    testimonialRole: "CEO, TechMart GmbH",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    stats: {
      costSaved: "€350K/year",
      timeframe: "3 months",
      vaCount: "5 VAs"
    }
  },
  {
    id: 2,
    title: "Marketing Agency Scales to 50+ Clients Without Hiring Full-Time Staff",
    company: "Digital Dynamics",
    industry: "Marketing Agency",
    challenge: "Rapid growth meant the agency needed to scale operations quickly. Hiring full-time staff was slow and expensive, and project demands fluctuated significantly.",
    solution: "We provided a flexible team of 8 VAs specializing in social media management, content creation, client reporting, and administrative tasks. The team scaled up and down based on project needs.",
    results: [
      {
        metric: "Client Growth",
        value: "150%",
        description: "Grew from 20 to 50 clients in 6 months"
      },
      {
        metric: "Cost Efficiency",
        value: "€180K Saved",
        description: "Compared to hiring equivalent full-time staff"
      },
      {
        metric: "Project Delivery",
        value: "40% Faster",
        description: "Improved turnaround times on all deliverables"
      },
      {
        metric: "Team Flexibility",
        value: "100%",
        description: "Can scale team size within 48 hours"
      }
    ],
    testimonial: "We couldn't have scaled this fast with traditional hiring. DON VA gave us the flexibility to grow without the overhead. Our clients are happier, and our margins are better.",
    testimonialAuthor: "Julia Becker",
    testimonialRole: "Founder, Digital Dynamics",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    stats: {
      costSaved: "€180K/year",
      timeframe: "6 months",
      vaCount: "8 VAs"
    }
  },
  {
    id: 3,
    title: "SaaS Startup Achieves 24/7 Support Coverage on a Lean Budget",
    company: "CloudFlow Solutions",
    industry: "SaaS",
    challenge: "As a startup with global customers, CloudFlow needed 24/7 support but couldn't afford a full-time team across multiple time zones. Customer churn was increasing due to slow response times.",
    solution: "We deployed a distributed team of 4 VAs across different time zones, providing round-the-clock coverage. They handled tier-1 support, onboarding, and documentation.",
    results: [
      {
        metric: "Support Coverage",
        value: "24/7",
        description: "From 9-5 to round-the-clock availability"
      },
      {
        metric: "Customer Churn",
        value: "45% Reduction",
        description: "Churn dropped from 8% to 4.4% monthly"
      },
      {
        metric: "Cost Savings",
        value: "€120K/year",
        description: "Compared to hiring full-time support team"
      },
      {
        metric: "Response Time",
        value: "Under 30 min",
        description: "Average first response time across all time zones"
      }
    ],
    testimonial: "DON VA made 24/7 support possible for our startup. The ROI was immediate - reduced churn alone paid for the service 3x over. Our customers love the fast response times.",
    testimonialAuthor: "Marco Schneider",
    testimonialRole: "CTO, CloudFlow Solutions",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    stats: {
      costSaved: "€120K/year",
      timeframe: "4 months",
      vaCount: "4 VAs"
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
            Real Results from <span className="text-gold">Real Businesses</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            See how companies like yours achieved dramatic cost savings and operational improvements with DON VA.
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
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gold font-bold text-sm sm:text-base lg:text-lg">{study.stats.vaCount}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Team Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gold font-bold text-sm sm:text-base lg:text-lg">{study.stats.timeframe}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Timeline</div>
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
