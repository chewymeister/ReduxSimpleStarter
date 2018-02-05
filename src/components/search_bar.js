import React, { Component } from 'react';

class SearchBar extends Component {
  constructor({props}) {
    super(props);

    this.state = { searchTerm: '' };
  }

  onInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  // <input value='' onChange={this.onInputChange()} />
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.searchTerm}
          onChange={(event) => {this.setState({searchTerm: event.target.value})}}
          onSubmit={(event) => {this.onInputChange(event.target.value)}} />
      </div>
    )
  }

  onInputChange(term) {
    this.props.onVideoSearch(term)
  }
}

export default SearchBar;
