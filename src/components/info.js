import {
  GBIcon,
  GermanIcon,
  RussianIcon,
  SpainIcon,
  Fox,
  PhoneIcon,
} from "../icons";

const Info = () => (
  <div className="w-screen bg-orange px-s2 pb-s3 sm:p-s3  text-white">
    <div className="sm:flex sm:justify-around">
      <Fox className="hidden sm:block sm:w-s20 sm:h-s20 sm:mr-s1" />
      <div className="flex flex-col items-center sm:items-end sm:justify-between">
        <a
          href="tel:+79622735091"
          className="flex items-center pt-s1 font-bold text-shadow sm:text-infoD sm:hover:text-blue sm:duration-300"
        >
          <PhoneIcon className="mr-s1 w-s2 h-s2" />
          +7 962 273 50 91
        </a>
        <Fox className="pt-s1 sm:hidden" />
        <div>
          <div className="title mt-s2 text-center  sm:text-titleD sm:mt-none sm:text-right">
            The Curious Fox
          </div>
          <div className=" text-center text-base font-medium  sm:text-infoD sm:text-right">
            это современный центр дополнительного образования.
          </div>
        </div>
      </div>
    </div>
    <div className="mt-s1  text-center sm:mt-s4 sm:text-infoD ">
      Здесь изучают:
    </div>
    <div className="my-s1  text-sm sm:my-s3">
      <div className="grid grid-cols-4 sm:text-base ">
        <div className=" flex flex-col items-center ">
          <GBIcon className="flag " />
          Английский
        </div>
        <div className=" flex flex-col items-center">
          <GermanIcon className="flag" />
          Немецкий
        </div>
        <div className=" flex flex-col items-center">
          <RussianIcon className="flag" />
          Русский
        </div>
        <div className=" flex flex-col items-center">
          <SpainIcon className="flag" />
          Испанский
        </div>
      </div>
    </div>
  </div>
);

export default Info;
