import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'keyword' : 'euro'};
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    //console.log('render search-bar');
    return(
      <form>
        <div className="form-group">
            <input
              id="keyword"
              className="form-control"
              name="keyword"
              type="text"
              //value={this.state.keyword}
              onChange={event => this._search(event.target.value)}
              placeholder={this.props.placeholder ? this.props.placeholder : ''}
              />
        </div>
      </form>
    );
  }
  _search(keyword) {
    this.setState({keyword: keyword});
    this.props.search(keyword);
  }
}

SearchBar.propTypes = {
  title:          React.PropTypes.string.isRequired,
  placeholder:    React.PropTypes.string,
  email:          React.PropTypes.string,
  seats:          React.PropTypes.number,
  settings:       React.PropTypes.object,
  callback:       React.PropTypes.func,
  search:         React.PropTypes.func.isRequired,
  isClosed:       React.PropTypes.bool,
  any:            React.PropTypes.any,
};

SearchBar.defaultProps = {
  keyword: 'euro'
}

export default SearchBar;
