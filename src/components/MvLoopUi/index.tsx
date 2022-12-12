import React, { useState } from "react";
import styled, { css } from "styled-components";

import { LooperSetUp } from "./LooperSetUp"
import { LooperHandler } from "./LooperHandler"
import { useWindowSize } from "../useEffects/useWindowSize";
import { useInterval, useTone, useToneLoop, useScales } from "./useEffects";
import { loopBpms, keyNames, firstChecks } from './materials';
import { mediaQuery, objectSize } from "../../themes";

const widthLength: number =  16;

export const MvLoopUi: React.FC = () => {
  const [ mvHide, setMvHide ]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
    ] = useState(true);
  const { height, width } = useWindowSize();
  const heightLength =  Math.floor(height / (width / widthLength));

  const [ checks, setChecks ]: any = useState(new Array(widthLength).fill([]));
  const updateChecks = (arr: any[]): {} => setChecks(arr);

  const [ count, setCount ] = useState(widthLength);
  const updateCount = (nmb: number): void => setCount(nmb);

  const [ delay, setDelay ] = useState(500);
  const updateDelay = (nmb: number): void => setDelay(nmb);

  const [ running, setRunning ] = useState(false);
  const updateRunning = (b: boolean): void => setRunning(b);

  const [ runningBar, setRunningBar ] = useState(false);
  const updateRunningBar = (b: boolean): void => setRunningBar(b);

  const [ keyName, setKeyName ] = useState('C');
  const updateKeyName = (st: string): void => setKeyName(st);

  const [ pitch, setPitch ] = useState(7);
  const updatePitch = (nmb: number): void => setPitch(nmb);

  const [ note, setNote ] = useState(0);
  const updateNote = (nmb: number): void => setNote(nmb);

  const [ pushSound, setPushSound ] = useState(false);
  const updatePushSound = (b: boolean): void => setPushSound(b);

  const [ duration ] = useState('8n');

  const scales = useScales(() => {}, heightLength, keyName, pitch);
  const firstChecksTrue = firstChecks[Math.floor( Math.random() * 2 )];

  const firstCheckNote = () => {
    if (checks[0].length === 0) {
      const justNote: any[] =  firstChecksTrue;
      setChecks(justNote);
    }
  }
  firstCheckNote()

  useInterval(() => {
    const loopCount = count >= (widthLength - 1) ? 0 : count + 1;
    setCount(loopCount);
  }, running ? delay : null);

  useScales(() => {}, heightLength, keyName, pitch);
  useTone(checks, scales, note, duration, pushSound);
  useToneLoop(() => {}, scales, count, checks, duration);

  return (
    <>
      <LooperHandler
        widthLength = {widthLength}
        countState = {updateCount}
        delayState = {updateDelay}
        runningState = {updateRunning}
        runningBarState = {updateRunningBar}
        KeyNameState = {updateKeyName}
        pitchState = {updatePitch}
        running = {running}
        delay = {delay}
        loopBpms = {loopBpms}
        keyNames = {keyNames}
        pitch = {pitch}
      />
      <LooperSetUp
        widthLength = {widthLength}
        heightLength = {heightLength}
        firstChecksTrue = {firstChecksTrue}
        checks = {checks}
        checksState = {updateChecks}
        runningBar = {runningBar}
        count = {count}
        pushSoundState = {updatePushSound}
        noteState = {updateNote}
      />
      <MainvisualImage onClick={()=> setMvHide(false)} className={mvHide ? '' : 'is-hide'}></MainvisualImage>
    </>
  );
}

export default MvLoopUi

const MainvisualImage = styled.div`
  background-image: url("/images/town.png");
  background-size: cover;
  background-position: 55% 0px;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: calc(100vh - ${objectSize.header_over});
  overflow: hidden;
  bottom: 0;
  left: 0;
  right: 0;
  transition: .3s ease;
  opacity: 1;
  cursor: pointer;

  &.is-hide {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: -1;
  }

  ${mediaQuery.overMinpc(css`
    height: calc(100vh - ${objectSize.header_min});
  `)}
`;