import React from 'react';
import './App.css';
import HomePageContainer from "./Component/HomePageContainer";
import PersonPageContainer from "./Component/PersonPageContainer";

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
