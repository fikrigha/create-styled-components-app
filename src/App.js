import React, { Component } from 'react'
import logo from './logo.svg'

import styled, { keyframes } from 'styled-components'

const Outer = styled.div`
  text-align: center
  height: 100vh;
`

const Header = styled.div`
  background-color: papayawhip
  height: 150px
  padding: 20px
  color: white
  ${props => props.uppercase && 'text-transform: uppercase'}
  h1 {
    color: ${props => props.dark ? 'black' : 'palevioletred'}
  }
`

const spin = keyframes`
  from { transform: rotate(360deg) }
  to { transform: rotate(0deg) }
`

const Logo = styled.img`
  animation: ${spin} infinite 20s linear
  ${props => props.backwards && 'animation-direction: reverse'}
  height: 80px
`

const Intro = styled.p`
  font-size: large
`

const Nav = styled.nav`
  width: 100px
  position: fixed
  top: 10px
  left: 10px
  z-index: 1000
  a {
    color: papayawhip
    background: palevioletred
    font-weight: bold
    display: block
    padding: 10px
  }
  a:hover {
    color: papayawhip
    background: #E28DA9
    cursor: pointer
  }
  a:active {
    color: papayawhip
    background: #AF5A76
    cursor: pointer
  }
`

const MenuButton = styled.a`
  position: fixed
  top: 10px
  left: 10px
  z-index: 1000
  color: palevioletred
  font-weight: bold
  background: transparent
  padding: 10px 20px
  border: 1px solid palevioletred
  transition: background 0.3s
  &:hover {
    color: papayawhip
    background: palevioletred
    cursor: pointer
  }
  &:active {
    color: papayawhip
    background: #AF5A76
    cursor: pointer
  }
`

const NavWrapper = styled.div`
  background: transparent
  position: fixed 
  height: 100vh
  width: 100vw
  z-index: 1000
`

class ToggleableMenu extends Component {
  state = {
    displayMenuButton: true,
  }
  displayMenuButton = () => {
    this.setState({ displayMenuButton: true })
  }
  hideMenuButtonToDisplayNav = () => {
    this.setState({ displayMenuButton: false })
  }
  render() {
    if (this.state.displayMenuButton) {
      return(
        <MenuButton onClick={this.hideMenuButtonToDisplayNav}>Menu</MenuButton>
      )
    } else {
      return(
        <NavWrapper onClick={this.displayMenuButton}>
          <Nav>
            <a href="/create-styled-components-app/">HOME</a>
            <a href="/create-styled-components-app/">HOME</a>
            <a href="/create-styled-components-app/">HOME</a>
            <a href="/create-styled-components-app/">HOME</a>
          </Nav>
        </NavWrapper>
      )
    }
  }
}

class App extends Component {
  render() {
    return (
      <Outer>
        <ToggleableMenu/>
        <Header uppercase>
          <Logo src={logo} alt="logo" />
          <Logo backwards src={logo} alt="logo" />
          <h1>Welcome to React</h1>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Outer>
    )
  }
}

export default App
