import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Globalstyle } from './style.js';
import App from './App';
import './static/iconfont/iconfont.css'

ReactDOM.render(
  <Fragment>
    <Globalstyle />
    <App />
  </Fragment>, document.getElementById('root'));
