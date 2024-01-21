import { useState } from 'react';

const RegionPicker = ({ setRegion, regionName }) => {
  const [input, setInput] = useState('');

  const updateInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRegion(`${input}`);
  };

  return (
    <>
      Region: {regionName}
      Select UK region. The chart below will show the 24 hour forward forecast
      for the region you pick.
      <form onSubmit={handleSubmit}>
        <label>Select region</label>
        <select
          placeholder="Select option"
          onChange={updateInput}
          value={input}
        >
          <option value="15">England</option>
          <option value="1">North Scotland</option>
          <option value="2">South Scotland</option>
          <option value="3">North West England</option>
          <option value="4">North East England</option>
          <option value="5">Yorkshire</option>
          <option value="6">North Wales</option>
          <option value="7">South Wales</option>
          <option value="8">West Midlands</option>
          <option value="9">East Midlands</option>
          <option value="10">East England</option>
          <option value="11">South West England</option>
          <option value="12">South England</option>
          <option value="13">London</option>
          <option value="14">South East England</option>
          <option value="16">Scotland</option>
          <option value="17">Wales</option>
        </select>

        <button type="submit">Go</button>
      </form>
    </>
  );
};

export default RegionPicker;

// 1	North Scotland
// 2	South Scotland
// 3	North West England
// 4	North East England
// 5	Yorkshire
// 6	North Wales
// 7	South Wales
// 8	West Midlands
// 9	East Midlands
// 10	East England
// 11	South West England
// 12	South England
// 13	London
// 14	South East England
// 15	England
// 16	Scotland
// 17	Wales
