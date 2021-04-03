import { Colors } from "./types";

export const baseColors = {
  failure: "#8250C2",
  primary: "#8250C2",
  primaryBright: "#8250C2",
  primaryDark: "#8250C2",
  secondary: "#8250C2",
  success: "#8250C2",
  warning: "#8250C2",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#8250C2",
  backgroundDisabled: "#8250C2",
  contrast: "#8250C2",
  invertedContrast: "#8250C2",
  input: "#8250C2",
  tertiary: "#8250C2",
  text: "#8250C2",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#8250C2",
  background: "#8250C2",
  backgroundDisabled: "#8250C2",
  contrast: "#8250C2",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
