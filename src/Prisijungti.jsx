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
                    <Link to="/skelbimas" relative="path">Įkelti skelbimą</Link>
                    <Link to="/sasajaadm" relative="path">Administ. Sąsaja</Link>
                </nav>
            </header>
            <div class="l-window">
                <h2>Vartotojo prisijungimo langas</h2>
                <form>
                    <div>Prisijunimo vardas: <input type="text" required></input></div>
                    <div>Jūsų slaptažodis: <input type="password" required></input></div>
                    <input type="submit" value="Toliau"></input>
                </form>
            </div>
            <div class="l-window">
                <h2>Neturite paskyros?</h2>
                <Link className='register' to="/registruoti" relative="path">Registruotis</Link>
            </div>
            <footer className='adminliwindow'>
                <Link to="/prisijungtiadm" relative="path">Administratoriaus prisijungimas</Link>
            </footer>
      </>
  );
}

export default Prisijungti;
