import React, { Component } from 'react';
import './searchBar.scss';
import SearchIcon from './assets/img/search-icon.png';


class SearchBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            placeholder: "Search"
        }
    }


    render(){
        return (
            <div id="search-bar">
                <input type="text" placeholder={this.state.placeholder} />
                <img src={SearchIcon} />
            </div>
        );
    }
}

export default SearchBar;