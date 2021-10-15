import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionType from "../store/actions";
import CounterLabel from "../components/counterLabel";
import CounterButton from "../components/counterButton";
import "../App.css";

class Counter1 extends Component {
  render() {
    return (
      <div className="App">
        <CounterLabel value={this.props.ctr} />
        Component B
        <CounterButton clicked={this.props.onIncrement} label="increment" />
        <CounterButton clicked={this.props.onDecrement} label="decrement" />
        <CounterButton clicked={this.props.onReset} label="reset" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: actionType.increment }),
    onDecrement: () => dispatch({ type: actionType.decrement }),
    onReset: () => dispatch({ type: actionType.reset }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter1);
