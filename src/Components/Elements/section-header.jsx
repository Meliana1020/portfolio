const SectionHeader = ({ icon, title }) => (
  <div className="flex flex-row border p-2 rounded-lg w-fit mb-12">
    <img src={icon} alt={title} className="w-4" />
    <p className="pl-2 text-xs">{title}</p>
  </div>
);

export default SectionHeader;
