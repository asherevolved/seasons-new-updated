import React, { useCallback, useRef } from "react";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const TiltCard = ({
  children,
  className = "",
  innerClassName = "",
  maxTilt = 14,
}) => {
  const outerRef = useRef(null);
  const rafRef = useRef(null);

  const setTilt = useCallback(
    (clientX, clientY) => {
      const el = outerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = clamp((clientX - rect.left) / rect.width, 0, 1);
      const y = clamp((clientY - rect.top) / rect.height, 0, 1);
      const ry = (x - 0.5) * (maxTilt * 2);
      const rx = (0.5 - y) * (maxTilt * 2);
      el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
      el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    },
    [maxTilt]
  );

  const onPointerMove = useCallback(
    (e) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setTilt(e.clientX, e.clientY);
      });
    },
    [setTilt]
  );

  const onPointerLeave = useCallback(() => {
    const el = outerRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }, []);

  const onPointerDown = useCallback((e) => {
    if (e.currentTarget && e.pointerId != null) {
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    setTilt(e.clientX, e.clientY);
  }, [setTilt]);

  const onPointerUp = useCallback((e) => {
    if (e.currentTarget && e.pointerId != null) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (_) {
        // no-op
      }
    }
  }, []);

  return (
    <div
      ref={outerRef}
      className={`core-value-card ${className}`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <div className={`core-value-card-inner ${innerClassName}`}>{children}</div>
    </div>
  );
};

export default TiltCard;
