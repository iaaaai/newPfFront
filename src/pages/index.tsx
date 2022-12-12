import type { NextPage } from "next";
import React from 'react'
import Head from "next/head";
import styled, { css } from "styled-components";
import MainHeader from "../components/Header/MainHeader";
import MvLoopUi from "../components/MvLoopUi";
import SendMail from "../components/SendMail/SendMail";
import ImagesArrayView from "../components/ImageWrapper/ImagesArrayView";
import { SectionTitle, SectionText, SnsSection } from "../components/Section";
import { workImage, skillImage, aboutText, contactText, experienceText } from "../components/SectionMaterial/SectionMaterial";
import Footer from "../components/Footer/Footer";
import { colors, mediaQuery, objectSize } from "../themes";

const mainPage: NextPage = () => {

  return (
    <>
      <Head>
        <title>キトアンドエムズデザイン</title>
        <meta name="description" content="" />
        <style>@import url(https://fonts.googleapis.com/earlyaccess/nicomoji.css);</style>
        <style>@import url(https://fonts.googleapis.com/css2?family=Chango&display=swap);</style>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <MainHeader />
      <MainvisualWrapper>
        <MvLoopUi></MvLoopUi>
      </MainvisualWrapper>
      <MainvisualUnder />
      <SnsSection />
      <MainContentsWrapper>
        <SectionContainer id="about">
          <SectionTitle
            titleText= "Kit & M's Design？"
          ></SectionTitle>
          <SectionText
            text= {aboutText}
            src='/images/back_5.png'
            alt=""
            width= {340}
            height= {240}
          ></SectionText>
        </SectionContainer>
        <SectionContainer id="experience">
          <SectionTitle
            titleText= 'experience？'
          ></SectionTitle>
          <SectionText
            text= { experienceText }
          />
          <SectionContentWrapper>
            <ImagesArrayView
              imagesArray = {workImage}
              imagesWidth = {170}
              imagesHeight = {120}
              actionFunc = {'big'}
            ></ImagesArrayView>
          </SectionContentWrapper>
        </SectionContainer>
        <SectionContainer id="skills">
          <SectionTitle
            titleText= 'skills？'
          ></SectionTitle>
          <SectionContentWrapper>
          </SectionContentWrapper>
        </SectionContainer>
        <SectionContainer id="contact">
          <SectionTitle
            titleText= 'contact？'
          ></SectionTitle>
          <SectionText
            text= { contactText }
          />
          <SendMail/>
        </SectionContainer>
      </MainContentsWrapper>
      <BottomWrappeer>
        <BottomInner>
          <Notes>
            <p>※このサイトの制作環境：<br />MacbookPro(M1)/VsCode/Docker/React+Next.js+TypeScript+Rails7(api)/Illustrator/photoshop/その他</p>
          </Notes>
        </BottomInner>
      </BottomWrappeer>
      <Footer />
    </>
  )
}

export default mainPage;

const MainvisualWrapper = styled.section`
  background-color: ${colors.looper.back};
  background-size: cover;
  background-position: 55% 0px;
  position: relative;
  width: 100%;
  height: calc(100vh - ${objectSize.header_over});
  overflow: hidden;

  ${mediaQuery.underTablet(css`
    height: calc(100vh - ${objectSize.header_min});
  `)}
`;

const MainvisualUnder = styled.div`
  width: 100%;
  height: 184px;
  background: antiquewhite;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    background: white;
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 50px;
    position: absolute;
    z-index: 1;
    top: 164px;
  }

  &::after {
    content: "";
    background: white;
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 50px;
    position: absolute;
    z-index: 1;
    top: 164px;
  }
`;

const MainContentsWrapper = styled.div`
  width: 100%;
  padding: 0;
`
const SectionContainer = styled.section`
  width: 100%;
  padding: 81px 48px 0;
  margin: 81px 0 0;
  border-top: 1px solid #e3e3e3;

  &:first-child {
    border-top: none;
    margin-top: 40px;

    &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: antiquewhite;
    border-radius: 50%;
    position: relative;
    }

    h2 {
      &::before {
        ${mediaQuery.underSp(css`
          height: 72px;
          margin-bottom: -55px;
        `)}
      }
    }
  }

  h2 {
    margin-top: 0;
  }

  ${mediaQuery.underTablet(css`
    padding: 72px 20px 0 20px;
  `)}
`
const SectionContentWrapper = styled.div`
  padding: 24px 0 0;
  background: ${colors.white};
  margin: 0;
  display: flex;

  ${mediaQuery.underTablet(css`
    padding: 0;
    margin: 0 auto 12px;
  `)}
`

const BottomWrappeer = styled.section`
  width: 100%;
  background-color: ${colors.grey600};
  padding: 48px 6.4%;
  margin-top: 80px;
  ${mediaQuery.overTablet(css`
    padding: 64px 4.9% 32px;
  `)}

  li {
    list-style: none;
  }
`;

const BottomInner = styled.div`
  margin: 0;
`;

const Notes = styled.div`
  font-size: 11px;
  color: ${colors.grey300};

  p {
    text-align: left;
    word-break: break-word;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 32px;

  ${mediaQuery.underTablet(css`
    div:first-child {
      margin-bottom: 34px;
    }
  `)}

  ${mediaQuery.overTablet(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    div:first-child {
      margin-right: 12px
    }
  `)}
`;