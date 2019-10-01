import React from 'react';
import {LeftButton} from './leftButtons.js';
import {SubChannels} from './subChannels.js';
import {Menu, Icon} from 'semantic-ui-react';
import shadowverse from '../images/Shadowverse channel.jpg';
import lou_pee from '../images/lou pee.jpg';
import qttsix from '../images/Qttsix.jpg';
import jujushose from '../images/ju ju shose.jpg';
import pews from '../images/pewdiepie.jpg';
import './mainLeft.scss';
import 'semantic-ui-css/semantic.min.css';

class MainLeft extends React.Component {
    render(){
        return(
            <div className="sidebar">
                <Menu borderless vertical stackable fixed='left' className="leftbar">
                    <LeftButton icon='home' text="首頁"/>
                    <LeftButton icon='fire' text="發燒影片"/>
                    <LeftButton icon='youtube square' text="訂閱內容"/>
                </Menu>
                <Menu borderless vertical stackable fixed='left' className="leftbar_2">
                    <LeftButton icon='folder' text="媒體庫"/>
                    <LeftButton icon='history' text="觀看紀錄"/>
                    <LeftButton icon='clock outline' text="稍後觀看"/>
                    <LeftButton icon='thumbs up outline' text="喜歡的影片"/>
                </Menu>
                <Menu borderless vertical stackable fixed='left' className="leftbar_3">
                    <div className="sub-title"><span>訂閱內容</span></div>
                    <SubChannels src={shadowverse} text="Shadowverse"/>
                    <SubChannels src={lou_pee} text="老皮"/>
                    <SubChannels src={qttsix} text="Qtt Six"/>
                    <SubChannels src={jujushose} text="啾啾鞋"/>
                    <SubChannels src={pews} text="PewDiePie"/>
                </Menu>
            </div>
        )
    }
}

export default MainLeft;