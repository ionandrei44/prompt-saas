import { ChartLine } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const Logo = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.div
      className="flex items-center gap-2 cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
        <ChartLine size={20} weight="bold" className="text-white" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-100 to-blue-200 bg-clip-text text-transparent select-none">
        DevMetrics
      </span>
    </motion.div>
  );
};

export default Logo;
