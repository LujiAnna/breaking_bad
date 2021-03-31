import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button `
background-color: #005c4d;
justify-content: center;
/* vertical-align: center; */
color: #5e1c47;
border-radius: 10px;
border: none;
height: 64px;
width: 335px;
opacity: 0.7;
font-family: Futura;
font-style: normal;
/* font-size: 13px; */
font-size: 70%;
font-weight: 700;
text-transform: uppercase;
margin: 0 auto;
margin-bottom: 70px;
padding: 20px;
`

const Link = styled.a `
display: block;
text-decoration: none;
color: #5e1c47;

${StyledButton}:link, 
${StyledButton}:visited
 & {
  color: #5e1c47;
}

`


const Button = ({text, link}) => {
  return (
  <StyledButton> <Link href={link}>{text}</Link> </StyledButton>
  );
}

export default Button;

