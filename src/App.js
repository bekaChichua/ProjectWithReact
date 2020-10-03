import React from "react";
import NavBAr from "./NavBAr";
import Main from "./Main";
import SmallNavbar from "./SmallNavbar";
import "./style.css";

const App = () => {
  return (
    <div className="AppDiv">
      <NavBAr />
      <Main />
      <SmallNavbar />
    </div>
  );
};
export default App;
