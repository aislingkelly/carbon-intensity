import RegionalIntensityCard from './RegionalIntensityCard';

function RegionalForecast({ regionalIntensityRange, regionName }) {
  return (
    <>
      <div className="px-4 lg:px-0">
        <p className="font-light uppercase text-xs text-right">
          Current Region
          <br />{' '}
          <span className="font-bold text-lg normal-case">{regionName}</span>
        </p>
        <div className="flex flex-wrap">
          {regionalIntensityRange.map((timeFrame, index) => (
            <RegionalIntensityCard key={index} timeFrame={timeFrame} />
          ))}
        </div>
      </div>
    </>
  );
}

export default RegionalForecast;
