const isIE11 = () => {
  return (
    typeof navigator !== 'undefined' &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('Trident/') !== -1
  );
};

export default isIE11;
