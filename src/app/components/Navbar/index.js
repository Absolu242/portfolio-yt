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
            src={active ? "/assets/IconsClose.png" : "/assets/Menu.png"}
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
            <a className="link" href="#aboutme">
              About me.
            </a>
          </li>
          <li>
            <a className="link" href="#services">
              Services.
            </a>
          </li>
          <li>
            <a className="link" href="#mywork">
              My Work.
            </a>
          </li>
          <li>
            <a className="link" href="#contact">
              Contact me.
            </a>
          </li>

          <li className="social">
            <button>
              <img src="/assets/twitter.png" alt="" />
            </button>
            <button>
              <img src="/assets/github.png" alt="" />
            </button>
          </li>
        </ul>
      </NavItems>
    </NavContainer>
  );
}
