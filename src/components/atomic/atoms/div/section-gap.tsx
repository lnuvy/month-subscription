import React from "react";

export interface SectionGapProps {
  gap: "0.3" | "0.6" | "0.9" | "1.2" | "1.5" | "1.8" | "2.1";
}

const SectionGap = ({ gap }: SectionGapProps) => {
  const frameStyle = `w-full h-[${gap}px] bg-grey-100`;

  return <div className={frameStyle}></div>;
};

export default React.memo(SectionGap);
