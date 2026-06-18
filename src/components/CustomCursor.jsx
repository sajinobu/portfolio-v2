// src/components/CustomCursor.jsx
import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        // By removing CSS transitions, this translate3d applies instantly with zero delay
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden lg:block fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-30 -translate-x-1/2 -translate-y-1/2"
      style={{
        // Uses your Brand Green (#00DC82 / RGB: 0, 220, 130) with a very soft 12% opacity fading to completely transparent
        background: 'radial-gradient(circle, rgba(0, 220, 130, 0.12) 0%, rgba(0, 220, 130, 0) 70%)',
      }}
    />
  );
};

export default CustomCursor;