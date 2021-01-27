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
        <Switch>
          <Route exact path="/">
          <NavBar/>
              <NavCategory/>
              <ItemListContainer text="Bienvenido! 👋"/>
          </Route>
          <Route path="/api">
          <NavBar/>
              <NavCategory/>
              <ApiComponent/>
          </Route>
          <Route path="/category/:categoryId">
              <NavBar/>
              <NavCategory/>
              <ItemListContainer/>
          </Route>
          <Route path="/item/:itemId">
          <NavBar/>
              <NavCategory/>
              <ItemDetail/>
          </Route>
         
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
