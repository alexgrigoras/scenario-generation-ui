import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

type Props = {
    data: any[];
};

const ChartView: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <h3>Forecast Chart</h3>
            <LineChart width={800} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" name="Price" />
                <Line type="monotone" dataKey="demand" stroke="#82ca9d" name="Demand" />
            </LineChart>
        </div>
    );
};

export default ChartView;