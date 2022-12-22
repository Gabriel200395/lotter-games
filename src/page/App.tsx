import Sidebar from "../containers/Sidebar";
import usePageFunctions from "./usePageFunctions";
import LotterGamesNumbers from "../containers/LotterGamesNumbers";

function App() {
  const { handleChangeSelect, handleOpenSelect, selectEvent, textSelect } =
    usePageFunctions();

  return (
    <div className="lotter-page-container">
      <Sidebar
        handleChangeSelect={handleChangeSelect}
        selectEvent={selectEvent}
        textSelect={textSelect}
        handleOpenSelect={handleOpenSelect}
      />
      <LotterGamesNumbers textSelect={textSelect} />
    </div>
  );
}

export default App;

//[x] Desenvolver Layout
//[x] Sidebar dinamico cores
//[X] Responsivo
//[] Teste unitarios
//[x] Refatora Codigo
