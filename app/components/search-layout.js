import React from 'react';

const SearchLayout = React.createClass({
  render: function() {
    return (
      <div className="search">
        <header className="search-header">
          <b>Users</b>          
        </header>
        <div className="search-results">
          {this.props.children}
        </div>
        <footer className="search-footer">
          <b>Footer</b>
        </footer>
      </div>
    );
  }
});

export default SearchLayout;
