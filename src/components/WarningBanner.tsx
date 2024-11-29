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
            <span className="font-bold">Message </span>
          <p>As a KL University student, you know how important it is to stay on top of your attendance requirements. Our intelligent attendance tracking system is designed to help you do just that, providing real-time insights and smart predictions to ensure you never miss a class or deadline.</p>

<p>With our system, you'll be able to track your attendance history, set goals, and make informed decisions about your academic path. Plus, receive instant notifications on attendance requirements, deadlines, and schedule changes, so you can stay focused on what matters most – your education.</p>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WarningBanner;
