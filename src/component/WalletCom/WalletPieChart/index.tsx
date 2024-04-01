import { PieChart, Pie, Cell } from "recharts";

const WalletPieChart = () => {
  const data = [
    { name: "Premium ", value: 800, color: "#FD8533" },
    { name: "Pro", value: 200, color: "#ffff" },
  ];

  return (
    <div className="flex flex-col items-center">
      <PieChart width={228} height={232}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          paddingAngle={5}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default WalletPieChart;
