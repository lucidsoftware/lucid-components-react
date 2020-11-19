// const fontSizes = [8, 10.2, 12.8, 16, 20, 25, 31.3, 39.1, 48.8, 61, 76.3, 95.4, 119.2];
// const indicies = [0,     1,    2,  3,  4,  5,    6,    7,    8,  9,   10,   11,    12];

type FontSize =
  | 'fs8'
  | 'fs10'
  | 'fs12'
  | 'fs16'
  | 'fs20'
  | 'fs25'
  | 'fs31'
  | 'fs39'
  | 'fs49'
  | 'fs61'
  | 'fs76'
  | 'fs95'
  | 'fs119';

type FontSizeAliases = Record<FontSize, number>;

export type FontSizes = number[] & Partial<FontSizeAliases>;

const fontSizes: FontSizes = [
  8,
  10.2,
  12.8,
  16,
  20,
  25,
  31.3,
  39.1,
  48.8,
  61,
  76.3,
  95.4,
  119.2
];

export const fontSizeAliases: FontSizeAliases = {
  fs8: fontSizes[0],
  fs10: fontSizes[1],
  fs12: fontSizes[2],
  fs16: fontSizes[3],
  fs20: fontSizes[4],
  fs25: fontSizes[5],
  fs31: fontSizes[6],
  fs39: fontSizes[7],
  fs49: fontSizes[8],
  fs61: fontSizes[9],
  fs76: fontSizes[10],
  fs95: fontSizes[11],
  fs119: fontSizes[12]
};

Object.keys(fontSizeAliases).forEach(fontSize => {
  const fontSizeKey = fontSize as FontSize;
  fontSizes[fontSizeKey] = fontSizeAliases[fontSizeKey];
});

export default fontSizes;
