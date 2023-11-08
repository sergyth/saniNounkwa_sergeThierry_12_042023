import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './chartRadial.css'

const ChartRadial = ({ data }) => {
  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '1.5rem',
  }
  
  return (
    <div className="chartRadial-container ">
      <ResponsiveContainer width="100%" >
        <RadialBarChart
         startAngle={90}
         endAngle={200}
          innerRadius={80}
          outerRadius={260}
          barSize={9}
          data={[data]}
        >
          <RadialBar
            minAngle={15}
            background
            label={{ position: 'center', fill: '#000' }}
            dataKey="score"
            fill='#fff'
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
        
      </ResponsiveContainer>
    </div>
  )
}
export default ChartRadial
