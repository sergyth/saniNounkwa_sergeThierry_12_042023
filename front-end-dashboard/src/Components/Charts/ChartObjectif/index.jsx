import {
  ResponsiveContainer,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from 'recharts'
import './chartObjectif.css'

function CustomTooltipObj({ active, payload }) {
  if (active && payload && payload.length) {
    return <p className="tooltipLabel">{`${payload[0].value}min`}</p>
  }
  return null
}

function renderLegend() {
  return <p className="legend">Durée moyenne des sessions</p>
}

const ChartObjectif = ({ data }) => {
  return (
    <div className="obj-container ">
      <ResponsiveContainer >
        <LineChart width={258} height={268} data={data} margin={{left:10, right:10}}>
          <XAxis
            dataKey="day"
            axisLine={false}
            stroke="#ffffff"
            tickLine={false}
          />
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltipObj />} cursor={false} />
          <Legend content={renderLegend} verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#ffffff"
            dot={false}
            activeDot={{ r: 5, stroke: '#ffffff' }}
            opacity={.5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartObjectif
