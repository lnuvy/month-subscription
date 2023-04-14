import { ChildrenProps } from "@/types/components";
import styled from "styled-components";
import TabBar from "../../tab-bar";

const DefaultTemplate = ({ children }: ChildrenProps) => {
  return (
    <>
      {/* page wrapper */}
      <Frame>
        {/* content wrapper */}
        <ContentWrapper>{children}</ContentWrapper>
        <TabBar />
      </Frame>
    </>
  );
};

export default DefaultTemplate;

const Frame = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  height: calc(100vh - 80px);
  overflow: auto;
  padding: 1.6rem;
`;
