import './App.css';
import { Link } from "react-router-dom";

function Sasaja() {
  return (
    <>
    <header>
        <h1>Skelbimų tinklalapis</h1>
        <nav>
            <Link to="/" relative="path">Pagrindinis</Link>
            <Link to="/prisijungti" relative="path">Prisijungti</Link>
            <p>Įkelti skelbimą</p>
            <Link to="/sasajaadm" relative="path">Administ. Sąsaja</Link>
        </nav>
    </header>
    <section className="ikelimas">
        <h1>Skelbimo sąsaja</h1>
        <p>Jūs galite sukelti skelbimus čia. Esate prisijungę kaip "---"</p>
        <br></br>
        <form>
            <label>Skelbimo pavadinimas: </label><input type="text" required></input>
            <label>Kontaktai (tel. nr, el. paštas, t.t.): </label><input type="text" required></input>
            <label>Kaina: </label><input type="number" required></input>
            <label>Ikelti nuotraukas: </label><input type="file"></input>
            <input class="submit" type="submit"></input>
        </form>
    </section>
</>
  );
}

export default Sasaja;
