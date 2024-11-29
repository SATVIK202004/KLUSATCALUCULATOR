import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaUndo } from 'react-icons/fa';

const SimpleCalculator = () => {
  const [totalClasses, setTotalClasses] = useState('');
  const [attendedClasses, setAttendedClasses] = useState('');
  const [percentage, setPercentage] = useState<number | null>(null);
  const [error, setError] = useState('');

  const calculateAttendance = () => {
    if (!totalClasses || !attendedClasses) {
      setError('Please enter both values');
      return;
    }

    const total = parseInt(totalClasses);
    const attended = parseInt(attendedClasses);

    if (attended > total) {
      setError('Attended classes cannot exceed total classes');
      return;
    }

    const calculatedPercentage = (attended / total) * 100;
    setPercentage(Math.round(calculatedPercentage * 100) / 100);
    setError('');
  };

  const resetForm = () => {
    setTotalClasses('');
    setAttendedClasses('');
    setPercentage(null);
    setError('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Simple Calculator</h2>
      
      <div className="space-y-4">
        <div className="input-group">
          <label className="block text-gray-700 mb-2">Total Classes</label>
          <input
            type="number"
            value={totalClasses}
            onChange={(e) => setTotalClasses(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="Enter total classes"
          />
        </div>

        <div className="input-group">
          <label className="block text-gray-700 mb-2">Classes Attended</label>
          <input
            type="number"
            value={attendedClasses}
            onChange={(e) => setAttendedClasses(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="Enter attended classes"
          />
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm"
          >
            {error}
          </motion.div>
        )}

        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={calculateAttendance}
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <FaCalculator className="mr-2" /> Calculate
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={resetForm}
            className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            <FaUndo className="mr-2" /> Reset
          </motion.button>
        </div>

        {percentage !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 p-4 rounded-lg text-center ${
              percentage >= 85 ? 'bg-green-100 text-green-800' :
              percentage >= 75 ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}
          >
            <h3 className="text-xl font-bold mb-2">Attendance: {percentage}%</h3>
            <p>
              {percentage >= 85 ? 'Excellent! Keep it up! 🌟' :
               percentage >= 75 ? 'Good, but room for improvement! 📈' :
               'Needs attention! ⚠️'}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SimpleCalculator;