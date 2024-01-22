function NationalIntensityScore({ intensityScore }) {
  return (
    <>
      <section className="w-11/12 lg:w-3/4 m-auto flex flex-col md:flex-row-reverse justify-between">
        <div className="w-full lg:w-5/12 place-self-center mb-10">
          <h2 className="text-2xl font-extrabold md:text-3xl xl:text-4xl mb-4 tracking-tight">
            🌍 Why does this matter?
          </h2>
          <p className="font-light">
            Electricity from fossil fuels, like coal and natural gas, is high in
            carbon emissions. In contrast, renewable energy sources such as
            wind, solar, and hydro have a minimal carbon footprint - providing
            cleaner, greener energy. By choosing to run your washing machine (or
            doing other energy intensive activities) during times of low carbon
            intensity, you're opting for electricity that's better for the
            planet.
          </p>
        </div>
        <div className="rounded-3xl w-full lg:w-5/12 border shadow-lg min-h-96 flex flex-col justify-between">
          <div className="text-center p-4">
            <p className="uppercase text-xs">Current carbon intensity</p>
          </div>

          <div className="text-center">
            <p>
              <span className="text-9xl font-extrabold leading-none">
                {intensityScore[0].intensity.actual}
              </span>

              <br />
              <span className="text-sm font-normal  leading-none">
                gCO2/kWh
              </span>
            </p>
          </div>

          <div className="text-center p-4 uppercase">
            <p>{intensityScore[0].intensity.index}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default NationalIntensityScore;
