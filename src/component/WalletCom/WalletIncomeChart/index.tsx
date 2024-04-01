import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const WalletIncomeChart = () => {
  const incomeData = [
    { month: "January", proIncome: 1000, premiumIncome: 500 },
    { month: "February", proIncome: 1200, premiumIncome: 600 },
    { month: "March", proIncome: 1100, premiumIncome: 550 },
    { month: "April", proIncome: 1050, premiumIncome: 525 },
    { month: "May", proIncome: 1300, premiumIncome: 650 },
    { month: "June", proIncome: 1150, premiumIncome: 575 },
    { month: "July", proIncome: 1250, premiumIncome: 625 },
    { month: "August", proIncome: 1350, premiumIncome: 675 },
    { month: "September", proIncome: 1400, premiumIncome: 700 },
    { month: "October", proIncome: 1450, premiumIncome: 725 },
    { month: "November", proIncome: 1100, premiumIncome: 550 },
    { month: "December", proIncome: 1550, premiumIncome: 775 },
  ];

  return (
    <LineChart
      width={920}
      height={300}
      data={incomeData}
      margin={{
        top: 5,
        right: 30,
        left: -30,
        bottom: 5,
      }}
    >
      <CartesianGrid vertical={false} stroke="#ffffff" />
      <XAxis dataKey="month" stroke="#ffffff" />
      <YAxis stroke="#ffffff" />
      <Tooltip />
      <Line
        strokeWidth={2}
        type="monotone"
        dataKey="premiumIncome"
        stroke="#FD8533"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="proIncome"
        stroke="#ffff"
        strokeWidth={2}
      />
    </LineChart>
  );
};

export default WalletIncomeChart;
