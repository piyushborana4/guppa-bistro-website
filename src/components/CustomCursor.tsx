import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string>('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'button' | 'image' | 'hidden'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Determine hover target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorAttr) {
        setCursorText(cursorAttr);
        setCursorVariant(cursorAttr.length > 0 ? 'image' : 'hover');
        return;
      }

      // Check if image
      if (target.closest('img') || target.closest('.cursor-view')) {
        setCursorText('VIEW');
        setCursorVariant('image');
        return;
      }

      // Check if menu item
      if (target.closest('.cursor-explore') || target.closest('[data-category]')) {
        setCursorText('EXPLORE');
        setCursorVariant('image');
        return;
      }

      // Check if book button
      if (target.closest('.cursor-book') || target.closest('button[data-action="book"]')) {
        setCursorText('BOOK');
        setCursorVariant('button');
        return;
      }

      // Check generic interactive
      if (target.closest('button') || target.closest('a') || target.closest('input') || target.closest('select')) {
        setCursorText('');
        setCursorVariant('hover');
        return;
      }

      setCursorText('');
      setCursorVariant('default');
    };

    const onMouseLeave = () => {
      setCursorVariant('hidden');
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  if (isTouchDevice || cursorVariant === 'hidden') {
    return null;
  }

  const isExpanded = cursorText.length > 0;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 rounded-full flex items-center justify-center font-bold tracking-wider uppercase text-center backdrop-blur-[1px] will-change-transform"
      animate={{
        x: mousePosition.x - (isExpanded ? 36 : 10),
        y: mousePosition.y - (isExpanded ? 36 : 10),
        width: isExpanded ? 72 : cursorVariant === 'hover' ? 24 : 18,
        height: isExpanded ? 72 : cursorVariant === 'hover' ? 24 : 18,
        backgroundColor: isExpanded
          ? '#E86034'
          : cursorVariant === 'hover'
          ? 'rgba(232, 96, 52, 0.3)'
          : '#1E1B18',
        color: '#FFFFFF',
        scale: 1,
        border: isExpanded ? '2px solid rgba(255,255,255,0.8)' : 'none',
      }}
      transition={{
        type: 'spring',
        stiffness: 450,
        damping: 28,
        mass: 0.5,
      }}
    >
      {isExpanded && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[10px] tracking-widest font-display text-white font-extrabold select-none"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
};
