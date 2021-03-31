import React from 'react';
import styled from 'styled-components';

const Image = styled.img `
/* height: 200px; */
/* height: auto; */
width: 218px;
border-radius: 10px;
/* margin: 0 auto; */
/* margin-top: 390px; */
/* margin-top: 400px; */
top: 76%;
margin-left: 135px;
z-index: 5;
position:absolute;
clip:rect(0px,220px,145px,0px);
/* top: 454; */
/* clip:rect(0px,60px,200px,0px); */
/* img:hover{
    clip:rect(0px,100px,200px,0px);
     */
/* text-align: center; */
/* left: 271px;
top: 358px; */
`
//   <StyledButton> <Link href={link}>{text}</Link> </StyledButton>

const Icon = ({source}) => {
  return (
  <Image src={source}/>
  );
}

export default Icon;

