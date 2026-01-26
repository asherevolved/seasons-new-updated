import React, { useEffect, useRef, useState } from "react";

const leafShapes = [
  "M12 2 C8 4,6 9,7 14 C8 18,10 20,12 22 C14 20,16 18,17 14 C18 9,16 4,12 2 Z",
  "M12 3 C9 5,5 9,6 13 C7 17,10 20,12 21 C14 20,17 17,18 13 C19 9,15 5,12 3 Z",
  "M12 2 C9 3,7 7,7 11 C7 15,10 19,12 21 C14 19,17 15,17 11 C17 7,15 3,12 2 Z"
];

const LeavesFallOverlay = ({ count = 8 }) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2000,
      fall: 6000 + Math.random() * 4000,
      sway: 2200 + Math.random() * 1800,
      size: 16 + Math.random() * 18,
      rotate: Math.random() * 360,
      shapeIdx: Math.floor(Math.random() * leafShapes.length),
    }));
    setLeaves(arr);
  }, [count]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setActive(false);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(true);
          else setActive(false);
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`absolute inset-0 ${active ? "leaves-run" : ""} pointer-events-none overflow-hidden z-0`}>
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="leaf"
          style={{
            left: `${leaf.left}%`,
            animationDelay: `${leaf.delay}ms`,
            animationDuration: `${leaf.fall}ms`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            transform: `rotate(${leaf.rotate}deg)`,
          }}
        >
          <div
            className="leaf-inner"
            style={{
              animationDelay: `${leaf.delay}ms`,
              animationDuration: `${leaf.sway}ms`,
            }}
          >
            <svg viewBox="0 0 24 24" width="100%" height="100%">
              <path d={leafShapes[leaf.shapeIdx]} fill="rgba(34, 197, 94, 0.5)" />
              <path d="M12 5 L12 18" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeavesFallOverlay;
