import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import HeroSection from './components/HeroSection';
import AuthCard from './components/AuthCard';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center overflow-hidden relative font-sans">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 h-screen max-h-[900px] flex flex-col lg:flex-row relative z-10">
        {/* Left Side - Hero Section */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center lg:justify-start">
          <HeroSection />
        </div>

        {/* Right Side - Auth Card */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center">
          <AuthCard />
        </div>
      </div>
    </div>
  );
}

export default App;
