import React from "react";
import "./App.css";
import HomepageModel3_1 from "./assets/HomepageModel3img.png";
import TeslaLogo from "./assets/TeslaLogo.png";
import HomepageHeader from "./components/Header";
import HomepageModelY_2 from "./assets/Homepage-Model-Y.png";
import { CiGlobe } from "react-icons/ci";
import { PiUserCircle } from "react-icons/pi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import HomepageModelX_3 from "./assets/Homepage.ModelX.png";
import HomepageModelS_4 from "./assets/Homepage.ModelS.png";
import HomepageCybertruck_5 from "./assets/Homepage.Cybertruck.png";
import HomepageSolarpanels_6 from "./assets/Homepage_SolarPanels.png";
import HomepageSolarRoof_7 from "./assets/Homepage_SolarRoof.png";
import HomepagePowerwall_8 from "./assets/Homepage_Powerwall.png";
import HomepageAccessories_9 from "./assets/Homepage_Accessories.png";
import DemoButtons from "./components/Buttons";
import CarInformation from "./components/CarInformation";
import CybertruckLogo from "./assets/1280px-Cybertrucklogo.svg.png";
import MiscInformation from "./components/MiscInformation";
import SingleButton from "./components/SingleButton";
import Footnotes from "./components/Footnotes";
import FooterBar from "./components/FooterBar";

// Clone of tesla.com website (Part 3 of Task 17)

function App() {
  return (
    <div className="App">
      {/* -- Block 1 start -- */}
      {/* model3Img used as background, as with other blocks. */}
      <img
        id="model3Img"
        src={HomepageModel3_1}
        alt="Two red and carbon coloured Tesla Model 3 cars"
      ></img>

      {/* Calls and passes customised component props within CarInformation.js */}
      <CarInformation
        id="model3InfoStack"
        className1="carTitle"
        carModel="Model 3"
        className2="carDetails"
        price="Long Range AWD from $34,990"
        supNumber="1"
        className3="estSavings"
        est="After Est. Savings"
      />

      {/* Props within Buttons.js component passed - 2 Buttons, reusable */}
      <DemoButtons
        id="buttonDiv1"
        className1="orderNowButton"
        type1="button"
        class1="btn btn-light"
        title1="Order Now"
        className2="demoDriveButton"
        type2="button"
        class2="btn btn-dark"
        title2="Demo Drive"
      />

      {/* Header.js */}
      <HomepageHeader />

      <img id="teslaLogo" src={TeslaLogo} alt="Tesla Text Logo"></img>

      {/* Icons from react-icons */}
      <div id="iconDiv">
        <AiOutlineQuestionCircle className="icons" />
        <CiGlobe className="icons" />
        <PiUserCircle className="icons" />
      </div>
      {/* -- Block 1 end -- */}

      {/* -- Block 2 start -- */}
      {/* Block 2 background image (modelYImg), similar with other blocks. */}
      <img
        id="modelYImg"
        src={HomepageModelY_2}
        alt="Blue Tesla Model Y car"
      ></img>

      <CarInformation
        id="modelYInfoStack"
        className1="carTitle"
        carModel="Model Y"
        className2="carDetails"
        price="From $31,490"
        supNumber="2"
        className3="estSavings"
        est="After Est. Savings"
      />

      <DemoButtons
        id="buttonDiv2"
        className1="orderNowButton"
        type1="button"
        class1="btn btn-light"
        title1="Order Now"
        className2="demoDriveButton"
        type2="button"
        class2="btn btn-dark"
        title2="Demo Drive"
      />
      {/* -- Block 2 end -- */}

      {/* -- Block 3 start -- */}
      <img
        id="modelXImg"
        src={HomepageModelX_3}
        alt="Silver Tesla Model X car"
      ></img>

      <CarInformation
        id="modelXInfoStack"
        className1="carTitle"
        carModel="Model X"
        className2="carDetails"
        price="From $63,990"
        supNumber="3"
        className3="estSavings"
        est="After Est. Savings"
      />

      <DemoButtons
        id="buttonDiv3"
        className1="orderNowButton"
        type1="button"
        class1="btn btn-light"
        title1="Order Now"
        className2="demoDriveButton"
        type2="button"
        class2="btn btn-dark"
        title2="Demo Drive"
      />
      {/* -- Block 3 end -- */}

      {/* -- Block 4 start -- */}
      <img
        id="modelSImg"
        src={HomepageModelS_4}
        alt="Grey Tesla Model S car"
      ></img>

      <CarInformation
        id="modelSInfoStack"
        className1="carTitle"
        carModel="Model S"
        className2="carDetails"
        price="From $66,490"
        supNumber="4"
        className3="estSavings"
        est="After Est. Savings"
      />

      <DemoButtons
        id="buttonDiv4"
        className1="orderNowButton"
        type1="button"
        class1="btn btn-light"
        title1="Order Now"
        className2="demoDriveButton"
        type2="button"
        class2="btn btn-dark"
        title2="Demo Drive"
      />
      {/* -- Block 4 end -- */}

      {/* -- Block 5 start -- */}
      <img
        id="cybertruckImg"
        src={HomepageCybertruck_5}
        alt="Cybertruck on rocky terrain"
      ></img>

      {/* CybertruckLogo used in place of CarInformation component */}
      <img
        id="cybertruckLogo"
        src={CybertruckLogo}
        alt="Cybertruck SVG Logo"
      ></img>

      <DemoButtons
        id="buttonDiv5"
        className1="orderNowButton"
        type1="button"
        class1="btn btn-dark"
        title1="Order Now"
        className2="demoDriveButton"
        type2="button"
        class2="btn btn-dark"
        title2="Learn More"
      />
      {/* -- Block 5 end -- */}

      {/* -- Block 6 start -- */}
      <img
        id="solarPanelsImg"
        src={HomepageSolarpanels_6}
        alt="Two storey home with Tesla solar panels on the roof"
      ></img>

      {/* MiscInformation called to display title (h1) and a link (Boostrap button) */}
      <MiscInformation
        id="solarPanelsInfo"
        className1="carTitle"
        title1="Solar Panels"
        linkTitle="Schedule a Virtual consultation"
      />

      <DemoButtons
        id="buttonDiv6"
        className1="orderNowButton"
        type1="button"
        class1="btn btn-light"
        title1="Order Now"
        className2="demoDriveButton"
        type2="button"
        class2="btn btn-dark"
        title2="Learn More"
      />
      {/* -- Block 6 end -- */}

      {/* -- Block 7 start -- */}
      <img
        id="solarRoofImg"
        src={HomepageSolarRoof_7}
        alt="Single storey home with solar roofing"
      ></img>

      {/* MiscInformation, unlike in block 6, is called to display title (h1) and details (p) */}
      <MiscInformation
        id="solarRoofInfo"
        class1="carTitle"
        title1="Solar Roof"
        className2="miscDetails"
        title2="Produce Clean Energy From Your Roof"
      />

      <DemoButtons
        id="buttonDiv7"
        className1="orderNowButton"
        type1="button"
        class1="btn btn-light"
        title1="Order Now"
        className2="demoDriveButton"
        type2="button"
        class2="btn btn-dark"
        title2="Learn More"
      />
      {/* -- Block 7 end -- */}

      {/* -- Block 8 start -- */}
      <img
        id="powerwallImg"
        src={HomepagePowerwall_8}
        alt="Blue tesla car next to Powerwall station"
      ></img>

      {/* Title used only */}
      <MiscInformation
        id="powerwallInfo"
        class1="carTitle"
        title1="Powerwall"
      />

      <DemoButtons
        id="buttonDiv8"
        className1="orderNowButton"
        type1="button"
        class1="btn btn-light"
        title1="Order Now"
        className2="demoDriveButton"
        type2="button"
        class2="btn btn-dark"
        title2="Learn More"
      />
      {/* -- Block 8 end -- */}

      {/* -- Block 9 start -- */}
      <img
        id="accessoriesImg"
        src={HomepageAccessories_9}
        alt="Tesla charging cable and station"
      ></img>

      <MiscInformation
        id="accessoriesInfo"
        class1="carTitle"
        title1="Accessories"
      />

      {/* Single button centered in page (Shop Now) */}
      <SingleButton
        id="buttonDiv9"
        className="orderNowButton"
        type="button"
        class="btn btn-light"
        title="Shop Now"
      ></SingleButton>
      {/* -- Block 9 end -- */}

      {/* -- Block 10 end -- */}
      {/* Both of the following components are from Footnotes.js and FooterBar.js respectively */}
      <Footnotes />

      <FooterBar />

      {/* Link to original website (tesla.com) */}
      <button id="linkToOriginal" type="button" class="btn btn-link">
        https://www.tesla.com/
      </button>
      {/* -- Block 10 end -- */}
    </div>
  );
}

export default App;
