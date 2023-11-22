import './App.css';
import { Link } from "react-router-dom";

function Pagr() {
  return (
      <>
          <header>
              <h1>Skelbimų tinklalapis</h1>
              <nav>
                  <p>Pagrindinis</p>
                  <Link to="prisijungti" relative="path">Prisijungti</Link>
                  <Link to="/skelbimas" relative="path">Įkelti skelbimą</Link>
              </nav>
          </header>
          <section id="articles" className="sections">
              <div className="line">
                  <article>Skelb. 1</article>
                  <article>Skelb. 2</article>
                  <article>Skelb. 3</article>
              </div>
              <div className="line">
                  <article>Skelb. 1</article>
                  <article>Skelb. 2</article>
                  <article>Skelb. 3</article>
              </div>
          </section>
      </>
  );
}

export default Pagr;
