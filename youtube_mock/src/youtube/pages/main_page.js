import React from 'react';
import NavBar from '../components/nav_bar';
import MainLeft from '../components/mainLeft';
import 'semantic-ui-react';
import './main_page.scss';

class Main_page extends React.Component {
    render(){
        return(
            <div className = "mainpage">
                <NavBar/>
                <div>
                    <MainLeft/>
                </div>
            </div>
        )
    }
}

export default Main_page;
