import React from 'react';
import styled from 'styled-components';

type Props = {};

const ClockWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: #000;
  background-color: #fee;
`;

const Clock = (props: Props) => {
  return <ClockWrapper>Clock</ClockWrapper>;
};

export default Clock;
