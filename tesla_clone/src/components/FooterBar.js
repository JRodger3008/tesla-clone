import React from "react";
import Stack from "react-bootstrap/esm/Stack";

// FooterBar positioned at the end of the webpage. Buttons not used, but can be fairly easily edited to
// include interactable elements.

function FooterBar() {
  return (
    <Stack direction="horizontal" id="footerBar">
      <div className="flexItems">
        <p>Tesla {"\u00a9"} 2024</p> {/* COPYRIGHT SYMBOL {'\u00a9'} */}
      </div>

      <div className="flexItems">
        <p>Privacy & Legal</p>
      </div>

      <div className="flexItems">
        <p>Vehicle Recall</p>
      </div>

      <div className="flexItems">
        <p>Contact</p>
      </div>

      <div className="flexItems">
        <p>News</p>
      </div>

      <div className="flexItems">
        <p>Get Updates</p>
      </div>

      <div className="flexItems">
        <p>Locations</p>
      </div>
    </Stack>
  );
}

export default FooterBar;
