import React from "react";

export default function SearchInput(props) {
  return (
    <div className="search-input">
      {props.title && (
        <label>
          {props.title[0].toUpperCase() +
            props.title.slice(1, props.title.length).split("_").join(" ")}
          :
        </label>
      )}
      {props.type === "dropdown" ? (
        <select type={'range'}name={props.title} onChange={props.onChange}>
          {props.options.map((item) => (
            <option>{item}</option>
          ))}
        </select>
      ) : (
        <input
          name={props.title}
          min={props.type === "date" && 1000}
          max={props.type === "date" && 9999}
          type={props.type === "date" ? "number" : props.type}
          value={props.value}
          onChange={props.onChange}
        />
      )}
    </div>
  );
}
