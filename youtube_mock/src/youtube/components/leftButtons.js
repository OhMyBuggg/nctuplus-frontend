import React from 'react';
import {Icon, Menu} from "semantic-ui-react";
import './leftButtons.scss';
import 'semantic-ui-css/semantic.min.css';

export function LeftButton(props) {
    const highlight = props.highlight ? 'highlight-item' : null;
    return(
        <Menu.Item className={['leftButton', highlight].join(' ')}>
            <div className="leftButton-alignment-container">
                <span><Icon disable='false' size='large' name={props.icon}/></span>
                <span>{props.text}</span>
            </div>
        </Menu.Item>
    );
}
