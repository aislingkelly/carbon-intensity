import { HiOutlineClock } from 'react-icons/hi2';

const RegionalIntensityCard = ({ timeFrame }) => {
  let indexcol = timeFrame.intensity.index;

  const getColor = (indexcol) => {
    if (indexcol === 'very high') return 'red-300';
    if (indexcol === 'high') return 'orange-300';
    if (indexcol === 'moderate') return 'yellow-300';
    if (indexcol === 'low') return 'blue-300';
    if (indexcol === 'very low') return 'green-300';
  };

  return (
    <>
      <div className={`bg-${getColor(indexcol)} w-1/12 text-center border`}>
        <p className="text-3xl font-bold  py-5">
          {timeFrame.intensity.forecast}
        </p>
        <p className="text-xs uppercase"> {timeFrame.intensity.index}</p>
        <p className="pb-2">
          <HiOutlineClock className="inline" />{' '}
          {timeFrame.from.substring(11, 16)}
        </p>
      </div>
    </>
  );
};

export default RegionalIntensityCard;
