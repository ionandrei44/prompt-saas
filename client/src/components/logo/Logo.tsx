import { LightningIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const Logo = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.div
      className="flex items-center gap-2 cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
        <LightningIcon size={20} weight="bold" className="text-white" />
      </div>
      <span className="text-xl font-bold text-slate-900 select-none">
        PromptBond
      </span>
    </motion.div>
  );
};

export default Logo;
