import React from 'react';
import s from './PersonPage.module.css'


const PersonPage = (props) => {
    return (
        <div className={s.background}>
            <div className={s.personPage}>
                <main className={s.personPageMain}>
                    <div className={s.backBlock} onClick={props.back}>back</div>
                    <div className={s.personBlock}>
                        <div className={s.personAvatar_selectButton}>
                            <div className={s.previousButton}>{(() => {
                                return props.checkBox === 'ok' || props.checkBox === 'notNext' ?
                                    <div className={s.button} onClick={() => {
                                        props.changePerson('PREVIOUS')
                                    }}>
                                        <span>&lt;</span>
                                    </div> : null
                            })()}</div>
                            {props.currentPerson.map(person =>
                                <div className={s.personAvatar_subjectsCount} key={person.id}>
                                    <img className={s.personAvatar} src={require('../../images/' + person.image)}
                                         alt={person.name}/>
                                    {(() => {
                                        return props.allSubjectsCount !== 0 && props.person[0].parent !== undefined ?
                                                <div className={s.personSubjectsCount}>
                                                    <img className={s.subjectBorder}
                                                         src={require('../../images/site/subjectBorder.png')} alt=''/>
                                                    <div className={s.subjectsCount}>{props.allSubjectsCount}</div>
                                                </div>
                                            : null
                                    })()}
                                </div>)}
                            <div className={s.nextButton}>{(() => {
                                return props.checkBox === 'ok' || props.checkBox === 'notPrevious' ?
                                    <div className={s.button} onClick={() => {
                                        props.changePerson('NEXT')
                                    }}>
                                        <span>&gt;</span>
                                    </div> : null
                            })()}</div>
                        </div>
                        <div className={s.personInfo}>
                            <div className={s.personName}>{props.currentPerson[0].name}</div>
                            <div className={s.personPost}>{props.currentPerson[0].post}</div>
                        </div>
                    </div>
                    <div className={s.logoBlock}>
                        <div className={s.logo} onClick={props.setHomePage}>
                            <img src={require('../../images/logo.png')} alt='logo'/>
                        </div>
                    </div>
                    <div className={s.elementBlock}>
                        <img src={require('../../images/site/element1440-768.png')} alt="element"/>
                    </div>
                    <div className={s.subjectsBlock}>
                        <div className={s.subjects}>
                            {props.subjects.map(person =>
                                <div className={s.subjectElement} key={person.id} onClick={() => {
                                    props.setCurrentPerson(person)
                                }}>
                                    <div className={s.subjectAvatar}>
                                        <img src={require('../../images/' + person.image)} alt={person.name}
                                             width='100'/>
                                    </div>
                                    <div className={s.subjectName}>{person.name}</div>
                                    <div className={s.subjectPost}>{person.post}</div>
                                </div>)}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
};

export default PersonPage;