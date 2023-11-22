import './App.css';
import { Link } from "react-router-dom";

function PrisijungtiAdm() {
  return (
      <>
            <header>
                <h1>Skelbimų tinklalapis</h1>
                <nav>
                    <Link to="/" relative="path">Pagrindinis</Link>
                    <p>Prisijungti</p>
                    <Link to="/skelbimas" relative="path">Įkelti skelbimą</Link>
                    <Link to="/sasajaadm" relative="path">Administ. Sąsaja</Link>
                </nav>
            </header>
            <div className="l-window l-adm">
                <h2>Administratoriaus prisijungimo langas</h2>
                <form>
                    <div>Prisijunimo vardas: <input type="text" required></input></div>
                    <div>Jūsų slaptažodis: <input type="password" required></input></div>
                    <input type="submit" value="Toliau"></input>
                </form>
            </div>
            <footer className='adminliwindow'>
                <Link to="/prisijungti" relative="path">Grįžti</Link>
            </footer>
      </>
  );
}

export default PrisijungtiAdm;
