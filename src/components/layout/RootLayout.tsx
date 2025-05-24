import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import type { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  )
}

export default RootLayout; 