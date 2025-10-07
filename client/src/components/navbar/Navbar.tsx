import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ListIcon } from "@phosphor-icons/react";
import Logo from "../logo/Logo";
import MobileMenu from "./MobileMenu";
import { GlassButton } from "../ui";
import { theme } from "../../styles/theme";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Navigation links
  const navLinks = [
    { name: "Benefits", href: "#benefits", isExternal: false },
    { name: "How It Works", href: "#how-it-works", isExternal: false },
    { name: "Pricing", href: "#pricing", isExternal: false },
    { name: "FAQ", href: "#faq", isExternal: false },
    { name: "About", href: "#about", isExternal: false },
  ];

  const handleNavClick = (href: string, isExternal: boolean) => {
    if (isExternal) {
      navigate("/dashboard");
    } else {
      const sectionId = href.replace("#", "");
      scrollToSection(sectionId);
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
      style={{
        background: isScrolled ? theme.effects.glass.background : "transparent",
        backdropFilter: isScrolled
          ? theme.effects.glass.backdropFilter
          : "none",
        borderBottom: isScrolled
          ? `1px solid ${theme.colors.glass.border}`
          : "none",
        boxShadow: isScrolled ? theme.effects.glass.boxShadow : "none",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo onClick={() => scrollToSection("hero")} />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.isExternal)}
                className="font-medium transition-colors duration-200 relative group cursor-pointer"
                style={{ color: theme.colors.text.secondary }}
              >
                {link.name}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{
                    background: `linear-gradient(90deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
                  }}
                />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <GlassButton variant="glass" onClick={() => navigate("/dashboard")}>
              Sign In
            </GlassButton>
            <GlassButton
              variant="primary"
              onClick={() => navigate("/dashboard")}
            >
              Start Free
            </GlassButton>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg transition-colors duration-200 cursor-pointer"
            style={{
              color: theme.colors.text.secondary,
              background: theme.effects.glass.background,
            }}
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <ListIcon size={24} weight="bold" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavClick={handleNavClick}
      />
    </motion.nav>
  );
};

export default Navbar;
