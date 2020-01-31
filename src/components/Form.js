import React from "react";
import { MdSend } from "react-icons/md";

const Form = ({ values, handleChange, handleSubmit, edit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            value={values.charge}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g. $300"
            value={values.amount}
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <button type="submit" className="btn">
        <MdSend style={{ marginRight: "10px" }} />
        {edit ? "edit" : "sumbit"}
      </button>
    </form>
  );
};
export default Form;
