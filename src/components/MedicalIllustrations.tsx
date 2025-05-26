
import React from 'react';

export const StethoscopeIllustration: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="stethGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
    </defs>
    
    {/* Stethoscope tubes */}
    <path d="M60 40 Q80 60 100 40 Q120 20 140 40" stroke="url(#stethGradient)" strokeWidth="6" fill="none" strokeLinecap="round"/>
    <path d="M60 40 Q40 80 50 120" stroke="url(#stethGradient)" strokeWidth="5" fill="none" strokeLinecap="round"/>
    <path d="M140 40 Q160 80 150 120" stroke="url(#stethGradient)" strokeWidth="5" fill="none" strokeLinecap="round"/>
    
    {/* Earpieces */}
    <circle cx="60" cy="40" r="8" fill="#0284c7"/>
    <circle cx="140" cy="40" r="8" fill="#0284c7"/>
    
    {/* Chest piece */}
    <circle cx="100" cy="150" r="25" fill="url(#stethGradient)" stroke="#075985" strokeWidth="3"/>
    <circle cx="100" cy="150" r="15" fill="#f8fafc" opacity="0.8"/>
    <circle cx="100" cy="150" r="8" fill="#0284c7"/>
    
    {/* Connecting tubes */}
    <path d="M50 120 Q75 135 75 150" stroke="url(#stethGradient)" strokeWidth="4" fill="none"/>
    <path d="M150 120 Q125 135 125 150" stroke="url(#stethGradient)" strokeWidth="4" fill="none"/>
  </svg>
);

export const HeartbeatIllustration: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="heartbeatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="50%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#eab308" />
      </linearGradient>
    </defs>
    
    <path 
      d="M10 50 L40 50 L50 20 L60 80 L70 30 L80 70 L90 50 L290 50" 
      stroke="url(#heartbeatGradient)" 
      strokeWidth="3" 
      fill="none" 
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Animated dots */}
    <circle cx="150" cy="50" r="4" fill="#ef4444" opacity="0.8">
      <animate attributeName="r" values="4;8;4" dur="1.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

export const MedicalCrossIllustration: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="crossGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#dc2626" />
        <stop offset="100%" stopColor="#b91c1c" />
      </linearGradient>
    </defs>
    
    {/* Cross background */}
    <rect x="35" y="15" width="30" height="70" rx="5" fill="url(#crossGradient)"/>
    <rect x="15" y="35" width="70" height="30" rx="5" fill="url(#crossGradient)"/>
    
    {/* Highlight */}
    <rect x="37" y="17" width="6" height="66" rx="3" fill="#fca5a5" opacity="0.6"/>
    <rect x="17" y="37" width="66" height="6" rx="3" fill="#fca5a5" opacity="0.6"/>
  </svg>
);

export const PillsIllustration: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pill1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="pill2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    
    {/* Pills */}
    <ellipse cx="60" cy="60" rx="25" ry="15" fill="url(#pill1Gradient)" transform="rotate(-20 60 60)"/>
    <ellipse cx="120" cy="80" rx="20" ry="12" fill="url(#pill2Gradient)" transform="rotate(15 120 80)"/>
    <ellipse cx="90" cy="110" rx="18" ry="10" fill="#f59e0b" transform="rotate(-10 90 110)"/>
    
    {/* Pill details */}
    <line x1="40" y1="65" x2="80" y2="55" stroke="#1e40af" strokeWidth="2"/>
    <circle cx="140" cy="70" r="3" fill="#047857"/>
  </svg>
);
</svg>
);
