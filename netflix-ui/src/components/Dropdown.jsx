import React, { useState } from "react";
import nani from "../assets/nani.png";
import grandMaster from "../assets/grandMaster.png";
import helloGuys from "../assets/helloGuys.png";
import pencil from '../assets/YoshimuraOld.webp';
import account from '../assets/account.png';

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="Dropdown">
      <div className="menu-container">
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img
            src="http://occ-0-1723-6.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABa4MDmonLTXmSSsQuWBl7Ynbv8gadOY2gloUseD0EfFTYs5NDFklCKMFaBWssY8dXAreu4-QNruxmIjwzbGx8y_SZA1pWCxVI1Gc.png?r=7f1"
            alt="user"
          />
        </div>
        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <h3 className="h3">
            Very Metal
            <br />
            <span className="spart">Welecome</span>
          </h3>
          <ul>
            <DropdownItem img={nani} text={"nani?"} />
            <DropdownItem img={grandMaster} text={"Grand Master"} />
            <DropdownItem img={helloGuys} text={"Hello Guys"} />
            <DropdownItem img={pencil} text={"Manage Profiles"} />
            <DropdownItem img={account} text={"Account"} />
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img} alt="img"></img>
      <a>{props.text}</a>
    </li>
  );
}
