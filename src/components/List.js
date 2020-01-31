import React from "react";
import Item from "./Item";
import { MdDeleteForever } from "react-icons/md";

const List = ({ expenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
      <ul className="list">
        {expenses.map(el => {
          return (
            <Item
              key={el.id}
              expense={el}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button onClick={clearItems} className="btn">
          <MdDeleteForever className="btn-icon" />
          Clear
        </button>
      )}
    </>
  );
};
export default List;
