import React, { useState } from "react";
import styled, {css} from "styled-components";
import { colors, mediaQuery } from "../../themes";
import { OverlayBalloon } from "../Balloon";

type Props = {
  widthLength: number
  countState: (num: number) => void
  delayState: (num: number) => void
  runningState: (b: boolean) => void
  runningBarState: (b: boolean) => void
  KeyNameState: (num: string) => void
  pitchState: (num: number) => void
  running: boolean
  delay: number
  loopBpms: number[]
  keyNames: string[]
  pitch: number
};

export const LooperHandler = (props: Props) => {
  const [ description, setDescription] = useState(false);
  const updateDescription = (b: boolean): void => setDescription(b);

  const handleDelayChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    props.delayState(Number(event.target.value));
  }
  const handlePitchChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    props.pitchState(Number(event.target.value));
  }

  const handleScaleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    props.KeyNameState(event.target.value);
  }

  const handleRunningChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    props.runningState(event.target.checked);
    if(!event.target.checked) {
      props.runningBarState(false);
      props.countState(props.widthLength);
    } else {
      props.runningBarState(true);
    }
  }

  return (
    <>
    <ToneLoopUi>
      <OverlayBalloon descriptionState={description} updateDescription={updateDescription}/>
      <input type="button" className='question' onClick={() => setDescription(true)} />
      <input type="checkbox" id='onoff' checked={props.running} onChange={handleRunningChange} />
      <label htmlFor={'onoff'}></label>
      <input type="button" className='reset' onClick={() => props.countState(props.widthLength)} />
      <input type="button" className='pause' onClick={() => props.runningState(false)} />
      <SelectContainer>
        <select value={props.delay} onChange={handleDelayChange}>
          {props.loopBpms.map((bpm, index) => (<option key={index} value={bpm}>{bpm}</option>))}
        </select>
      </SelectContainer>
      <SelectContainer>
        <select onChange={handleScaleChange}>
          {props.keyNames.map((name, index) => (<option key={index} value={name}>{name}</option>))}
        </select>
      </SelectContainer>
      <SelectContainer>
        <select value={props.pitch} onChange={handlePitchChange}>
          <option value={7}>hight</option>
          <option value={5}>middle</option>
          <option value={3}>Low</option>
        </select>
      </SelectContainer>
    </ToneLoopUi>
    </>
  )
}

const ToneLoopUi = styled.div`
  background-color: none;
  position: absolute;
  display: flex;
  padding-top: 1px;
  z-index: 10;
  top: 0;
  right: 0;

  input[type=checkbox]#onoff {
    display: none;

    + label {
      width: 36px;
      height: 36px;
      cursor: pointer;
      border-radius: 2px;

      &::after {
        content: "";
        width: 36px;
        height: 36px;
        display: block;
        background: ${colors.looperUi.start} url("images/rooperIcon/raw.png") no-repeat;
        position: absolute;
        display: inline-block;
        transition: .2s ease;
        border-radius: 50%;
      }
      &:hover::after {
        border-radius: 10%;
        opacity: .8;
      }
    }

    &:checked {
      + label {
        &::after {
          background: ${colors.looperUi.stop} url("images/rooperIcon/stop.png") no-repeat;
        }
      }
    }
  }

  input,
  label,
  #onoff + label::after {
    ${mediaQuery.superMin(css`
      width: 26px !important;
      height: 26px !important;
      background-size: contain !important;
    `)}
  }  
  
  .reset,
  .pause,
  .question {
    width: 36px;
    height: 36px;
    cursor: pointer;
    transition: .2s ease;
    border-radius: 50%;
    &:hover {
      border-radius: 10%;
      opacity: .8;
    }
  }
  .pause {
    background: ${colors.looperUi.pause} url("images/rooperIcon/pause.png") no-repeat;
  }
  .reset {
    background: ${colors.looperUi.reset} url("images/rooperIcon/reset.png") no-repeat;
  }
  .question {
    background: ${colors.looperUi.question} url("images/rooperIcon/question.png") no-repeat;
  }
`;

const SelectContainer = styled.div`
  position: relative;

  select {
    padding: 9px 14px 9px 6px;
    border: ${colors.grey400} 1px solid;
    color: ${colors.grey300};
    cursor: pointer;

    ${mediaQuery.superMin(css`
      padding: 4px 14px 4px 6px;
    `)}
  }
  &::after {
    content: "";
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #ff8725;    
    position: absolute;
    right: 4px;
    top: 45%;
    width: 0;
  }
`;
