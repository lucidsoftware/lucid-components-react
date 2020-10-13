import React from 'react';
import styled from '../../../theme/styled';

const PingdomContainer = styled('span')({
  border: '0',
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: '0px',
  margin: '-1px',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  width: '0px'
});

const Pingdom = () => {
  return <PingdomContainer>PINGDOM_CANARY_STRING</PingdomContainer>;
};

export default Pingdom;
