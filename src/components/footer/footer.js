import React from 'react'
import styled from 'styled-components'
import './main.css'

const FooterContainer = styled.footer`
  height: 100vh;
  scroll-snap-align: center;

`

export const Footer = () => {
  return (
    <FooterContainer>footer</FooterContainer>
  )
}
