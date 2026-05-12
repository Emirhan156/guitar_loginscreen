import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const AuthCard: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative z-10 w-full max-w-md mx-auto">
      <motion.div 
        className="glass-panel rounded-3xl p-8 sm:p-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Tabs */}
        <div className="flex bg-white/5 rounded-full p-1 mb-8">
          <button 
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isLogin ? 'bg-primary-500 text-dark-900 shadow-lg' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setIsLogin(true)}
          >
            Log In
          </button>
          <button 
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${!isLogin ? 'bg-primary-500 text-dark-900 shadow-lg' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Username" 
                className="glass-input w-full px-4 py-3 rounded-xl text-sm"
              />
            </div>
          )}
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
            <input 
              type="email" 
              placeholder="Email address" 
              className="glass-input w-full pl-12 pr-4 py-3 rounded-xl text-sm"
            />
          </div>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
            <input 
              type="password" 
              placeholder="Password" 
              className="glass-input w-full pl-12 pr-4 py-3 rounded-xl text-sm"
            />
          </div>

          {isLogin && (
            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded bg-white/10 border-white/20 text-primary-500 focus:ring-primary-500/50" />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <a href="#" className="text-sm text-primary-500 hover:text-primary-600 transition-colors">Forgot password?</a>
            </div>
          )}

          <motion.button 
            className="w-full bg-primary-500 hover:bg-primary-600 text-dark-900 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 mt-6 shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLogin ? 'Start Playing' : 'Create Account'}
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="h-px bg-white/10 flex-1"></div>
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Or continue with</span>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
          <button className="glass-panel py-3 px-4 rounded-xl flex justify-center items-center gap-2 hover:bg-white/10 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-medium">Google</span>
          </button>
          <button className="glass-panel py-3 px-4 rounded-xl flex justify-center items-center gap-2 hover:bg-white/10 transition-colors">
            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.365 1.43c0 0-2.03.02-3.922 1.347-.427.297-.845.69-1.185 1.15-.23.33-.52.79-.69 1.25-.17.45-.25.9-.22 1.41.01.2.03.39.06.56.03.18.08.35.13.5.06.14.12.28.19.41.06.12.13.24.2.35.34.48.8.84 1.32 1.05.51.2 1.06.28 1.61.22.54-.05 1.08-.23 1.58-.51.49-.28.95-.65 1.35-1.09.4-.44.75-.95 1.03-1.5.28-.55.51-1.14.67-1.76.16-.62.26-1.26.29-1.92.03-.66-.02-1.32-.13-1.97-.11-.64-.3-1.26-.55-1.85-.26-.6-.58-1.16-.96-1.68-.38-.51-.81-.98-1.28-1.4-.47-.42-.99-.78-1.54-1.09-.56-.3-1.14-.54-1.75-.72C16.365 1.43 16.365 1.43 16.365 1.43zM15.485 9.47c-1.37-1.04-3.16-1.37-4.83-1.2-1.68.18-3.3 1.04-4.52 2.37-1.21 1.33-1.97 3.09-2.12 4.93-.14 1.84.34 3.71 1.41 5.22 1.06 1.51 2.56 2.62 4.26 3.19 1.7.57 3.55.57 5.25.04 1.69-.53 3.17-1.62 4.21-3.12 1.04-1.5 1.54-3.35 1.43-5.2-.1-1.85-.82-3.61-2.02-4.96-1.2-1.35-2.81-2.22-4.52-2.45-1.71-.24-3.48.05-5.01.88-1.52.83-2.73 2.14-3.41 3.71-.68 1.57-.8 3.32-.36 4.97.44 1.65 1.4 3.1 2.68 4.14 1.28 1.04 2.87 1.6 4.53 1.6 1.65 0 3.25-.56 4.53-1.6 1.28-1.04 2.24-2.49 2.68-4.14.44-1.65.32-3.4-.36-4.97-.68-1.57-1.89-2.88-3.41-3.71-1.53-.83-3.3-1.12-5.01-.88"/>
            </svg>
            <span className="text-sm font-medium">Apple</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthCard;
