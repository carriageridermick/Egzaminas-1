import './App.css';
import { Link } from "react-router-dom";

function Registruoti() {
  return (
      <>
            <header>
                <h1>Skelbimų tinklalapis</h1>
                <nav>
                    <Link to="/" relative="path">Pagrindinis</Link>
                    <p>Prisijungti</p>
                    <Link to="/skelbimas" relative="path">Įkelti skelbimą</Link>
                </nav>
            </header>
            <div class="l-window l-reg">
                <h2>Paskyros kūrimas</h2>
                <form>
                    <div>Jūsų naujos paskyros prisijungimo vardas: <input type="text"></input></div>
                    <div>Jūsų naujos paskyros slaptažodis: <input type="password"></input></div>
                    <input type="submit" value="Toliau"></input>
                </form>
            </div>
            <footer className='adminliwindow'>
                <Link to="/prisijungti" relative="path">Grįžti</Link>
            </footer>
      </>
  );
}

export default Registruoti;
