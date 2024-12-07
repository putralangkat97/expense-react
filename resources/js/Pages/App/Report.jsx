import AppLayout from "@/Layouts/AppLayout";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const Report = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Out",
        data: data.dataExpense,
        fill: false,
        backgroundColor: "rgb(239, 198, 194)",
        borderColor: "rgba(239, 198, 194, 0.6)",
        tension: 0.5,
      },
      {
        label: "In",
        data: data.dataIncome,
        fill: false,
        backgroundColor: "rgb(185, 219, 198)",
        borderColor: "rgba(185, 219, 198, 0.6)",
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Report Data of " + data.monthName,
      },
    },
  };

  return (
    <>
      <div className="px-6">
        <div className="flex items-center justify-center">
          <h2 className="text-center text-3xl sm:text-4xl">
            Laporan Transaksi
          </h2>
        </div>
      </div>
      <div className="px-2">
        <div className="mt-10 flex flex-col items-center justify-center space-y-2">
          <Line options={options} data={chartData} />
        </div>
      </div>
    </>
  );
};

Report.layout = (page) => (
  <AppLayout title="Report" useNavHead={false}>
    {page}
  </AppLayout>
);

export default Report;
