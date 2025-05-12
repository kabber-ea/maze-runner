import React from "react";

const TargetMarker: React.FC<object> = () => (
  <span
    className="text-[12px] font-bold text-red-500 absolute inset-0 flex items-center justify-center"
  >
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-br from-red-400 to-red-700 rounded-full blur-sm"></div>
      <div className="relative z-10 text-red-500">
        X
      </div>
    </div>
  </span>
);

export default TargetMarker;
