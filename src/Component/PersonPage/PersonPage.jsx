import React from 'react';
import style from './PersonPage.module.css'


const PersonPage = (props) => {
    return (
        <div className={style.background}>
            <div className={style.personPage}>
                <main className={style.personPageMain}>
                    <div className={style.backBlock} onClick={props.back}>back</div>
                    <div className={style.personBlock}>
                        <div className={style.personAvatar_selectButton}>
                            <div className={style.previousButton}>{
                                props.checkBox === 'ok' || props.checkBox === 'notNext' ?
                                    <div className={style.button} onClick={() => {
                                        props.changePerson('PREVIOUS')
                                    }}>
                                        <img src={require('../../images/site/1.svg')} alt="&lt;"/>
                                    </div> : null
                            }</div>
                            {props.currentPerson.map(person =>
                                <div className={style.personAvatar_subjectsCount} key={person.id}>
                                    <img className={style.personAvatar} src={require('../../images/' + person.image)}
                                         alt={person.name}/>
                                    {
                                        person.subjectsCount !== 0 && props.person[0].parent !== undefined ?
                                            <div className={style.personSubjectsCount}>
                                                <img className={style.subjectBorder}
                                                     src={require('../../images/site/subjectBorder.png')} alt=''/>
                                                <div className={style.subjectsCount}>{person.subjectsCount}</div>
                                            </div>
                                            : null
                                    }
                                </div>)}
                            <div className={style.nextButton}>{
                                props.checkBox === 'ok' || props.checkBox === 'notPrevious' ?
                                    <div className={style.button} onClick={() => {
                                        props.changePerson('NEXT')
                                    }}>
                                        <img src={require('../../images/site/2.svg')} alt="&gt;"/>
                                    </div> : null
                            }</div>
                        </div>
                        <div className={style.personInfo}>
                            <div className={style.personName}>{props.currentPerson[0].name}</div>
                            <div className={style.personPost}>{props.currentPerson[0].post}</div>
                        </div>
                    </div>
                    <div className={style.logoBlock}>
                        <img onClick={props.setHomePage} src={require('../../images/logo.png')} alt='logo'/>
                    </div>
                    <div className={style.elementBlock}>
                        {props.currentPerson[0].subjectsCount !== 0 ? <img alt="element"/> : null}
                    </div>
                    <div className={style.subjectsBlock}>
                        <div className={style.subjects}>
                            {props.subjects.map(person =>
                                <div className={style.subjectElement} key={person.id} onClick={() => {
                                    props.setCurrentPerson(person)
                                }}>
                                    <div className={style.subjectAvatar_subjectCount}>
                                        <img className={style.subjectAvatar}
                                             src={require('../../images/' + person.image)}
                                             alt={person.name}
                                             width='100'/>
                                        {
                                            person.subjectsCount !== 0 ?
                                                <div className={style.personSubjectsCountOfSubject}>
                                                    <img className={style.subjectBorderOfSubject}
                                                         src={require('../../images/site/subjectBorder.png')} alt=''/>
                                                    <div
                                                        className={style.subjectsCountOfSubject}>{person.subjectsCount}</div>
                                                </div>
                                                : null
                                        }
                                    </div>
                                    <div className={style.subjectName}>{person.name}</div>
                                    <div className={style.subjectPost}>{person.post}</div>
                                </div>)}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
};

export default PersonPage;