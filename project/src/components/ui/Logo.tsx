import React from 'react';
import { Server } from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'white';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-gray-900';

  return (
    <div className="flex items-center">
      <Server className="h-8 w-8 text-primary" />
      <div className="ml-2">
        <span className={`font-bold text-lg ${textColor}`}>Tekh Arkhe</span>
        <span className={`block text-xs font-medium ${variant === 'white' ? 'text-gray-300' : 'text-gray-500'}`}>
          Private Solutions
        </span>
      </div>
    </div>
  );
};

export default Logo;