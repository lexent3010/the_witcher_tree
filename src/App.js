import React from 'react';
import './App.css';
import HomePageContainer from "./Component/HomePage/HomePageContainer";
import PersonPageContainer from "./Component/PersonPage/PersonPageContainer";

const App = (props) => {
    switch (props.currentPage) {
        case 'homePage':
            return <HomePageContainer/>;
        case 'personPage':
            return <PersonPageContainer/>;
        default:
            return <HomePageContainer/>
    }
};

export default App;
