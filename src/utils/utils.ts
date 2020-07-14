export const windowIsAboveWidth = (width: string) => {
  return window.innerWidth >= parseInt(width);
};

export const isIE11 = () => {
  return (
    typeof navigator !== 'undefined' &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('Trident/') !== -1
  );
};
