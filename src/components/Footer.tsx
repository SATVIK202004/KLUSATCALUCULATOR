import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white p-8 mt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About This Project</h3>
            <p className="text-sm opacity-80">
              A comprehensive attendance management tool designed specifically for KL University students.
              Track, calculate, and project your attendance with ease.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Developer</h3>
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.1 }}>
                <SocialIcon url="https://github.com/SATVIK202004" bgColor="#fff" style={{ height: 35, width: 35 }} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <SocialIcon url="https://www.instagram.com/iamsatvik20/" bgColor="#fff" style={{ height: 35, width: 35 }} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <SocialIcon url="https://www.linkedin.com/in/peddisetty-venkat-satvik-363903284/" bgColor="#fff" style={{ height: 35, width: 35 }} />
              </motion.div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Project Information</h3>
            <p className="text-sm opacity-80">
              Developed by: Peddisetty Venkat Satvik<br />
              Roll No: 2200040029<br />
              Version: 1.0.0
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-red-800 text-center">
          <p>© SATKLU 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;