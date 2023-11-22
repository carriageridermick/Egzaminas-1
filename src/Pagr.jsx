import './App.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

function Pagr() {
    const [skelbimusarasas, skelbimaiK] = useState([
        'Dviratis',
        'Dziovintuvas',
        'Dirva',
    ]);
  return (
      <>
          <header>
              <h1>Skelbimų tinklalapis</h1>
              <nav>
                  <p>Pagrindinis</p>
                  <Link to="prisijungti" relative="path">Prisijungti</Link>
                  <Link to="/skelbimas" relative="path">Įkelti skelbimą</Link>
                  <Link to="/sasajaadm" relative="path">Administ. Sąsaja</Link>
              </nav>
          </header>
          {skelbimusarasas.map((skelbimai, index) => (
                    <article className="articles" key={index}>
                    <p>Skelb. {index + 1}</p>
                    <p>{skelbimai}</p><br></br>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos sint repellat veniam explicabo, commodi amet quo omnis similique sunt aliquam perferendis iste provident est fuga soluta unde! Modi inventore rerum eligendi beatae esse, sit corporis fugit illo libero ratione commodi nemo tenetur quisquam quam enim laborum magnam a animi minima.</p>
                    </article>
        ))}
      </>
  );
}

export default Pagr;
