import React from "react";
import Stack from "react-bootstrap/esm/Stack";

// Props used to reuse component. Used component 4 times in app.

function CarInformation(props) {
  return (
    <Stack
      id={props.id}
      style={{
        display: "flex",
        position: "relative",
        textAlign: "center",
        gridColumn: "1",
        gridColumnEnd: "12",
        top: "40%",
        minHeight: "150px",
        minWidth: "425px",
        justifyContent: "center",
        justifySelf: "center",
      }}
    >
      <h1 className={props.className1}>{props.carModel} </h1>

      <div>
        <h4 className={props.className2}>
          {props.price}
          <sup className="supStyle">{props.supNumber}</sup>
        </h4>
      </div>
      <div>
        <p className={props.className3}>{props.est}</p>
      </div>
    </Stack>
  );
}

export default CarInformation;
