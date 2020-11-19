// zIndices: [-1, 10, 100, 500, 1000, 1100, 1200, 1300, 1400, 1500, 999999999]
//           [0,   1,   2,   3,    4,    5,    6,    7,    8,    9,        10] index values

type ZIndex =
  | 'zNegative1'
  | 'z10'
  | 'z100'
  | 'z500'
  | 'z1000'
  | 'z1100'
  | 'z1200'
  | 'z1300'
  | 'z1400'
  | 'z1500'
  | 'zMax';

type ZIndiceAliases = Record<ZIndex, number>;

export type ZIndices = number[] & Partial<ZIndiceAliases>;

const zIndices: ZIndices = [
  -1,
  10,
  100,
  500,
  1000,
  1100,
  1200,
  1300,
  1400,
  1500,
  999999999
];

export const zIndiceAliases: ZIndiceAliases = {
  zNegative1: zIndices[0],
  z10: zIndices[1],
  z100: zIndices[2],
  z500: zIndices[3],
  z1000: zIndices[4],
  z1100: zIndices[5],
  z1200: zIndices[6],
  z1300: zIndices[7],
  z1400: zIndices[8],
  z1500: zIndices[9],
  zMax: zIndices[10]
};

Object.keys(zIndiceAliases).forEach(zIndex => {
  const zIndexKey = zIndex as ZIndex;
  zIndices[zIndexKey] = zIndiceAliases[zIndexKey];
});

export default zIndices;
