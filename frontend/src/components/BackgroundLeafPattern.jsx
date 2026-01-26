import React, { useMemo } from "react";

const leafShapes = [
  "M12 2 C8 4,6 9,7 14 C8 18,10 20,12 22 C14 20,16 18,17 14 C18 9,16 4,12 2 Z",
  "M12 3 C9 5,5 9,6 13 C7 17,10 20,12 21 C14 20,17 17,18 13 C19 9,15 5,12 3 Z",
  "M12 2 C9 3,7 7,7 11 C7 15,10 19,12 21 C14 19,17 15,17 11 C17 7,15 3,12 2 Z"
];

const BackgroundLeafPattern = () => {
  const leaves = useMemo(() => {
    const count = 36;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 10 + Math.random() * 16,
      rotate: Math.random() * 360,
      shapeIdx: Math.floor(Math.random() * leafShapes.length),
      driftDur: 5000 + Math.random() * 4000,
      rotDur: 12000 + Math.random() * 6000,
      delay: Math.random() * 3000,
    }));
  }, []);

  return (
    <div className="site-leaf-pattern" aria-hidden>
      <svg className="site-leaf-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        {leaves.map((leaf) => (
          <g
            key={leaf.id}
            transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.rotate}) scale(${leaf.size / 24})`}
          >
            <g
              className="pattern-leaf"
              style={{
                animationDelay: `${leaf.delay}ms`,
                "--dur": `${leaf.driftDur}ms`,
                "--rot": `${leaf.rotDur}ms`,
              }}
            >
              <path d={leafShapes[leaf.shapeIdx]} fill="rgba(34, 197, 94, 0.4)" />
              <path d="M12 5 L12 18" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" strokeLinecap="round" fill="none" />
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default BackgroundLeafPattern;
