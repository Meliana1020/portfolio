export const Button = (props) => {
  const {
    children,
    variant,
    size,
    textColor,
    fontType,
    bgColor,
    onClick,
    onChange,
  } = props;
  return (
    <div>
      <button
        className={`${variant} ${size} ${textColor} ${fontType} ${bgColor} rounded-md py-2 px-2 z-index`}
        onClick={onClick}
        onChange={onChange}
      >
        {children}
      </button>
    </div>
  );
};
