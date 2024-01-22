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
      <form onSubmit={handleSubmit} className="flex my-10">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span
              className="label-text"
              placeholder="Select option"
              onChange={updateInput}
              value={input}
            >
              Pick a date
            </span>
          </div>
          <input
            className="input input-bordered"
            type="date"
            placeholder="Your Date"
            onChange={updateInput}
            value={input}
            max={maxDate} // Set the max attribute to two days in the future
            min="2018-08-01"
          />
        </label>
        <button className="btn btn-primary mt-9 ml-5" type="submit">
          See historical carbon intensity data
        </button>
      </form>
    </>
  );
};

export default DateTimeSearch;
