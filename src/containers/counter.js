import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionType from "../store/actions";
import CounterLabel from "../components/counterLabel";
import CounterButton from "../components/counterButton";
import "../App.css";

class Counter extends Component {
  render() {
    return (
      <div className="App">
        <CounterLabel value={this.props.ctr} />
        Component A
        <CounterButton clicked={this.props.onIncrement} label="increment" />
        <CounterButton clicked={this.props.onDecrement} label="decrement" />
        <CounterButton clicked={this.props.onReset} label="reset" />
      </div>
    );
  }
}

//mapStateToProps is used for selecting the part of the data from the store that the connected component needs
const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

//Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch. It lets you provide action dispatching functions as props.
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: actionType.increment }),
    onDecrement: () => dispatch({ type: actionType.decrement }),
    onReset: () => dispatch({ type: actionType.reset }),
  };
};

//connect() as the glue or interface between the component and the store.
//Any changes to the state will be reflected in the component because it is “connected” to mapStateToProps and that information is now made available to the component through a prop.
//This will export a component that can both get the current state from the store, and dispatch an action to the store to trigger and update to the state.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
