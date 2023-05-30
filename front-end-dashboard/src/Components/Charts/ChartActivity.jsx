import {
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ChartActivity = ({dataActivity}) => {

  return (
    <div>
      < ResponsiveContainer width="100%" height="100%">
        <BarChart
        width={835}
        height={320}
        data={dataActivity}
        margin={{
          top: 100,
          right: 30,
          left: 100,
          bottom: 50
        }}
      >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#282D30" />
          <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
   
    </div>
  )
}

export default ChartActivity