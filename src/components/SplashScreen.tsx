import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  React.useEffect(() => {
    const timer = setTimeout(onFinish, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 bg-blue-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <img
          src="https://www.kluniversity.in/images/klu-logo.png"
          alt="KLU Logo"
          className="w-48 h-48 mx-auto mb-8"
        />
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold text-white mb-4"
        >
          KLU Attendance Calculator
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-white opacity-80"
        >
          Your Academic Success Partner
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;