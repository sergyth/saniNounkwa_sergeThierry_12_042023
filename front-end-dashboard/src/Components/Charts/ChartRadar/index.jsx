import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'

const ChartRadar = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius="53%" data={data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tickLine={false}
          stroke={'#fff'}
          fontSize={12}
          strokeWidth={0.5}
        />
        <PolarRadiusAxis axisLine={false} tick={false} />
        <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default ChartRadar
