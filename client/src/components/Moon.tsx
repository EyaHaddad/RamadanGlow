import { motion } from "framer-motion";

export function Moon() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="absolute top-10 right-10 md:top-20 md:right-32 w-32 h-32 md:w-64 md:h-64 rounded-full z-0 pointer-events-none"
    >
      {/* Glowing Moon Effect */}
      <div className="w-full h-full rounded-full shadow-[0_0_100px_rgba(253,186,49,0.15)] bg-gradient-to-br from-[#FDB931] to-transparent opacity-20 blur-xl absolute" />
      
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_30px_rgba(253,186,49,0.3)]">
        <path
          d="M 100 10 A 90 90 0 1 0 100 190 A 70 70 0 1 1 100 10"
          fill="url(#moonGradient)"
          className="opacity-90"
        />
        <defs>
          <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8E1" />
            <stop offset="50%" stopColor="#FFD54F" />
            <stop offset="100%" stopColor="#FF8F00" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
