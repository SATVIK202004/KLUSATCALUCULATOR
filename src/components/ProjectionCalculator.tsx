import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaUndo } from 'react-icons/fa';

const ProjectionCalculator = () => {
  const [totalClasses, setTotalClasses] = useState('');
  const [attendedClasses, setAttendedClasses] = useState('');
  const [projectedAbsences, setProjectedAbsences] = useState('');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const calculateProjection = () => {
    if (!totalClasses || !attendedClasses) {
      setError('Please enter both total and attended classes');
      return;
    }

    const total = parseInt(totalClasses);
    const attended = parseInt(attendedClasses);
    const absences = projectedAbsences ? parseInt(projectedAbsences) : 0;

    if (attended > total) {
      setError('Attended classes cannot exceed total classes');
      return;
    }

    if (absences > attended) {
      setError('Projected absences cannot exceed attended classes');
      return;
    }

    const currentPercentage = (attended / total) * 100;
    const projectedPercentage = ((attended - absences) / total) * 100;
    
    setResult({
      current: Math.round(currentPercentage * 100) / 100,
      projected: Math.round(projectedPercentage * 100) / 100,
      classesNeeded85: calculateClassesNeeded(attended - absences, total, 85),
      classesNeeded75: calculateClassesNeeded(attended - absences, total, 75)
    });
    setError('');
  };

  const calculateClassesNeeded = (current: number, total: number, target: number) => {
    let classesNeeded = 0;
    let tempTotal = total;
    let tempPercentage = (current / tempTotal) * 100;

    while (tempPercentage < target && classesNeeded < 100) {
      classesNeeded++;
      tempTotal++;
      tempPercentage = ((current + classesNeeded) / tempTotal) * 100;
    }

    return classesNeeded;
  };

  const resetForm = () => {
    setTotalClasses('');
    setAttendedClasses('');
    setProjectedAbsences('');
    setResult(null);
    setError('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Attendance Projection</h2>
      
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

        <div className="input-group">
          <label className="block text-gray-700 mb-2">Projected Absences</label>
          <input
            type="number"
            value={projectedAbsences}
            onChange={(e) => setProjectedAbsences(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="Enter projected absences"
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
            onClick={calculateProjection}
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

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 space-y-4"
          >
            <div className={`p-4 rounded-lg text-center ${
              result.current >= 85 ? 'bg-green-100 text-green-800' :
              result.current >= 75 ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              <h3 className="text-xl font-bold">Current: {result.current}%</h3>
            </div>

            <div className={`p-4 rounded-lg text-center ${
              result.projected >= 85 ? 'bg-green-100 text-green-800' :
              result.projected >= 75 ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              <h3 className="text-xl font-bold">Projected: {result.projected}%</h3>
            </div>

            {result.projected < 85 && (
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold mb-2">Improvement Plan</h3>
                <p>Classes needed for 85%: {result.classesNeeded85}</p>
                {result.projected < 75 && (
                  <p>Classes needed for 75%: {result.classesNeeded75}</p>
                )}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectionCalculator;