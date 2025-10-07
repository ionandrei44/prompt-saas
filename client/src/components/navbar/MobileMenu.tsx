import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from "@heroui/react";
import { XIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../logo/Logo";
import { GlassButton } from "../ui";
import { theme } from "../../styles/theme";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (href: string, isExternal: boolean) => void;
}

const MobileMenu = ({ isOpen, onClose, onNavClick }: MobileMenuProps) => {
  const navigate = useNavigate();

  // Close menu when screen gets large enough (md breakpoint: 768px)
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && window.innerWidth >= 768) {
        onClose();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, onClose]);

  // Navigation links
  const navLinks = [
    { name: "Benefits", href: "#benefits", isExternal: false },
    { name: "How It Works", href: "#how-it-works", isExternal: false },
    { name: "Pricing", href: "#pricing", isExternal: false },
    { name: "FAQ", href: "#faq", isExternal: false },
    { name: "About", href: "#about", isExternal: false },
  ];

  const handleNavItemClick = (href: string, isExternal: boolean) => {
    onNavClick(href, isExternal);
    onClose();
  };

  const handleAuthClick = () => {
    navigate("/app");
    onClose();
  };

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="left"
      size="sm"
      className="md:hidden"
      hideCloseButton
      style={{
        background: theme.colors.background.secondary,
      }}
    >
      <DrawerContent style={{ background: theme.colors.background.secondary }}>
        <DrawerHeader className="flex flex-col gap-1 p-6">
          <div className="flex items-center justify-between w-full">
            <Logo
              onClick={() => {
                onNavClick("#hero", false);
                onClose();
              }}
            />
            <Button
              isIconOnly
              variant="light"
              onPress={onClose}
              className="hover:opacity-80"
              style={{ color: theme.colors.text.secondary }}
              aria-label="Close menu"
            >
              <XIcon size={24} weight="bold" />
            </Button>
          </div>
        </DrawerHeader>

        <DrawerBody className="px-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavItemClick(link.href, link.isExternal)}
                className="flex items-center py-3 px-4 text-left font-medium transition-all duration-200 group cursor-pointer rounded-lg"
                style={{
                  color: theme.colors.text.secondary,
                  background: theme.effects.cardGlass.background,
                  backdropFilter: theme.effects.cardGlass.backdropFilter,
                  border: theme.effects.cardGlass.border,
                }}
              >
                <span className="flex-1">{link.name}</span>
                <div
                  className="w-0 h-0.5 transition-all duration-300 group-hover:w-8 ml-2"
                  style={{
                    background: `linear-gradient(90deg, ${theme.colors.primary[500]} 0%, ${theme.colors.secondary[500]} 100%)`,
                  }}
                />
              </button>
            ))}
          </div>

          {/* Divider */}
          <div
            className="my-6 h-px"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${theme.colors.glass.border} 50%, transparent 100%)`,
            }}
          />
        </DrawerBody>

        <DrawerFooter className="p-6">
          <div className="w-full flex flex-col gap-3">
            <GlassButton
              variant="glass"
              size="lg"
              onClick={handleAuthClick}
              className="w-full"
            >
              Sign In
            </GlassButton>
            <GlassButton
              variant="primary"
              size="lg"
              onClick={handleAuthClick}
              className="w-full"
            >
              Start Free
            </GlassButton>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
