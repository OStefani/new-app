import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Products from './Product.js'

ReactDOM.render(
    <HashRouter>
        <div>
        <Route path="/" component={App}/>
    {/* add the routes here */}
        <Route path="/1" component={Products}/>
        <Route path="/2" component={Products}/>
        </div>
        
    </HashRouter>, document.getElementById('root'));

