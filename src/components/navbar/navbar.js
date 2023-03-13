import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    padding: 10px 0px;
`

const Icons = styled.div`
    list-style: none;
    display: flex;
    gap: 20px;
    align-items: center;
`

const Links = styled.div`
    display: flex;
    align-items: center;
`

const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
`

const ListItem = styled.li`
    cursor: pointer;
`

const Logo = styled.img`
    height: 50px;
`

const Icon = styled.img`
    height: 20px;
    cursor: pointer;
`

const Button = styled.button`
    width: 100px;
    padding: 10px;
    color: white;
    border: none;
    border-radius: 20px;
    background-color: blueviolet;
    cursor: pointer;
`

export const Navbar = () => {
  return (
    <Nav>
        <Container>
            <Links>
                <Logo src="./img/logo.png"></Logo>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Main</ListItem>
                    <ListItem>Section</ListItem>
                    <ListItem>Footer</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src="./img/search.png"/>
                <Button>Hire now!</Button>
            </Icons>
        </Container>
    </Nav>
  )
}
