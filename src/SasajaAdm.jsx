import './App.css';
import { Link } from "react-router-dom";
import Pagr from "./Pagr"

function SasajaAdm() {
  return (
    <>
    <header>
        <h1>Skelbimų tinklalapis</h1>
        <nav>
            <Link to="/" relative="path">Pagrindinis</Link>
            <Link to="/prisijungti" relative="path">Prisijungti</Link>
            <Link to="/skelbimas" relative="path">Įkelti skelbimą</Link>
            <p>Administ. Sąsaja</p>
        </nav>
    </header>
    <section className="ikelimas">
        <h1>Administravimas</h1>
        <br></br>
        <section id="articles" className="sections">
            <div className="line">
                <article>
                    <p>Skelb. 1</p>
                    <div className="delete">Trinti</div>
                </article>
                <article>
                    <p>Skelb. 2</p>
                    <div className="delete">Trinti</div>
                </article>
                <article>
                    <p>Skelb. 3</p>
                    <div className="delete">Trinti</div>
                </article>
            </div>
            <div className="line">
            <article>
                    <p>Skelb. 1</p>
                    <div className="delete">Trinti</div>
                </article>
                <article>
                    <p>Skelb. 2</p>
                    <div className="delete">Trinti</div>
                </article>
                <article>
                    <p>Skelb. 3</p>
                    <div className="delete">Trinti</div>
                </article>
            </div>
        </section>
    </section>
</>
  );
}

export default SasajaAdm;
