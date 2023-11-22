import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
      <>
          <header>
              <h1>Skelbimų tinklalapis</h1>
              <nav>
                  <p>Pagrindinis</p>
                  <Link to="prisijungti" relative="path">Prisijungti</Link>
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

export default App;
