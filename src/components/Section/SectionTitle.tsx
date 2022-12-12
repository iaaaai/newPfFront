import * as React from "react";
import styled, { css } from "styled-components";

import { colors, mediaQuery, font } from "../../themes";

type Props = {
  subText?: string;
  titleText: string;
};

export const SectionTitle: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <Titles>
        { props.titleText }
      </Titles>
      {props.subText && props.subText }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: ${colors.grey300};
`

const Titles = styled.h2`
  font-size: 36px;
  font-weight: 600;
  text-align: left;
  font-weight: 400;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
  font-family:
    'Chango',
    "ヒラギノ丸ゴ Pro W4",
    "ヒラギノ丸ゴ Pro",
    "Hiragino Maru Gothic Pro",
    "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro",
    "HG丸ｺﾞｼｯｸM-PRO",
    "HGMaruGothicMPRO";
  color: ${colors.grey200};

  ${mediaQuery.underTablet(css`
    font-size: 30px;
  `)}

  ${mediaQuery.underSp(css`
    line-height: 1;
  `)}

  &::before {
    content: "";
    position: relative;
    width: 100%;
    z-index: -1;
    height: 64px;
    background-color: #ffe564;
    display: block;
    margin-bottom: -40px;

    ${mediaQuery.underTablet(css`
      height: 64px;
      margin-bottom: -32px;
  `)}
  }
`