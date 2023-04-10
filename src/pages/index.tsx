import TabBar from "@/components/layout/tab-bar";
import { useState } from "react";

export default function Home() {
  const [isList, setIsList] = useState(true);

  return (
    <div className="w-screen h-screen bg-brand-primary">
      <TabBar />
    </div>
  );
}
