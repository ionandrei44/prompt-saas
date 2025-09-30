import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { ListIcon } from "@phosphor-icons/react";
import Logo from "../logo/Logo";
import MobileMenu from "./MobileMenu";

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
    { name: "Features", href: "#features", isExternal: false },
    { name: "Pricing", href: "#pricing", isExternal: false },
    { name: "About", href: "#about", isExternal: false },
    { name: "Contact", href: "#contact", isExternal: false },
  ];

  const handleNavClick = (href: string, isExternal: boolean) => {
    if (isExternal) {
      navigate("/app");
    } else {
      const sectionId = href.replace("#", "");
      scrollToSection(sectionId);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo onClick={() => scrollToSection("hero")} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.isExternal)}
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="bordered"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 font-medium"
              onClick={() => navigate("/app")}
            >
              Sign In
            </Button>
            <Button
              color="primary"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate("/app")}
            >
              Start Free
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-200 cursor-pointer"
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
