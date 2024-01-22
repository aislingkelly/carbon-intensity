import { useEffect, useState } from 'react';
import { getGenerationMix } from '../utils/api';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const GenerationMix = ({ dateTime }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          // Add different colors for each fuel type
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#C9CBCF',
          '#FFCD56',
          '#767676',
        ],
        hoverBackgroundColor: [
          // Add hover colors if needed
        ],
      },
    ],
  });
  const [generationMix, setGenerationMix] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getGenerationMix(dateTime)
      .then(({ data }) => {
        if (data.hasOwnProperty('error')) {
          setIsError(true);
          setIsLoading(false);
        }
        const newLabels = data[0].generationmix.map((item) => item.fuel);
        const newData = data[0].generationmix.map((item) => item.perc);

        setChartData({
          ...chartData,
          labels: newLabels,
          datasets: [{ ...chartData.datasets[0], data: newData }],
        });
        setGenerationMix(data[0]);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [dateTime]);

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full justify-evenly">
        <div className="w-full lg:w-5/12">
          <h3 className="text-3xl font-extrabold bg-gradient-to-br from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
            Generation Mix
          </h3>

          <p>
            Where does Great Britain's electricity come from? The current
            generation mix shows what power sources have been running on the
            system in the last 30 minutes.
          </p>

          <div>
            <table className="national-generation-table">
              <thead>
                <tr>
                  <th className="national-generation-header">Fuel Source</th>
                  <th className="national-generation-header">% of Total</th>
                </tr>
              </thead>
              <tbody>
                {generationMix.generationmix
                  .sort((a, b) => b.perc - a.perc)
                  .map((source) => (
                    <tr key={source.fuel}>
                      <td>
                        {source.fuel[0].toUpperCase() + source.fuel.slice(1)}
                      </td>
                      <td>{source.perc}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full lg:w-5/12 mt-10">
          <Doughnut data={chartData} />
        </div>
      </div>
    </>
  );
};

export default GenerationMix;
