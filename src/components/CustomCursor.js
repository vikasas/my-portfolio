// components/CustomCursor.jsx
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      const cursor = cursorRef.current;

      if (cursor) {
        cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-4 w-5 h-6 bg-beige rounded-lg mix-blend-difference z-50 transition-transform duration-150 ease-out"
    />
  );
}
