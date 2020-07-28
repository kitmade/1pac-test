import React from "react";

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
        filters.map((item) => <option>{item.title}</option>)}
    </select>
  );
};

export default SortFilter;
