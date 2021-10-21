import React from "react";
import { FooterContainer } from "./footer.styles";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="footer__content">
        <div className="socials">
          <button className="social">
            {" "}
            <img src="/assets/twitter.png" alt="" />
          </button>
          <button className="social">
            {" "}
            <img src="/assets/dribble.png" alt="" />
          </button>

          <button className="social">
            {" "}
            <img src="/assets/github.png" alt="" />
          </button>
        </div>
        <div className="copy">
          <p>
            &copy; Build with Love by <span> Rahan Bouess</span>
          </p>
        </div>
      </div>
    </FooterContainer>
  );
}
