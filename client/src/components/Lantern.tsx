import { motion } from "framer-motion";

interface LanternProps {
  delay?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Lantern({ delay = 0, className = "", size = "md" }: LanternProps) {
  const sizes = {
    sm: "w-16 h-24",
    md: "w-24 h-36",
    lg: "w-32 h-48",
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ 
        y: [0, 15, 0], 
        opacity: 1 
      }}
      transition={{ 
        y: {
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: delay 
        },
        opacity: {
          duration: 1.5,
          delay: delay
        }
      }}
      className={`absolute z-10 ${sizes[size]} ${className}`}
    >
      {/* Lantern SVG */}
      <svg viewBox="0 0 100 150" className="w-full h-full drop-shadow-[0_20px_25px_rgba(253,186,49,0.2)]">
        {/* Glow behind */}
        <circle cx="50" cy="80" r="30" fill="#FDB931" fillOpacity="0.2" filter="blur(10px)" />
        
        {/* Chain */}
        <line x1="50" y1="0" x2="50" y2="20" stroke="#D4AF37" strokeWidth="2" />
        
        {/* Top Dome */}
        <path d="M 30 40 L 50 20 L 70 40 Z" fill="#B48E26" />
        
        {/* Main Body */}
        <path d="M 30 40 L 20 70 L 30 110 L 70 110 L 80 70 L 70 40 Z" fill="#1a233a" stroke="#D4AF37" strokeWidth="2" />
        
        {/* Inner Glow/Glass */}
        <path d="M 35 45 L 28 70 L 35 105 L 65 105 L 72 70 L 65 45 Z" fill="url(#lanternGradient)" opacity="0.8" />
        
        {/* Bottom Detail */}
        <path d="M 35 110 L 40 120 L 60 120 L 65 110 Z" fill="#B48E26" />
        
        <defs>
          <linearGradient id="lanternGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF8E1" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFB300" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
