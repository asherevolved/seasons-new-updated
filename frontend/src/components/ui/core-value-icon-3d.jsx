import React from "react";

const ICON_3D_MAP = {
  Sustainability: "/assets/icons/plant-3d.svg",
  Integrity: "https://img.icons8.com/3d-fluency/94/shield.png",
  Creativity: "https://img.icons8.com/3d-fluency/94/paint-palette.png",
  Community: "https://img.icons8.com/3d-fluency/94/conference-call.png"
};

const CoreValueIcon3D = ({ title }) => {
  const src = ICON_3D_MAP[title] || ICON_3D_MAP.Sustainability;
  const [current, setCurrent] = React.useState(src);
  return (
    <img
      src={current}
      alt={title}
      className="w-12 h-12 object-contain"
      draggable="false"
      onError={() => {
        // Fallback to local SVG if external fails
        if (current !== ICON_3D_MAP.Sustainability) {
          setCurrent(ICON_3D_MAP.Sustainability);
        }
      }}
    />
  );
};

export default CoreValueIcon3D;
