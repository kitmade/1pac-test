import React, { useState } from "react";
import PropTypes from "prop-types";

const EditInput = (props) => {
  const [input, setInput] = useState(props.value);
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  return <input value={input} onChange={onInputChange}></input>;
};
function Item(props) {
  const { data } = props.data;
  const [likeStt, setLikeStt] = useState(false);
  const [deleteStt, setDeleteStt] = useState(false);
  const [editStt, setEditStt] = useState(false);

  const onLikeChange = (e) => {
    setLikeStt(e.target.checked);
  };

  const onDeleteChange = (e) => {
    setDeleteStt(!deleteStt);
  };

  const onEditChange = (e) => {
    setEditStt(!editStt);
  };

  return (
    <tr className={deleteStt ? "deleted-tr" : ""}>
      <td>{props.index}</td>
      {Object.values(data[0]).map((e, idx) => {
        return (
          <td key={`item-${props.index}-${idx}`}>
            {editStt ? <EditInput value={e} /> : e ? e : ""}
          </td>
        );
      })}
      <td>
        <div className="table-other-block">
          <div>
            <input
              type="checkbox"
              checked={likeStt}
              onChange={onLikeChange}
              disabled={deleteStt}
            />
            <label>{likeStt ? `liked` : `like`}</label>
          </div>
          <p onClick={onDeleteChange}>{deleteStt ? `undo` : "delete"}</p>
          <p onClick={onEditChange}>{editStt ? "done" : "edit"}</p>
        </div>
      </td>
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
