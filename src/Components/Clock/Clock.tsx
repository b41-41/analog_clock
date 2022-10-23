import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { turnOffTooltip, turnOnTooltip } from '../../Redux/common';

import Tooltip from '../Commons/Tooltip/Tooltip';

import * as S from './Clock.Styled';

type Props = {};

const Clock = (props: Props) => {
  const dispatch = useDispatch();

  const [currentTime, setCurrentTime] = React.useState<Date>(new Date());
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const clockRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tick = setTimeout(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearTimeout(tick);
    };
  }, [currentTime]);

  useEffect(() => {
    const openTooltip = () => {
      dispatch(turnOnTooltip());
    };
    const closeTooltip = () => {
      dispatch(turnOffTooltip());
    };
    const moveTooltip = (event: MouseEvent) => {
      const offsetWidth = clockRef.current?.offsetWidth || 0;

      if (event.x > offsetWidth / 2 && event.y > offsetWidth / 2) {
        setMousePosition({ x: event.x - 120, y: event.y - 40 });
      } else if (event.x > offsetWidth / 2 && event.y < offsetWidth / 2) {
        setMousePosition({ x: event.x - 120, y: event.y + 20 });
      } else if (event.x < offsetWidth / 2 && event.y > offsetWidth / 2) {
        setMousePosition({ x: event.x + 20, y: event.y - 40 });
      } else {
        setMousePosition({ x: event.x + 20, y: event.y + 20 });
      }
    };

    clockRef.current?.addEventListener('mouseenter', openTooltip);
    clockRef.current?.addEventListener('mouseleave', closeTooltip);
    clockRef.current?.addEventListener('mousemove', moveTooltip);
    return () => {
      clockRef.current?.removeEventListener('mouseenter', openTooltip);
      clockRef.current?.removeEventListener('mouseleave', closeTooltip);
      clockRef.current?.removeEventListener('mousemove', moveTooltip);
    };
  });

  return (
    <S.ClockWrapper ref={clockRef}>
      <S.Time12>12</S.Time12>
      <S.Time3>3</S.Time3>
      <S.Time6>6</S.Time6>
      <S.Time9>9</S.Time9>
      <S.HourHand hours={currentTime.getHours()} />
      <S.MinuteHand minute={currentTime.getMinutes()} />
      <S.SecondHand seconds={currentTime.getSeconds()} />
      <Tooltip currentTime={currentTime} mousePosition={mousePosition} />
    </S.ClockWrapper>
  );
};

export default Clock;
