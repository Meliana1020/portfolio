import profileData from "../../data/profile";
import SocialIcon from "../Elements/social-icon";

const CardLayout = () => {
  const {
    name,
    role,
    location,
    email,
    cvLink,
    image,
    socials,
  } = profileData;

  return (
    <div className="w-full h-full">
      <div className="bg-black text-white flex flex-col lg:flex-row items-center justify-start m-2">
        <div className="rounded-lg shadow-lg py-4 px-4 w-full text-center text-white border sm:max-w-sm">
          
          <div className="flex items-center justify-between sm:gap-4 gap-32 mb-2">
            <h1 className="text-2xl font-base mt-2 md:text-3xl">{name}</h1>
            <p className="text-sm md:text-base">{role}</p>
          </div>

          <img
            className="rounded-lg mx-auto w-full h-auto sm:w-full"
            src={image}
            alt={name}
          />

          <div className="mb-2 mt-4 flex flex-col items-center">
            <p className="text-lg font-bold md:text-sm mb-2">{location}</p>
            <p className="text-sm md:text-sm">{email}</p>
          </div>

          <button
            onClick={() => window.open(cvLink, "_blank")}
            className="mt-2 bg-gray-300 text-black text-xs md:text-sm font-medium py-2 px-4 rounded-lg w-full"
          >
            Download CV
          </button>

          <div className="flex justify-center gap-8 mt-4">
            {socials.map((item, index) => (
              <SocialIcon key={index} {...item} />
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <p className="text-xs md:text-sm">
              © 2024 {name}. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
