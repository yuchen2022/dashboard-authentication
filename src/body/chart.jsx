import React from 'react';
import { PieChart, Pie} from 'recharts';


const Chart = () => {

// Sample data
const data = [
{name: 'Geeksforgeeks', students: 400},
{name: 'Technical scripter', students: 700},
{name: 'Geek-i-knack', students: 200},

];


return (
    <>
		<PieChart width={200} height={200}>
		<Pie data={data} dataKey="students" outerRadius={100} fill="green" />
		</PieChart>
        </>
);
};
export default Chart;