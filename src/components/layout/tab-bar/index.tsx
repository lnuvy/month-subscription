import { useTabContext } from "@/context/tab-context";
import styled from "styled-components";
import { BOTTOM_TABS } from "./constant";
import Tab from "./tab";

const TabBar = () => {
  const { selected, onClickTab } = useTabContext();
  return (
    <Frame>
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
    </Frame>
  );
};

export default TabBar;

const Frame = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.base300};
  border-bottom: 1px solid ${({ theme }) => theme.colors.base300};
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.6rem;
`;
