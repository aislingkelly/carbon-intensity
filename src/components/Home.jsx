import { useEffect, useState } from 'react';
import {
  getIntensityScore,
  getIntensityRange,
  getRegionalIntensityRange,
} from '../utils/api';
import NationalIntensityScore from './NationalIntensityScore';
import NationalGenerationMix from './NationalGenerationMix';
import Regional from './Regional';

const Home = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [intensityScore, setIntensityScore] = useState([]);
  useEffect(() => {
    getIntensityScore()
      .then((data) => {
        setIntensityScore(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [dateTime, setDateTime] = useState('date');
  const [intensityRange, setIntensityRange] = useState([]);

  useEffect(() => {
    getIntensityRange(dateTime)
      .then((data) => {
        setIntensityRange(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, [dateTime]);

  const [region, setRegion] = useState('3');
  const [regionalIntensityRange, setRegionalIntensityRange] = useState([]);

  useEffect(() => {
    getRegionalIntensityRange(region)
      .then((data) => {
        console.log(data.data.data, 'regional intensity range data');
        setRegionalIntensityRange(data.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, [region]);

  if (isLoading) {
    return <p>Loading!</p>;
  }
  if (isError) {
    return <p>Error!</p>;
  }
  return (
    <>
      <div className="container mx-auto">
        <section>
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl tracking-tight">
                🧺 Should you stick the washing on?
              </h1>

              <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
                Let's take a sec to think about the carbon intensity of our
                electricity right now. Carbon intensity is an essential gauge of
                our power grid's environmental impact. It measures how much
                carbon dioxide (CO2) is emitted for every kilowatt-hour (kWh) of
                electricity generated.
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

        <NationalIntensityScore intensityScore={intensityScore} />
        {/* <NationalGenerationMix /> */}
        <Regional />
      </div>
    </>
  );
};

export default Home;
