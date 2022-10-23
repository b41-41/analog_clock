import styled from 'styled-components';

export const ToolTipWrapper = styled.div<{
  visible?: boolean;
  position: { x: number; y: number };
}>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: absolute;
  padding: 10px;
  border-radius: 15%;
  font-size: 1.5rem;
  top: ${({ position }) => position.y}px;
  left: ${({ position }) => position.x}px;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 4;
`;
