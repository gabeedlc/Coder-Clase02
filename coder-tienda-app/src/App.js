import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { ItemListContainer } from './Containers/ItemListContainer';

function App() {
  return (
    <>
    <div className="App">
      <NavbarComponent />
      <header className="App-header">
        <ItemListContainer text={"Bienvenidos a la Coder Tienda"} />
      </header>
      <footer>
        <span className="d-block p-2 bg-dark text-white">Desafio entregable #4</span>
      </footer>
    </div>
    </>
  );
}

export default App;
