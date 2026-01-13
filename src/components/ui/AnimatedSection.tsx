import { motion, useSpring, useTransform, MotionValue } from "framer-motion";
import { ReactNode, useRef, useState, useEffect } from "react";

// Premium easing curves
const easing = {
  smooth: [0.16, 1, 0.3, 1], // Apple-style smooth
  bounce: [0.34, 1.56, 0.64, 1], // Subtle bounce
  snappy: [0.22, 1, 0.36, 1], // Quick and precise
} as const;

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  distance?: number;
}

const directionVariants = (distance: number) => ({
  up: { y: distance, x: 0 },
  down: { y: -distance, x: 0 },
  left: { y: 0, x: distance },
  right: { y: 0, x: -distance },
  none: { y: 0, x: 0 },
});

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
  distance = 60,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionVariants(distance)[direction],
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: easing.smooth,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          ...directionVariants(40)[direction],
          scale: 0.95,
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: easing.smooth,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}

export function FloatingElement({
  children,
  className = "",
  amplitude = 15,
  duration = 6,
  delay = 0,
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) * strength;
    const y = (e.clientY - centerY) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(position.x, springConfig);
  const y = useSpring(position.y, springConfig);

  useEffect(() => {
    x.set(position.x);
    y.set(position.y);
  }, [position.x, position.y, x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  const words = children.split(" ");

  return (
    <motion.span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.05,
              ease: easing.smooth,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.5,
}: ParallaxImageProps) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 1.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: easing.smooth }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: easing.smooth }}
      />
    </motion.div>
  );
}

interface GlowingOrbProps {
  className?: string;
  color?: string;
  size?: string;
  blur?: string;
}

export function GlowingOrb({
  className = "",
  color = "hsl(187 92% 41%)",
  size = "400px",
  blur = "100px",
}: GlowingOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur})`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function Counter({
  end,
  suffix = "",
  prefix = "",
  className = "",
  duration = 2,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.span
      className={className}
      onViewportEnter={() => {
        if (hasAnimated) return;
        setHasAnimated(true);
        
        const startTime = Date.now();
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / (duration * 1000), 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * end));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }}
      viewport={{ once: true }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
}

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className = "" }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-[2px] origin-left z-50 ${className}`}
      style={{
        scaleX: progress / 100,
        background: "linear-gradient(90deg, hsl(187 92% 41%), hsl(187 85% 53%))",
      }}
    />
  );
}
