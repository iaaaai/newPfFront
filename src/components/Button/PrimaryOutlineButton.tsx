import * as React from "react";
import styled, { css } from "styled-components";

import { colors, mediaQuery, font } from "../../themes";

type Props = {
  subText?: string;
  text: string;
  href?: string;
  isBlank?: boolean;
};

export const PrimaryOutlineButton: React.FC<Props> = (props) => {
  return (
    <Wapper>
      {props.subText && <Sub>{props.subText}</Sub>}
      {
        props.isBlank ?
        <Inner href={props.href} target='_blank' rel='noopener'>
          {props.text}
        </Inner> :
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
  background-color: ${colors.white};
  color: ${colors.primary100};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 8px;
  border: 1px solid ${colors.primary100};
  font-weight: ${font.weight.bold};
  line-height: 1.4;
  font-size: 12px;
  height: 48px;
  ${mediaQuery.overTablet(css`
    font-size: 14px;
    line-height: 1.4;
    height: 60px;
    transition: background-color .3s, border-color .3s, color .3s;

    &:hover {
      color: ${colors.white};
      background-color: ${colors.primary100};
    }
  `)}
`;

const Sub = styled.p`
  margin-bottom: 8px;
  ${mediaQuery.overTablet(css`
    margin-bottom: 12px;
  `)}
`;
