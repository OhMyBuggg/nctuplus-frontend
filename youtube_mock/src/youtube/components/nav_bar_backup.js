import React from 'react';
import './nav_bar.scss';
import {Form, Input} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
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
            <div className = "navbar" fixed="top">
                <div className = "navbarLeft">
                    <img src={menu_b} alt = "cant open" className = "menu_b"/>
                    <img src={logo} alt = "cant open" className = "logo"/>
                </div>      
                <div className="navbarMiddle">
                    <div className="search_bar">
                        <Form>
                            <Form.Field>
                                <Input placeholder='搜尋'
                                    size='small'
                                    className="bar"
                                />
                            </Form.Field>
                        </Form>
                    </div>
                    <button align-content="center" class="ui icon button" className="search_button"><i aria-hidden="true" class="search icon"></i></button>
                </div>
                <div className="navbarRight">
                    <img className="navbarIcons" alt="404" src={icon1}/>
                    <img className="navbarIcons" alt="404" src={icon2}/>
                    <img className="navbarIcons" alt="404" src={icon3}/>
                    <img className="navbarIcons" alt="404" src={icon4}/>
                    <img className="navbarIcons" alt="404" src={icon5}/>
                </div>
            </div>
        )
    }
}

export default NavBar;
