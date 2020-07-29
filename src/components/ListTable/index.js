import React, { Component } from "react";
// import PropTypes from "prop-types";
import Item from "./components/Item";

class ListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      headers: [],
      viewType: "All",
    };
  }

  onViewTypeChange = (viewType) => {
    this.setState({
      ...this.state,
      viewType,
    });
  };

  // componentWillMount() {}

  componentDidMount() {
    this.setState({
      ...this.state,
      headers: this.props.headers,
    });
  }

  onItemRemove = (params) => {
    this.setState({
      ...this.state,
      data: this.state.data.map((e) => {
        if (e.nasa_id === params.nasa_id) {
          return { ...e, removed: params.status, liked: false };
        } else {
          return e;
        }
      }),
    });
  };

  onItemLike = (params) => {
    this.setState({
      ...this.state,
      data: this.state.data.map((e) => {
        if (e.nasa_id === params.nasa_id) {
          return { ...e, liked: params.status };
        } else {
          return e;
        }
      }),
    });
  };

  onItemEdit = (params) => {
    this.setState({
      ...this.state,
      data: this.state.data.map((e) => {
        if (e.nasa_id === params.nasa_id) {
          return { ...e, data: params.data };
        } else {
          return e;
        }
      }),
    });
  };

  // componentWillReceiveProps(nextProps) {  }

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        ...this.state,
        data: this.props.data.map((e) => ({
          ...e,
          liked: false,
          removed: false,
        })),
      });
    }
  }

  // componentWillUnmount() {}

  render() {
    const filtedData =
      this.state.viewType === "All"
        ? this.state.data
        : this.state.data.filter(
            (e) => e[this.state.viewType.toLowerCase()] === true
          );
    return (
      <div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                {this.state.headers.map((header) => (
                  <th key={`${header} header`}>
                    {header
                      .split("_")
                      .map((e) => e[0].toUpperCase() + e.slice(1, e.length))
                      .join(" ")}
                  </th>
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtedData.length > 0 ? (
                this.state.data.map((e, index) => (
                  <Item
                    key={`item-row-${index}`}
                    data={e}
                    index={index}
                    onItemRemove={this.onItemRemove}
                    onItemLike={this.onItemLike}
                    onItemEdit={this.onItemEdit}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={this.state.headers.length + 1}>No Data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="tabs-wrapper">
          {["All", "Liked", "Removed"].map((e) => (
            <div
              className={this.state.viewType === e ? "tab-selected" : ""}
              onClick={() => {
                this.onViewTypeChange(e);
              }}
            >{`${e} View`}</div>
          ))}
        </div>
      </div>
    );
  }
}

// ListTable.propTypes = {};

export default ListTable;
