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
      <RegionPicker
        setRegion={setRegion}
        region={region}
        regionName={regionName}
      />
      <RegionalForecast regionalIntensityRange={regionalIntensityRange} />
    </>
  );
}

export default Regional;
