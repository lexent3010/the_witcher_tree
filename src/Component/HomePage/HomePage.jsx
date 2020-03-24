import React from 'react';
import style from './HomePage.module.css'


const HomePage = (props) => {
    return (
        <div className={style.background}>
            <div className={style.homePage}>
                <main className={style.homePageMain}>
                    <div className={style.logoBlock}>
                        <img src={require('../../images/logo.png')} alt="logo"/>
                    </div>
                    <div className={style.fractionsBlock}>
                        {props.currentPerson.map(person =>
                            <div key={person.id} className={style.fraction} onClick={() => {
                                props.setCurrentPerson(person);
                            }}>
                                <div className={style.fractionImg}><img src={require('../../images/' + person.image)}
                                                                        alt={person.name}/></div>
                                <div className={style.fractionName}>{person.name}</div>
                            </div>)}
                    </div>
                </main>
            </div>
        </div>
    )
};

export default HomePage;