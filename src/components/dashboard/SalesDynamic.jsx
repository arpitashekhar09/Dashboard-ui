import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { value: 40 },
  { value: 42 },
  { value: 45 },
  { value: 44 },
  { value: 48 },
  { value: 46 },
  { value: 49 },
  { value: 52 }
];

export default function SalesDynamic() {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium mb-2">Sales dynamic</h3>

      <div className="bg-gray-50 rounded-2xl p-4">
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#ec4899"
              strokeWidth={3}
              dot={false}
              strokeLinecap="round"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
