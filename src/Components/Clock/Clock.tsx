import React from 'react';
import * as S from './Clock.Styled';

type Props = {};

const Clock = (props: Props) => {
  return (
    <S.ClockWrapper>
      <S.HourHand />
      <S.MinuteHand />
      <S.SecondHand />
    </S.ClockWrapper>
  );
};

export default Clock;
