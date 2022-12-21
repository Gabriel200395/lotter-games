import sidebarWeb from "./assets/img/Sidebar.png";
import sidebarMobile from "./assets/img/Header_Background.png";
import setinha from "./assets/img/setinha.png";
import logo from "./assets/img/logo-sena.png";
import { useState } from "react";

function App() {
  const [textSelect, setTextSelect] = useState("MEGA-SENA");
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
          src={sidebarWeb}
          alt={sidebarWeb}
          height={"100%"}
          className="img-web"
        />

        <div className="lotter-games-select">
          <div className="select">
            <button onClick={handleOpenSelect}>
              <img src={setinha} alt={setinha} />
            </button>
            <p className="text-game">{textSelect}</p>
          </div>

          {selectEvent && (
            <div className="grid-text-select">
              <p onClick={() => handleChangeSelect("MEGA-SENA")}>MEGA-SENA</p>
              <p onClick={() => handleChangeSelect("QUINA")}>QUINA</p>
              <p onClick={() => handleChangeSelect("LOTOFACIL")}>LOTOFACIL</p>
              <p onClick={() => handleChangeSelect("LOTOMANIA")}>LOTOMANIA</p>
              <p onClick={() => handleChangeSelect("TIMEMANIA")}>TIMEMANIA</p>
              <p onClick={() => handleChangeSelect("DIA DE SORTE")}>
                DIA DE SORTE
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="lotter-container-numbers-games">
        <div className="grid-numbers-games">
          <div className="grid-number">10</div>
          <div className="grid-number">20</div>
          <div className="grid-number">30</div>
          <div className="grid-number">40</div>
          <div className="grid-number">50</div>
          <div className="grid-number">60</div>
          <div className="grid-number">70</div>
          <div className="grid-number">80</div>
          <div className="grid-number">90</div>
          <div className="grid-number">100</div>
        </div>
      </div>

      <div className="lotter-text-img">
        <img src={logo} alt={logo} height={30} />
        <p>{textSelect}</p>
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

//[] Desenvolver Layout
//[] Sidebar dinamico cores
//[] Responsivo
//[] Teste unitarios
//[] Refatora Codigo
