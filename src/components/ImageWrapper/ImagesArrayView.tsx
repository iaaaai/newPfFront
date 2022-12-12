import React, { useEffect, useState } from "react";
import Image from 'next/image';
import styled, { css } from "styled-components";
import { mediaQuery } from "../../themes";
import { useWindowSize } from "../useEffects/useWindowSize";
import parse from 'html-react-parser';

type Props = {
  imagesArray: any[];
  imagesWidth: number;
  imagesHeight: number;
  actionFunc?: string;
  actionFuncTitle?: string;
  actionFuncDitail?: string;
};

export const ImagesArrayView: React.FC<Props> = (props) => {
  const [ overlay, setOverlay ] = useState(false);
  const [ actionSet, setActionSet ] = useState(<div></div>)
  const [ scrollVal, setScrollVal ] = useState<number>(0)
  const { height, width } = useWindowSize();

  const actionfunction = (imageTitle: string, imageDetail: string, imageSrc: string, imageAlt: string, funcType: string | undefined) => {
    let actionResult = <div></div>;
    if (funcType) {
      switch (funcType){
        case 'big':
          setOverlay(true)
          setActionSet(
            <>
              <ImageFig>
                <Image
                    src= {imageSrc}
                    alt= {imageAlt}
                    width= { width * 0.7}
                    height= { height * 0.6}
                    className='is-big'
                  />
              </ImageFig>
              <ImageCaption>{parse(imageTitle)}<p>{parse(imageDetail)}</p></ImageCaption>
            </>
          )
          break;
        case 'balloon':
          actionResult = <div></div>
          break;
        default:
          actionResult = <div></div>;
          break;
      }
    }
    return actionResult
  }

  const images = () => {
    const imageName = props.imagesArray.map((image, index) => {
      const result =
      <ImageWapper>
        <ImageFig key={image.id}>
          <Image
            src= {image.src}
            alt= {image.alt}
            width= {props.imagesWidth}
            height= {props.imagesHeight}
            id={image.id}
            onClick={() => actionfunction(image.title, image.detail, image.src, image.alt, props.actionFunc)}
          />
        </ImageFig>
        <ImageEasyCaption>{image.title}<p>{image.explanation}</p></ImageEasyCaption>
      </ImageWapper>
      return result;
    })
    return imageName
  }

  useEffect(
    () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      setScrollVal(scrollY);
      document.body.style.position = overlay ? 'fixed' : 'unset';
      overlay ? document.body.style.top = `${scrollY * -1}px` : window.scroll(0, scrollVal);
    },
    [ overlay ]
  );

  return (
    <>
    <Wapper>
      { images() }
    </Wapper>
    <Overlay className={ overlay ? 'is-show' : '' }>
      <OverlayInner>
        <OverlayClose onClick={ () => setOverlay(false) } />
        { props.actionFunc ? actionSet : '' }
      </OverlayInner>
    </Overlay>
    </>
  )
}

export default ImagesArrayView;

const Wapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  ${mediaQuery.underTablet(css`

  `)}
`

const ImageWapper = styled.div`
  display: block;
  width: 22%;
  margin: 48px 0 0;

  ${mediaQuery.underTablet(css`
    width: 46%;
  `)}
`

const ImageFig = styled.figure`
  margin: 0;

  ${mediaQuery.underTablet(css`
    margin: 0;
  `)}

  span {
    width: 100% !important;

    img {
      object-fit:cover;
    }
  }
`

const ImageEasyCaption = styled.figcaption`
  font-size: 16px;
  margin-top: 8px;

  p {
    font-size: 14px;
    margin: 4px 0 0 0;
  }
`

const ImageCaption = styled.figcaption`
  font-size: 24px;
  p {
    font-size: 14px;
  }

  ${mediaQuery.underTablet(css`
    font-size: 24px;
    p {
      font-size: 12px;
    }
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

  span {

    + img {

    }
  }
`

const OverlayInner = styled.div`
  background: white;
  padding: 32px 48px;
  margin: 24px;
  border-radius: 4px;
  position: relative;
  overflow-y: overlay;

  ${mediaQuery.underTablet(css`
    padding: 24px 24px;
    margin: 24px 0;
  `)}
`

const OverlayClose = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  display: brock;
  background: url("images/icon/close.png") no-repeat;
  margin: 0 0 16px auto;
  background-size: contain;
`