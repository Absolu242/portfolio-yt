import React, { useState } from "react";
import { NavContact, NavContainer, NavItems } from "./navbar.styles";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <NavContainer>
      <NavItems active={active}>
        <div className="logo">RB</div>
        <button className="menu" onClick={() => setActive((active) => !active)}>
          <img
            src={active ? "/assets1/IconsClose.png" : "/assets1/Menu.png"}
            alt="logo"
          />
        </button>
        <ul>
          <li>
            <a className="link" href="http://google.com">
              Home.
            </a>
          </li>
          <li>
            <a className="link" href="http://google.com">
              About Us.
            </a>
          </li>
          <li>
            <a className="link" href="http://google.com">
              Services.
            </a>
          </li>
          <li>
            <a className="link" href="http://google.com">
              Pages.
            </a>
          </li>
          <li>
            <a className="link" href="http://google.com">
              Contact.
            </a>
          </li>

          {/* <li className="social">
            <a href="http://google.com">
              <img src="/assets/facebook.png" alt="" />
            </a>
            <a href="http://google.com">
              <img src="/assets/twitter.png" alt="" />
            </a>
            <a href="http://google.com">
              <img src="/assets/github.png" alt="" />
            </a>
          </li> */}
        </ul>
      </NavItems>
    </NavContainer>
  );
}
