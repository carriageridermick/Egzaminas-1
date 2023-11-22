import './App.css';

function App() {
  return (
      <>
          <header>
              <h1>Skelbimų tinklalapis</h1>
              <nav>
                  <p>Pagr.</p>
                  <a href="prisijungti.html">Prisijungti</a>
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
