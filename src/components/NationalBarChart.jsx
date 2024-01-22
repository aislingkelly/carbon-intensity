import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Carbon Intensity',
    },
  },
};

export function NationalBarChart({ intensityRange }) {
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
      <Bar options={options} data={data} />
    </>
  );
}
