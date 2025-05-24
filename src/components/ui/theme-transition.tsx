import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ThemeTransitionProps {
    isTransitioning: boolean;
    theme: 'light' | 'dark';
}

export const ThemeTransition: React.FC<ThemeTransitionProps> = ({ isTransitioning, theme }) => {
    return (
        <AnimatePresence>
            {isTransitioning && (
                <motion.div
                    initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                    animate={{ clipPath: 'circle(150% at 50% 50%)' }}
                    exit={{ clipPath: 'circle(0% at 50% 50%)' }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    className={`fixed inset-0 z-50 ${
                        theme === 'dark' 
                            ? 'bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900' 
                            : 'bg-gradient-to-br from-indigo-200 via-purple-200 to-indigo-400'
                    }`}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-center"
                        >
                            <motion.h2
                                className={`text-4xl md:text-6xl font-bold ${
                                    theme === 'dark' ? 'text-indigo-400' : 'text-indigo-900'
                                }`}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                Switching Theme
                            </motion.h2>
                            <motion.div
                                className={`mt-4 text-lg ${
                                    theme === 'dark' ? 'text-indigo-300' : 'text-indigo-700'
                                }`}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                {theme === 'dark' ? 'Embracing the night' : 'Welcoming the light'}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}; 