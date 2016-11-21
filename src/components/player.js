import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var divStyle = {height: '330px'};
    var imgStyle = {width: '160px', display: 'block', margin: '80px auto' };
    return(
      <div style={divStyle} className={this.props.fullscreen ? 'full pull-left col-sm-6 col-md-8' : 'pull-left col-sm-6 col-md-8'}>
        <iframe width="100%" height="100%" frameBorder="0" src="https://www.youtube.com/embed/vh44zE-hlL4?controls=0&showinfo=0" frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
}

export default Player;
