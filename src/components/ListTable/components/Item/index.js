import React, { useState } from "react";
import PropTypes from "prop-types";

const EditInput = (props) => {
  const [input, setInput] = useState(props.value);
  const onInputChange = (e) => {
    setInput(e.target.value);
    if (typeof props.onInputChange === "function") {
      props.onInputChange(e);
    }
  };
  return <input value={input} onChange={onInputChange}></input>;
};
function Item(props) {
  const { data, liked, removed, nasa_id } = props.data;
  const [displayData, setDisplayData] = useState(data);
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

  const onConfirmEdit = () => {
    if (typeof props.onItemEdit === "function") {
      props.onItemEdit({ nasa_id, data: displayData });
    }
    onEditChange();
  };

  const onCancel = () => {
    setDisplayData(data);
    onEditChange();
  };

  const onInputEdit = (e) => {
    setDisplayData([
      {
        ...displayData[0],
        [e.key]: e.value,
      },
    ]);
  };

  const onEditChange = () => {
    setEditStt(!editStt);
  };

  return (
    <tr className={removeStt ? "removed-tr" : ""}>
      <td>{props.index}</td>
      {Object.entries(displayData[0]).map((e, idx) => {
        const value = e[1],
          key = e[0];
        return (
          <td key={`item-${props.index}-${idx}`}>
            {editStt ? (
              <EditInput
                value={value}
                onInputChange={(e) => {
                  onInputEdit({ key, value: e.target.value });
                }}
              />
            ) : value ? (
              value
            ) : (
              ""
            )}
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
          {/* <p onClick={onEditChange}>{editStt ? "done" : "edit"}</p> */}
          {editStt ? (
            <p>
              <span onClick={onConfirmEdit}>confirm</span>/
              <span onClick={onCancel}>cancel</span>
            </p>
          ) : (
            <p onClick={onEditChange}>edit</p>
          )}
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
