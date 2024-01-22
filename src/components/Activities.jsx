function Activities() {
  return (
    <>
      {' '}
      <div className="container mx-auto">
        <section>
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl tracking-tight text-balance">
                🏠 What can you change?
              </h1>

              <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
                There are several household activities that tend to be
                energy-intensive but can be adjusted to align with times of
                better carbon intensity. This approach is particularly effective
                when the grid is using cleaner, renewable energy sources.
              </p>
            </div>
            <div className="lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="earth.webp"
                alt="Washing basket overflowing with laundry"
              />
            </div>
          </div>
        </section>

        <div className="w-full lg:w-3/4 m-auto font-light">
          <h2 className="font-extrabold text-xl mb-3">
            Laundry (Washing and Drying)
          </h2>
          <p className="mb-8">
            These appliances use a significant amount of energy. Doing laundry
            during times of low carbon intensity, such as when renewable energy
            sources like wind or solar are more active, can reduce the carbon
            footprint of this chore.
          </p>

          <h2 className="font-extrabold text-xl mb-3">Dishwashing</h2>
          <p className="mb-8">
            Using a dishwasher, especially during its heating and drying cycles,
            consumes considerable energy. Running the dishwasher during periods
            of lower carbon intensity, like during midday in areas with high
            solar energy generation, can be more environmentally friendly.
          </p>

          <h2 className="font-extrabold text-xl mb-3">
            Electric Vehicle (EV) Charging
          </h2>
          <p className="mb-8">
            For households with electric vehicles, charging can be a major power
            draw. Aligning EV charging with times of lower carbon intensity,
            such as overnight in regions with wind energy, can reduce the carbon
            impact.
          </p>

          <h2 className="font-extrabold text-xl mb-3">Heating and Cooling</h2>
          <p className="mb-8">
            Heating, ventilation, and air conditioning (HVAC) systems are major
            energy consumers. Adjusting these systems to run more during periods
            of low carbon intensity, like using programmable thermostats, can
            help. For instance, pre-heating or cooling a home during low carbon
            intensity periods and then using energy-efficient insulation to
            maintain the temperature.
          </p>

          <h2 className="font-extrabold text-xl mb-3">Cooking</h2>
          <p className="mb-8">
            Large appliances like electric ovens and stovetops are
            energy-intensive. Planning cooking times to coincide with periods of
            cleaner energy use can reduce the overall carbon footprint.
          </p>

          <h2 className="font-extrabold text-xl mb-3">Water Heating</h2>
          <p className="mb-8">
            Electric water heaters are significant energy users. Timing their
            use (such as for showers, baths, or washing up) to align with low
            carbon intensity periods can make a difference.
          </p>

          <h2 className="font-extrabold text-xl mb-3">
            High-Power Electronics and Appliances
          </h2>
          <p className="mb-8">
            Using high-power appliances like vacuum cleaners, hairdryers, or
            power tools can be timed to coincide with low-carbon periods.
          </p>
        </div>
      </div>
    </>
  );
}

export default Activities;
