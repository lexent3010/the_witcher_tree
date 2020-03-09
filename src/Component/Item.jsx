import React from 'react';
import {NavLink} from "react-router-dom";


const Item = (props) => {

    let path = (parentId) => {
        if (parentId === undefined) {
            return ''
        } else {
            return parentId
        }
    };

    let filter = [props.person.id];

    return (
        <div>
            <div>{props.state.app.person.filter(p => filter.every(el => p.listOfParents.includes(el))).length}</div>
            <NavLink to={'/' + path(props.person.parent)}>
                <div>back</div>
            </NavLink>
            <NavLink to={'/'}>
                <img src={require('../images/logo.png')} alt="" width='100'/>
            </NavLink>
            {props.person.name}
            <div>
                <img src={require('../images/' + props.person.image)} alt=""/>
            </div>
            {props.state.app.person
                .filter(p => p.parent === props.person.id)
                .map(p =>
                    <NavLink to={'/' + p.id}>
                        <div key={p.id}>{p.name}</div>
                        <div>
                            <img src={require('../images/' + p.image)} alt="" width='100'/>
                        </div>
                    </NavLink>)}
        </div>
    )
};

export default Item;