import React from 'react';
import '../App.css';
import {NavLink, Route} from "react-router-dom";


const HomePage = (props) => {
    return (
        <div>
            <div>
                <NavLink to=''>
                    <div className='logoBlock'><img className='fractionImg' src={require('../images/logo.png')} alt=""/>
                    </div>
                </NavLink>
                <div className='fractionsLogoBlock'>
                    {props.state.app.person.filter(p => p.parent === undefined)
                        .map(p => <NavLink to={'/' + p.id}>
                            <div className='fraction'>
                                <div><img className='fractionImg' src={require('../images/' + p.image)} alt=""/></div>
                                <div>{p.name}</div>
                                <div>{p.post}</div>
                            </div>
                        </NavLink>)}
                </div>
            </div>
        </div>
    )
};

export default HomePage;