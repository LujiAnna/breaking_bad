import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    height: 18px;
    width: 209px;
    color: #003D67;
    margin: 0 auto;
    /* margin-top: 50px; */
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    /* font-family: ConduitITCStd; */
    font-size: 20px;
    // font-style: light;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0px;
    opacity: .7;
    z-index: 1;
    text-align: center;

`

const Category = ({text}) => {
  return (
    <div className="category">
           <Title>{text}</Title>
    </div>
  );
}

export default Category;

