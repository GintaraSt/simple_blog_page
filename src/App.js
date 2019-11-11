import React, { Component } from 'react';
import './App.scss';
import Article from './Article';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';


class App extends Component {
  constructor(){
    super();
  }

  render() {
    let style = {
      position: "relative",
      align: "center"
    }
    return (
      <div id="site-wrap" >
        <NavigationBar />
        <div id="data">
          <div id="search-bar-wrap">
            <SearchBar placeholder="Search"/>
          </div>
          <div id="articles-wrap">
            <Article />
            <Article />
            <Article />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
