import React from 'react';
import {
  AreaChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { useProducts } from './ProductContext';


const Statistics = () => {

    const { products } = useProducts();
const data = products.map(product => ({
  name: product.product_name,
  price: +product.price.replace(/[^\d.]/g, ''),
  total: 0,
  rating: product.rating
}));


  return (
    <div className=" p-4 container mx-auto">
      <h2 className="text-xl font-semibold my-10">Statistics</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm h-96">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 5" vertical={false} />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }} 
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Tooltip />
            <Legend />
            <Bar 
              dataKey="price" 
              fill="#9333EA" 
              radius={[8, 4, 8, 0]} 
              barSize={28}
            />
            <Area
              type="monotone"
              dataKey="total"
              fill="#F3E8FF"
              stroke="#9333EA"
              fillOpacity={0.3}
            />
            <Bar 
              dataKey="rating" 
              fill="#4B5563" 
              radius={[0, 0, 0, 0]} 
              barSize={28}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>

  );
};

export default Statistics;