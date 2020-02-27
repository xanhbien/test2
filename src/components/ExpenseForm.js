import React from "react";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? props.expense.amount : "",
      error: "",
      button: props.expense ? "Edit Expense" : "Add Expense"
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d*(\.*\d{0,2})$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: "Please provide description and amount" }));
    } else {
      this.setState(() => ({ error: "" }));

      this.props.onSubmit({
        description: this.state.description,
        amount: this.state.amount
      });
    }
  };
  render() {
    return (
      <div>
        <p>{this.state.error}</p>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.description}
            type="text"
            placeholder="description"
            autoFocus
            onChange={this.onDescriptionChange}
          />
          <input
            value={this.state.amount}
            type="text"
            placeholder="amount"
            onChange={this.onAmountChange}
          />
          <button type="submit">{this.state.button}</button>
        </form>
      </div>
    );
  }
}
