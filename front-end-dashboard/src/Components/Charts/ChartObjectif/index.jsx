import {
  ResponsiveContainer,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Rectangle
} from 'recharts'
import './chartObjectif.css'

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return <p className="tooltipLabel">{`${payload[0].value}min`}</p>
  }
  return null
}

function CustomizedCursor({ points }) {
  return (
    <Rectangle
      fill="black"
      opacity={0.1}
      x={points[0].x}
      width={39}
      height={25}
    />

  )
}

const ChartObjectif = ({ data }) => {
  console.log(data)
  return (
    <div className="chartObjectif-wrapper">
      {/* <p className="chartObjectif-title">Durée moyenne des sessions</p> */}
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart data={data} >

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            opacity={0.5}
         
          />
          <YAxis
            hide={true}
          />
          <Tooltip content={<CustomTooltip/>} cursor={<CustomizedCursor/>}  />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            opacity={0.7}
            dot={false}
            activeDot={{
              r: 4
            }}
            
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartObjectif
