import { useEffect, useRef } from 'react';
import * as Tone from 'tone'

export const useTone = (
  checks: any[],
  scales: string[],
  note: number,
  duration: string,
  pushSound: boolean,
  ) => {
  const ref = useRef(true);
  const noteNum = scales[note];
  useEffect(
    () => {
      if (ref.current) {
        ref.current = false;
        return;
      }
      if(pushSound){
        const new_synth = new Tone.PolySynth(Tone.Synth).toDestination();
        Tone.start();
        new_synth.triggerAttackRelease(noteNum, duration);
      }
    },
    [ checks ]
  );
}