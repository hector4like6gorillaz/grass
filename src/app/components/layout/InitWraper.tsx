import React from "react";
import { GlobalStyle } from "../../../styles/createGlobalStyles";
import BodyColorChange from "../BodyColorChange";
const prefix = "/grass";
const HeaderFooterWraper = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <BodyColorChange />
      <head>
        <title>El Hector</title>
        <link rel="icon" href={`${prefix}/favicon.ico`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link key={0} rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@1,700&family=Raleway:wght@100;400&family=Source+Sans+Pro:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </head>

      {children}
    </div>
  );
};

export default HeaderFooterWraper;
