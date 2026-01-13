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
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Glass background */}
        <motion.div
          className="absolute inset-0 border-b"
          style={{
            backgroundColor: `rgba(255, 255, 255, ${scrolled ? 0.85 : 0})`,
            backdropFilter: `blur(${scrolled ? 24 : 0}px)`,
            borderColor: scrolled ? "hsl(220 13% 91% / 0.8)" : "transparent",
          }}
        />

        <nav className="relative section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-10 h-10 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground to-foreground/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-background font-bold text-lg">H</span>
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="font-semibold text-base text-foreground tracking-tight">HydroX</span>
                <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-[0.1em] -mt-0.5">East African Ltd</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 px-1 py-1 rounded-full bg-muted/50">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="relative px-4 py-2 text-sm font-medium transition-colors"
                  >
                    <span className={cn(
                      "relative z-10 transition-colors duration-300",
                      location.pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}>
                      {item.name}
                    </span>
                    {location.pathname === item.href && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-background rounded-full shadow-sm"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="default" size="default" asChild className="rounded-full px-6 gap-2 group">
                  <Link to="/contact">
                    Get Started
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              type="button"
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                    <X className="w-5 h-5 text-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/98 backdrop-blur-xl" />
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative h-full flex flex-col justify-center px-8"
            >
              <div className="space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.15 }}
                  >
                    <Link
                      to={item.href}
                      className={cn(
                        "block py-4 text-3xl font-semibold tracking-tight transition-colors",
                        location.pathname === item.href
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button variant="default" size="lg" className="w-full rounded-full" asChild>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
