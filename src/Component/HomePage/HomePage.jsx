import React from 'react';
import s from './HomePage.module.css'


const HomePage = (props) => {
    return (
        <div className={s.background}>
            <div className={s.homePage}>
                <main className={s.homePageMain}>
                    <div className={s.logoBlock}>
                        <img src={require('../../images/logo.png')} alt="logo"/>
                    </div>
                    <div className={s.fractionsBlock}>
                        {props.currentPerson.map(person =>
                            <div key={person.id} className={s.fraction} onClick={() => {
                                props.setCurrentPerson(person);
                            }}>
                                <div className={s.fractionImg}><img src={require('../../images/' + person.image)}
                                                                    alt={person.name}/></div>
                                <div className={s.fractionName}>{person.name}</div>
                            </div>)}
                    </div>
                </main>
            </div>
        </div>
    )
};

export default HomePage;