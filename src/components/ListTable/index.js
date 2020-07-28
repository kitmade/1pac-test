import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import Item from "./components/Item";

class ListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      headers: [
        "no",
        "title",
        "date_created",
        "center",
        "nasa_id",
        "description",
        "photographer",
        "keywords",
        "media_type",
      ],
    };
  }

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}

  render() {
    console.log(this.props.data);
    return (
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
          {this.props.data.map((e, index) => (
            <Item key={`item-row-${index}`}data={e} index={index} />
          ))}
        </tbody>
      </table>
    );
  }
}

// ListTable.propTypes = {};

const mapStateToProps = (state) => ({
  data: state.nasaReducer.data,
});

export default connect(mapStateToProps, null)(ListTable);
