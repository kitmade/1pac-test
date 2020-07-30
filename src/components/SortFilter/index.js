import React from "react";
import PropTypes from "prop-types";

const SortFilter = (props) => {
  const { filters, onSelected } = props;

  const onOptionSelect = (e) => {
    const { value } = e.target;
    const { orderBy, sort } = filters.filter(
      (filter) => filter.title === value
    )[0];
    const cond = { orderBy, sort };
    if (typeof onSelected === "function") {
      onSelected(cond);
    }
  };

  return (
    <select onChange={onOptionSelect}>
      {Array.isArray(filters) &&
        filters.map((item, index) => (
          <option key={`filer-${index}`} value={item.title}>
            {item.title}
          </option>
        ))}
    </select>
  );
};

SortFilter.propTypes = {
  onSelected: PropTypes.func,
  filter: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      orderBy: PropTypes.string,
      sort: PropTypes.string,
    })
  ),
};

export default SortFilter;
