import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="left">
        <span>
          Designed and build by{" "}
          <a
            href="http://muhammadzuhaib.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Muhammad Zohaib
          </a>
        </span>
      </div>
      <div className="right">
        <span>
          For keep supporting me{" "}
          <a
            href="https://www.buymeacoffee.com/muhammadzohaib"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy me a ☕
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
