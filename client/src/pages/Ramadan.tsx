import { Moon } from "@/components/Moon";
import { Lantern } from "@/components/Lantern";
import { Particles } from "@/components/Particles";
import { motion } from "framer-motion";

export default function Ramadan() {
  return (
    <div dir="rtl" className="min-h-screen relative w-full overflow-hidden flex flex-col items-center justify-center p-6 md:p-12">
      {/* Background Ambience */}
      <Particles />
      <Moon />
      
      {/* Decorative Lanterns */}
      <Lantern size="lg" className="left-[10%] -top-10 hidden md:block" delay={0.5} />
      <Lantern size="md" className="left-[20%] -top-5 hidden lg:block" delay={1.2} />
      <Lantern size="sm" className="right-[15%] top-10 md:hidden" delay={0.8} />

      {/* Main Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 max-w-2xl w-full text-center space-y-12"
      >
        {/* Header Section */}
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-6xl md:text-8xl font-amiri font-bold text-white text-glow tracking-wide"
          >
            رمضان كريم <span className="text-[#FFD700]">🌙</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="text-xl md:text-2xl text-white/80 font-cairo font-light"
          >
            اللهم بلغنا رمضان لا فاقدين ولا مفقودين
          </motion.p>
        </div>

        {/* Glass Card Message */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group"
        >
          {/* Subtle Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] bg-repeat mix-blend-overlay pointer-events-none" />
          
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2s] pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-2xl md:text-3xl text-[#FFD700] font-messiri">
              إلى أحبّ الناس إلى قلبي 🤍
            </h2>
            
            <p className="text-lg md:text-2xl leading-relaxed md:leading-loose text-white/90 font-amiri">
              مع بداية هذا الشهر المبارك،<br/>
              أسأل الله أن يملأ أيامكم نورًا وطمأنينة،<br/>
              وأن يجعل لنا فيه دعواتٍ لا تُرد،<br/>
              وقلوبًا مطمئنة،<br/>
              وأقدارًا أجمل مما نتمنى.
            </p>

            <div className="pt-8 flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-50" />
            </div>
          </div>
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="text-lg md:text-xl text-[#FFD700]/80 font-messiri pt-8"
        >
          من آية ✨
        </motion.div>
      </motion.div>

      {/* Footer Pattern */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-[0.03] pointer-events-none" />
    </div>
  );
}
