import BaseIcon from "./base-icon";

const RussianIcon = ({ className }) => (
  <BaseIcon width="40" height="25" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0H40V25H0V0Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 8.3335H40V25H0V8.3335Z"
      fill="#0039A6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 16.6665H40V25H0V16.6665Z"
      fill="#D52B1E"
    />
  </BaseIcon>
);

export default RussianIcon;
