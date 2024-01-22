import { getRegionalIntensityRange } from '../utils/api';
import RegionalForecast from './RegionalForecast';
import RegionPicker from './RegionalPicker';
import { useEffect, useState } from 'react';

function Regional() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [region, setRegion] = useState('15');
  const [regionName, setRegionName] = useState('England');
  const [regionalIntensityRange, setRegionalIntensityRange] = useState([]);

  useEffect(() => {
    getRegionalIntensityRange(region)
      .then((data) => {
        setRegionName(data.data.shortname);
        setRegionalIntensityRange(data.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, [region]);

  if (isLoading) {
    return <p>Loading</p>;
  }
  if (isError) {
    return <p>Error</p>;
  }

  return (
    <>
      <section className="w-2/5 m-auto mt-40 text-center">
        <h2 className="text-2xl font-extrabold md:text-3xl xl:text-4xl mb-4 tracking-tight">
          🔌 👀 Wondering when to power up?{' '}
        </h2>{' '}
        <p className="font-light">
          Check out the chart below for a 24-hour forecast of carbon intensity
          in your selected region. It's your handy guide to finding the greenest
          times for using electricity!
        </p>{' '}
        <RegionPicker setRegion={setRegion} region={region} />
      </section>

      <RegionalForecast
        regionalIntensityRange={regionalIntensityRange}
        regionName={regionName}
      />
    </>
  );
}

export default Regional;
