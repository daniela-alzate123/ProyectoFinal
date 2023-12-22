import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import Router from './router/Router'
import { Provider } from 'react-redux';
import { store } from './store/store';



ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <Router />
    </Provider>

)
