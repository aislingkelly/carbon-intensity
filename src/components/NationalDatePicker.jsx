import { useState } from 'react';

const DateTimeSearch = ({ setDateTime }) => {
  const [input, setInput] = useState('');

  const updateInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDateTime(`${input}`);
  };

  //  // Calculate two days in the future from now
  //     const twoDaysFromNow = new Date();
  //     twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 2);

  //   // Format the date in YYYY-MM-DD format for the input max attribute
  //     const maxDate = twoDaysFromNow.toISOString().split('T')[0];

  // Calculate two days in the future from now
  const today = new Date();

  // Format the date in YYYY-MM-DD format for the input max attribute
  const maxDate = today.toISOString().split('T')[0];

  return (
    <>
      Select a Date <br />
      Choose a date to proceed. The maximum date allowed is two days from today.
      <form onSubmit={handleSubmit}>
        <label>Pick a date</label>
        <input
          type="date"
          placeholder="Your Date"
          onChange={updateInput}
          value={input}
          max={maxDate} // Set the max attribute to two days in the future
          min="2018-08-01"
        />

        <button type="submit">Go</button>
      </form>
    </>
  );
};

export default DateTimeSearch;
