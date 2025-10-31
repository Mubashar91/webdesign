import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles, Clock, CheckCircle2, Search, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";

export const FinalCTA = () => {
  return (
    <motion.section 
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-gold via-amber-500 to-yellow-600 z-60"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute -top-20 -right-20 w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-16 -left-16 w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 bg-amber-300/20 rounded-full mix-blend-overlay filter blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Enhanced geometric patterns */}
        <motion.div 
          className="absolute top-10 left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-white/20 rounded-lg"
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-16 right-16 w-12 h-12 sm:w-16 sm:h-16 border-2 border-white/20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Enhanced decorative header */}
          <motion.div 
            className="flex justify-center mb-6 sm:mb-8 md:mb-10"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          >
            <div className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/20 backdrop-blur-lg rounded-full text-sm sm:text-base font-semibold text-white flex items-center gap-2 border border-white/30 shadow-xl">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
              <span className="whitespace-nowrap">Let's talk design</span>
              <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-green-400 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Main headline with improved hierarchy */}
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="block drop-shadow-lg">Launch a high‑converting website</span>
          </motion.h2>
          
          {/* Subtitle with benefits */}
          <motion.div
            className="mb-10 sm:mb-12 md:mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 leading-relaxed font-semibold drop-shadow-md">
              Book a 15‑minute design consult. No pressure.
            </p>
            
            {/* Benefits list */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 mt-6">
              {[
                "Fast, modern, on‑brand",
                "Built for conversions"
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-4 sm:px-5 py-2 sm:py-2.5 border border-white/30 hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <span className="text-white text-sm sm:text-base font-semibold whitespace-nowrap">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Enhanced CTA buttons */}
          <motion.div 
            className="flex justify-center items-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button 
              size="lg"
              onClick={() => window.location.href = '/book-meeting'}
              className="bg-white text-gold hover:bg-white/95 hover:scale-[1.03] active:scale-[1.01] group px-8 sm:px-12 py-6 sm:py-7 text-base sm:text-lg font-bold rounded-xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_56px_-12px_rgba(0,0,0,0.4)] transition-all duration-300 border-2 border-white relative overflow-hidden cursor-pointer w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 animate-pulse" />
              <span className="relative flex items-center gap-3">
                <span>Book Free Consult</span>
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            {[
              { icon: Search, value: "300+", label: "Sites Launched" },
              { icon: TrendingUp, value: "2.5x", label: "Avg. Conversion Lift" },
              { icon: Award, value: "98%", label: "Satisfaction" },
              { icon: Clock, value: "3–6w", label: "Project Timeline" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-2xl p-4 sm:p-6 hover:bg-white/25 transition-all duration-300 group"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced trust indicators */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-3 text-white/90 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="p-2 bg-green-400/20 rounded-lg">
                <Clock className="w-5 h-5 text-green-400 flex-shrink-0" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-base">15 min</div>
                <div className="text-sm text-white/80">Free consultation</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-white/90 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="p-2 bg-green-400/20 rounded-lg relative">
                <div className="w-5 h-5 rounded-full bg-green-400 animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-base">2 hours</div>
                <div className="text-sm text-white/80">Avg. response time</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-white/90 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="p-2 bg-green-400/20 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-base">No commitment</div>
                <div className="text-sm text-white/80">Zero pressure</div>
              </div>
            </div>
          </motion.div>

          {/* Additional reassurance text */}
          <motion.p 
            className="mt-8 sm:mt-10 text-white/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="flex items-center justify-center gap-2 flex-wrap">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Join 500+ businesses that dominate search results with our proven SEO strategies
            </span>
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};