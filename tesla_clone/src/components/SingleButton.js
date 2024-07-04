import React from "react";

// Similar properties to Buttons.js, but only single button used. Self-explanatory

function SingleButton(props) {
  return (
    <div
      id={props.id}
      style={{
        display: "flex",
        position: "relative",
        gridColumnStart: "1",
        gridColumnEnd: "12",
        alignItems: "center",
        justifyContent: "center",
        bottom: "100%",
      }}
    >
      <button
        className={props.className}
        type={props.type}
        class={props.class}
        style={{ width: "250px", position: "relative", margin: "10px" }}
      >
        {props.title}
      </button>
    </div>
  );
}

export default SingleButton;
