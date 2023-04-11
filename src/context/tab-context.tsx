import { TabTitles } from "@/components/layout/tab-bar/constant";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { createDynamicContext } from "./create-dynamic-context";

interface TabContextProps {
  selected: TabTitles;
  onClickTab: (title: string) => void;
}

const { ContextProvider, useContext } = createDynamicContext<TabContextProps>();

export const useTabContext = useContext;

interface Props {
  children: JSX.Element | JSX.Element[];
}

const TabContextProvider = ({ children }: Props) => {
  const router = useRouter();
  const [selected, setSelected] = useState<TabTitles>("/");

  useEffect(() => {
    if (router.asPath) {
      setSelected(router.asPath);
    }
  }, []);

  const onClickTab = useCallback((asPath: string) => {
    setSelected(() => asPath);
    router.push(asPath);
  }, []);

  return (
    <ContextProvider selected={selected} onClickTab={onClickTab}>
      {children}
    </ContextProvider>
  );
};

export default TabContextProvider;
