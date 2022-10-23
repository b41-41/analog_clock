import styled from 'styled-components';

export const ToolTipWrapper = styled.div<{
  visible?: boolean;
}>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: absolute;
  padding: 10px;
  border-radius: 15%;
  font-size: 1.5rem;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 4;
`;
