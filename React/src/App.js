import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavBar from './paginas/MainNavBar/MainNavBar';
import LoginFuncionarioBar from './paginas/Login/Login';
import Blog from './paginas/Blog/Blog';
import CrudProdutos from './paginas/Produto/CrudProduto';
import CrudVenda from './paginas/Venda/CrudVenda';
import CrudFuncionario from './paginas/Funcionario/CrudFuncionario';
import CrudCliente from './paginas/Cliente/CrudCliente';
import ListAlltables from './paginas/TableAllLists.js/ListAllTables';
import UpdateProdutos from './paginas/TableAllLists.js/Produtos/UpdateProduto';
import UpdateCliente from './paginas/TableAllLists.js/Cliente/UpdateCliente';
import UpdateFuncionarios from './paginas/TableAllLists.js/Funcionario/UpdateFuncionario';
import jwtDecode from 'jwt-decode';
import './App.css';

function App(props) {
  const [user, setUser] = useState({ nome: '' });

  useEffect(async () => {
    buildJwt()
  }, [])

  const buildJwt = () => {
    try {
      const jwt = localStorage.getItem('token')
      const user = jwtDecode(jwt)
      setUser({nome:user.funcionario})
    } catch (err) { }
  }
  return (
    <div className="App">
      {/* <MainNavBar user={login}></MainNavBar> */}
      <Router>
        <MainNavBar func={user}></MainNavBar>
        <Switch>
          <Route exact path='/' component={LoginFuncionarioBar} />
          <Route exact path='/Blog' component={Blog} />
          <Route exact path='/CrudProdutos' component={CrudProdutos} />
          <Route exact path='/CrudVenda' component={CrudVenda} />
          <Route exact path='/CrudFuncionario' component={CrudFuncionario} />
          <Route exact path='/CrudCliente' component={CrudCliente} />
          <Route exact path='/ListAlltables' component={ListAlltables} />
          <Route exact path='/UpdateProdutos/:id' render={(props) => <UpdateProdutos {...props} />} />
          <Route exact path='/UpdateCliente/:id' render={(props) => <UpdateCliente {...props} />} />
          <Route exact path='/UpdateFuncionarios/:id' render={(props) => <UpdateFuncionarios {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
