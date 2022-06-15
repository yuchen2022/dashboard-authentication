import React from 'react';
import { PieChart, Pie} from 'recharts';
import { useState } from 'react';

const Chart = () => {


const [datas,setdatas] = useState([
{name: 'Type A', value: 2 ,fill:'#007AFF' },
{name: 'Type B', value: 5, fill:'#FB8832'},
{name: 'Type C', value: 1, fill:'#9013FE'},

])



return (
    <>
	{
	datas.map((d,index) => (
	<PieChart id='chart'>
		<Pie  dataKey="index" value={d.value} outerRadius={100} fill={d.fill}  />
		</PieChart>))
		}
		
        </>
);
};
export default Chart;