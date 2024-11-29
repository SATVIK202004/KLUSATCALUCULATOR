import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaUndo } from 'react-icons/fa';

const AdvancedCalculator = () => {
  const [subject, setSubject] = useState('');
  const [lect, setLect] = useState('');
  const [tut, setTut] = useState('');
  const [pract, setPract] = useState('');
  const [skill, setSkill] = useState('');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const weights = {
    lecture: 100,
    tutorial: 25,
    practical: 50,
    skilling: 25
  };

  const calculateTotal = () => {
    let totalWeight = 0;
    let totalScore = 0;

    const components = [
      { value: lect, weight: weights.lecture },
      { value: tut, weight: weights.tutorial },
      { value: pract, weight: weights.practical },
      { value: skill, weight: weights.skilling }
    ];

    let hasValidInput = false;
    
    components.forEach(comp => {
      if (comp.value !== '') {
        hasValidInput = true;
        const value = parseFloat(comp.value);
        if (value < 0 || value > 100) {
          setError('Please enter valid percentages between 0 and 100');
          return;
        }
        totalWeight += comp.weight;
        totalScore += value * (comp.weight / 100);
      }
    });

    if (!hasValidInput) {
      setError('Please enter at least one component');
      return;
    }

    const percentage = (totalScore / totalWeight) * 100;
    setResult({
      percentage: Math.round(percentage * 100) / 100,
      status: percentage >= 85 ? 'Excellent' :
              percentage >= 75 ? 'Good' :
              percentage >= 65 ? 'Average' : 'Needs Improvement'
    });
    setError('');
  };

  const resetForm = () => {
    setSubject('');
    setLect('');
    setTut('');
    setPract('');
    setSkill('');
    setResult(null);
    setError('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Advanced Calculator</h2>
      
      <div className="space-y-4">
        <div className="input-group">
          <label className="block text-gray-700 mb-2">Subject Name (Optional)</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="Enter subject name"
          />
        </div>

        {[
          { label: 'Lecture (%)', value: lect, setter: setLect, weight: weights.lecture },
          { label: 'Tutorial (%)', value: tut, setter: setTut, weight: weights.tutorial },
          { label: 'Practical (%)', value: pract, setter: setPract, weight: weights.practical },
          { label: 'Skilling (%)', value: skill, setter: setSkill, weight: weights.skilling }
        ].map((input, index) => (
          <div key={index} className="input-group">
            <label className="block text-gray-700 mb-2">
              {input.label}
              <span className="ml-2 text-sm text-gray-500">Weight: {input.weight}%</span>
            </label>
            <input
              type="number"
              value={input.value}
              onChange={(e) => input.setter(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter percentage"
            />
          </div>
        ))}

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
            onClick={calculateTotal}
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
            className={`mt-6 p-4 rounded-lg text-center ${
              result.percentage >= 85 ? 'bg-green-100 text-green-800' :
              result.percentage >= 75 ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}
          >
            <h3 className="text-xl font-bold mb-2">
              {subject && `${subject}: `}{result.percentage}%
            </h3>
            <p>Status: {result.status}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default AdvancedCalculator;