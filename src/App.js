import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NabVar from './components/NabVar/NabVar';
import CartWidget from './components/NabVar/CartWidget';
import ItemListContainer from './components/NabVar/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
    <>
    <NabVar>
      <CartWidget/>
    </NabVar>
    <div>
    <Switch>
          <Route exact path='/detalle/:id'>
            <ItemDetailContainer chau={'destacado'}/>
          </Route>
          <Route exact path='/' >
          
            <ItemListContainer hola={'Vehiculos Seleccionados'}/>
            
          </Route>
          <Route exact path='/categoria/:idCategoria' component={ItemListContainer}/>
          <Route path='/cart'>
            <Cart/>
          </Route>
    </Switch>
    </div>
    </>
    </BrowserRouter>
  )
  }
export default App;
