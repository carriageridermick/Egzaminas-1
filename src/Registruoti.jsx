import './App.css';
import { Link } from "react-router-dom";
import { useState } from "react";

function Registruoti() {
    const [regname, regnameSet] = useState('');
    const [regpass, regpassSet] = useState('');
    const [regmail, regmailSet] = useState('');

    const handlename = event => {
        regnameSet(event.target.value);
    }
    const handlepass = event => {
        regpassSet(event.target.value);
    }
    const handlemail = event => {
        regmailSet(event.target.value);
    }

    const checkvalidity = event => {
        if (regname != "" && regpass != "" && regmail != "") {
            alert("Done.")
        } else {
            console.log('Unallowed')
        }
    }
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
                <div className="l-window l-reg">
                    <h2>Paskyros kūrimas</h2>
                    <form>
                        <div className='a'>Jūsų naujos paskyros prisijungimo vardas: <input value={regname} onChange={handlename} type="text" required></input></div>
                        <div className='b'>Jūsų naujos paskyros slaptažodis: <input value={regpass} onChange={handlepass} type="password" required></input></div>
                        <div className='c'>Jūsų el. paštas: <input value={regmail} onChange={handlemail} type="email" required></input></div>
                        <button className='d' type="button" value="Toliau" onClick={checkvalidity}>Toliau</button>
                    </form>
                </div>
                <footer className='adminliwindow'>
                    <Link to="/prisijungti" relative="path">Grįžti</Link>
                </footer>
        </>
    );
}

export default Registruoti;
