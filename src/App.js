import logo from './logo.svg';
import './App.css';
import { NavBar } from './component/navbar/NavBar';
import { ItemListContainer } from './component/home/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer text="Bienvenido! 👋"/>
    </div>
  );
}

export default App;
