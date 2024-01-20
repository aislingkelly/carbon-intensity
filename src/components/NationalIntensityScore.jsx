function NationalIntensityScore({ intensityScore }) {
  let showThis;
  if (intensityScore.length > 0) {
    showThis = intensityScore[0].intensity.actual;
  } else {
    showThis = '200';
  }
  return (
    <>
      <h1>Should you stick you washing on?</h1>
      <p>
        Carbon intensity is a measure of how clean our electricity is.
        Specifically, how many grams of carbon dioxide are released to produce a
        kilowatt hour of electricity. Fossil fuels are very carbon intensive,
        whereas renewable energy is carbon-free. This gauge shows, in real time,
        the carbon intensity of Great Britain’s electricity, which is made up of
        a range of sources.
      </p>
      <br /> Have a quick look here 👀 🧺 👀 🧺 <br />
      The current Carbon intensity is:
      {showThis}
      gCO2/kWh
    </>
  );
}

export default NationalIntensityScore;
