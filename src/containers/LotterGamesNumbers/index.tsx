import {lotterGamesElements} from "../../helpers"

interface LotterGamesNumbersIntance {
  textSelect: string;
}


const LotterGamesNumbers = ({ textSelect }: LotterGamesNumbersIntance) => {
 
  const {looterObjectGames} = lotterGamesElements

  return (
    <div className="lotter-container-numbers-games">
      <div className="lotter-result">
      <div className="grid-numbers-games">
          {looterObjectGames[textSelect].numbers.map((number, index) => (
            <div className="grid-number" key={index}>
              {number}
            </div>
          ))}
        </div> 
      </div>

      <p className="text-resul">
        Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a
        CAIXA.
      </p>
    </div>
  );
};

export default LotterGamesNumbers;
