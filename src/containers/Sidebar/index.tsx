import arrow from "../../assets/img/setinha.png";
import logo from "../../assets/img/logo-sena.png";
import { looterObjectGames } from "../../helpers/lotterGamesElements";

interface SidebarInstance {
  handleOpenSelect: () => void;
  selectEvent: boolean;
  handleChangeSelect: (text: string) => void;
  textSelect: string;
}

const Sidebar = ({
  textSelect,
  handleChangeSelect,
  handleOpenSelect,
  selectEvent,
}: SidebarInstance) => {
  return (
    <div className="lotter-sidebar">
      <img
        src={looterObjectGames[textSelect].imgMobile}
        alt={looterObjectGames[textSelect].imgMobile}
        className="img-mobile"
      />
      <img
        src={looterObjectGames[textSelect].imgWeb}
        alt={looterObjectGames[textSelect].imgWeb}
        height={"100%"}
        className="img-web"
      />
      <div className="looter-sidebar-grid">
        <div className="lotter-games-select">
          <div className="select">
            <p className="text-game">{looterObjectGames[textSelect].titulo}</p>
            <button onClick={handleOpenSelect}>
              <img src={arrow} alt={arrow} />
            </button>
          </div>

          {selectEvent && (
            <div className="grid-text-select">
              <p onClick={() => handleChangeSelect("mega_sena")}>MEGA-SENA</p>
              <p onClick={() => handleChangeSelect("quina")}>QUINA</p>
              <p onClick={() => handleChangeSelect("lotofacil")}>LOTOFACIL</p>
              <p onClick={() => handleChangeSelect("lotomania")}>LOTOMANIA</p>
              <p onClick={() => handleChangeSelect("timemania")}>TIMEMANIA</p>
              <p onClick={() => handleChangeSelect("dia_sorte")}>
                DIA DE SORTE
              </p>
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
