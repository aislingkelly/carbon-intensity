function NationalIntensityScore({ intensityScore }) {
  return (
    <>
      <section className="w-3/4 m-auto flex flex-col-reverse md:flex-row-reverse justify-between">
        <div className="w-1/2 place-self-center ">
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
        <div className="rounded-3xl w-96 border shadow-lg min-h-96 flex flex-col justify-between">
          <div className="text-center p-4">
            <p className="uppercase text-xs">Current carbon intensity</p>
          </div>

          <div className="text-center">
            <p className="text-9xl font-extrabold bg-gradient-to-br from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
              {intensityScore[0].intensity.actual}
            </p>
          </div>

          <div className="text-center p-4">
            <p>
              gCO2/kWh and is classed as {intensityScore[0].intensity.index}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default NationalIntensityScore;
