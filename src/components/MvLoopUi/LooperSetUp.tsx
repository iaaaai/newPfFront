import React from "react";
import styled, { css } from "styled-components";
import { colors, mediaQuery } from "../../themes";

type Props = {
  widthLength: number;
  heightLength: number;
  firstChecksTrue: any[];
  checks: any[];
  checksState:(arr: any[]) => {};
  runningBar: boolean;
  count: number;
  pushSoundState:(b: boolean) => void
  noteState:(nmb: number) => void;
};

export const LooperSetUp = (props: Props) => {
  const loopSetUp = () => {
    let items = [];
    for (let m = 0; m < props.widthLength; m++) {
      let heightItem = [];
      for (let n = 0; n < props.heightLength; n++) {
        heightItem.push(
        <ToneLoopInput
          key = {`${m}-${[n]}`}
          widthLeng = {props.widthLength}
        >
          <input
            type="checkbox"
            id={`${m}-${[n]}`}
            value={n}
            defaultChecked={
              props.firstChecksTrue[m].includes(n) ? true : false
            }
            onChange={(event) => {
              checkChange(m, n)
              handleNoteChange(event)
            }}
            ></input>
          <label htmlFor={`${m}-${[n]}`}></label>
        </ToneLoopInput>)
      }
      items.push(
        <ul key={`num_${m}`} className= {`noteNum num_${m} ${props.runningBar && props.count === m ? 'is-loop' : ''}`}>{heightItem}</ul>
      )
    }
    return items;
  }

  const checkChange = (num: number, note: number) => {
    if (props.checks[num].includes(note)) {
      props.checksState(props.checks.map((elm: number[], index: number) => (index === num ? elm.filter((e: number) => (e !== note)) : elm)))
    } else {
      props.checksState(props.checks.map((elm: number[], index: number) => (index === num ? [...elm, note] : elm)))
    }
  }

  const handleNoteChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    props.pushSoundState(event.target.checked)
    event.target.checked ? props.noteState(Number(event.target.value)) : event.target.checked
  }

  return(
    <>
      <ToneLoopBox>
        {loopSetUp()}
      </ToneLoopBox>
    </>
  )
}
const ToneLoopBox = styled.div`
  background-color: none;
  position: relative;
  width: 100vw;
  height: 100%;
  display: flex;
  overflow: hidden;

  > ul {
    list-style: none;
    padding: 0;
    margin: 0;

    &.is-loop {
      background-color: ${colors.looper.bar};
    }
  }
`;

const ToneLoopInput = styled.li.attrs(props => ({
  widthLeng: 16
}))`
  background-color: none;
  position: relative;
  width: calc(100vw / ${props => props.widthLeng});
  height: calc(100vw / ${props => props.widthLeng});
  border: solid ${colors.looper.backBorder} .5px;

  @media screen and (max-width: 768px) {
    height: calc(100vh / ${props => props.widthLeng});
  }  

  :hover {
    background-color: ${colors.looper.hover};
    opacity: .8;
  }

  input[type=checkbox] {
    display: none;

    + label {
      width: 100%;
      height: 100%;
      display: block;

      &::before {
        content: "";
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        background-color: none;
      }
    }

    &:checked {
      + label {
        &::before {
          background-color: ${colors.looper.active};
        }
      }
    }
  }
`;
