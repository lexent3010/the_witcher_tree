import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import HomePage from "./Component/HomePage";
import Item from "./Component/Item";

const App = (props) => {


    return (
        <div className='appWrapper'>
            <Route exact path='/' render={() => <HomePage state={props.state}/>}/>
            {props.state.app.person.map(p => <Route exact path={'/' + p.id}
                                                    render={() => <Item person={p} state={props.state}/>}/>)}
        </div>
    )
};

export default App;
