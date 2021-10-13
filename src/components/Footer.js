import React from "react";

function Footer({ answered }) {
  return <div className="sticky">{answered.length} of 5 Answered</div>;
}

export default Footer;
