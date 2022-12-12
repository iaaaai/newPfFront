import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import parse from 'html-react-parser';
import { colors, mediaQuery, font } from "../../themes";

type Props = {
  descriptionState: boolean;
  updateDescription: (b: boolean) => void;
};

const text = `
  <h3>Kit&M'sポートフォリオサイトへようこそ</h3>
  <p>こちらのサイトのMVはステップループシーケンサーとなっています。
  <br />以下の手順でさわってください。</p>
  <ol>
    <li>1.クリックすると都市のイラストが消えます。</li>
    <li>2.四角マスをクリックすると音が登録され、<br />もう一度クリックすると登録が削除されます。</li>
    <li>3.右上のコントローラーは左から順に
      <ol>
        <li>1-- ？  この説明文の吹き出しが表示されます。</li>
        <li>2-- ▶︎   再生ボタン。登録された音が左から順に鳴ります。</li>
        <li>3-- |◀︎  再生中や一時停止中に頭出しします。</li>
        <li>4-- ||  一時停止します。</li>
        <li>5-- 数値/ms秒のスピードです。</li>
        <li>6-- マスの音のスケールを決めるキーの設定。</li>
        <li>7-- マスの音の高さを決める設定。</li>
      </ol>
    </li>
  </ol>
`

export const OverlayBalloon: React.FC<Props> = (props) => {
  const [ scrollVal, setScrollVal ] = useState<number>(0)
  const header = typeof window === 'object' ? document.querySelector('header') : false;
  if(header){
    props.descriptionState ? header.style.position = 'static' : header.style.position = 'sticky'
  }

  useEffect(
    () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      setScrollVal(scrollY);
      document.body.style.position = props.descriptionState ? 'fixed' : 'unset';
      props.descriptionState ? document.body.style.top = `${scrollY * -1}px` : window.scrollTo(0, scrollVal);
    },
    [ props.descriptionState ]
  );


  return (
    <>
    <Overlay className={ props.descriptionState ? 'is-show' : '' }>
      <OverlayInner>
        <OverlayClose onClick={ () => props.updateDescription(false) } />
        <Inner>
          <Text>
            {parse(text)}
          </Text>
        </Inner>
      </OverlayInner>
    </Overlay>
    </>
  )
}

const Inner = styled.div`
  width: 100%;
  padding: 0 24px 24px;

  ${mediaQuery.underTablet(css`
      font-size: 18px;
      padding: 16px 0 24px;
  `)}
`

const Text = styled.div`
  font-size: 20px;
  color: ${colors.grey200};
  text-align: center;
  font-family:
    "Nico Moji",
    "ヒラギノ丸ゴ Pro W4",
    "ヒラギノ丸ゴ Pro",
    "Hiragino Maru Gothic Pro",
    "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro",
    "HG丸ｺﾞｼｯｸM-PRO",
    "HGMaruGothicMPRO";

  h3 {
    font-size: 24px;
    margin-top: 0;

    ${mediaQuery.underTablet(css`
      font-size: 18px;
    `)}
  }

  p {
    margin-bottom: 16px;
    line-height: 1.5;
  }

  ol {
    width: 388px;
    overflow-x: hidden;
    text-align: left;
    margin: 0 auto;

    li {
      + li {
        margin-top: 8px;
      }
      ol {
        margin: 16px 0 0 16px;
        li + li {
          margin-top: 8px;
        }
        ${mediaQuery.underSp(css`
          padding: 0 16px;
          margin: 16px 0 0 0;
        `)}
      }
    }

    ${mediaQuery.underSp(css`
      width: 100%;
    `)}
  }

  ${mediaQuery.underTablet(css`
    font-size: 16px;
  `)}
  ${mediaQuery.underSp(css`
    text-align: left;
  `)}
`

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  display: flex;
  justify-content: center;
  top: 0;
  right: 0;
  transition: .3s ease;
  background: rgba(0, 0, 0, .3);
  position: fixed;
  opacity: 0;
  visibility: hidden;

  &.is-show {
    opacity: 1;
    visibility: visible;
    z-index: 9999;
  }
`

const OverlayInner = styled.div`
  height: calc(100vh * 0.7);
  background: white;
  padding: 32px 48px;
  margin: 150px 24px 0;
  border-radius: 4px;
  position: relative;
  overflow-y: overlay;

  ${mediaQuery.underTablet(css`
    height: calc(100vh * 0.8);
    padding: 24px 20px;
    margin: 100px 20px 0;
  `)}

  &::before {
    content: '';
    position: fixed;
    top: 130px;
    right: 294px;
    width: 0px;
    height: 0px;
    margin: auto;
    border-style: solid;
    border-color: ${colors.white} transparent transparent transparent;
    border-width: 20px 0px 4px 24px;
    transform: rotate(90deg);

    ${mediaQuery.underTablet(css`
      border-width: 20px 0px 4px 24px;
      top: 87px;
    `)}
    ${mediaQuery.underMin(css`
      border-width: 26px 0px 12px 28px;
      right: 287px;
      top: calc(100vh * 0.14);
      transform: rotate(50deg);
    `)}
    ${mediaQuery.superMin(css`
      right: 287px;
      left: 7px;
      top: calc(100vh * 0.13);
    `)}
  }
`

const OverlayClose = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  display: brock;
  background: url("images/icon/close.png") no-repeat;
  margin: 0 0 0 auto;
  background-size: contain;
  cursor: pointer;
`