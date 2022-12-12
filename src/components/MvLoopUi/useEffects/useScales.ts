import { useEffect, useState } from 'react';
import { codeScales } from '../materials';

export const useScales = (
  callback: Function,
  heightLength: number,
  keyName: string,
  pitch: number) => {
  const scaleSet = () => {
    const keyScale = codeScales(keyName);
    let array = [], beforeCode = '', pitchCount = pitch, scaleCount = 0;
    for (let i = 0; i < heightLength; i++) {
      if(beforeCode !== '' && ['B','B#','A#'].includes(`${keyScale[scaleCount]}`)) {
        pitchCount--;
        beforeCode = '';
      }
      scaleCount = scaleCount >= keyScale.length ? 0 : scaleCount;
      beforeCode = ['C','C#'].includes(`${keyScale[scaleCount]}`) ? keyScale[scaleCount]: beforeCode;
      array.push(`${keyScale[scaleCount]}${pitchCount}`);
      scaleCount++;
    }
    return array
  }
  const [scales, setScales] = useState(scaleSet());
  useEffect(() => {
    setScales(scaleSet());
  }, [heightLength, keyName, pitch]);
  return scales;
}