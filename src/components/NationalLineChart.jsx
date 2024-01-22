import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Carbon intensity',
    },
  },
};

export function NationalLineChart({ intensityRange }) {
  const labels = intensityRange.map((timeFrame) => {
    return timeFrame.from.substring(11, 16);
  });
  const data = {
    labels,
    datasets: [
      {
        label: 'Carbon intensity for your chosen date',
        data: intensityRange.map((timeFrame) => {
          return timeFrame.intensity.forecast;
        }),

        borderColor: '#48BB78',
        backgroundColor: '#9AE6B4',
      },
    ],
  };

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
}
