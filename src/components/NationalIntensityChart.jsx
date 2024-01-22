export const NationalIntensityChart = ({ intensityRange }) => {
  const carbon = intensityRange.map((score) => {
    return score.intensity.forecast;
  });
  return (
    <>
      {carbon.map((value, index) => (
        <div key={index}>
          <p>{value}</p>
        </div>
      ))}
    </>
  );
};
