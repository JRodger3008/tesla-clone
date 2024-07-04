import React from "react";
import Stack from "react-bootstrap/esm/Stack";

// Props not used in this case. Made to keep App.js tidy, and to not overload.

function Footnotes() {
  return (
    <Stack id="footnoteStack">
      <div>
        <div>
          <p className="footerSentence">
            <sup className="supStyle">1</sup>Price before estimated savings is
            $47,490, excluding taxes and fees. Subject to change.
          </p>

          <div className="estGasSavings">
            <button
              class="btn btn-link"
              style={{ color: "white", fontSize: "0.8rem" }}
            >
              Learn about est. gas savings.
            </button>
          </div>
        </div>

        <div>
          <p className="footerSentence">
            <sup className="supStyle">2</sup>Price before estimated savings is
            $44,990, excluding taxes and fees. Subject to change.
          </p>

          <div className="estGasSavings">
            <button
              class="btn btn-link"
              style={{ color: "white", fontSize: "0.8rem" }}
            >
              Learn about est. gas savings.
            </button>
          </div>
        </div>

        <div>
          <p className="footerSentence">
            <sup className="supStyle">3</sup>Price before estimated savings is
            $77,990, excluding taxes and fees. Subject to change.
          </p>

          <div className="estGasSavings">
            <button
              class="btn btn-link"
              style={{ color: "white", fontSize: "0.8rem" }}
            >
              Learn about est. gas savings.
            </button>
          </div>
        </div>

        <div>
          <p className="footerSentence">
            <sup className="supStyle">4</sup>Price before estimated savings is
            $72,990, excluding taxes and fees. Subject to change.
          </p>

          <div className="estGasSavings">
            <button
              class="btn btn-link"
              style={{ color: "white", fontSize: "0.8rem" }}
            >
              Learn about est. gas savings.
            </button>
          </div>
        </div>
      </div>
    </Stack>
  );
}

export default Footnotes;
