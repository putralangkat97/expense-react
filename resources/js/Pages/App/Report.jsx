import AppLayout from "@/Layouts/AppLayout";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
);

const Report = ({ weekly_report }) => {
  const chartData = {
    labels: weekly_report.labels,
    datasets: [
      {
        label: "keluar",
        data: weekly_report.dataExpense,
        fill: false,
        backgroundColor: "rgb(239, 198, 194)",
        borderColor: "rgba(239, 198, 194, 0.6)",
        tension: 0.5,
      },
      {
        label: "masuk",
        data: weekly_report.dataIncome,
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
        text: "Pengeluaran mingguan bulan " + weekly_report.monthName,
      },
    },
  };

  const doughnut_options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
        text: "Jumlah pengeluaran " + weekly_report.monthName,
      },
    },
  };

  //   doughnut
  const doughnut_data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
      <div className="px-6">
        <div className="flex items-center justify-center">
          <h2 className="text-center text-3xl sm:text-4xl">Insight</h2>
        </div>
      </div>
      <div className="px-2 pb-6 bg-base-200 rounded-xl mt-10">
        <div className="flex flex-col items-center justify-center space-y-2">
          <Bar options={options} data={chartData} />
        </div>
      </div>
      <div className="flex items-center justify-start mt-10">
        <h2 className="text-xl font-bold text-base-content sm:text-2xl">
          Total Pengeluaran
        </h2>
      </div>
      <div className="px-2 pb-6 bg-base-200 rounded-xl mt-4">
        <div className="flex flex-col items-center justify-center space-y-2">
          <Doughnut options={doughnut_options} data={doughnut_data} />
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
