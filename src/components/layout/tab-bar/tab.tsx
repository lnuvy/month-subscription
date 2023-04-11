import React, { useCallback } from "react";

interface Props {
  title: string;
  Normal: JSX.Element;
  Selected: JSX.Element;
  isSelected: boolean;

  // onClick: (title: string) => void;
  onClick: () => void;
}

const Tab = ({ title, Normal, isSelected, Selected, onClick }: Props) => {
  const IconComponent = useCallback(() => {
    return isSelected ? Selected : Normal;
  }, [isSelected]);

  const TextComponent = useCallback(() => {
    const className = isSelected ? "font-semibold" : "color-icon-basic";

    return <div className={`fs-12 ${className}`}>{title}</div>;
  }, [isSelected]);

  return (
    <div className="w-full flex flex-col items-center gap-2" onClick={onClick}>
      <IconComponent />
      <TextComponent />
    </div>
  );
};

export default Tab;
