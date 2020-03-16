import React from 'react';


const PersonPage = (props) => {
    return (
        <div>
            <div>{props.checkBox}</div>
            <div>{props.subjectsCount}</div>
            <div onClick={props.back}>
                back
            </div>
            {(() => {
                if (props.checkBox === 'ok' || 'notNext') {
                    return <div onClick={() => {
                        props.changePerson('PREVIOUS')
                    }}>previous</div>
                }
            })()}
            <div onClick={() => {
                props.changePerson('NEXT')
            }}>next
            </div>
            <div onClick={props.setHomePage}><img src={require('../images/logo.png')} alt='logo' width='100'/></div>
            {props.currentPerson.map(person => <div>
                <img src={require('../images/' + person.image)} alt={person.name}/>
                {person.name}
                {person.post}
            </div>)}
            <div>
                {props.subjects.map(person =>
                    <div key={person.id} onClick={() => {
                        props.setCurrentPerson(person)
                    }}>
                        <div>{person.name}</div>
                        <div>
                            <img src={require('../images/' + person.image)} alt={person.name} width='100'/>
                        </div>
                        <div>{person.post}</div>
                    </div>)}
            </div>
        </div>
    )
};

export default PersonPage;