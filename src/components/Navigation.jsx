import React, {Component} from 'react';
import logo from '../logo.png';
import styled from 'styled-components';
import '../styles/navigation.css';

import { Link} from "react-router-dom";

const Nav = styled.nav `
display: flex;
align-items: center;
padding: 20px;2
`
const Navlist = styled.ul `
list-style: none;
margin: 0 -10px;
margin-left: auto;
`
const Navitem = styled.li `
display: inline;
margin: 0 10px;
align-items: center;
`
const Logo = styled.img `
height: 70px;
width: 202.53px;
`

class Navigation extends Component {
  render() {
    return (
      <Nav>
        <Logo src = { logo } alt = "logo" / >
 <Navlist>
   {/* <Navitem> <LinkStyle href="#" >NL</LinkStyle></Navitem> */}
   {/* <Navitem> <LinkStyle href="#">FR</LinkStyle></Navitem> */}
   <Navitem> <Link to ='/' className='link'>EN</Link></Navitem>
   <Navitem> <Link to ='/nl' className='link'>NL</Link></Navitem>
   <Navitem> <Link to ='/fr' className='link'>FR</Link></Navitem>
 </Navlist>
      </Nav>
)
  }
}

export default Navigation;