import React from 'react';

export const HandDrawnCircle: React.FC<{ className?: string }> = ({ className = 'w-16 h-16 text-[#E86034]' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M50 8C26.8 8 9 26.8 9 50C9 73.2 28.5 91.5 52 91.5C74 91.5 92 73 91.5 48.5C91 24.5 72.5 11 48 11.5"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeDasharray="300"
      strokeDashoffset="0"
    />
  </svg>
);

export const HandDrawnArrow: React.FC<{ className?: string }> = ({ className = 'w-12 h-12 text-[#E86034]' }) => (
  <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M6 22C24 16 46 26 70 14M54 6C58 9 68 13 72 14C66 18 60 27 58 32"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HandDrawnUnderline: React.FC<{ className?: string }> = ({ className = 'w-32 h-6 text-[#E86034]' }) => (
  <svg viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M4 14C50 4 120 22 196 8"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const ChilliDoodle: React.FC<{ className?: string }> = ({ className = 'w-8 h-8 text-[#E86034]' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M36 8C36 8 32 14 26 18C18 24 10 33 13 40C15 44 21 43 27 38C35 32 39 20 40 14L36 8Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.15"
    />
    <path
      d="M36 8C38 5 41 4 43 4"
      stroke="#2D6A4F"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const CoffeeCupDoodle: React.FC<{ className?: string }> = ({ className = 'w-10 h-10 text-[#2D6A4F]' }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M12 18H44V34C44 42 37 48 28 48C19 48 12 42 12 34V18Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M44 24H48C52 24 54 27 54 30C54 33 52 36 48 36H44"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M8 52H48"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M22 12C22 12 24 8 22 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="animate-steam-1"
    />
    <path
      d="M32 12C32 12 34 7 32 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="animate-steam-2"
    />
  </svg>
);

export const PlateDoodle: React.FC<{ className?: string }> = ({ className = 'w-12 h-12 text-[#1E1B18]' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="32" cy="32" rx="28" ry="18" stroke="currentColor" strokeWidth="2.5" />
    <ellipse cx="32" cy="32" rx="18" ry="11" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
  </svg>
);

export const BandraBadgeStamp: React.FC<{ className?: string }> = ({ className = 'w-24 h-24 text-[#1E1B18]' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
    <circle cx="60" cy="60" r="46" stroke="currentColor" strokeWidth="1.5" />
    <path id="curve" d="M22 60 A38 38 0 0 1 98 60" fill="none" />
    <text className="text-[9px] font-bold tracking-[0.25em] uppercase fill-current">
      <textPath href="#curve" startOffset="50%" textAnchor="middle">
        RANWAR • BANDRA
      </textPath>
    </text>
    <path id="curve2" d="M98 60 A38 38 0 0 1 22 60" fill="none" />
    <text className="text-[8px] font-semibold tracking-[0.2em] uppercase fill-current">
      <textPath href="#curve2" startOffset="50%" textAnchor="middle">
        ESTD • BOMBAY
      </textPath>
    </text>
    <circle cx="60" cy="60" r="4" fill="currentColor" />
  </svg>
);
