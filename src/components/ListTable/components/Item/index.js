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
  const { data, liked, removed, nasa_id } = props.data;
  const [likeStt, setLikeStt] = useState(liked);
  const [removeStt, setRemoveStt] = useState(removed);
  const [editStt, setEditStt] = useState(false);

  const onLikeChange = (e) => {
    setLikeStt(e.target.checked);
    if (typeof props.onItemLike === "function") {
      props.onItemLike({ nasa_id, status: !likeStt });
    }
  };

  const onRemoveChange = (e) => {
    setRemoveStt(!removeStt);
    if (typeof props.onItemRemove === "function") {
      props.onItemRemove({ nasa_id, status: !removeStt });
    }
  };

  const onEditChange = (e) => {
    setEditStt(!editStt);
  };

  return (
    <tr className={removeStt ? "removed-tr" : ""}>
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
              disabled={removeStt}
            />
            <label>{likeStt ? `liked` : `like`}</label>
          </div>
          <p onClick={onRemoveChange}>{removeStt ? `undo` : "remove"}</p>
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
