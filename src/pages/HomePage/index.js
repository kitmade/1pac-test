import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBox from "../../components/SearchBox";
import ListTable from "../../components/ListTable";
import { searchWithParams } from "../../actions";

const searchTypes = [
  { title: "q", value: "", type: "text" },
  // { title: "center", value: "", type: "text" },
  // { title: "description", value: "", type: "text" },
  // { title: "keywords", value: "", type: "text" },
  {
    title: "media_type",
    options: ["image", "audio"],
    value: "image",
    type: "dropdown",
  },
  // { title: "nasa_id", value: "", type: "text" },
  // { title: "photographer", value: "", type: "text" },
  { title: "title", value: "", type: "text" },
];

const tableHeaders = [
  "no",
  "title",
  "date_created",
  // "center",
  // "nasa_id",
  // "description",
  // "photographer",
  // "keywords",
  // "media_type",
];

class HomePage extends Component {
  render() {
    const { searchWithParams, data } = this.props;
    return (
      <div>
        <SearchBox searchTypes={searchTypes} onSearch={searchWithParams} />
        <ListTable headers={tableHeaders} data={data} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.nasaReducer.data,
});
const mapDispatchToProps = (dispatch) => ({
  searchWithParams: (params) => dispatch(searchWithParams(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
