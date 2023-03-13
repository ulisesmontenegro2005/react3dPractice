import React from 'react'
import styled from 'styled-components'
import './main.css'

const MainContainer = styled.main`
  height: 100vh;
  scroll-snap-align: center;

`

export const Main = () => {
  return (
    <MainContainer>main</MainContainer>
  )
}
