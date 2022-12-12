export const loopBpms = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000];
export const keyNames = ["C", "Cm", "C#", "C#m", "D", "Dm", "D#", "D#m", "E", "Em", "F", "Fm", "F#", "F#m", "G", "Gm", "G#", "G#m", "A", "Am", "A#", "A#m", "B", "Bm"];

export const codeScales = (keys: string) => {
  switch (keys) {
    case "C":
    return ["C", "B", "A", "G", "F", "E", "D"];

    case "Cm":
    return ["C", "A#", "G#", "G", "F", "D#", "D"];

    case "C#":
    return ["C#", "C", "A#", "G#", "F#", "F", "D#"];

    case "C#m":
    return ["C#", "B", "A", "G#", "F#", "E", "D#"];

    case "D":
    return ["D", "C#", "B", "A", "G", "F#", "E"];

    case "Dm":
    return ["D", "C", "A#", "A", "G", "F", "E"];

    case "D#":
    return ["D#", "D", "C", "A#", "G#", "G", "F"];

    case "D#m":
    return ["D#", "C#", "B", "A#", "G#", "F#", "F"];

    case "E":
    return ["E", "D#", "C#", "B", "A", "G#", "F#"];

    case "Em":
    return ["E", "D", "C", "B", "A", "G", "F#"];

    case "F":
    return ["F", "E", "D", "C", "A#", "A", "G"];

    case "Fm":
    return ["F", "D#", "C#", "C", "A#", "G#", "G"];

    case "F#":
    return ["F#", "F", "D#", "C#", "B", "A#", "G#"];

    case "F#m":
    return ["F#", "E", "D", "C#", "B", "A", "G#"];

    case "G":
    return ["G", "F#", "E", "D", "C", "B", "A"];

    case "Gm":
    return ["G", "F", "D#", "D", "C", "A#", "A"];

    case "G#":
    return ["G#", "G", "F", "D#", "C#", "C", "A#"];

    case "G#m":
    return ["G#", "F#", "E", "D#", "C#", "B", "A#"];

    case "A":
    return ["A", "G#", "F#", "E", "D", "C#", "B"];

    case "Am":
    return ["A", "G", "F", "E", "D", "C", "B"];

    case "A#":
    return ["A#", "A", "G", "F", "D#", "D", "C"];

    case "A#m":
    return ["A#", "G#", "F#", "F", "D#", "C#", "C"];

    case "B":
    return ["B", "A#", "G#", "F#", "E", "D#", "C#"];

    case "Bm":
    return ["B", "A", "G", "F#", "E", "D", "C#"];

    default:
    return ["C", "B", "A", "G", "F", "E", "D"];
  }
};