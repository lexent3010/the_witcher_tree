import React from 'react';
import '../App.css';


const HomePage = (props) => {
    return (
        <div>
            <div>
                    <div className='logoBlock'>
                        <img className='fractionImg' src={require('../images/logo.png')} alt="logo"/>
                    </div>
                <div className='fractionsLogoBlock'>
                    {props.currentPerson.map(person =>
                        <div key={person.id} className='fraction' onClick={() => {
                            props.setCurrentPerson(person);
                        }}>
                        <div><img className='fractionImg' src={require('../images/' + person.image)} alt={person.name}/></div>
                        <div>{person.name}</div>
                        <div>{person.post}</div>
                    </div>)}
                </div>
            </div>
        </div>
    )
};

export default HomePage;