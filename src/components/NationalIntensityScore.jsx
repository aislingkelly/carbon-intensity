function NationalIntensityScore({ intensityScore }) {
  return (
    <>
      <h1>Should you stick you washing on?</h1>
      <p>
        Carbon intensity is a measure of how clean our electricity is.
        Specifically, how many grams of carbon dioxide are released to produce a
        kilowatt hour of electricity. Fossil fuels are very carbon intensive,
        whereas renewable energy is carbon-free.
      </p>
      <br /> Have a quick look here 👀 🧺 👀 🧺 <br />
      The current carbon intesity for all of Great Britain is{' '}
      {intensityScore[0].intensity.actual} gCO2/kWh and is classed as{' '}
      {intensityScore[0].intensity.index}
    </>
  );
}

export default NationalIntensityScore;
