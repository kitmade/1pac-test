import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  const { data } = props.data;
  console.log(props);
  return (
    <tr>
      <td>{props.index}</td>
      {Object.values(data[0]).map((e, idx) => (
        <td key={`item-${props.index}-${idx}`}>{e ? (Array.isArray(e) ? e.join(", ") : e) : ""}</td>
      ))}
    </tr>
  );
}

Item.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.array,
    href: PropTypes.string,
  }),
  index: PropTypes.number,
};
export default Item;
