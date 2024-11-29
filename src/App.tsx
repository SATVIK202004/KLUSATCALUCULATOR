import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalculator, FaChartLine, FaHistory } from 'react-icons/fa';
import { GraduationCap } from 'lucide-react';
import SplashScreen from './components/SplashScreen';
import WarningBanner from './components/WarningBanner';
import Footer from './components/Footer';
import SimpleCalculator from './components/SimpleCalculator';
import AdvancedCalculator from './components/AdvancedCalculator';
import ProjectionCalculator from './components/ProjectionCalculator';
import './styles.css';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('simple');

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-900 text-white p-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <GraduationCap className="h-8 w-8" />
            <h1 className="text-2xl font-bold">KLU Attendance Calculator</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <WarningBanner />
        
        <div className="mt-6 mb-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-blue-900 mb-4"
          >
            Welcome to KLU Attendance Calculator
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600"
          >
            Your comprehensive tool for tracking and managing academic attendance
          </motion.p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg p-1 bg-gray-200">
            {[
              { id: 'simple', label: 'Simple', icon: FaCalculator },
              { id: 'advanced', label: 'Advanced', icon: FaChartLine },
              { id: 'projection', label: 'Projection', icon: FaHistory }
            ].map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(id)}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeTab === id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Icon className="mr-2" />
                {label}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'simple' && <SimpleCalculator />}
            {activeTab === 'advanced' && <AdvancedCalculator />}
            {activeTab === 'projection' && <ProjectionCalculator />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;