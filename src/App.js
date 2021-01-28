import logo from './logo.svg';
import './App.css';
import { NavBar } from './component/navbar/NavBar';
import { ItemListContainer } from './component/home/ItemListContainer/ItemListContainer';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import { ApiComponent } from './component/apiComponent/ApiComponent';
import { NavCategory } from './component/navbar/NavCategory';
import { ItemDetail } from './component/home/ItemDetailContainer/itemDetail/ItemDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <NavCategory/>
        <Switch>
          <Route exact path="/">   
              <ItemListContainer text="Bienvenido! 👋"/>
          </Route>
          <Route path="/api">
              <ApiComponent/>
          </Route>
          <Route path="/category/:categoryId">
              <ItemListContainer/>
          </Route>
          <Route path="/item/:itemId">
              <ItemDetail/>
          </Route>
         
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
