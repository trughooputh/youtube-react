import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import Item from './item';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <ul className='list-unstyled'>
          {this.props.videos.map(function(video, key){
            return <Item key={video.id.videoId} video={video} />;
          })}
        </ul>
    );
  }
}

List.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default List;
