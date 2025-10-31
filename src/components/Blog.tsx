import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, TrendingUp, FileText, Settings, BarChart3, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  seoTopics?: Array<"keyword-research" | "on-page" | "technical" | "content" | "link-building" | "analytics">;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Design Systems 101: Build Faster with Consistent UI",
    excerpt: "How to create a scalable design system with tokens, components, and documentation.",
    content: `
      <h2>Foundations</h2>
      <ul>
        <li>Tokens: color, spacing, typography</li>
        <li>Components: buttons, cards, forms</li>
        <li>Documentation: usage guidelines and variants</li>
      </ul>
      <p>Design systems improve velocity and quality across teams.</p>
    `,
    author: "Design Team",
    date: "October 15, 2025",
    readTime: "7 min read",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["content"]
  },
  {
    id: 2,
    title: "Landing Page CRO: Above-the-Fold That Converts",
    excerpt: "Hero sections, social proof, and clear CTAs that lift conversions without guesswork.",
    content: `
      <h2>Essentials</h2>
      <ul>
        <li>Clear value prop + benefit-driven headline</li>
        <li>Trust: logos, testimonials, metrics</li>
        <li>Primary CTA: single action with low friction</li>
      </ul>
      <p>Test layout, copy, and visual hierarchy to boost CVR.</p>
    `,
    author: "CRO Team",
    date: "October 8, 2025",
    readTime: "6 min read",
    category: "Conversion",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["content"]
  },
  {
    id: 3,
    title: "Core Web Vitals for Designers & Devs",
    excerpt: "Practical steps to hit green scores: images, scripts, fonts, and animation tips.",
    content: `
      <h2>Wins</h2>
      <ul>
        <li>Optimize images (AVIF/WebP, responsive, lazyload)</li>
        <li>Reduce JS: code-split, defer, hydrate on visibility</li>
        <li>Font loading: swap, subset, variable fonts</li>
      </ul>
      <p>Measure with Lighthouse and Web Vitals in production.</p>
    `,
    author: "Performance Team",
    date: "September 28, 2025",
    readTime: "9 min read",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["technical"]
  },
  {
    id: 4,
    title: "Webflow vs WordPress vs Headless: Which Should You Choose?",
    excerpt: "Pros and cons for speed, flexibility, cost, and team workflows.",
    content: `
      <h2>Comparison</h2>
      <ul>
        <li>Webflow: speed to market, visual control</li>
        <li>WordPress: plugins, familiarity, cost-effective</li>
        <li>Headless: performance, scalability, developer control</li>
      </ul>
    `,
    author: "Product Team",
    date: "September 15, 2025",
    readTime: "7 min read",
    category: "Platforms",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["content"]
  },
  {
    id: 5,
    title: "UX Writing: Microcopy That Increases Conversions",
    excerpt: "Buttons, form labels, and error states that reduce friction and build trust.",
    content: `
      <h2>Patterns</h2>
      <ul>
        <li>Button labels: action + outcome</li>
        <li>Forms: clarity, fewer fields, inline errors</li>
        <li>Empty states: helpful and inviting</li>
      </ul>
    `,
    author: "UX Team",
    date: "August 30, 2025",
    readTime: "5 min read",
    category: "UX",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["content"]
  },
  {
    id: 6,
    title: "Setup GA4 + Hotjar: Measure What Matters on Your Site",
    excerpt: "Events, funnels, and heatmaps to see drop-offs and ship smarter iterations.",
    content: `
      <h2>Setup</h2>
      <ul>
        <li>Define events + conversions</li>
        <li>Connect heatmaps and session replays</li>
        <li>Use insights for A/B tests</li>
      </ul>
    `,
    author: "Analytics Team",
    date: "August 12, 2025",
    readTime: "8 min read",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    seoTopics: ["analytics"]
  }
];

export const Blog = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      id="blog"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="relative mb-8 sm:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gold/10 text-gold text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            Latest Insights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-foreground">
            Blog & <span className="text-gold">Resources</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Expert insights on design, UX, performance, and conversion to build websites that grow your business.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card border border-border/50 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden hover:border-gold/50 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer w-full flex flex-col"
                onClick={() => navigate(`/blog/${post.id}`)}
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="px-2.5 py-1 sm:px-3 bg-gold text-foreground text-[10px] sm:text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="truncate">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/30">
                    <span className="text-[10px] sm:text-xs text-muted-foreground truncate">By {post.author}</span>
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                      {post.seoTopics && (
                        <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground/70">
                          {post.seoTopics.includes("keyword-research") && <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="Keyword Research" />}
                          {post.seoTopics.includes("on-page") && <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="On-Page SEO" />}
                          {post.seoTopics.includes("technical") && <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="Technical SEO" />}
                          {post.seoTopics.includes("content") && <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="Content SEO" />}
                          {post.seoTopics.includes("link-building") && <Link className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="Link Building" />}
                          {post.seoTopics.includes("analytics") && <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="SEO Analytics" />}
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-gold font-semibold text-[10px] sm:text-xs group-hover:gap-1.5 transition-all">
                        <span className="hidden sm:inline">Read</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
