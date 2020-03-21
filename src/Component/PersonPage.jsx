import React from 'react';


const PersonPage = (props) => {
    return (
        <main>
            {(() => {
                return props.subjectsCount !== 0 && props.person[0].parent !== undefined ?
                    <div>{props.subjectsCount}</div> : null
            })()}
            <div onClick={props.back}>
                back
            </div>

            {(() => {
                return props.checkBox === 'ok' || props.checkBox === 'notNext' ? <div onClick={() => {
                    props.changePerson('PREVIOUS')
                }}>previous</div> : null
            })()}
            {(() => {
                return props.checkBox === 'ok' || props.checkBox === 'notPrevious' ? <div onClick={() => {
                    props.changePerson('NEXT')
                }}>next
                </div> : null
            })()}

            <div onClick={props.setHomePage}><img src={require('../images/logo.png')} alt='logo' width='100'/></div>
            {props.currentPerson.map(person => <div key={person.id}>
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
        </main>
    )
};

export default PersonPage;