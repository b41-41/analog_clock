import styled from 'styled-components';

export const ClockWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;

  color: #000;
  background-color: #fee;
  aspect-ratio: 1;
`;

export const HourHand = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  height: 8px;
  background-color: #000;
  transform-origin: 0 50%;
  transform: rotate(-90deg);
  z-index: 1;
`;

export const MinuteHand = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40%;
  height: 4px;
  background-color: #000;
  transform-origin: 0 50%;
  transform: rotate(-90deg);
  z-index: 2;
`;

export const SecondHand = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40%;
  height: 2px;
  background-color: #ff0000;
  transform-origin: 0 50%;
  transform: rotate(-90deg);
  z-index: 3;
`;
