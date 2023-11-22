import './App.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

function SasajaAdm() {
    const [skelbimusarasas, skelbimaiK] = useState([
        'Dviratis',
        'Dziovintuvas',
        'Dirva',
    ]);
    const trinti = (index) => {
        const skelbimaiAtnj = skelbimusarasas.filter((_, i) => i !== index);
        skelbimaiK(skelbimaiAtnj);
    };
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
        <p>Esate prisijungę kaip "---"</p>
        <br></br>
        <section id="articles" className="sections">
                {skelbimusarasas.map((skelbimai, index) => (
                    <article className="articles" key={index}>
                    <p>Skelb. {index + 1}</p>
                    <p>{skelbimai}</p><br></br>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, obcaecati! Facere nesciunt ea aliquam optio tempore, quis ut pariatur explicabo ex voluptatem. Dicta molestias repellat, inventore fuga dolor ipsa exercitationem aut ab fugit? Commodi placeat tenetur nulla rem quos, laudantium doloremque ullam dolore earum consequatur dolorum eos consequuntur debitis eveniet.</p>
                    <button onClick={() => trinti(index)}> Trinti </button>
                    </article>
                ))}
        </section>
    </section>
</>
  );
}

export default SasajaAdm;
