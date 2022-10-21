import React, { useEffect } from 'react';
import * as S from './Clock.Styled';

type Props = {};

const Clock = (props: Props) => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  useEffect(() => {
    const tick = setTimeout(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearTimeout(tick);
    };
  }, [currentTime]);

  return (
    <S.ClockWrapper>
      <S.Time12>12</S.Time12>
      <S.Time3>3</S.Time3>
      <S.Time6>6</S.Time6>
      <S.Time9>9</S.Time9>
      <S.HourHand hours={currentTime.getHours()} />
      <S.MinuteHand minute={currentTime.getMinutes()} />
      <S.SecondHand seconds={currentTime.getSeconds()} />
    </S.ClockWrapper>
  );
};

export default Clock;
