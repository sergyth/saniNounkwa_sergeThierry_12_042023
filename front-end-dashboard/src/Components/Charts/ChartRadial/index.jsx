import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

import './chartRadial.css'

const ChartRadial = ({ data }) => {
  const CustomLegend = () => {
    const score = data.score
    return (
      <div className="legendRadial">
        <b>{score}%</b><br/>
        de votre objectif
      </div>
    )
  }
  return (
    <div className="chartRadial-container ">
      <h3>Score</h3>
      <ResponsiveContainer width="100%">
        <RadialBarChart
          startAngle={90}
          endAngle={200}
          innerRadius={80}
          outerRadius={260}
          barSize={10}
          data={[data]}
        >
          <RadialBar
            minAngle={15}
            cornerRadius={5}
            background
            clockWise={true}
            dataKey="score"
          />
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="center"
            content={<CustomLegend />}
          />
          
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default ChartRadial
