import React from "react";
import { FooterContainer } from "./footer.styles";

export default function Footer() {
  return (
    <FooterContainer
      style={{
        backgroundImage: `url(/assets1/footerShape.png)`,
      }}
    >
      <div className="footer__content">
        <div className="footer__section">
          <div className="logo">Rogan.</div>
          <p className="text">info@rogan.com</p>
          <p className="red">720.661.2231</p>
        </div>

        <div className="footer__section">
          <div className="title">Services</div>
          <ul>
            <li>
              <a href="http://google.com ">Web Design</a>
            </li>
            <li>
              <a href="http://google.com ">Development</a>
            </li>
            <li>
              <a href="http://google.com ">Wordpress</a>
            </li>
            <li>
              <a href="http://google.com ">Online marketing</a>
            </li>
            <li>
              <a href="http://google.com ">Content</a>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <div className="title">About us</div>
          <ul>
            <li>
              <a href="http://google.com ">About us</a>
            </li>
            <li>
              <a href="http://google.com ">Work Portfolio</a>
            </li>
            <li>
              <a href="http://google.com ">Team</a>
            </li>
            <li>
              <a href="http://google.com ">Plan & Pricing</a>
            </li>
            <li>
              <a href="http://google.com ">News</a>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <div className="title">Our Adress</div>
          <p className="text">
            00 Orville Road Apt. 728 <br /> California , USA
          </p>

          <a href="http://google.com" className="social">
            {" "}
            <img src="/assets1/Google.png" alt="" />
          </a>

          <a href="http://google.com" className="social">
            {" "}
            <img src="/assets1/Twitter.png" alt="" />
          </a>
        </div>
      </div>
    </FooterContainer>
  );
}
