import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';
import { colors } from '../data';

function CircleDiagram({ dataPie }) {
  return (
    <PieChart width={232} height={232}>
      <Pie
        data={dataPie}
        innerRadius={96}
        outerRadius={116}
        paddingAngle={5}
        dataKey='value'
        stroke='transparent'
      >
        {dataPie.map((entry, index) => (
          <Cell
            // eslint-disable-next-line react/no-array-index-key
            key={`cell-${index}`}
            fill={colors[index % colors.length]}
            cornerRadius={10}
          />
        ))}

        <Label
          fontWeight={500}
          fontSize={64}
          lineHeight={72}
          fill='#ffffff'
          value='84%'
          position='center'
        />
        <Label
          fontWeight={500}
          fontSize={12}
          lineHeight={16}
          style={{ textTransform: 'uppercase' }}
          fill='#A7A9AD'
          value='Excessive'
          position='center'
          dy={-50}
        />
        <Label
          width={132}
          fontWeight={400}
          fontSize={12}
          lineHeight={16}
          fill='#ffffff'
          value='+40 418 in the last 30 days'
          position='center'
          dy={50}
        />
      </Pie>
    </PieChart>
  );
}

export default CircleDiagram;
