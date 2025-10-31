import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, Shield, Zap } from "lucide-react";

const faqs = [
  {
    question: "How long does a website project take?",
    answer: "Typical timelines: Starter 2–3 weeks, Growth 3–5 weeks, Custom 4–8 weeks depending on scope, approvals, and integrations. We share a clear timeline with milestones."
  },
  {
    question: "What platforms do you build on?",
    answer: "We build with Webflow or WordPress, and for advanced needs we ship Next.js/Headless. We’ll recommend the best stack for your goals, budget, and team."
  },
  {
    question: "Will my site be fast and mobile‑friendly?",
    answer: "Yes. Every site is responsive, accessible, and optimized for Core Web Vitals. We compress assets, optimize fonts, and test across modern devices and browsers."
  },
  {
    question: "Can I edit content myself?",
    answer: "Absolutely. We set up a CMS so you can edit pages, blogs, and media easily. We also provide quick Loom tutorials after launch."
  },
  {
    question: "Do you handle copy and images?",
    answer: "We can collaborate on copy (UX writing) and source licensed images/illustrations. You can also provide brand assets and we’ll implement them."
  },
  {
    question: "What’s included after launch?",
    answer: "30 days of support for fixes, then optional retainers for CRO experiments, new pages, and ongoing improvements. We’re here long‑term if you need us."
  }
];

export const FAQ = () => {
  return (
    <motion.section 
      id="faq"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-background via-muted/30 to-background z-80 overflow-hidden"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge - Centered */}
            <motion.div 
              className="flex justify-center mb-5 sm:mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            >
              <div className="px-4 py-2 bg-gold/10 backdrop-blur-sm rounded-full text-sm font-semibold text-gold flex items-center gap-2 border border-gold/20">
                <HelpCircle className="w-4 h-4" />
                <span>Got Questions?</span>
              </div>
            </motion.div>

            {/* Heading - Centered */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 text-foreground px-2" style={{ textAlign: 'center' }}>
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            {/* Description - Centered */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed px-2 text-center mx-auto">
              Everything you need to know about our web design services. Can't find what you're looking for? Chat with us.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="group bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 hover:border-gold hover:bg-card hover:shadow-lg transition-all duration-300 data-[state=open]:border-gold data-[state=open]:bg-card data-[state=open]:shadow-xl"
                  >
                    <AccordionTrigger className="text-left text-base sm:text-lg md:text-xl font-semibold hover:text-gold py-5 sm:py-6 hover:no-underline group-hover:text-gold transition-colors">
                      <span className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm font-bold mt-0.5">
                          {index + 1}
                        </span>
                        <span className="flex-1">{faq.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-2 pb-5 sm:pb-6 pl-9 sm:pl-10">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Enhanced trust indicators */}
          <motion.div 
            className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className="p-5 sm:p-6 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent backdrop-blur-sm border-2 border-gold/20 rounded-xl sm:rounded-2xl group hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-gold/20 rounded-xl group-hover:bg-gold/30 transition-colors">
                  <Shield className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5">
                    Accessible & Fast
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    WCAG-friendly, responsive, and optimized for Core Web Vitals to keep visitors engaged
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent backdrop-blur-sm border-2 border-gold/20 rounded-xl sm:rounded-2xl group hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-gold/20 rounded-xl group-hover:bg-gold/30 transition-colors">
                  <Zap className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5">
                    Complete Web Design Suite
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Strategy • UX/UI • Development • CMS • Integrations • CRO • Analytics
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Still have questions CTA */}
          <motion.div 
            className="mt-8 sm:mt-10 md:mt-12 p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-xl sm:rounded-2xl text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2">
              Still have questions?
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5">
              Our team is here to help. Get in touch and we'll respond within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gold text-foreground font-semibold rounded-xl hover:bg-gold/90 transition-all duration-300 hover:scale-105"
              >
                Contact Support
              </a>
              <a 
                href="#pricing" 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-border text-foreground font-semibold rounded-xl hover:border-gold hover:bg-gold/5 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};