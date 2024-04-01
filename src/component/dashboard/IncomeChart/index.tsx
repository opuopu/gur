import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { incomeChart } from "../../../db/incomeChartData";

const IncomeChart = () => {
  return (
    <BarChart width={935} height={262} data={incomeChart}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />

      <Bar
        barSize={10}
        radius={5}
        dataKey="premium"
        fill="#FD8533"
        activeBar={<Rectangle fill="#FD8533" stroke="#FD8533" />}
      />
      <Bar
        radius={5}
        barSize={10}
        dataKey="pro"
        fill="#000"
        activeBar={<Rectangle fill="#000" stroke="#000" />}
      />
    </BarChart>
  );
};

export default IncomeChart;
