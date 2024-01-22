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
      <section>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl tracking-tight">
              🧺 The bigger picture
            </h1>

            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
              Explore the core elements of Great Britain's energy: Carbon
              Intensity and Generation Mix. Carbon Intensity measures the
              environmental impact of our electricity, revealing the carbon
              emitted per unit of energy. Generation Mix offers insight into the
              various energy sources that power our nation, from renewables to
              fossil fuels.
            </p>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="washing.webp"
              alt="Washing basket overflowing with laundry"
            />
          </div>
        </div>
      </section>
      <section className="w-2/5 m-auto mt-20 text-center">
        <h2 className="text-2xl font-extrabold md:text-3xl xl:text-4xl mb-4 tracking-tight">
          📈 🧐 What are the trends?
        </h2>{' '}
        <p className="font-light">
          Use the date selection tool to view specific data for any given day.
          This feature provides insight into the daily shifts in our energy
          makeup and its environmental implications on carbon intensity.
        </p>{' '}
        <NationalDatePicker setDateTime={setDateTime} />
      </section>

      <div className="flex flex-col lg:flex-row w-full justify-evenly mt-20">
        <div className="w-full lg:w-5/12">
          <NationalLineChart intensityRange={intensityRange} />
        </div>
        <div className="w-full lg:w-5/12">
          <h3 className="text-3xl"> </h3>
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
