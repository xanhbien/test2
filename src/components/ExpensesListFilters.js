import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";
/*
1. Import sortByDate And sortByAmount from action filters.
2. Handle event onChange => dispatch, check condition.
e.target.value
*/

const ExpenseListFilters = props => {
  return (
    <div className="filter">
      <input
        type="text"
        value={props.filter.text}
        onChange={e => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
      <select
        onChange={e => {
          if (e.target.value === "date") {
            props.dispatch(sortByDate());
          } else if (e.target.value === "amount") {
            props.dispatch(sortByAmount());
          }
        }}
        value={props.filter.sortBy}
      >
        <option value="date">By Date</option>
        <option value="amount">By Amount</option>
      </select>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    filter: state.filters
  };
};
export default connect(mapStateToProps)(ExpenseListFilters);
