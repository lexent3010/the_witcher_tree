import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/Store';
import {setHomePage, setState} from "./redux/AppReducer";
import {Provider} from "react-redux";

let renderTree = (state) => {
    ReactDOM.render(
            <Provider store={store}>
                <App currentPage={state.app.currentPage}/>
            </Provider>
       , document.getElementById('root'));
};

store.dispatch(setState());
store.dispatch(setHomePage());
renderTree(store.getState());

store.subscribe(() => {
        let state = store.getState();
        renderTree(state)
    }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
