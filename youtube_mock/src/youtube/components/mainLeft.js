import React from 'react';
import {LeftButton} from './leftButtons.js';
import {Menu, Icon} from 'semantic-ui-react';
// import home from '../images/home.png';
// import hot_video from '../images/hot_video.png';
// import sub from '../images/sub.png';
import './mainLeft.scss';
import 'semantic-ui-css/semantic.min.css';

class MainLeft extends React.Component {
    render(){
        return(
            <Menu borderless vertical stackable fixed='left' className="leftbar">
                <LeftButton icon='home' text="首頁"/>
                <LeftButton icon='fire' text="發燒影片"/>
                <LeftButton icon='spy' text="訂閱內容"/>
            </Menu>
        )
    }
}

export default MainLeft;