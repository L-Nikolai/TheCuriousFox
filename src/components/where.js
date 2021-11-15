import Frame from "./frame";

const Where = () => (
  <div className="bg-blue bg-opacity-90 pb-s3 sm:flex sm:justify-center sm:py-s4 sm:flex-wrap-reverse">
    <div className="title text-orange text-center text-shadow  sm:text-bigTitleD sm:order-1 sm:px-s4 ">
      Где?
    </div>
    <div className="sm:w-s30">
      <Frame title="Оффлайн:">
        <ul className="space-y-s03 -space-y-reverse">
          <li className="square-blue flex justify-between">
            Удобное местоположение в центре города.
          </li>
          <li className="square-blue flex justify-between">
            Современное здание, соответствующее российским стандартам
            образовательного учреждения.
          </li>
        </ul>
      </Frame>
      <Frame title="Онлайн:">
        <ul className="space-y-s03 -space-y-reverse">
          <li className="square-blue flex justify-between">
            Живые уроки разработанные исключительно для онлайн формата обучения
          </li>
          <li className="square-blue flex justify-between">
            Прогрессивное приложение для обучения (в разработке)
          </li>
        </ul>
      </Frame>
    </div>
  </div>
);

export default Where;
