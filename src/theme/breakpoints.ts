type Viewport =
  | 'default'
  | 'mobile'
  | 'tabletSmall'
  | 'tablet'
  | 'tabletLandscape'
  | 'computer'
  | 'maxWidth';

const breakpoints: string[] & Partial<Record<Viewport, string>> = [
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

Object.entries(breakpointAliases).forEach(breakpoint => {
  const viewport = breakpoint[0] as Viewport;
  const width = breakpoint[1];
  breakpoints[viewport] = width;
  mqMin[viewport] = `@media only screen and (min-width: ${width})`;
  mqMax[viewport] = `@media only screen and (max-width: ${width})`;
});

export default breakpoints;
