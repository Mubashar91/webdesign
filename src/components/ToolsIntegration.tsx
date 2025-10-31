import { motion } from "framer-motion";

const tools = [
  { name: "Figma", category: "Design" },
  { name: "Adobe XD", category: "Design" },
  { name: "Webflow", category: "CMS" },
  { name: "WordPress", category: "CMS" },
  { name: "Next.js", category: "Development" },
  { name: "React", category: "Development" },
  { name: "Tailwind CSS", category: "Development" },
  { name: "Framer Motion", category: "Development" },
  { name: "Vercel", category: "Hosting" },
  { name: "Netlify", category: "Hosting" },
  { name: "Cloudflare", category: "Hosting" },
  { name: "GA4", category: "Analytics" },
  { name: "Hotjar", category: "Analytics" },
  { name: "Plausible", category: "Analytics" },
  { name: "Zapier", category: "Integrations" },
  { name: "Make (Integromat)", category: "Integrations" },
  { name: "HubSpot", category: "CRM" },
  { name: "Airtable", category: "CMS" }
];

const categories = ["Design", "Development", "CMS", "Hosting", "Analytics", "Integrations", "CRM"];

export const ToolsIntegration = () => {
  return (
    <motion.section 
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-background via-muted/30 to-background z-60"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
            We Build With <span className="text-gold">Modern Web Tools</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl px-2">
            Design, development, CMS, hosting, and analytics—everything you need for fast, scalable websites.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {tools.slice(0, 18).map((tool, index) => (
              <motion.div 
                key={index}
                className="bg-card border-2 border-border rounded-lg p-3 sm:p-4 text-center hover:border-gold hover:shadow-gold transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              >
                <p className="text-sm sm:text-base font-semibold text-foreground group-hover:text-gold transition-colors">
                  {tool.name}
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                  {tool.category}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-card border-2 border-gold/30 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-base sm:text-lg text-foreground mb-3 sm:mb-4">
              <span className="font-bold text-gold">Using a different platform or tool?</span> We adapt. 
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              Our team stays current with emerging platforms and tools. If it's part of your stack, we'll master it.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};