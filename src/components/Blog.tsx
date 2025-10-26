import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Instagram, LinkedinIcon, Music2, Youtube, Facebook, Twitter } from "lucide-react";
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
  platforms?: Array<"instagram" | "tiktok" | "linkedin" | "youtube" | "facebook" | "twitter">;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Instagram Growth in 90 Days: Content Pillars That Compound",
    excerpt: "A repeatable pillar system (educate, proof, engage) with reels-first execution and weekly iteration.",
    content: `
      <h2>Pillars</h2>
      <ul>
        <li>Educate: how-tos and frameworks your audience can use today</li>
        <li>Proof: case studies, before/after, client shout-outs</li>
        <li>Engage: polls, hot takes, challenges</li>
      </ul>
      <h3>Cadence</h3>
      <p>3–4 reels/week + 1 carousel. Track saves and shares as leading indicators.</p>
    `,
    author: "Agency Team",
    date: "September 22, 2025",
    readTime: "5 min read",
    category: "Instagram",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=500&fit=crop",
    platforms: ["instagram"]
  },
  {
    id: 2,
    title: "TikTok Hooks That Stop the Scroll (With Examples)",
    excerpt: "Seven high-converting hook patterns you can plug into your next 15-second video.",
    content: `
      <h2>Hook Patterns</h2>
      <ul>
        <li>Counter-intuitive claim</li>
        <li>POV transformation</li>
        <li>Myth vs reality</li>
        <li>Numbered promise</li>
      </ul>
      <p>Record front-facing with captions and fast cuts. Keep the first 2 seconds punchy.</p>
    `,
    author: "Creative Lab",
    date: "October 3, 2025",
    readTime: "4 min read",
    category: "TikTok",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop",
    platforms: ["tiktok", "instagram"]
  },
  {
    id: 3,
    title: "LinkedIn Carousel System for B2B Inbound",
    excerpt: "Swipe-friendly frames that convert profile views into pipeline.",
    content: `
      <h2>Template</h2>
      <ul>
        <li>Frame 1: outcome promise</li>
        <li>Frames 2–6: steps, proof, examples</li>
        <li>Frame 7: CTA (demo, guide, or checklist)</li>
      </ul>
      <p>Post 2x/week per leader. Repurpose to short-form video.</p>
    `,
    author: "Strategy",
    date: "August 29, 2025",
    readTime: "6 min read",
    category: "LinkedIn",
    image: "https://images.unsplash.com/photo-1515165562835-c3b8c1ea36cb?w=800&h=500&fit=crop",
    platforms: ["linkedin"]
  },
  {
    id: 4,
    title: "UGC That Converts: How to Brief Creators",
    excerpt: "A clear brief template and angle matrix to get on-brand content that sells.",
    content: `
      <h2>Brief Template</h2>
      <ul>
        <li>Audience + outcome</li>
        <li>Do/Don'ts and claims</li>
        <li>Angles to test</li>
        <li>Deliverables and file specs</li>
      </ul>
      <p>Test 3 hooks per angle. Keep winners in rotation.</p>
    `,
    author: "Creator Ops",
    date: "July 18, 2025",
    readTime: "7 min read",
    category: "UGC",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
    platforms: ["instagram", "tiktok", "youtube"]
  },
  {
    id: 5,
    title: "Content Calendar: The Minimal System That Sticks",
    excerpt: "A simple workflow that keeps you posting across IG, TikTok, and LinkedIn without burnout.",
    content: `
      <h2>Workflow</h2>
      <ul>
        <li>Mon: Ideate + outline</li>
        <li>Tue: Shoot + design</li>
        <li>Wed: Edit + caption</li>
        <li>Thu: Schedule + community</li>
        <li>Fri: Report + learnings</li>
      </ul>
    `,
    author: "Project Mgmt",
    date: "June 7, 2025",
    readTime: "5 min read",
    category: "Workflow",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop",
    platforms: ["instagram", "tiktok", "linkedin"]
  },
  {
    id: 6,
    title: "From Vanity Metrics to Revenue: The Social Scorecard",
    excerpt: "Metrics that matter and how to report them to leadership.",
    content: `
      <h2>Scorecard</h2>
      <ul>
        <li>Organic: reach, ER, saves, shares</li>
        <li>Paid: CTR, CVR, CAC, ROAS</li>
        <li>Revenue: demo requests, assisted revenue</li>
      </ul>
      <p>Include UTMs and qualitative notes from comments/DMs.</p>
    `,
    author: "Analytics",
    date: "May 24, 2025",
    readTime: "6 min read",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop",
    platforms: ["instagram", "tiktok", "linkedin", "facebook", "twitter"]
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
            Strategies, templates, and playbooks to grow with social—content, community, paid, and analytics.
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
                      {post.platforms && (
                        <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground/70">
                          {post.platforms.includes("instagram") && <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="Instagram" />}
                          {post.platforms.includes("tiktok") && <Music2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="TikTok" />}
                          {post.platforms.includes("linkedin") && <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="LinkedIn" />}
                          {post.platforms.includes("youtube") && <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="YouTube" />}
                          {post.platforms.includes("facebook") && <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="Facebook" />}
                          {post.platforms.includes("twitter") && <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-label="X" />}
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
