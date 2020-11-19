type Viewport =
  | 'default'
  | 'mobile'
  | 'tabletSmall'
  | 'tablet'
  | 'tabletLandscape'
  | 'computer'
  | 'maxWidth';

export const breakpoints: string[] & Partial<Record<Viewport, string>> = [
  '0',
  '500px',
  '768px',
  '900px',
  '1024px',
  '1220px',
  '1440px'
];

const breakpointAliases: Record<Viewport, string> = {
  default: breakpoints[0],
  mobile: breakpoints[1],
  tabletSmall: breakpoints[2],
  tablet: breakpoints[3],
  tabletLandscape: breakpoints[4],
  computer: breakpoints[5],
  maxWidth: breakpoints[6]
};

export const mqMin = { ...breakpointAliases };
export const mqMax = { ...breakpointAliases };

for (const entry of Object.entries(breakpointAliases) as Array<
  [Viewport, string]
>) {
  const viewport = entry[0];
  const width = entry[1];
  breakpoints[viewport] = width;
  mqMin[viewport] = `@media only screen and (min-width: ${width})`;
  mqMax[viewport] = `@media only screen and (max-width: ${width})`;
}

export const base = {
  borderRadius: 5,
  space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 104],
  //     [0, 1, 2, 3,  4,  5,  6,  7,  8,  9,  10] index values
  breakpoints,
  zIndices: [-1, 10, 100, 500, 1000, 1100, 1200, 1300, 1400, 1500, 999999999],
  radii: {
    button: '5px',
    card: '5px',
    paper: '5px'
  },
  shadows: {
    0: 'none',
    video: '0px -4px 8px rgba(40, 44, 51, 0.15)',
    10: '10px 10px 0 0 rgba(0, 0, 0, 0.3)',
    20: '20px 20px 0 0 rgba(0, 0, 0, 0.3)',
    listItem: '0 0 5px 0 rgba(0, 0, 0, 0.1)'
  }
};
