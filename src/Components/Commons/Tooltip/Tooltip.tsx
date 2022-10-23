import React, { useEffect } from 'react';
import { doubleDigitNumber } from '../../../Utils';
import * as S from './Tooltip.Styled';

type Props = {
  currentTime: Date;
  visible: boolean;
  mousePosition: { x: number; y: number };
};

const Tooltip = (props: Props) => {
  return (
    <S.ToolTipWrapper visible={props.visible} position={props.mousePosition}>
      {doubleDigitNumber(props.currentTime.getHours())}:
      {doubleDigitNumber(props.currentTime.getMinutes())}:
      {doubleDigitNumber(props.currentTime.getSeconds())}
    </S.ToolTipWrapper>
  );
};

export default Tooltip;
