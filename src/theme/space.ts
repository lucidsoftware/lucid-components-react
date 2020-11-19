// space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 104],
//        [0, 1, 2, 3,  4,  5,  6,  7,  8,  9,  10] index values

type Space =
  | 's0'
  | 's4'
  | 's8'
  | 's16'
  | 's24'
  | 's32'
  | 's40'
  | 's48'
  | 's64'
  | 's80'
  | 's104';

type SpaceAliases = Record<Space, number>;

export type Spaces = number[] & Partial<SpaceAliases>;

const spaces: Spaces = [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 104];

const spaceAliases: SpaceAliases = {
  s0: spaces[0],
  s4: spaces[1],
  s8: spaces[2],
  s16: spaces[3],
  s24: spaces[4],
  s32: spaces[5],
  s40: spaces[6],
  s48: spaces[7],
  s64: spaces[8],
  s80: spaces[9],
  s104: spaces[10]
};

Object.keys(spaceAliases).forEach(space => {
  const spaceKey = space as Space;
  spaces[spaceKey] = spaceAliases[spaceKey];
});

export default spaces;
