import * as React from 'react';
import {render} from 'react-dom';
import Routes from './Routes';
import {createBrowserHistory} from 'history';
import {Router} from 'react-router-dom';

import './main.scss';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const history = createBrowserHistory();

render(
    <Router history={history}>
      <Routes/>
    </Router>, document.getElementById('root'));
