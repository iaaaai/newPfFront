import React from "react";
import styled, { css } from "styled-components";
import { mediaQuery } from "../../themes";
import Router from 'next/router';

type Props = {
  subText?: string;
};

export const TitleLogo: React.FC<Props> = (props) => {
  return (
    <>
      <Logo onClick={()=> Router.push('/')}>{`Kit&M${"'"}s${' '}design`}</Logo>
      { props.subText && <p>{ props.subText }</p>}
    </>
  )
};

const Logo = styled.span`
  font-family: 'Chango', cursive;
  font-size: 24px;
  cursor: pointer;

  span {
    display: block;
  }
  + p {
    margin: 0 0 10px 0;
    font-weight: 200;
    font-size: 14px;

    ${mediaQuery.underTablet(css`
      font-size: 12px;
    `)}
  }

  ${mediaQuery.underTablet(css`
    font-size: 18px;
  `)}
`;