import React, { useContext } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import { AppContext } from '../../../AppContext';
import { CustomDotGreen, CustomDotRed, CustomDotBlue } from './Dots';

function formatDate(inputDateStr) {
  const [year, month] = inputDateStr.split('-');
  const formattedDate = `${month}/${year}`;
  return formattedDate;
}

function Chars({ ratingButtonStates }) {
  const { info } = useContext(AppContext);

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart
        data={info ? info.chartData : null}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid stroke='rgba(255, 255, 255, 0.04)' />
        <XAxis
          fontWeight={400}
          fontSize={11}
          lineHeight={12}
          dataKey='date'
          tick={{
            fill: 'rgba(255, 255, 255, 0.6)',
          }}
          axisLine={{ stroke: 'rgba(255, 255, 255, 0.04)' }}
          tickLine={false}
          tickFormatter={formatDate}
          dy={14}
        />
        <YAxis
          fontWeight={400}
          fontSize={11}
          lineHeight={12}
          tick={{
            fill: 'rgba(255, 255, 255, 0.6)',
          }}
          axisLine={{ stroke: 'rgba(255, 255, 255, 0.04)' }}
          tickLine={false}
          dx={-21}
        />
        <defs>
          <linearGradient id='blue' x1='0' y1='0' x2='0' y2='1.8'>
            <stop offset='0%' stopColor='rgba(15, 129, 206, 0.2)' />
            <stop offset='100%' stopColor='rgba(15, 129, 206, 0)' />
          </linearGradient>
          <linearGradient id='red' x1='0' y1='0' x2='0' y2='1.8'>
            <stop offset='0%' stopColor='rgba(197, 45, 129, 0.2)' />
            <stop offset='100%' stopColor='rgba(197, 45, 129, 0)' />
          </linearGradient>
          <linearGradient id='green' x1='0' y1='0' x2='0' y2='1.8'>
            <stop offset='0%' stopColor='rgba(27, 186, 100, 0.2)' />
            <stop offset='100%' stopColor='rgba(27, 186, 100, 0)' />
          </linearGradient>
        </defs>
        {ratingButtonStates.map((item) => {
          if (item.active) {
            let dot;
            switch (item.areaName) {
              case 'blue':
                dot = <CustomDotBlue />;
                break;
              case 'red':
                dot = <CustomDotRed />;
                break;
              case 'green':
              default:
                dot = <CustomDotGreen />;
                break;
            }
            return (
              <Area
                key={item.areaName}
                type='monotone'
                dataKey={item.areaName}
                stackId='1'
                stroke={item.color}
                fill={`url(#${item.areaName})`}
                dot={dot}
                strokeWidth='2'
              />
            );
          }
          return null;
        })}
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chars;
