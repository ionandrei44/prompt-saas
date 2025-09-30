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
    { name: "Features", href: "#features", isExternal: false },
    { name: "Pricing", href: "#pricing", isExternal: false },
    { name: "About", href: "#about", isExternal: false },
    { name: "Contact", href: "#contact", isExternal: false },
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
    >
      <DrawerContent>
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
              className="text-slate-600 hover:text-slate-900"
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
                className="flex items-center py-3 px-4 text-left text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg font-medium transition-all duration-200 group cursor-pointer"
              >
                <span className="flex-1">{link.name}</span>
                <div className="w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-8 ml-2" />
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </DrawerBody>

        <DrawerFooter className="p-6">
          <div className="w-full flex flex-col gap-3">
            <Button
              variant="bordered"
              className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 font-medium"
              onPress={handleAuthClick}
              size="lg"
            >
              Sign In
            </Button>
            <Button
              color="primary"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              onPress={handleAuthClick}
              size="lg"
            >
              Start Free
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
