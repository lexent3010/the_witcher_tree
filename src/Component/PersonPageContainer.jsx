import {connect} from "react-redux";
import PersonPage from "./PersonPage";
import {back, changePerson, setCurrentPerson, setHomePage} from "../redux/AppReducer";


    let mapStateToProps = (state) => {
        return {
            person: state.app.currentPerson,
            subjectsCount: state.app.subjectsCount,
            subjects: state.app.subjects,
            currentPerson: state.app.currentPerson,
            checkBox: state.app.checkBox
        }
    };

    let mapDispatchToProps = (dispatch) => {
        return {
            setCurrentPerson: (person) => {
                dispatch(setCurrentPerson(person))
            },
            back: () => {
                dispatch(back())
            },
            setHomePage: () => {
                dispatch(setHomePage())
            },
            changePerson: (where) => {
                dispatch(changePerson(where))
            }
        }
    };

export default connect(mapStateToProps, mapDispatchToProps)(PersonPage);