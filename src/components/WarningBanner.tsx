import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const WarningBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-yellow-50 border-l-4 border-yellow-400 p-4"
    >
      <div className="flex items-center">
        <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3" />
        <div>
          <p className="text-sm text-yellow-700">
            <span className="font-bold">quotes </span>
            "Mark your presence, not just your attendance"
            "Attend classes, not worries"
            "Stay on track, stay ahead"
            "Effortless attendance, effortless success"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WarningBanner;
