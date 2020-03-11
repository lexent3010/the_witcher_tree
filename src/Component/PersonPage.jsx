import React from 'react';
import {NavLink} from "react-router-dom";


const PersonPage = (props) => {

    let path = (parentId) => {
        if (parentId === undefined) {
            return ''
        } else {
            return parentId
        }
    };

    props.setSubjectsCount(props.person);

    return (
        <div>
            <div>{props.subjectsCount}</div>
            <div onClick={() => {
                props.back()
            }}>
                back
            </div>

            <img src={require('../images/logo.png')} alt='logo' width='100'/>

            {props.currentPerson.name}
            <div>
                <img src={require('../images/' + props.currentPerson.image)} alt={props.currentPerson.name}/>
            </div>
            <div>
                {props.subjects.map(p =>
                    <div key={p.id} onClick={() => {
                        props.setCurrentPerson(p)
                    }}>
                        <div>{p.name}</div>
                        <div>
                            <img src={require('../images/' + p.image)} alt={p.name} width='100'/>
                        </div>
                    </div>)}
            </div>
        </div>
    )
};

export default PersonPage;