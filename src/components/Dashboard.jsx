import { useEffect, useState } from 'react';
import {
  getIntensityScore,
  getIntensityRange,
  getRegionalIntensityRange,
} from '../utils/api';
import NationalIntensityScore from './NationalIntensityScore';
import GenerationMix from './GenerationMix';
import Regional from './Regional';

const Dashboard = () => {
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
        <h1>Dashboard</h1>
        <NationalIntensityScore intensityScore={intensityScore} />
        <GenerationMix />
        <Regional />
      </div>
    </>
  );
};

export default Dashboard;
