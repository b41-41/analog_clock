import React from 'react';
import * as S from './Clock.Styled';

type Props = {};

const Clock = (props: Props) => {
  return (
    <S.ClockWrapper>
      <S.Time12>12</S.Time12>
      <S.Time3>3</S.Time3>
      <S.Time6>6</S.Time6>
      <S.Time9>9</S.Time9>
      <S.HourHand />
      <S.MinuteHand />
      <S.SecondHand />
    </S.ClockWrapper>
  );
};

export default Clock;
