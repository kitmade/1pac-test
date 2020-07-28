import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBox from "../../components/SearchBox";
import ListTable from "../../components/ListTable";
import { searchWithParams, sortData } from "../../actions";
import SortFilter from "../../components/SortFilter";

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

const filters = [
  {
    title: "Oldest",
    orderBy: "date_created",
    sort: "asc",
  },
  {
    title: "Newest",
    orderBy: "date_created",
    sort: "desc",
  },
  {
    title: "A-Z",
    orderBy: "title",
    sort: "asc",
  },
  {
    title: "Z-A",
    orderBy: "title",
    sort: "desc",
  },
];

class HomePage extends Component {
  componentWillUnmount() {
    localStorage.clear();
  }

  render() {
    const { searchWithParams, data, sortData } = this.props;
    return (
      <div className="home-page">
        <div>
          <SearchBox searchTypes={searchTypes} onSearch={searchWithParams} />
          <SortFilter filters={filters} onSelected={sortData} />
        </div>
        <div className="table-wrapper">
          <ListTable headers={tableHeaders} data={data} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.nasaReducer.data,
});
const mapDispatchToProps = (dispatch) => ({
  searchWithParams: (params) => dispatch(searchWithParams(params)),
  sortData: (value) => dispatch(sortData(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
