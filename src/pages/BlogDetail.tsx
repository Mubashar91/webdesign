import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

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
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How Virtual Assistants Can Save Your Business 70% on Operational Costs",
    excerpt: "Discover the proven strategies that successful businesses use to dramatically reduce costs while maintaining quality through virtual assistants.",
    content: `
      <h2>The Cost Crisis in Modern Business</h2>
      <p>In today's competitive market, businesses are constantly looking for ways to reduce operational costs without sacrificing quality. One of the most effective solutions that has emerged is the strategic use of virtual assistants.</p>
      
      <h3>Breaking Down the Savings</h3>
      <p>When you hire a virtual assistant instead of a full-time employee, you save on:</p>
      <ul>
        <li>Office space and equipment</li>
        <li>Benefits and insurance</li>
        <li>Training and onboarding costs</li>
        <li>Paid time off and sick leave</li>
        <li>Taxes and administrative overhead</li>
      </ul>
      
      <h3>Real-World Success Stories</h3>
      <p>We've helped over 200 businesses achieve an average of 70% cost reduction. One e-commerce company reduced their customer service costs from €8,000/month to €2,400/month while actually improving response times.</p>
      
      <h3>Quality Doesn't Have to Suffer</h3>
      <p>The key is working with a service that provides native quality control. At DON VA, every deliverable is reviewed by native German-speaking managers, ensuring your standards are always met.</p>
      
      <h3>Getting Started</h3>
      <p>The transition to virtual assistants doesn't have to be complicated. Start with one VA handling routine tasks, measure the results, and scale from there. Most of our clients see positive ROI within the first month.</p>
    `,
    author: "Michael Schmidt",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Cost Optimization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
  },
  {
    id: 2,
    title: "5 Tasks You Should Delegate to a Virtual Assistant Today",
    excerpt: "Stop wasting time on routine tasks. Learn which activities you should delegate immediately to free up your schedule for strategic work.",
    content: `
      <h2>Time is Your Most Valuable Asset</h2>
      <p>As a business owner or manager, your time should be spent on high-value activities that drive growth. Yet many professionals find themselves bogged down in routine tasks that could easily be delegated.</p>
      
      <h3>1. Email Management</h3>
      <p>Your VA can filter, categorize, and respond to routine emails, flagging only the important ones for your attention. This alone can save 2-3 hours per day.</p>
      
      <h3>2. Calendar Management</h3>
      <p>Let your VA handle scheduling, rescheduling, and coordinating meetings. They can manage time zones, send reminders, and ensure you're always prepared.</p>
      
      <h3>3. Social Media Management</h3>
      <p>Content scheduling, engagement monitoring, and basic customer service on social platforms can all be handled by a skilled VA.</p>
      
      <h3>4. Data Entry and Research</h3>
      <p>Whether it's updating CRM systems, conducting market research, or compiling reports, VAs excel at these detail-oriented tasks.</p>
      
      <h3>5. Customer Support</h3>
      <p>First-line customer support, handling common questions, and escalating complex issues can be managed efficiently by trained VAs.</p>
      
      <h3>The Impact</h3>
      <p>By delegating these five tasks, most executives free up 15-20 hours per week. That's time you can reinvest in strategy, business development, or work-life balance.</p>
    `,
    author: "Sarah Weber",
    date: "March 10, 2024",
    readTime: "4 min read",
    category: "Productivity",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop"
  },
  {
    id: 3,
    title: "The Complete Guide to Scaling Your Business with Virtual Teams",
    excerpt: "Learn the proven framework for building and managing a high-performing virtual team that drives real business results.",
    content: `
      <h2>Why Virtual Teams are the Future</h2>
      <p>The traditional office model is becoming obsolete. Virtual teams offer flexibility, cost savings, and access to global talent that physical offices simply can't match.</p>
      
      <h3>Phase 1: Starting Small</h3>
      <p>Begin with one VA handling a specific function. This allows you to:</p>
      <ul>
        <li>Test the waters with minimal risk</li>
        <li>Develop your management processes</li>
        <li>Identify what works for your business</li>
        <li>Build confidence in the model</li>
      </ul>
      
      <h3>Phase 2: Expanding Strategically</h3>
      <p>Once you've proven the concept, scale strategically. Add VAs for complementary functions, creating a well-rounded team that covers all your operational needs.</p>
      
      <h3>Phase 3: Building Systems</h3>
      <p>As your team grows, invest in proper systems:</p>
      <ul>
        <li>Project management tools (Asana, Trello)</li>
        <li>Communication platforms (Slack, Teams)</li>
        <li>Documentation and SOPs</li>
        <li>Performance tracking metrics</li>
      </ul>
      
      <h3>Managing Across Time Zones</h3>
      <p>With VAs in different time zones, you can achieve 24/7 operations. The key is clear handoff procedures and asynchronous communication practices.</p>
      
      <h3>Quality Control</h3>
      <p>This is where many businesses struggle. At DON VA, we solve this with native German managers who review all work before delivery, ensuring consistent quality.</p>
      
      <h3>The Results</h3>
      <p>Companies that successfully scale with virtual teams typically see 3x growth in operational capacity without proportional cost increases. It's not just about saving money—it's about scaling smart.</p>
    `,
    author: "Thomas Müller",
    date: "March 5, 2024",
    readTime: "7 min read",
    category: "Business Growth",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop"
  }
];

const BlogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gold hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <motion.section
        className="relative pt-4 sm:pt-6 pb-20 sm:pb-24 md:pb-28 lg:pb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.button
            onClick={() => navigate('/')}
            className="mt-11 mb-6 sm:mb-8 inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-gold/50 rounded-lg sm:rounded-xl text-foreground hover:text-gold transition-all duration-300 font-semibold group shadow-md hover:shadow-lg hover:shadow-gold/10 text-sm sm:text-base"
            whileHover={{ x: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </motion.button>

          <article className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 sm:mb-8 lg:mb-10"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gold/10 text-gold text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6 border border-gold/20">
                {post.category}
              </span>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm md:text-base text-muted-foreground pb-6 sm:pb-8 border-b border-border">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold/10 flex items-center justify-center">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold/10 flex items-center justify-center">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold/10 flex items-center justify-center">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-sm sm:prose-base lg:prose-lg prose-headings:text-foreground prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8 prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:font-bold prose-h3:mb-3 prose-h3:mt-6 prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground prose-li:my-1 max-w-none mb-10 sm:mb-12"
            >
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </motion.div>

            {/* CTA at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border-2 border-gold/30 rounded-xl sm:rounded-2xl text-center relative overflow-hidden group hover:border-gold/50 transition-all duration-300"
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-5 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                  Book a free consultation and discover how virtual assistants can help you scale.
                </p>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gold text-foreground font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="hidden sm:inline">Book Free Consultation →</span>
                  <span className="sm:hidden">Get Started →</span>
                </button>
              </div>
            </motion.div>

            {/* Related Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-border"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground">More Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                  <motion.div
                    key={relatedPost.id}
                    onClick={() => navigate(`/blog/${relatedPost.id}`)}
                    className="group cursor-pointer bg-card border border-border/50 rounded-lg sm:rounded-xl overflow-hidden hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-36 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-gold text-foreground text-xs font-bold rounded-full">{relatedPost.category}</span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h4 className="text-base sm:text-lg font-bold mb-2 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">{relatedPost.excerpt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </article>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogDetail;
