const RegionalIntensityCard = ({ timeFrame }) => {
  let indexcol = timeFrame.intensity.index;

  const getColor = (indexcol) => {
    if (indexcol === 'very high') return 'red-500';
    if (indexcol === 'high') return 'orange-500';
    if (indexcol === 'moderate') return 'yellow-500';
    if (indexcol === 'low') return 'blue-500';
    if (indexcol === 'very low') return 'green-500';
  };

  return (
    <>
      <div className="bg-red-500"></div>
      <div className={`bg-${getColor(indexcol)}`}>
        <h2> {timeFrame.intensity.index}</h2>
        <p>Forecast: {timeFrame.intensity.forecast}</p>
        <p>⏰ {timeFrame.from.substring(11, 16)}</p>
      </div>
    </>
  );
};

export default RegionalIntensityCard;
