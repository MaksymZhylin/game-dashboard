import React from 'react';
import { Dot } from 'recharts';

function CustomDotGreen({ cx, cy, stroke, strokeWidth, r }) {
  return (
    <Dot
      cx={cx}
      cy={cy}
      r={r}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill='#3CDC86'
    />
  );
}

function CustomDotRed({ cx, cy, stroke, strokeWidth, r }) {
  return (
    <Dot
      cx={cx}
      cy={cy}
      r={r}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill='#ED2D95'
    />
  );
}

function CustomDotBlue({ cx, cy, stroke, strokeWidth, r }) {
  return (
    <Dot
      cx={cx}
      cy={cy}
      r={r}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill='#18A0FB'
    />
  );
}

export { CustomDotGreen, CustomDotRed, CustomDotBlue };
