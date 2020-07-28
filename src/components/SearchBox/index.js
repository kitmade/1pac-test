import React, { Component } from "react";
import SearchInput from "./components/SearchInput";
import { connect } from "react-redux";
import { searchWithParams } from "../../actions";
// import PropTypes from "prop-types";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTypes: [
        { title: "q", value: "", type: "text" },
        { title: "center", value: "", type: "text" },
        { title: "description", value: "", type: "text" },
        // { title: "description_508", value: "", type: "text" },
        { title: "keywords", value: "", type: "text" },
        // { title: "location", value: "", type: "text" },
        {
          title: "media_type",
          options: ["image", "audio"],
          value: "image",
          type: "dropdown",
        },
        { title: "nasa_id", value: "", type: "text" },
        // { title: "page", value: "", type: "number" },
        { title: "photographer", value: "", type: "text" },
        // { title: "secondary_creator", value: "", type: "text" },
        { title: "title", value: "", type: "text" },
        // { title: "year_start", value: "", type: "date" },
        // { title: "year_end", value: "", type: "date" },
      ],
    };
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
    this.state.searchTypes.forEach((item) => {
      if (item.value !== "") {
        params[item.title] = item.value;
      }
    });
    this.props.searchWithParams(params);
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

const mapDispatchToProps = (dispatch) => ({
  searchWithParams: (params) => dispatch(searchWithParams(params)),
});

export default connect(null, mapDispatchToProps)(SearchBox);
