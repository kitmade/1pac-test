import React, { Component } from "react";
// import PropTypes from "prop-types";
import Item from "./components/Item";

class ListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      headers: [],
    };
  }

  // componentWillMount() {}

  componentDidMount() {
    this.setState({
      ...this.state,
      headers: this.props.headers,
    });
  }

  // componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        ...this.state,
        data: this.props.data,
      });
    }
  }

  // componentWillUnmount() {}

  render() {
    return (
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
            </tr>
          </thead>
          <tbody>
            {this.state.data.length > 0 ? (
              this.state.data.map((e, index) => (
                <Item key={`item-row-${index}`} data={e} index={index} />
              ))
            ) : (
              <tr>
                <td colspan={this.state.headers.length}>No Data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

// ListTable.propTypes = {};

export default ListTable;
