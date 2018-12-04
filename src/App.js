import React, { Component } from 'react';

import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './views/home'
import Detail from './views/detail/loadable'
import Login from './views/login'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' component={Login}></Route>
            </div>
          </BrowserRouter>
        </div>  
      </Provider>
    );
  }
}

export default App;
