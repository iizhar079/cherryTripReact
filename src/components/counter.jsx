import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row ms-5">
      <div className="col-1">
      <button
        onClick={() => this.props.onDecrement(this.props.counter)}
        className="btn btn-secondary btn-sm m-2"
        disabled={this.props.counter.value === 0 ? "disabled" : ""}
      >
        -
      </button>
    </div>
        
        <div className="col-1 m-2 ms-4">
          <span className="{this.getBadgeClasses()}  text white" >{this.formatvalue()}</span>
        </div>
       
        <div className="col-1">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
        </div>



      </div>
    );
  }

  //   getBadgeClasses() {
  //     let classes = "badge m-2 badge-";
  //     classes += this.props.counter.value === 0 ? "warning" : "primary";
  //     return classes;
  //   }

  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? "0" : value;
  }
}
export default Counter;
