import './App.css';
import NavbarComponent from './components/Navbar';
import { ItemListContainer } from './Containers/ItemListContainer';

function App() {
  return (
    <>

    <div className="App">
      <NavbarComponent />
      <div className="App-header">
      <ItemListContainer text={"Bienvenidos a la Coder Tienda"} />
        <p>
          Desafio entregable #3
        </p>
      </div>
    </div>
    </>
  );
}

export default App;
