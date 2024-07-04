import React from "react";

// 2 bootstrap buttons with customisable properties. Used component 8 times in app.

function DemoButtons(props) {
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
        className={props.className1}
        type={props.type1}
        class={props.class1}
        style={{ width: "250px", position: "relative", margin: "10px" }}
      >
        {props.title1}
      </button>
      <button
        className={props.className2}
        type={props.type2}
        class={props.class2}
        style={{ width: "250px", position: "relative", margin: "10px" }}
      >
        {props.title2}
      </button>
    </div>
  );
}

export default DemoButtons;
