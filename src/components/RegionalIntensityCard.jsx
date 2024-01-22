import { HiOutlineClock } from 'react-icons/hi2';

const RegionalIntensityCard = ({ timeFrame }) => {
  let indexcol = timeFrame.intensity.index;

  const getColor = (indexcol) => {
    if (indexcol === 'very high')
      return 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-200 to-slate-300';
    if (indexcol === 'high')
      return 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-200 to-purple-300';
    if (indexcol === 'moderate')
      return 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-200 to-orange-300';
    if (indexcol === 'low')
      return 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-200 to-cyan-300';
    if (indexcol === 'very low')
      return 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-200 to-emerald-300';
  };

  return (
    <>
      <div
        className={`${getColor(indexcol)} w-1/4 lg:w-1/12 text-center border`}
      >
        <p className="text-3xl font-extrabold  py-5">
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
