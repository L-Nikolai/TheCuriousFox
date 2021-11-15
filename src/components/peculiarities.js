import { PeculiaritiesIcon } from "../icons";

const Peculiarities = () => (
  <div className="px-s1 bg-white pb-s3 sm:flex sm:justify-center sm:py-s4 sm:flex-wrap">
    <div className="py-s1 pl-s1 title text-medium  sm:text-titleD sm:text-center sm:text-bold sm:px-s4 sm:pb-s3">
      Особенности
    </div>
    <div className="flex  sm:max-w-2xl">
      <PeculiaritiesIcon className="pr-s1 pt-s01 " />
      <div className="flex flex-col text-basic pr-s1 sm:text-baseD">
        <div className="h-s10 mb-special sm:overflow-y-auto">
          Наши преподаватели используют современные технологи и методики
          преподавания, совмещая все аспекты языка: грамматика, чтение, лексика,
          письмо и аудирование.
        </div>
        <div className="h-s10 mb-special sm:overflow-y-auto">
          Занятия в центре проходят семь дней в неделю. Мы постараемся подобрать
          удобное время с учетом ваших пожеланий и графика работы
          преподавателей.
        </div>
        <div className="h-s10 sm:overflow-y-auto">
          Обучение проходит в приятной и комфортной для всех атмосфере. Также мы
          проводим внеурочные занятия на различные темы (Хеллоуин, Рождество,
          День Всех Влюблённых и Пасха), которые дают ученикам представление о
          традициях и обычаях других стран.
        </div>
      </div>
    </div>
  </div>
);

export default Peculiarities;
