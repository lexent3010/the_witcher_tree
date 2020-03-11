import React from 'react';
import {connect} from "react-redux";
import PersonPage from "./PersonPage";
import {back, setCurrentPerson, setSubjectsCount} from "../redux/AppReducer";
import {NavLink} from "react-router-dom";


const PersonPageContainer = (props) => {
    let mapStateToProps = (state) => {
        return {
            person: props.person,
            state: state.app.person,
            subjectsCount: state.app.subjectsCount,
            subjects: state.subjects,
            currentPerson: state.app.currentPerson
        }
    };

    let mapDispatchToProps = (dispatch) => {
        return {
            setSubjectsCount: (person) => {
                dispatch(setSubjectsCount(person))
            },
            setCurrentPerson: (person) => {
                dispatch(setCurrentPerson(person))
            },
            back: () => {
                dispatch(back())
            }
        }
    };
    connect(mapStateToProps, mapDispatchToProps)(PersonPage)
};

export default PersonPageContainer;