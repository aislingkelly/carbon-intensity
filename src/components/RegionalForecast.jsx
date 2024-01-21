import RegionalIntensityCard from './RegionalIntensityCard';

function RegionalForecast({ regionalIntensityRange }) {
  return (
    <>
      <h2>Regional Forecast</h2>
      <p>
        This can help you plan your energy use, switching devices on when energy
        is green and off when it's not.
      </p>
      <div className="flex flex-wrap">
        {regionalIntensityRange.map((timeFrame, index) => (
          <RegionalIntensityCard key={index} timeFrame={timeFrame} />
        ))}
      </div>
    </>
  );
}

export default RegionalForecast;
