import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Sparkles, TrendingUp, Users, Star, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <motion.section 
      ref={ref}
      className="relative min-h-screen flex items-center bg-background text-foreground overflow-hidden pt-16 sm:pt-20 md:pt-0"
      style={{ opacity }}
    >
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-gold/5 z-0"
        style={{ y }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block mb-3 sm:mb-4 md:mb-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs sm:text-sm font-semibold"
            >
              Trusted by 200+ Growing Businesses
            </motion.div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 leading-[1.15] sm:leading-[1.12] md:leading-[1.1]">
              Save <span className="bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">70%</span> on Operations.
              <br className="hidden xs:block" />
              <span className="block xs:inline"><span className="bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">Scale Faster</span> with Virtual Assistants.</span>
              <br className="hidden xs:block" />
              <span className="block xs:inline-block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-light text-muted-foreground italic mt-2">
                But Good.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-3 sm:mb-4 md:mb-5 leading-relaxed max-w-xl">
              Reliable VAs. Native Quality Control. No Overhead.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-3"
            >
              <Button 
                variant="gold" 
                size="lg"
                onClick={() => window.location.href = '/book-meeting'}
                className="group relative w-full sm:w-auto text-sm sm:text-base md:text-lg px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 h-auto font-bold shadow-gold-lg transform hover:scale-[1.06] hover:-translate-y-2 transition-all duration-400 hover:brightness-110 cursor-pointer overflow-hidden rounded-xl border-2 border-transparent hover:border-yellow-400/30"
                aria-label="Book a free 15-minute consultation"
              >
                {/* Subtle shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{
                    x: ["-150%", "150%"]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1.5
                  }}
                  aria-hidden="true"
                />
                
                {/* Enhanced hover glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gold via-yellow-400 to-gold rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                
                <span className="relative z-10 flex items-center justify-center gap-2.5">
                  <Calendar className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" aria-hidden="true" />
                  <span className="hidden sm:inline font-semibold group-hover:tracking-wide transition-all duration-300">Book a Free Consultation (15 min)</span>
                  <span className="sm:hidden font-semibold group-hover:tracking-wide transition-all duration-300">Book Free Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" aria-hidden="true" />
                </span>
              </Button>
              
              {/* Urgency indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-muted-foreground"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gold" aria-hidden="true" />
                </motion.div>
                <span className="font-medium">Limited slots available this week</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative lg:ml-auto mt-8 sm:mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20"
            >
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  rotate: [-2, 2, -2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-br from-gold via-yellow-400 to-amber-500 text-background px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-lg border-2 border-background flex items-center gap-1.5 sm:gap-2"
              >
                <Award className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                <span className="text-[10px] sm:text-xs font-bold whitespace-nowrap">Top Rated</span>
              </motion.div>
            </motion.div>
            
            <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] sm:shadow-[0_25px_80px_-18px_rgba(0,0,0,0.75)] md:shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] border-2 border-gold/40 hover:border-gold/80 group transition-all duration-700">
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(234, 179, 8, 0.3)",
                    "0 0 40px rgba(234, 179, 8, 0.5)",
                    "0 0 20px rgba(234, 179, 8, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                aria-hidden="true"
              />
              
              <motion.img 
                src={heroImage} 
                alt="Professional Virtual Assistant Team" 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                whileHover={{ scale: 1.1 }}
              />
              
              {/* Animated gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-gold/10 mix-blend-overlay" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                aria-hidden="true"
              />
              
              {/* Floating stats overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-6 md:right-6 backdrop-blur-xl bg-card/95 border border-gold/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-2xl group-hover:border-gold/40 transition-colors duration-500"
              >
                <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center group/stat cursor-default"
                  >
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-gold/70 group-hover/stat:text-gold transition-colors" aria-hidden="true" />
                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">200+</div>
                      <div className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground font-medium">Clients</div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center group/stat cursor-default border-x border-border/50"
                  >
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    >
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-gold/70 group-hover/stat:text-gold transition-colors" aria-hidden="true" />
                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">70%</div>
                      <div className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground font-medium">Cost Saved</div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center group/stat cursor-default"
                  >
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    >
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-gold/70 group-hover/stat:text-gold transition-colors fill-gold/20" aria-hidden="true" />
                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-gold bg-clip-text text-transparent">4.9/5</div>
                      <div className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground font-medium">Rating</div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Animated decorative elements */}
            <motion.div 
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gold/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              aria-hidden="true"
            />
            <motion.div 
              className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gold/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              aria-hidden="true"
            />
            <motion.div 
              className="absolute top-1/2 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400/10 rounded-full blur-2xl"
              animate={{
                x: [-10, 10, -10],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="hidden md:flex absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 text-gold"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs md:text-sm">Scroll to explore</span>
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </motion.section>
  );
};
