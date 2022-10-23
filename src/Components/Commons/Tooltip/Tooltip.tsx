import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { isTooltipVisibleSelector } from '../../../Redux/common';
import { doubleDigitNumber } from '../../../Utils';

import * as S from './Tooltip.Styled';

type Props = {
  currentTime: Date;
  mousePosition: { x: number; y: number };
};

const Tooltip = (props: Props) => {
  const isTooltipVisible = useSelector(isTooltipVisibleSelector);
  const positionStyle = React.useMemo(
    () => ({
      top: props.mousePosition.y + 'px',
      left: props.mousePosition.x + 'px',
    }),
    [props.mousePosition]
  );

  return (
    <S.ToolTipWrapper visible={isTooltipVisible} style={positionStyle}>
      {doubleDigitNumber(props.currentTime.getHours())}:
      {doubleDigitNumber(props.currentTime.getMinutes())}:
      {doubleDigitNumber(props.currentTime.getSeconds())}
    </S.ToolTipWrapper>
  );
};

export default Tooltip;
