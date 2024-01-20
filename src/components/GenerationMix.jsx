import { useEffect, useState } from 'react';
import { getGenerationMix } from '../utils/api';

const GenerationMix = () => {
  const [generationMix, setGenerationMix] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getGenerationMix()
      .then(({ data }) => {
        if (data.hasOwnProperty('error')) {
          setIsError(true);
          setIsLoading(false);
        }
        setGenerationMix(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <>
      <h3 className="text-3xl font-extrabold bg-gradient-to-br from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
        Generation Mix
      </h3>

      <p>
        Where does Great Britain's electricity come from? The current generation
        mix shows what power sources have been running on the system in the last
        30 minutes.
      </p>
      <p className="national-generation-header">Fuel source</p>
      <p className="national-generation-header">% of total</p>

      <ul>
        {generationMix.generationmix
          .sort((a, b) => b.perc - a.perc)
          .map((source) => {
            return (
              <li key={source.fuel} id="fuel-source">
                <p>
                  {source.fuel[0].toUpperCase()}
                  {source.fuel.slice(1)}
                </p>
                <p>{source.perc}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default GenerationMix;
