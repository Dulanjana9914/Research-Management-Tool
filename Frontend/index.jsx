import React from "react";
import ReactDOM from 'react-dom';
import App from "./App.jsx";
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import DataProvider from './redux/store.js'

ReactDOM.render(
    <React.StrictMode>
        <DataProvider>
         <App/>
        </DataProvider>
    </React.StrictMode>,
    document.getElementById('app')
  
);


