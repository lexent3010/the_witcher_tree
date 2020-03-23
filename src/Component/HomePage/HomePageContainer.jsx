import {connect} from "react-redux";
import HomePage from "./HomePage";
import {setCurrentPerson} from "../../redux/AppReducer";

const mapStateToProps = (state) => {
    return {
        currentPerson: state.app.currentPerson
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentPerson: (person) => {
            dispatch(setCurrentPerson(person))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)