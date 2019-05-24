import React from 'react';
import Header from './components/Header';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarPrdoucto from './components/EditarProducto';


function App() {
  return (
    <Provider store={store}>
      <Router>
    <React.Fragment>
      <Header />

          <div className="container">
          <Switch>
            <Route exact path="/" component={Productos}/>
            <Route exact path="/productos/nuevo" component={NuevoProducto}/>
            <Route exact path="/productos/editar/:id" component={EditarPrdoucto}/>
          </Switch>
          </div>
    </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
