const ProjectCard = ({
  title,
  description,
  role,
  image,
  alt,
  link,
  tech = [],
  figma = false,
}) => {
  return (
    <div
      className="card bg-base-100 w-full shadow-xl mb-4 cursor-pointer"
      onClick={() => window.open(link, "_blank")}
    >
      <figure>
        <img
          className="brightness-50 hover:brightness-100"
          src={image}
          alt={alt}
        />
      </figure>
      <div className="card-body bg-zinc-800 rounded-b-xl">
        <h2 className="card-title">{title}</h2>
        <p className="text-zinc-400">{description}</p>
        {role && <p className="text-zinc-300">{role}</p>}

        <div className="card-actions justify-end mt-2 gap-4">
          {tech.map((Icon, index) => (
            <Icon key={index} className="w-10 h-10 brightness-50 hover:brightness-100" />
          ))}
          {figma && (
            <img
              className="w-8 brightness-50 hover:brightness-100"
              src="/figma.svg"
              alt="Figma"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
