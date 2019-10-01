import React from 'react';
import './nav_bar.scss';
import {Menu} from 'semantic-ui-react'
import menu_b from '../images/YouTube_menu_buttom.png'
import logo from '../images/YouTube_logo.png'
import s_button from '../images/search_button.png'
import icon1 from '../images/camera.png'
import icon2 from '../images/nine_blocks.png'
import icon3 from '../images/arrow_cloud.png'
import icon4 from '../images/bell.png'
import icon5 from '../images/user.png'

class NavBar extends React.Component {
    render(){
        return(
            <Menu background="black" borderless className = "navbar" fixed="top">
                <div className = "navbarLeft">
                    <img src={menu_b} alt = "cant open" className = "menu_b"/>
                    <img src={logo} alt = "cant open" className = "logo"/>
                </div>      
                <div className="navbarMiddle">
                    <input className="search_bar" placeholder=" 搜尋"/>
                    <img className="button_image" alt="404" src={s_button}/>
                </div>
                <div className="navbarRight">
                    <img className="navbarIcons" alt="404" src={icon1}/>
                    <img className="navbarIcons" alt="404" src={icon2}/>
                    <img className="navbarIcons" alt="404" src={icon3}/>
                    <img className="navbarIcons" alt="404" src={icon4}/>
                    <img className="navbarIcons" alt="404" src={icon5}/>
                </div>
            </Menu>
        )
    }
}

export default NavBar;
