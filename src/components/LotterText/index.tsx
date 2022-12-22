import { looterObjectGames } from "../../helpers/lotterGamesElements";
import logo from "../../assets/img/logo-sena.png"; 
import "./styles.css"

interface LotterTextInstance {
  textSelect: string;
}

const LotterText = ({ textSelect }: LotterTextInstance) => {
  return (
    <div className="lotter-text-img">
      <img src={logo} alt={logo} height={30} />
      <p>{looterObjectGames[textSelect].titulo}</p>
    </div>
  );
};

export default LotterText;
