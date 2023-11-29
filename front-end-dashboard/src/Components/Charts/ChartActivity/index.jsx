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


function CustomTooltip ({active, payload }){
  if (active && payload && payload.length) {
    return(
      <div className="customTooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    )
  }
  return null
}

const ChartActivity = ({ data }) => {
  return (
    <div className="act">
      <h4 style={{ textAlign: 'left'}}>Activité quotidienne</h4>
      <p className='label'><span className='black'></span> Poids(kg)<span className='red'></span>   Calories brulées (kCal)
      </p>
      <ResponsiveContainer >
        <BarChart data={data} barGap={8} barSize={8} margin={{top: 100, left: 50, bottom: 0, right: 0}} >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false}  />
          <YAxis orientation="right" tickLine={false}/>
          <Tooltip  cursor={{ opacity: 0.6 }} content={<CustomTooltip />}
             offset={40}/>
          <Bar dataKey="kilogram" fill="#282D30"  radius={[10, 10, 0, 0]} />
          <Bar dataKey="calories" fill="#E60000"  radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartActivity
