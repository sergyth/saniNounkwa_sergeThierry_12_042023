import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'
import './chartRadar.css'

const ChartRadar = ({ data }) => {
  return (
    <div className="radar-container">
      <ResponsiveContainer width="100%">
        <RadarChart  data={data} >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            stroke={'#fff'}
            fontSize={8}
            fontWeight={500}
            strokeWidth={0.5}
          />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar dataKey="value" fill="#ff0101" fillOpacity={1} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartRadar
