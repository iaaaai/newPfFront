import * as React from "react";
import styled, { css } from "styled-components";

import { colors, mediaQuery, font } from "../../themes";
import { TitleLogo } from "../Logo/Title";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <Inner>
        <Logo>
          <TitleLogo />
        </Logo>
        <Copyright>©︎{year} Kit&M&#39;s design</Copyright>
      </Inner>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  background-color: ${colors.primary100};
  color: ${colors.white};
  padding: 48px 6.4%;
  ${mediaQuery.overTablet(css`
    padding: 64px 4.9% 104px;
  `)}

  li {
    list-style: none;
  }
`;

const Inner = styled.div`
  ${mediaQuery.overTablet(css`
    margin: 0 auto;
    max-width: 1160px;
  `)}
`;

const Logo = styled.p`
  line-height: 1;
  width: 100%;

  ${mediaQuery.underTablet(css`
    margin-right: 20px;
    width: 172px;
    display: flex;
    align-items: center;

    svg {
      width: 100%;
    }
  `)}
`;

const Copyright = styled.p`
  font-family: ${font.family.en};
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: .13em;
  color: ${colors.white};
  margin-top: 22px;

  ${mediaQuery.overTablet(css`
    margin-top: 0;
  `)}
`;
