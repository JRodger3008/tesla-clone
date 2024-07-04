import React from "react";
import Stack from "react-bootstrap/esm/Stack";

// Used for Title/Link, and Title/Paragraph.

function MiscInformation(props) {
  const link = (
    <button type="button" class="btn btn-link" style={{ color: "white" }}>
      {props.linkTitle}
    </button>
  );
  return (
    <Stack
      id={props.id}
      style={{
        display: "flex",
        position: "relative",
        textAlign: "center",
        gridColumn: "1",
        gridColumnEnd: "12",
        top: "20%",
        minHeight: "150px",
        minWidth: "425px",
        justifyContent: "center",
        justifySelf: "center",
      }}
    >
      <h1 className={props.className1}>{props.title1}</h1>

      <div>
        {link}
        <p className={props.className2}>{props.title2}</p>
      </div>
    </Stack>
  );
}

export default MiscInformation;
