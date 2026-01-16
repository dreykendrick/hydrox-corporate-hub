import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 24]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Floating Capsule Header - Wrapper for flex centering */}
      <div className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: hidden ? -100 : 16, 
            opacity: hidden ? 0 : 1 
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto w-max max-w-[calc(100vw-1rem)]"
        >
        <motion.div
          className={cn(
            "relative rounded-full border transition-all duration-500 px-3 sm:px-4",
            scrolled 
              ? "bg-background/70 border-border/50 shadow-lg shadow-black/5" 
              : "bg-background/40 border-white/10"
          )}
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-50 pointer-events-none" />
          
          <nav className="relative flex items-center gap-3 h-14 sm:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-background font-bold text-sm sm:text-base">H</span>
                </div>
              </motion.div>
              <div className="hidden sm:flex flex-col">
                <span className="font-semibold text-sm sm:text-base text-foreground tracking-tight leading-none">HydroX</span>
                <span className="text-[9px] sm:text-[10px] text-muted-foreground font-medium uppercase tracking-[0.08em] leading-none mt-0.5">East African Ltd</span>
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-0.5 p-1 rounded-full bg-muted/40 border border-border/30">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="relative px-4 py-1.5 text-sm font-medium transition-colors"
                  >
                    <span className={cn(
                      "relative z-10 transition-colors duration-300",
                      location.pathname === item.href 
                        ? "text-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    )}>
                      {item.name}
                    </span>
                    {location.pathname === item.href && (
                      <motion.div
                        layoutId="activeNavCapsule"
                        className="absolute inset-0 bg-background rounded-full shadow-sm border border-border/50"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center shrink-0">
              <motion.div 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.97 }}
              >
                <Button 
                  variant="default" 
                  size="sm" 
                  asChild 
                  className="rounded-full px-5 gap-1.5 group h-9 text-sm font-medium shadow-md shadow-foreground/10"
                >
                  <Link to="/contact">
                    Get Started
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              type="button"
              className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-full bg-muted/50 border border-border/30"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-4 h-4 text-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-4 h-4 text-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </nav>
        </motion.div>
      </motion.header>
      </div>

      {/* Mobile Menu - Full Screen Overlay - Enhanced */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Premium gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95 backdrop-blur-2xl" />
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
            
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative h-full flex flex-col justify-center px-6 sm:px-10 safe-area-inset"
            >
              {/* Navigation Links */}
              <div className="space-y-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 + 0.15, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={item.href}
                      className={cn(
                        "group flex items-center justify-between py-4 text-2xl sm:text-3xl font-semibold tracking-tight transition-all duration-300 border-b border-border/20",
                        location.pathname === item.href
                          ? "text-accent"
                          : "text-foreground/70 active:text-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      {location.pathname === item.href && (
                        <motion.div 
                          layoutId="mobileActiveIndicator"
                          className="w-2 h-2 rounded-full bg-accent"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA Button */}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full rounded-full h-14 text-base font-semibold shadow-lg" 
                  asChild
                >
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                    <ArrowUpRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
              
              {/* Contact info */}
              <motion.div
                className="mt-8 pt-8 border-t border-border/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-sm text-muted-foreground mb-2">Need help?</p>
                <a 
                  href="tel:+254700000000" 
                  className="text-lg font-medium text-foreground active:text-accent transition-colors"
                >
                  +254 700 000 000
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
