import {connect} from "react-redux";
import PersonPage from "./PersonPage";
import {back, setCurrentPerson, setHomePage} from "../redux/AppReducer";


    let mapStateToProps = (state) => {
        return {
            person: state.app.currentPerson,
            subjectsCount: state.app.subjectsCount,
            subjects: state.app.subjects,
            currentPerson: state.app.currentPerson
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
            }
        }
    };

export default connect(mapStateToProps, mapDispatchToProps)(PersonPage);