import React from 'react';
import '../App.css';


const HomePage = (props) => {
    return (
        <div className='background'>
            <main className='homePageMain'>
                <div className='homePage'>
                    <div className='logoBlock'>
                        <img src={require('../images/logo.png')} alt="logo"/>
                    </div>
                    <div className='fractionsBlock'>
                        {props.currentPerson.map(person =>
                            <div key={person.id} className='fraction' onClick={() => {
                                props.setCurrentPerson(person);
                            }}>
                                <div className='fractionImg'><img src={require('../images/' + person.image)}
                                                                  alt={person.name}/></div>
                                <div className='fractionName'>{person.name}</div>
                            </div>)}
                    </div>
                </div>
            </main>
        </div>
    )
};

export default HomePage;