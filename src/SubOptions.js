import React from "react";
import "./SubOptions.css";

function SubOptions() {
  return (
    <div className="subOptions">
      <select name="lang" id="lang" className="subOptions__list">
        <option value="Eng">English</option>
        <option value="HI">HI</option>
        <option value="TA">TA</option>
        <option value="TE">TE</option>
        <option value="KN">KN</option>
        <option value="ML">ML</option>
      </select>
    </div>
  );
}

export default SubOptions;
