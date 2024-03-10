import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { ListaPelis } from "./components/ListaPelis";
import { useState } from "react";

function App() {
    const [listState, setListState] = useState([]);
  return (
    <div className="layout">
        {/* Cabecera */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>MisPelis</h1>
        </header>

        {/* Barra de navegacion */}
        <nav className="nav">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Peliculas</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>

        {/* Contenido principal */}
        <section id="content" className="content">
            {/*aqui la Lista de  Pelis  */}
            <ListaPelis listState = {listState} setListState = {setListState}/>
        </section>

        {/* Barra Lateral */}
        <aside className="lateral">
           <Buscador listState = {listState} setListState = {setListState}/>
           <Crear setListState={setListState}/>

        </aside>
        {/* Pie de Pagina */}
        <footer className="footer">
            &copy; Master en JS E17 y React - <a rel="noreferrer" href="https://github.com/jose020712/ProyectosPersonales"  target="_blank" >Repository</a>
        </footer>

    </div>
   
  );
}

export default App;
