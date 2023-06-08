import {
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import './chartActivity.css'

const ChartActivity = ({ data }) => {
  return (
    <div className="chartActivity-wrapper">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 100,
            left: 100,
            bottom: 0,
            right: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false}  />
          <YAxis orientation="right" tickLine={false}/>
          <Tooltip />
          <Bar dataKey="kilogram" fill="#282D30" barSize={7}   />
          <Bar dataKey="calories" fill="#E60000" barSize={7} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartActivity
