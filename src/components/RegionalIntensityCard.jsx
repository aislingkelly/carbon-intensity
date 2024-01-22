import { HiOutlineClock } from 'react-icons/hi2';

const RegionalIntensityCard = ({ timeFrame }) => {
  let indexcol = timeFrame.intensity.index;

  const getColor = (indexcol) => {
    if (indexcol === 'very high')
      return 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-200 to-red-300';
    if (indexcol === 'high')
      return 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-200 to-orange-300';
    if (indexcol === 'moderate')
      return 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-200 to-yellow-300';
    if (indexcol === 'low')
      return 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-200 to-blue-300';
    if (indexcol === 'very low')
      return 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-200 to-green-300';
  };

  return (
    <>
      <div className={`${getColor(indexcol)} w-1/12 text-center border`}>
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
