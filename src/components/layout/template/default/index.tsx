import { ChildrenProps } from "@/types/components";
import React from "react";
import TabBar from "../../tab-bar";

const DefaultTemplate = ({ children }: ChildrenProps) => {
  return (
    <>
      {/* page wrapper */}
      <div className="w-screen h-screen">
        {/* content wrapper */}
        <div className="p-20">{children}</div>
        <TabBar />
      </div>
    </>
  );
};

export default DefaultTemplate;
