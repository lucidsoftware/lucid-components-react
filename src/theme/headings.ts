type Heading = 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';

const headings: number[] & Partial<Record<Heading, number>> = [
  8,
  10,
  12,
  16,
  20,
  24,
  32,
  40,
  48
];

export const headingAliases: Record<Heading, number> = {
  xxxs: headings[0],
  xxs: headings[1],
  xs: headings[2],
  s: headings[3],
  m: headings[4],
  l: headings[5],
  xl: headings[6],
  xxl: headings[7],
  xxxl: headings[8]
};

Object.entries(headingAliases).forEach(heading => {
  const header = heading[0] as Heading;
  const fontSize = heading[1];
  headings[header] = fontSize;
});

export default headings;
