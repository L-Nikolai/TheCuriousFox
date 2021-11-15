import { InstagramIcon, LocationIcon, MailIcon, PhoneIcon } from "../icons";

const Contacts = () => (
  <div className="pt-s1 pb-s3 px-s2 bg-orange  text-white">
    <div className="title text-shadow  pb-s1 sm:text-infoD sm:text-center">
      Контакты
    </div>
    <div className=" text-basic  text-shadow font-normal sm:flex sm:flex-wrap sm:justify-around sm:text-baseD ">
      <a href="tel:+79622735091" className="footer">
        <PhoneIcon className="mr-s1" />
        +7 962 273 50 91
      </a>
      <a href="mailto:curfox@gmail.com" className="footer">
        <MailIcon className="mr-s1 " />
        thecuriousfoxschool@gmail.com
      </a>
      <a
        href="https://www.instagram.com/the_curious_fox_school/"
        className="footer"
      >
        <InstagramIcon className="mr-s1 " />
        the_curious_fox_school
      </a>
      <a
        href="https://yandex.ru/maps/20649/kireevsk/house/ulitsa_kirova_1/Z04YfwVjSkIAQFtpfXVzdXhjYQ==/?ll=37.923377%2C53.924405&z=17.11"
        className="footer"
      >
        <LocationIcon className="mr-s1 " />
        Киреевск, Кирова 1
      </a>
    </div>
  </div>
);

export default Contacts;
