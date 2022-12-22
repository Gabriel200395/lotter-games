import { looterObjectGames } from "../../helpers/lotterGamesElements";
import setinha from "../../assets/img/setinha.png";
import "./styles.css";

interface LotterCompetitionInstance {
  handleOpenSelect: () => void;
  selectEvent: boolean;
  handleChangeSelect: (text: string) => void;
  textSelect: string;
}

const LotterCompetition = ({
  handleChangeSelect,
  handleOpenSelect,
  selectEvent,
  textSelect,
}: LotterCompetitionInstance) => {
  return (
    <div className="lotter-games-select">
      <div className="select">
        <p className="text-game">{looterObjectGames[textSelect].titulo}</p>
        <button onClick={handleOpenSelect}>
          <img src={setinha} alt={setinha} />
        </button>
      </div>

      {selectEvent && (
        <div className="grid-text-select">
          <p onClick={() => handleChangeSelect("mega_sena")}>MEGA-SENA</p>
          <p onClick={() => handleChangeSelect("quina")}>QUINA</p>
          <p onClick={() => handleChangeSelect("lotofacil")}>LOTOFACIL</p>
          <p onClick={() => handleChangeSelect("lotomania")}>LOTOMANIA</p>
          <p onClick={() => handleChangeSelect("timemania")}>TIMEMANIA</p>
          <p onClick={() => handleChangeSelect("dia_sorte")}>DIA DE SORTE</p>
        </div>
      )}
    </div>
  );
};

export default LotterCompetition;
