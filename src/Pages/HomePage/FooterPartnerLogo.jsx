import React from "react";

const FooterPartnerLogo = (props) => {
  const { src, alt } = props;
  return (
    <a href="">
      <img src={src} alt={alt} />
    </a>
  );
};

export default FooterPartnerLogo;
