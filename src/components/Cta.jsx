import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p `
font-family: Futura;
font-style: normal;
font-size: 24px;
width: 378px;
margin: 0 auto;
/* align-self: center; */
margin-bottom: 70px;
text-align: center;
/* left: 271px;
top: 358px; */
`

const Cta = ({text}) => {
  return (
  <Paragraph>{text}</Paragraph>
  );
}

export default Cta;

