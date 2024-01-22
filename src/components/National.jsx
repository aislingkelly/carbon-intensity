import { useEffect, useState } from 'react';
import NationalDatePicker from './NationalDatePicker';
import { NationalLineChart } from './NationalLineChart';
import { NationalBarChart } from './NationalBarChart';

import { NationalIntensityChart } from './NationalIntensityChart';
import { getIntensityRange } from '../utils/api';
import GenerationMix from './GenerationMix';

const National = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [dateTime, setDateTime] = useState('');
  const [intensityRange, setIntensityRange] = useState([]);

  useEffect(() => {
    getIntensityRange(dateTime)
      .then((data) => {
        console.log(data, 'data from itensityrange');
        setIntensityRange(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, [dateTime]);

  if (isLoading) {
    return <p>Loading!</p>;
  }
  if (isError) {
    return <p>Error!</p>;
  }
  return (
    <>
      <h1>The bigger picture</h1>
      <p>
        Where does our energy come from and what impact does this have on carbon
        intensity. Explore historical data below.
      </p>
      <NationalDatePicker setDateTime={setDateTime} />
      <div></div>
      <div className="flex flex-col lg:flex-row w-full justify-evenly">
        <div className="w-full lg:w-5/12">
          <NationalLineChart intensityRange={intensityRange} />
        </div>
        <div className="w-full lg:w-5/12">
          {' '}
          <NationalBarChart intensityRange={intensityRange} />
        </div>
      </div>
      {/*  <NationalIntensityChart intensityRange={intensityRange} /> */}
      <div>
        <GenerationMix dateTime={dateTime} />
      </div>
    </>
  );
};

export default National;
