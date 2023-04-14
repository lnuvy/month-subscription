import React from "react";
import styled from "styled-components";

export interface SectionGapProps {
  gap: "0.3" | "0.6" | "0.9" | "1.2" | "1.5" | "1.8" | "2.1";
}

const SectionGap = ({ gap }: SectionGapProps) => {
  return <Frame gap={gap} />;
};

export default React.memo(SectionGap);

const Frame = styled.div<{ gap: SectionGapProps["gap"] }>`
  width: 100%;
  height: ${(props) => `${props.gap}rem`};

  background-color: ${({ theme }) => theme.colors.grey100}; ;
`;
