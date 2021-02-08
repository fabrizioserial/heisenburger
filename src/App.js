import logo from './logo.svg';
import './App.css';
import { NavBar } from './component/navbar/NavBar';
import { ItemListContainer } from './component/home/ItemListContainer/ItemListContainer';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import { ApiComponent } from './component/apiComponent/ApiComponent';
import { NavCategory } from './component/navbar/NavCategory';
import { ItemDetailContainer } from './component/home/ItemDetailContainer/ItemDetailContainer';
import { CategoryContainer } from './component/categories/CategoryContainer';
import { Cart } from './component/cart/Cart';
import { ContextCart } from './ContextCart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ContextCart>
         <NavBar/>

        <Switch>
          <Route exact path="/">   
              <ItemListContainer text="Bienvenido! 👋"/>
          </Route>
          <Route path="/api">
              <ApiComponent/>
          </Route>
          <Route path="/categories">
              <CategoryContainer/>
          </Route>
          <Route path="/category/:categoryId">
              <ItemListContainer/>
          </Route>
          <Route path="/item/:itemId">
              <ItemDetailContainer/>
          </Route>
          <Route path="/cart">
              <Cart/>
          </Route>
         
        </Switch>
      </ContextCart>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
