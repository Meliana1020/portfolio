const TimelineItem = ({ period, title, description }) => (
  <div className="flex flex-row">
    <div className="flex flex-col">
      <div className="border-slate-300 border rounded-xl w-4 h-4" />
      <div className="bg-slate-300 w-[0.5px] h-24 sm:h-20 md:h-16 ml-2" />
    </div>
    <div className="ml-4">
      <div className="text-lg">{period}</div>
      <div className="text-xl font-semibold md:text-base">{title}</div>
      <div className="text-xl text-neutral-500">{description}</div>
    </div>
  </div>
);

export default TimelineItem;
