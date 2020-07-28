import React, { Component } from "react";
import SearchInput from "./components/SearchInput";
// import PropTypes from "prop-types";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTypes: [],
    };
  }

  componentDidMount() {
    this.setState({
      searchTypes: this.props.searchTypes,
    });
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      searchTypes: this.state.searchTypes.map((item) => {
        return item.title === name ? { ...item, value: value } : item;
      }),
    });
  };

  renderSearchBoxList = (list) => {
    return list.map((item) => {
      const { title, value, type, options } = item;
      return (
        <SearchInput
          key={title}
          title={title}
          value={value}
          type={type}
          options={options}
          onChange={this.onInputChange}
        />
      );
    });
  };

  onSearch = () => {
    const params = {};
    const { onSearch } = this.props;
    this.state.searchTypes.forEach((item) => {
      if (item.value !== "") {
        params[item.title] = item.value;
      }
    });

    if (typeof onSearch === "function") {
      onSearch(params);
    }
  };

  render() {
    return (
      <div className="search-box">
        {this.renderSearchBoxList(this.state.searchTypes)}
        <button onClick={this.onSearch}>Search</button>
      </div>
    );
  }
}

// SearchBox.propTypes = {};

export default SearchBox;
