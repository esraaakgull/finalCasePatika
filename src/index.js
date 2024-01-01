import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {DataContextProvider} from "./contexts/dataContext";
import {AppContextProvider} from "./contexts/appContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AppContextProvider>
            <DataContextProvider>
                <App/>
            </DataContextProvider>
        </AppContextProvider>
    </BrowserRouter>
);
