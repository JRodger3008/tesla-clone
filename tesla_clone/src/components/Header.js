import React from "react";
import Stack from "react-bootstrap/Stack";

// Positioned at the top of the page - in line with teslaLogo and Icons.

function HomepageHeader() {
  return (
    <div id="headerDiv">
      <Stack className="topHeader" direction="horizontal" gap={4}>
        <div className="topHeader">Vehicles</div>
        <div className="topHeader">Energy</div>
        <div className="topHeader">Charging</div>
        <div className="topHeader">Discover</div>
        <div className="topHeader">Shop</div>
      </Stack>
    </div>
  );
}

export default HomepageHeader;
