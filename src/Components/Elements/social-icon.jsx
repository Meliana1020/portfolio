const SocialIcon = ({ src, alt, link }) => (
  <button
    onClick={() => window.open(link, "_blank")}
    className="hover:brightness-50 transition"
    aria-label={alt}
  >
    <img src={src} alt={alt} className="w-6 h-8 md:w-8 md:h-8" />
  </button>
);

export default SocialIcon;
