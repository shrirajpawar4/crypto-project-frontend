import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
    <footer>
      <p>Made in India ⓒ {year}</p>
    </footer>
    );
}

export default Footer;