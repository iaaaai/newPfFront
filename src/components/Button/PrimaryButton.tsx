import * as React from "react";
import styled, { css } from "styled-components";

import { colors, mediaQuery, font } from "../../themes";

type Props = {
  subText?: string;
  text: string;
  href?: string;
  isBlank?: boolean;
};

export const PrimaryButton: React.FC<Props> = (props) => {
  return (
    <Wapper>
      {props.subText && <Sub>{props.subText}</Sub>}
      {
        <Inner href={props.href}>
          {props.text}
        </Inner>
      }
    </Wapper>
  )
}

const Wapper = styled.div`
  width: 100%;
  color: ${colors.grey200};
  letter-spacing: .04em;
  text-align: center;
  line-height: 1.5;
  font-size: 12px;
  ${mediaQuery.overTablet(css`
    font-size: 11px;
  `)}
`;

const Inner = styled.a`
  background-color: ${colors.accent100};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 16px;
  border: 1px solid ${colors.accent100};
  font-weight: ${font.weight.bold};
  line-height: 2;
  font-size: 12px;
  ${mediaQuery.overTablet(css`
    font-size: 14px;
    height: 60px;
    transition: background-color .3s, border-color .3s, color .3s;

    &:hover {
      color: ${colors.accent100};
      background-color: ${colors.white};
    }
  `)}
`;

const Sub = styled.p`
  margin-bottom: 8px;
  ${mediaQuery.overTablet(css`
    margin-bottom: 12px;
  `)}
`;

