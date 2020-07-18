import React from "react";
import styled from "styled-components";

// import logo from "../../../assets/aero.png";

const Brand = () => {
  return (
    <LogoContainer>
      <LogoName>
        Mask <Highlight>Shop</Highlight>
      </LogoName>
    </LogoContainer>
  );
};

export default Brand;

const LogoName = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #66b7a1;
`;

const Highlight = styled.span`
  color: #488a78;
`;
const LogoContainer = styled.div`
  margin: auto 0;
`;
