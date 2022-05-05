import React from "react";

const ListGroup = ({ items, textProperty, valueProperty, selectedItem, onItemSelect }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className={item === selectedItem ? "list-group-item active" : "list-group-item"}
          style={{ cursor: "pointer" }}
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
