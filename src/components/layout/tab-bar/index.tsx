import React from "react";
import { ICONS } from "./constant";

const TabBar = () => {
  return (
    <div className="w-screen fixed bottom-0 border-1 p-20 flex items-center justify-around">
      {ICONS.map((v) => {
        return (
          <div key={v.id}>
            {v.normal}
            {v.title}
          </div>
        );
      })}
    </div>
  );
};

export default TabBar;
