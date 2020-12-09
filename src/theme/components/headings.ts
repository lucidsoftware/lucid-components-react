export type Heading =
  | '3XS'
  | '2XS'
  | 'XS'
  | 'S'
  | 'M'
  | 'L'
  | 'XL'
  | '2XL'
  | '3XL';

const headings: string[] & Partial<Record<Heading, string>> = [
  '8px',
  '10px',
  '12px',
  '16px',
  '20px',
  '24px',
  '32px',
  '40px',
  '48px'
];

export const headingAliases: Record<Heading, string> = {
  '3XS': headings[0],
  '2XS': headings[1],
  XS: headings[2],
  S: headings[3],
  M: headings[4],
  L: headings[5],
  XL: headings[6],
  '2XL': headings[7],
  '3XL': headings[8]
};

Object.entries(headingAliases).forEach(heading => {
  const header = heading[0] as Heading;
  const fontSize = heading[1];
  headings[header] = fontSize;
});

export const headingStyles = {
  headlineS: {
    color: 'heading',
    fontSize: headings['S'],
    fontWeight: 'bolder',
    lineHeight: 'default',
    marginTop: 0,
    marginBottom: 3
  },
  headlineM: {
    color: 'heading',
    fontSize: headings['M'],
    fontWeight: 'bolder',
    lineHeight: 'default',
    marginTop: 0,
    marginBottom: '20px'
  },
  headlineL: {
    color: 'heading',
    fontSize: headings['L'],
    fontWeight: 'bolder',
    lineHeight: 'default',
    marginTop: 0,
    marginBottom: 4
  },
  headlineXL: {
    color: 'heading',
    fontSize: headings['XL'],
    fontWeight: 'bolder',
    lineHeight: 'default',
    marginTop: 0,
    marginBottom: 5
  },
  headline2XL: {
    color: 'heading',
    fontSize: headings['2XL'],
    fontWeight: 'bolder',
    lineHeight: 'default',
    marginTop: 0,
    marginBottom: 6
  },
  headline3XL: {
    color: 'heading',
    fontSize: headings['3XL'],
    fontWeight: 'bolder',
    lineHeight: 'default',
    marginTop: 0,
    marginBottom: 7
  }
};

export default headings;
