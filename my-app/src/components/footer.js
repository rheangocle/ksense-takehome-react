import React from "react";
import styled from "@emotion/styled";
import { colors, ApolloIcon } from "../styles";

/**
 * Footer is useless component to make our app look a little closer to a real website!
 */
const Footer = ({ children }) => {
  return (
    <FooterContainer>
      2021 ©{" "}
      <LogoContainer>
        <ApolloIcon width='100px' height='40px' />
      </LogoContainer>
    </FooterContainer>
  );
};

export default Footer;
