import { useEffect, useState } from 'react';
import * as Tone from 'tone'

export const useToneLoop = (
  callback: Function,
  scales: string[],
  count: number,
  checks: any[],
  duration: string
  ) => {
  const chordSet = () => checks.map((separateArray: number[]) => {
    const chord = separateArray.map((elm: number) => {
      if(scales[elm] && scales[elm]!= undefined) return `${scales[elm]}`
    })
    return chord.filter(v => v)
  })
  const [chordPlay, setChordPlay] = useState(() => chordSet());
  useEffect(
    () => {
      setChordPlay(chordSet())
    },
    [ scales, checks ]
  );
  useEffect(
    () => {
      const new_synth = new Tone.PolySynth(Tone.Synth).toDestination();
      new_synth.volume.value = -6
      const play: any | any[] = chordPlay[count];
      new_synth.triggerAttackRelease(play, duration);
    },
    [ count ]
  );
}