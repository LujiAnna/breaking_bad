import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button `
background-color: #99DCBC;
justify-content: center;
/* vertical-align: center; */
color: #003D67;
border-radius: 10px;
border: none;
height: 64px;
width: 335px;
opacity: 0.7;
font-family: Futura;
font-style: normal;
font-size: 13px;
font-weight: 700;
margin: 0 auto;
margin-bottom: 70px;
padding: 20px;
`

const Link = styled.a `
display: block;
text-decoration: none;
color: #003D67;

${StyledButton}:link, 
${StyledButton}:visited
 & {
  color: #003D67;
}

`


const Button = ({text, link}) => {
  return (
  <StyledButton> <Link href={link}>{text}</Link> </StyledButton>
  );
}

export default Button;

