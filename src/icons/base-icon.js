const BaseIcon = ({
  children,
  className,
  onClick,
  ariaLabel,
  width = "20",
  height = "20",
  fill = "currentColor",
}) => {
  return (
    <svg
      aria-label={ariaLabel}
      className={className}
      onClick={onClick}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
    >
      {children}
    </svg>
  );
};

export default BaseIcon;
