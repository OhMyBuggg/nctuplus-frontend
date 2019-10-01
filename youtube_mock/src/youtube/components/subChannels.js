import React from 'react';
import {Icon, Menu} from "semantic-ui-react";
import './subChannels.scss';
import 'semantic-ui-css/semantic.min.css';

export function SubChannels(props) {
    const highlight = props.highlight ? 'highlight-item' : null;
    return(
        <Menu.Item className={['subChannels', highlight].join(' ')}>
            <div className="subChannels-alignment-container">
                <span><img src={props.src}/></span>
                <span>{props.text}</span>
            </div>
        </Menu.Item>
    );
}
