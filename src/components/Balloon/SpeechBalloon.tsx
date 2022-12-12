import * as React from "react";
import styled, { css } from "styled-components";
import parse from 'html-react-parser';
import { colors, mediaQuery, font } from "../../themes";

type Props = {
  innerText: string;
};

export const SpeechBalloon: React.FC<Props> = ({innerText}) => {
  return (
    <Inner>
      <Text>
      {parse(innerText)}
      </Text>
    </Inner>
  )
}

const Inner = styled.div`
  display: inline-block;
  background-color: ${colors.white};
  position: relative;
  margin-bottom: 13px;
  filter: drop-shadow(0px 0px 1px ${colors.grey300});
  border-radius: 60px;  

  ${mediaQuery.overTablet(css`
    margin-bottom: 8px;
  `)}

  &::after {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    width: 0px;
    height: 0px;
    margin: auto;
    border-style: solid;
    border-color: ${colors.white} transparent transparent transparent;
    border-width: 20px 0px 4px 24px;
    bottom: -12px;

    ${mediaQuery.overTablet(css`
      border-width: 20px 0px 4px 24px;
      bottom: -19px;
    `)}
  }
`;

const Text = styled.p`
  text-align: center;
  color: ${colors.grey200};
  letter-spacing: 0.13em;
  font-weight: ${font.weight.bold};
  margin: 0;
  padding: 12px 20px 12px;
  font-size: 12px;
  line-height: 1.45;

  ${mediaQuery.overTablet(css`
    padding: 12px 24px 12px;
    font-size: 12px;
  `)}
`;
