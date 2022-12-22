import { useState } from "react";
import { looterObjectGames } from "./helpers/lotterGamesElements";
import Select from "./components/Select";
import LotterText from "./components/LotterText";
import LotterCompetition from "./components/LotterCompetition";

function App() {
  const [textSelect, setTextSelect] = useState("mega_sena");
  const [selectEvent, setSelectEvent] = useState(false);

  const handleOpenSelect = () => setSelectEvent((open) => !open);
  function handleChangeSelect(text: string) {
    setSelectEvent(false);
    setTextSelect(text);
  }

  return (
    <div className="lotter-page-container">
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
          <Select
            handleChangeSelect={handleChangeSelect}
            handleOpenSelect={handleOpenSelect}
            textSelect={textSelect}
            selectEvent={selectEvent}
          />
          <LotterText textSelect={textSelect} />
          <LotterCompetition />
        </div>
      </div>
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
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </p>
      </div>
    </div>
  );
}

export default App;

//[x] Desenvolver Layout
//[x] Sidebar dinamico cores
//[X] Responsivo
//[] Teste unitarios
//[] Refatora Codigo
