import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

class Item extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor Item');
    this.state = {};
  }
  render() {
    var truncateDecription = _.truncate(this.props.video.snippet.description, {
      'length': 150,
      'separator': /,? +/
    });
    return(
      <li className='col-sm-6 col-md-4'>
            <div className="thumbnail">
              <img src={this.props.video.snippet.thumbnails.medium.url} alt='preview' />
              <div className="caption">
                <h4 className='list-group-item-heading'>{this.props.video.snippet.title}</h4>
                <p className='list-group-item-text'>{this.props.video.snippet.description}</p>
                <p><a href="#" className="btn btn-danger" role="button">Watch!</a></p>
              </div>
        </div>
      </li>
    );
  }
}

Item.propTypes = {
  video:          React.PropTypes.object.isRequired
};

export default Item;
