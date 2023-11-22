import './App.css';
import { Link } from "react-router-dom";

function Prisijungti() {
  return (
      <>
            <header>
                <h1>Skelbimų tinklalapis</h1>
                <nav>
                    <Link to="/" relative="path">Pagrindinis</Link>
                    <p>Prisijungti</p>
                </nav>
            </header>
            <div class="l-window">
                <h2>Vartotojo prisijungimo langas</h2>
                <form>
                    <div>Prisijunimo vardas: <input type="text"></input></div>
                    <div>Jūsų slaptažodis: <input type="password"></input></div>
                    <input type="submit" value="Toliau"></input>
                </form>
            </div>
            <div class="l-window">
                <h2>Administratoriaus prisijungimo langas</h2>
                <form>
                    <div>Prisijunimo vardas: <input type="text"></input></div>
                    <div>Jūsų slaptažodis: <input type="password"></input></div>
                    <input type="submit" value="Toliau"></input>
                </form>
            </div>
      </>
  );
}

export default Prisijungti;
