import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import HomePage from "./Component/HomePage";
import PersonPageContainer from "./Component/PersonPageContainer";

const App = (props) => {


    return (
        <div className='appWrapper'>
            <Route exact path='/' render={() => <HomePage state={props.state}/>}/>
            {props.state.app.person.map(p => <Route exact path={'/' + p.id}
                                                    render={() => <PersonPageContainer person={p}/>}/>)}
        </div>
    )
};

export default App;
