import * as React from "react";
import styled, { css } from "styled-components";
import { colors, mediaQuery, font } from "../../themes";
import { SpeechBalloon } from "../Balloon";

export const SnsSection: React.FC = () => {
  return (
    <>
      <ButtonOuter>
        <ButtonInner href="https://github.com/">
          <BalloonInner>
            <BalloonText>
            {'このサイトのリポジトリはこちら'}
            </BalloonText>
          </BalloonInner>
          <SnsIcon />
          githubリポジトリ
        </ButtonInner>
      </ButtonOuter>
    </>
  )
}

const ButtonOuter = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  z-index: 1;
  top: calc(100vh + 134px);

  ${mediaQuery.underSp(css`
    display: block;
  `)}
`

const ButtonInner = styled.a`
  width: 100%;
  background-color: ${colors.accent100};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 16px;
  border: 1px solid ${colors.accent100};
  font-weight: ${font.weight.bold};
  line-height: 1.4;
  font-size: 24px;
  font-family: "Nico Moji";
  cursor: pointer;

  ${mediaQuery.overTablet(css`
    width: calc(100% * 0.7);
    font-size: 24px;
    height: 72px;
    transition: background-color .3s, border-color .3s, color .3s;

    &:hover {
      color: ${colors.accent100};
      background-color: ${colors.white};
    }
  `)}

  ${mediaQuery.underSp(css`
      margin: 0 auto;
  `)}
`

const SnsIcon = styled.i`
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: .2s ease;
  border-radius: 50%;
  background: url("images/icon/github-mark.png") no-repeat;
  background-size: cover;
  margin-right: 8px;
`

const ButtonDescription = styled.div`
  font-size: 14px;
  position: absolute;
  top: -32px;
  color: ${colors.grey200};

  &::before {
    content: "＼";
    position: relative;
    margin-right: 14px;
  }
  
  &::after {
    content: "／";
    position: relative;
    margin-left: 11px;
  }
`

const BalloonInner = styled.div`
  display: inline-block;
  background-color: ${colors.white};
  position: absolute;
  top: -100%;
  filter: drop-shadow(0px 0px 1px ${colors.grey300});
  border-radius: 6px;
  pointer-events: none;

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
    border-width: 20px 6px 4px 6px;
  }
`;

const BalloonText = styled.p`
  text-align: center;
  color: ${colors.grey200};
  letter-spacing: 0.13em;
  font-weight: ${font.weight.bold};
  margin: 0;
  padding: 12px 20px 12px;
  font-size: 20px;
  line-height: 1.45;

  ${mediaQuery.overTablet(css`
    padding: 12px 24px 12px;
    font-size: 20px;
  `)}
`;
