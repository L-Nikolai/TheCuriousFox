import Frame from "./frame";
import { GBIcon, GermanIcon, SpainIcon } from "../icons";

const Teachers = () => (
  <div className="pt-s1 pb-s3 bg-ocean bg-opacity-90 sm:py-s4 ">
    <div className="title  text-center text-shadow text-white sm:text-titleD ">
      Преподаватели
    </div>
    <div className="flex justify-center items-center flex-wrap-reverse ">
      <Frame>
        <div className="flex justify-center flex-wrap mb-s2">
          <div className="bg-mary w-avatar h-avatar sm:w-avatarD sm:h-avatarD bg-no-repeat bg-contain my-s03 mx-s1 " />
          <div className="flex flex-col justify-between items-end">
            <span className="my-s1 text-right sm:text-infoD">
              Привет, меня зовут Ангелина!
            </span>
            <span className="flex items-center justify-between text-blue font-bold">
              <span className="mr-s1 flex items-center ">
                <GBIcon className="mr-s05" />
                Английский
              </span>
              <span className="flex items-center ">
                <SpainIcon className="mr-s05" />
                Испанский
              </span>
            </span>
          </div>
        </div>
        <span>
          А у меня любви с первого взгляда с английским языком не сложилось.
          Удивительно, правда? Но я понимала, что этот язык - везде. Сейчас вот
          эра pop-it'ов и simple dimple. А еще телефоны и компьютеры выдают
          ошибки на английском. Собрав волю в кулак, я продолжила заниматься.
          Моя борьба с английским только спустя время переросла в интересную
          дружбу с ним. Позже у меня появилась возможность учить испанский с
          преподавателем из Мадрида. И каким счастьем было узнать, что там нет
          стольких правил чтения, как в английском! Ну, а потом, сложилось так,
          что своими знаниями я начала делиться с другими, теми - у кого
          возникало желание получить новые знания. И вот так преподавание языков
          стало делом, которое я люблю.
        </span>
      </Frame>
      <Frame>
        <div className="flex justify-center flex-wrap mb-s2">
          <div className="bg-mary w-avatar h-avatar sm:w-avatarD sm:h-avatarD bg-no-repeat bg-contain my-s03 mx-s1 " />
          <div className="flex flex-col justify-between items-end">
            <span className="my-s1 text-right sm:text-infoD">
              Привет, меня зовут Мария!
            </span>
            <span className="flex items-center text-blue font-bold">
              <GBIcon className="mr-s05" />
              Английский
            </span>
          </div>
        </div>
        <span>
          Когда в старших классах мама спросила меня, кем я хочу стать, я
          подумала, что мир настолько огромен и так много разных народов живут в
          нем и я решила, что хочу их понимать и свободно общаться. Я хотела
          быть переводчиком и поступила Педагогический Университет. В процессе
          обучения пришло осознание того, что я хочу помогать другим изучать
          языки. Язык дал мне возможность путешествовать и мои поездки позволяют
          мне познавать язык изнутри, общаясь с народами, использующими
          различные диалектны в самых отдаленных уголках мира. Моя любовь к
          английскому настолько сильна, что когда-то мое увлечение переросло в
          дело моей жизни. На моих занятиях я с радостью поделюсь с тобой
          накопленным опытом и знаниями.{" "}
        </span>
      </Frame>
      <Frame>
        <div className="flex justify-center flex-wrap mb-s2">
          <div className="bg-yly w-avatar h-avatar sm:w-avatarD sm:h-avatarD bg-no-repeat bg-contain my-s03 mx-s1 " />
          <div className="flex flex-col justify-between items-end">
            <span className="my-s1 text-right sm:text-infoD">
              Привет! Меня зовут Юля!
            </span>
            <span className="flex items-center justify-between text-blue font-bold ">
              <span className="mr-s1 flex items-center ">
                <GBIcon className="mr-s05" />
                Английский
              </span>
              <span className="flex items-center ">
                <GermanIcon className="mr-s05" />
                Немецкий
              </span>
            </span>
          </div>
        </div>
        <span>
          Иностранные языки стали частью моей жизни с подросткового возраста. В
          7 классе мне было любопытно, как это учить английский и немецкий
          одновременно. С этого начался мой путь изучения иностранных языков, и
          я поняла, что это действительно очень увлекательно, и совсем несложно.
          Сегодня я хочу делиться с вами своими знаниями и навыками, показать,
          что английский язык - это несложное чтение, а немецкий - не такая
          скучная и трудная грамматика.
        </span>
      </Frame>
    </div>
  </div>
);

export default Teachers;
