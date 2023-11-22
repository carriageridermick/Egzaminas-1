import './App.css';
import { Link } from "react-router-dom";
import useState from "react";

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

function checkvalidity(){
    if (regname != "" && regpass != "" && regmail != "") {
        console.log('Unallowed')
    }
}

function Registruoti() {
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
            <div class="l-window l-reg">
                <h2>Paskyros kūrimas</h2>
                <form>
                    <div>Jūsų naujos paskyros prisijungimo vardas: <input value={regname} nChange={handlename} type="text" required></input></div>
                    <div>Jūsų naujos paskyros slaptažodis: <input value={regpass} onChange={handlepass} type="password" required></input></div>
                    <div>Jūsų el. paštas: <input value={regmail} onChange={handlemail} type="email" required></input></div>
                    <button type="button" value="Toliau" onClick={checkvalidity()}></button>
                    <a href="#" className="add" onClick = {this.addNeed.bind(this)}>add</a>
                </form>
            </div>
            <footer className='adminliwindow'>
                <Link to="/prisijungti" relative="path">Grįžti</Link>
            </footer>
      </>
  );
}
const P = <p ref={notice} className='red'>Prašome taisyklingai užpildyti langus</p>
function checkvalidity() {
    if (regname.value != "") {
      notice.inner
    }
  }
export default Registruoti;
