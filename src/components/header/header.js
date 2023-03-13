import React from 'react'
import { Navbar } from '../navbar/navbar'
import styled from 'styled-components'
import './main.css'

const HeaderContainer = styled.header`
  height: 100vh;
  scroll-snap-align: center;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <Navbar></Navbar>
    </HeaderContainer>
  )
}
