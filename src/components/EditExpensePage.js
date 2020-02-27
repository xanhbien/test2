import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";

const EditExpensePage = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expensesEdited => {
          props.dispatch(editExpense(props.expense.id, expensesEdited));
          props.history.push("/");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      exp => exp.id === parseInt(props.match.params.id)
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);
