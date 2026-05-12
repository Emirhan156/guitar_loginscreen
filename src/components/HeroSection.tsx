import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Trophy, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col justify-center h-full p-12 lg:p-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Every <span className="text-primary-500 neon-text-green">Guitar Legend</span><br />
          Started Somewhere.
        </h1>
        <p className="text-lg lg:text-xl text-gray-400 max-w-xl mb-12 leading-relaxed">
          Build daily streaks, unlock interactive lessons, and become the guitarist you always wanted to be. Your journey to mastery starts tonight.
        </p>
      </motion.div>

      {/* Gamification Preview Widgets */}
      <motion.div 
        className="flex flex-wrap gap-6 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Streak Widget */}
        <div className="glass-panel rounded-2xl p-4 flex items-center gap-4 w-48 transform hover:scale-105 transition-transform cursor-pointer">
          <div className="bg-orange-500/20 p-3 rounded-full">
            <Flame className="w-6 h-6 text-accent-500 neon-text-orange" />
          </div>
          <div>
            <p className="text-sm text-gray-400 font-medium">Current Streak</p>
            <p className="text-xl font-bold">14 Days</p>
          </div>
        </div>

        {/* Level Widget */}
        <div className="glass-panel rounded-2xl p-4 flex items-center gap-4 w-48 transform hover:scale-105 transition-transform cursor-pointer">
          <div className="bg-purple-500/20 p-3 rounded-full">
            <Star className="w-6 h-6 text-ambient-500" />
          </div>
          <div>
            <p className="text-sm text-gray-400 font-medium">Your Level</p>
            <p className="text-xl font-bold">Acoustic Pro</p>
          </div>
        </div>
        
        {/* XP Widget */}
        <div className="glass-panel rounded-2xl p-4 flex items-center gap-4 w-48 transform hover:scale-105 transition-transform cursor-pointer hidden md:flex">
          <div className="bg-green-500/20 p-3 rounded-full">
            <Trophy className="w-6 h-6 text-primary-500" />
          </div>
          <div>
            <p className="text-sm text-gray-400 font-medium">Total XP</p>
            <p className="text-xl font-bold">2,450</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
