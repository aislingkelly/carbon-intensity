import { getRegionalIntensityRange } from '../utils/api';
import RegionalForecast from './RegionalForecast';
import RegionPicker from './RegionalPicker';
import { useEffect, useState } from 'react';

function Regional() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [region, setRegion] = useState('3');
  const [regionalIntensityRange, setRegionalIntensityRange] = useState([]);

  useEffect(() => {
    getRegionalIntensityRange(region)
      .then((data) => {
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
      <RegionPicker setRegion={setRegion} />
      <RegionalForecast regionalIntensityRange={regionalIntensityRange} />
    </>
  );
}

export default Regional;
