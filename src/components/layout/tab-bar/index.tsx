import { useTabContext } from "@/context/tab-context";
import React from "react";
import { BOTTOM_TABS } from "./constant";
import Tab from "./tab";

const TabBar = () => {
  const { selected, onClickTab } = useTabContext();
  return (
    <div className="w-screen fixed bottom-0 border-y bgc-white">
      <div className="p-16 flex items-center justify-around">
        {BOTTOM_TABS.map((tab) => {
          return (
            <Tab
              key={tab.id}
              title={tab.title}
              isSelected={selected === tab.path}
              Normal={tab.normal}
              Selected={tab.selected}
              onClick={() => onClickTab(tab.path)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TabBar;
