import { useCallback } from "react";
import styled from "styled-components";

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

  return (
    <Frame onClick={onClick}>
      <IconComponent />

      <TextLabel isSelected={isSelected}>{title}</TextLabel>
    </Frame>
  );
};

export default Tab;

const Frame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const TextLabel = styled.p<{ isSelected: boolean }>`
  font-size: 1.2rem;

  font-weight: ${({ isSelected }) => (isSelected ? 600 : 400)};

  // TODO
  color: ${({ theme }) => theme.colors.normal};
`;
