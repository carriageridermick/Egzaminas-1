import './App.css';
import { Link } from "react-router-dom";

function Sasaja() {
  return (
    <>
    <header>
        <h1>Skelbimų tinklalapis</h1>
        <nav>
            <Link to="/" relative="path">Pagrindinis</Link>
            <Link to="prisijungti" relative="path">Prisijungti</Link>
            <p>Įkelti skelbimą</p>
        </nav>
    </header>
    <section className="ikelimas">
        <h1>Skelbimo sąsaja</h1>
        <p>Jūs galite sukelti skelbimus čia. Esate prisijungę kaip "---"</p>
        <form>
            <label>Skelbimo pavadinimas: </label><input></input>
            <label>Kontaktai (tel. nr, el. paštas, t.t.): </label><input></input>
        </form>
    </section>
</>
  );
}

export default Sasaja;
