import logo from './logo.svg';
import './App.css';
import NavBar from "../src/components/NavBar";
import SimpleMenu from './components/SimpleMenu';
import { CartWidget } from './components/CartWidget';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <SimpleMenu/>
      <CartWidget/>
      <ItemListContainer greeting="Hola Coders!"/>
    </div>
  );
}

export default App;
