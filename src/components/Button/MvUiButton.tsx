import * as React from "react";
import Image from 'next/image';
import styled, { css } from "styled-components";

import { colors, mediaQuery } from "../../themes";

type Props = {
  icon: string;
};

export const MvUiButton: React.FC<Props> = (props) => {

  return (
    <Wapper>
      <Image
        src={props.icon}
        alt="Picture of the author"
        width="100%"
        height="100%"
      />
    </Wapper>
  )
}

const Wapper = styled.div`
  width: 36px;
  height: 36px;  
  display: block;
  border-radius: 5%;
  background-color: rgba(0,0,0,0.7);
  top: 0;
  text-align: center;
  cursor: pointer;

  + div {
    margin-left: 8px;
  }

  &:hover {
    opacity: 0.8;
  }

  ${mediaQuery.overTablet(css`
  `)}
`;

const Icon = styled.div`
  ${mediaQuery.underSp(css`
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
