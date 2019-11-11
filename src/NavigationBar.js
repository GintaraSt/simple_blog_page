import React, { Component } from 'react';
import './navigationBar.scss';
import Logo from './assets/img/logo.png';
import Facebook from './assets/img/facebook-logo.png';
import LinkedIn from './assets/img/linked-in-logo.png';
import Instagram from './assets/img/instagram-logo.png';
import { relative } from 'path';

class NavigationBar extends React.Component {
    render(){
        return (
            <div id="nav-bar-rect">
                <div id="doll-logo-container">
                    <img src={Logo} />
                    <p>designs<br />of low life</p>
                </div>
                <ul id="nav-menu">
                    <li>Articles</li>
                    <li>Portfolios</li>
                    <li>Events</li>
                    <li>Projects</li>
                    <li>About</li>
                </ul>
                <div id="social-networks-container">
                    <img src={LinkedIn} />
                    <img src={Instagram} />
                    <img src={Facebook} />
                </div>
            </div>
        )
    }
}

export default NavigationBar;