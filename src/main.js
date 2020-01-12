import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import List from './components/list';
// import Item from './components/item';
import Player from './components/player';

import {YTConfig} from './config/youtube';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {videos: []};
    this._videosSearch('panda');
  }
  _videosSearch(keyword) {
    YTSearch({
        key: YTConfig.API_KEY,
        maxResults: 20,
        term: keyword
      }, (videos) => {
        this.setState({videos});
        // console.dir(videos);
    });
  }
  render () {
    const videoSearch = _.debounce(keyword => { this._videosSearch(keyword) }, 200);
    return (
        <div>
          <SearchBar keyword='' title='Youtube' placeholder='Search a video' search={videoSearch} />
          <Player fullscreen />
          <List videos={this.state.videos}/>
        </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.querySelector('#container')
);
