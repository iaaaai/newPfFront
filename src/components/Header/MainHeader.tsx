import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { PrimaryButton } from "../Button";
import { colors, mediaQuery, objectSize } from "../../themes";
import { TitleLogo } from "../Logo/Title";
import { SectionTitles } from "../SectionMaterial/SectionMaterial";
import parse from 'html-react-parser';

const MainHeader: React.FC = () => {
  const [ navMenu, setNavMenu ] = useState(false);
  const [ scrollVal, setScrollVal ] = useState<number>(0)
  const handleShowNavMenu: React.ChangeEventHandler<HTMLInputElement> = (event) => { setNavMenu(event.target.checked) }

  const linkResult = (material: any) => {
    const result = (
      material.map((material: any, index: number) => (
        <LinkWarpper key={`nav_${index}`}>
          <InnerLink href={`#${material.titleId}`} onClick={() => setNavMenu(false)}>
            {material.titleText}
            <span>{parse(material.subText)}</span>
          </InnerLink>
        </LinkWarpper>
      ))
    )
    return result;
  }

  useEffect(
    () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      setScrollVal(scrollY);
      document.body.style.position = navMenu ? 'fixed' : 'unset';
      navMenu ? document.body.style.top = `${scrollY * -1}px` : window.scrollTo(0, scrollVal);
    },
    [ navMenu ]
  );

  return (
    <Header>
      <Inner>
        <LogoWrapper>
          <TitleLogo
            subText="kitahara's portfolio site"
          />
        </LogoWrapper>
        <Hamburger>
          <input type='checkbox' id={'nav-menu'} checked={navMenu} onChange={handleShowNavMenu}></input>
          <label htmlFor={'nav-menu'}><span></span></label>
        </Hamburger>
        <HamburgerMenu className={navMenu ? 'is-show' : ''}>
          <HamburgerLogoWrapper>
            <TitleLogo
              subText="kitahara's portfolio site"
            />
          </HamburgerLogoWrapper>
          <HamburgerMenuInner>
            { linkResult(SectionTitles) }
          </HamburgerMenuInner>
          <ContactButtonWrapper>
            <ContactButton href="#contact" onClick={() => setNavMenu(false)}>お問い合わせはこちらから</ContactButton>
          </ContactButtonWrapper>
        </HamburgerMenu>
        <Overlay onClick={() => setNavMenu(navMenu ? false : true)}></Overlay>
      </Inner>
    </Header>
  )
}

export default MainHeader

const Header = styled.header`
  background: ${colors.primary100};
  height: ${objectSize.header_min};
  position: sticky;
  top: 0;
  z-index: 30;

  ${mediaQuery.overTablet(css`
    height: ${objectSize.header_over};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  `)}

  ${mediaQuery.underTablet(css`
    border-bottom: 1px solid ${colors.grey500};
  `)}
`;

const Inner = styled.span`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: ${objectSize.header_min};
  padding: 0 20px;
  justify-content: space-between;

  ${mediaQuery.overTablet(css`
    height: ${objectSize.header_over};
    padding: 0 48px;
  `)}
  ${mediaQuery.underTablet(css`
    padding: 0 10px;
  `)}
`;

const LogoWrapper = styled.h1`
  color: ${colors.white};
  margin: 0;

  ${mediaQuery.underTablet(css`
    line-height: 1;
  `)}
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10;
  display: block;
  top: 0;
  right: 0;
  transition: .3s ease;
  background: rgba(100, 100, 100, .3);
  opacity: 0;
  display: none;
`

const HamburgerMenu = styled.div`
  display: block;
  position: absolute;
  width: 0%;
  height: 100vh;
  z-index: 15;
  transition: .3s ease;  
  top: 0;
  right: 0;

  a, div, h2 {
    display: none;
    opacity: 0;
  }

  &.is-show {
    background: rgba(255, 255, 255, .9);
    width: 50%;
    position: fixed;
    padding: 48px 20px;

    a, div, h2 {
      display: block;
      opacity: 1;
    }

    + ${Overlay} {
      display: block;
      opacity: 1;
      position: fixed;
    }
    ${mediaQuery.underTablet(css`
      width: calc(100vw * 0.82);
    `)}
  }
`

const HamburgerMenuInner = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid ${colors.grey400};
  padding: 24px 0 40px;

  + div {
    position: absolute;
    width: calc(100% - 40px);
    top: calc(100vh * 0.72);

    ${mediaQuery.underMin(css`
      top: unset;
      bottom: calc(100vh * 0.12);
    `)}
  }
`
const LinkWarpper = styled.li`
  + li {
    margin-top: 16px;
  }

  a {
    font-size: 20px;
    font-weight: 600;
    color: ${colors.grey200};

    span {
      display: block;
      font-size: 14px;
      margin-top: 6px;
      font-weight: 400;
    }
  }
`

const InnerLink = styled.a`
`

const HamburgerLogoWrapper = styled.h2`
  color: ${colors.primary200};
  border-top: 1px solid ${colors.grey400};
  margin: 0;
  padding: 16px 0;

  span {
    font-size: 26px;
    margin-bottom: 8px;
  }
  p {
    margin: 6px 0 10px 0;
    font-size: 16px;
  }

  ${mediaQuery.superMin(css`
    p {
      margin-top: 10px;
    }
  `)}
`

const Hamburger = styled.div`
  display: block;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 16px;
  right: 16px;
  z-index: 20;

  input[type=checkbox]#nav-menu {
    pointer-events: none;
    display: none;

    + label {
      align-items: center;
      justify-content: center;
      display: flex;
      padding: 50% 0;
      cursor: pointer;

      span {
        background: #ddd;
        display: block;
        height: 4px;
        width: 50px;
        position: relative;
        transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;

        ${mediaQuery.underTablet(css`
          width: 32px;
          height: 3px;
        `)}

        &::before,
        &::after {
          content: "";
          display: block;
          height: 100%;
          width: 100%;
          position: absolute;
          background: #fff;
          transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
        }

        &::before {
          top: 14px;

          ${mediaQuery.underTablet(css`
            top: 10px;
          `)}
        }
        &::after {
          bottom: 14px;

          ${mediaQuery.underTablet(css`
            bottom: 10px;
          `)}
        }
      }
    }
    &:checked {
      + label {
        span {
          background: rgba(0, 0, 0, 0);
          transition: 0.2192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;

          &::before,
          &::after {
            background: #444;
          }

          &::before {
            top: 0px;
            transform: rotate(-45deg);
          }
          &::after {
            bottom: 0px;
            transform: rotate(45deg);
          }
        }
      }
    }
  }
  ${mediaQuery.underTablet(css`
    width: 32px;
    height: 32px;
    top: 8px;
    right: 12px;
  `)}

`;

const ContactButtonWrapper = styled.div`
  width: 100%;
  color: ${colors.grey200};
  letter-spacing: .04em;
  text-align: center;
  line-height: 1.5;
  font-size: 12px;
  ${mediaQuery.overTablet(css`
    font-size: 11px;
  `)}
`

const ContactButton = styled.a`
  background-color: ${colors.accent100};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 16px;
  border: 1px solid ${colors.accent100};
  font-weight: 500;
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
`
