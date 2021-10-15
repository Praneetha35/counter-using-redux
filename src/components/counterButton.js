import React from "react";

function CounterButton(props) {
  return (
    <div>
      <button type="button" onClick={props.clicked}>
        {props.label}
      </button>
    </div>
  );
}
export default CounterButton;
