import React from "react";
import { Link } from "react-router-dom";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";

const ExpensesListItem = props => (
  <div>
    <p>
      Description: {props.description} - Amount: {props.amount} - Created:{" "}
      {props.createdAt}
      <Link to={`/edit/${props.id}`}>Edit</Link>
      <button onClick={() => props.dispatch(removeExpense(props.id))}>X</button>
    </p>
  </div>
);

export default connect()(ExpensesListItem);
