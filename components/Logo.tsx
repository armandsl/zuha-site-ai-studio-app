
import React from 'react';

const Logo: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#1E88E5' }} />
        <stop offset="100%" style={{ stopColor: '#43A047' }} />
      </linearGradient>
    </defs>
    <path
      d="M85,20 H35 L65,50 L15,80 H65 L35,50 L85,20 Z"
      fill="url(#logoGradient)"
      stroke="url(#logoGradient)"
      strokeWidth="10"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

export default Logo;
