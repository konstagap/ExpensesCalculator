import React from "react";

export default function Head({ expenses }) {
  return (
    <h1>
      Total spending
      <span className="total">
        $
        {expenses.reduce((a, c) => {
          return c.amount + a;
        }, 0)}
      </span>
    </h1>
  );
}
