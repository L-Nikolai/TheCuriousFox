import Frame from "./frame";

const What = () => (
  <div className="pb-s3 sm:flex sm:justify-center sm:flex-wrap ">
    <div className="title text-blue text-center text-shadow sm:text-bigTitleD sm:px-s4 ">
      Что?
    </div>
    <div className="sm:w-s30">
      <Frame title="Школьники:">
        <ul className="space-y-s03 -space-y-reverse ">
          <li className="square-orange flex ">
            <span className="sm:pl-s1">Начальная школа 1-4 классы</span>
          </li>
          <li className="square-orange flex">
            <span className="sm:pl-s1">Общий английский 5-11 класс</span>
          </li>
          <li className="square-orange flex">
            <span className="sm:pl-s1">Подготовка к ОГЕ</span>
          </li>
          <li className="square-orange flex">
            <span className="sm:pl-s1">Подготовка к ЕГЭ</span>
          </li>
        </ul>
      </Frame>
      <Frame title="Студенты:">
        <ul className="space-y-s03 -space-y-reverse">
          <li className="square-orange flex">
            <span className="sm:pl-s1">Свободное общение</span>{" "}
          </li>
          <li className="square-orange flex">
            <span className="sm:pl-s1">Просмотр фильмов без субтитров</span>
          </li>
          <li className="square-orange flex">
            <span className="sm:pl-s1">Чтение книг мировой литературы</span>
          </li>
          <li className="square-orange flex">
            <span className="sm:pl-s1">Прокачка имеющихся знаний</span>
          </li>
        </ul>
      </Frame>
    </div>
  </div>
);

export default What;
