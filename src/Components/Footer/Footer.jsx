import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src="/logo_footer.png" alt="Logo" />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
