import megaSena from "./assets/img/mega-sena.png";
import lotofacil from "./assets/img/lotofacil.png";
import lotomania from "./assets/img/lotomania.png";
import dia_sorte from "./assets/img/dia_sorte.png";
import quina from "./assets/img/quina.png";
import timemania from "./assets/img/timemania.png";

import sidebarMobile from "./assets/img/Header_Background.png";
import setinha from "./assets/img/setinha.png";
import logo from "./assets/img/logo-sena.png";
import { useState } from "react";

interface looterGamesInstance {
  [key: string]: {
    img: string;
    titulo: string;
    numbers: string[];
  };
}

const looterObjectGames: looterGamesInstance = {
  mega_sena: {
    img: megaSena,
    titulo: "MEGA-SENA",
    numbers: ["23", "44", "56", "34", "58", "60", "70"],
  },
  lotofacil: {
    img: lotofacil,
    titulo: "LOTOFÁCIL",
    numbers: [
      "50",
      "21",
      "32",
      "19",
      "13",
      "11",
      "12",
      "44",
      "34",
      "78",
      "80",
      "81",
      "90",
      "96",
      "92",
    ],
  },
  timemania: {
    img: timemania,
    titulo: "TIMEMANÍA",
    numbers: ["05", "20", "12", "29", "30", "55", "67"],
  },
  lotomania: {
    img: lotomania,
    titulo: "LOTOMANIA",
    numbers: [
      "10",
      "20",
      "30",
      "40",
      "50",
      "60",
      "50",
      "21",
      "32",
      "19",
      "13",
      "11",
      "12",
      "44",
      "34",
      "78",
      "80",
      "81",
      "90",
      "96",
    ],
  },
  dia_sorte: {
    img: dia_sorte,
    titulo: "DIA DE SORTE",
    numbers: ["10", "20", "30", "40", "50"],
  },
  quina: {
    img: quina,
    titulo: "QUINA",
    numbers: ["10", "20", "30", "40", "50", "80", "90"],
  },
};

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
        <img src={sidebarMobile} alt={sidebarMobile} className="img-mobile" />
        <img
          src={looterObjectGames[textSelect].img}
          alt={looterObjectGames[textSelect].img}
          height={"100%"}
          className="img-web"
        />

        <div className="lotter-games-select">
          <div className="select">
            <button onClick={handleOpenSelect}>
              <img src={setinha} alt={setinha} />
            </button>
            <p className="text-game">{looterObjectGames[textSelect].titulo}</p>
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
      </div>
      <div className="lotter-container-numbers-games">
        <div className="lotter-result">
          <div className="grid-numbers-games">
            {looterObjectGames[textSelect].numbers.map((number) => (
              <div className="grid-number">{number}</div>
            ))}
          </div>
        </div>

        <p className="text-resul">Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
      </div>

      <div className="lotter-text-img">
        <img src={logo} alt={logo} height={30} />
        <p>{looterObjectGames[textSelect].titulo}</p>
      </div>

      <div className="lotter-competition-text">
        <div>
          <p className="lotter-competition">CONCURSO</p>
          <p className="lotter-competition-data">4531 – 07/04/2020</p>
        </div>
      </div>
    </div>
  );
}

export default App;

//[x] Desenvolver Layout
//[x] Sidebar dinamico cores
//[] Responsivo
//[] Teste unitarios
//[] Refatora Codigo
