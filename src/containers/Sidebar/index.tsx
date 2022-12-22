import arrow from "../../assets/img/setinha.png";
import logo from "../../assets/img/logo-sena.png";
import { lotterGamesNames, lotterGamesElements } from "../../helpers";

interface SidebarInstance {
  handleOpenSelect: () => void;
  selectEvent: boolean;
  handleChangeSelect: (text: string) => void;
  textSelect: string;
}

type ImgsInstance = {
  url: string;
  alt: string;
  classImg: string;
  height: string;
};

const Sidebar = ({
  textSelect,
  handleChangeSelect,
  handleOpenSelect,
  selectEvent,
}: SidebarInstance) => {
  
  const { looterObjectGames } = lotterGamesElements;
  const { lottersNames } = lotterGamesNames;

  const IMGS: ImgsInstance[] = [
    {
      url: looterObjectGames[textSelect].imgMobile,
      alt: looterObjectGames[textSelect].imgMobile,
      classImg: "img-mobile",
      height: "auto",
    },
    {
      url: looterObjectGames[textSelect].imgWeb,
      alt: looterObjectGames[textSelect].imgWeb,
      classImg: "img-web",
      height: "100%",
    },
  ];

  return (
    <div className="lotter-sidebar">
      {IMGS.map(({ url, alt, classImg, height }, index) => {
        return <img key={index} src={url} alt={alt} className={classImg} height={height} />;
      })}

      <div className="looter-sidebar-grid">
        <div className="lotter-games-select">
          <div className="select">
            <p className="text-game" data-testid="select">{looterObjectGames[textSelect].titulo}</p>
            <button onClick={handleOpenSelect}>
              <img src={arrow} alt={arrow} />
            </button>
          </div>

          {selectEvent && (
            <div className="grid-text-select" data-testid="select-options">
              {lottersNames.map((name, index) => {
                return (
                  <p
                    key={index}
                    onClick={() => handleChangeSelect(name.params)}
                  >
                    {name.text}
                  </p>
                );
              })}
            </div>
          )}
        </div>
        <div className="lotter-text-img">
          <img src={logo} alt={logo} height={30} />
          <p>{looterObjectGames[textSelect].titulo}</p>
        </div>
        <div className="lotter-competition-text">
          <p className="lotter-competition">CONCURSO</p>
          <p className="lotter-competition-data">4531 – 07/04/2020</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
