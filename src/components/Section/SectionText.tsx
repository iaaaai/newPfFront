import React, { useState } from "react";
import styled, { css } from "styled-components";
import Image from 'next/image';
import { mediaQuery } from "../../themes";

type Props = {
  text?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
};

export const SectionText: React.FC<Props> = (props) => {
  let content = <div></div>
  if( props.src ){
    content =
    <>
      <ImageText>
        <ImageWrapper>
          <Image
              src = { props.src }
              alt = { props.alt }
              width = { props.width }
              height = { props.height }
            />
        </ImageWrapper>
        <p>{ props.text }</p>
      </ImageText>
    </>
  } else {
    content =
    <>
      <Text>
        <p>{ props.text }</p>
      </Text>
    </>
  }

  return (
    <>
      {content}
    </>
  )
}

const Text = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 300;
  
  p {
    margin: 0;
  }
`

const ImageWrapper = styled.div`
  width: 100%;

  span {
    width: 100% !important;

    img {
      object-fit:cover;
    }
  }

  ${mediaQuery.underTablet(css`
    margin-top: 48px;
  `)}
`

const ImageText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    margin: 0 0 0 32px;
    font-size: 14px;
    font-weight: 300;
  }

  ${mediaQuery.underTablet(css`
    margin: 0;
    display: block;

    p {
      margin: 32px 0 0;
      font-weight: 300;
    }
  `)}
`
