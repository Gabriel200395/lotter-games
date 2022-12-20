import sidebarWeb from "./assets/img/Sidebar.png";
import sidebarMobile from "./assets/img/Header_Background.png";


function App() {
  return (
    <div className="lotter-page-container">
      <div className="lotter-sidebar">
        <img src={sidebarMobile} alt={sidebarMobile} className="img-mobile" />
        <img src={sidebarWeb} alt={sidebarWeb} height={"100%"}  className="img-web" />
      </div>
      <div className="lotter-container-numbers-games"></div>
    </div>
  );
}

export default App;

//[] Desenvolver Layout
//[] Sidebar dinamico cores
//[] Responsivo
//[] Teste unitarios
//[] Refatora Codigo
