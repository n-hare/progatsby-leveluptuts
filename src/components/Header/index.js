import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styled from 'styled-components'

import logo from '../../images/logo.svg'

const HeaderWrapper = styled.div`
  background-color: #2980b9;
  height: ${props => (props.isIndex ? '66vh' : '33vh')};
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  h1 {
    margin: 0;
    img {
      height: 80px;
    }
  }
`

const HeaderContainer = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.3rem;
  position: relative;
  z-index: 2;
`

const NavWrapper = styled.ul`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  li {
    display: inline-block;
    padding: 0 1rem;
    list-style: none;
    a {
      background: none;
      color: white;
      outline: none;
      text-decoration: none;
      text-shadow: 0 2px 2px rgba(100, 100, 100, 0.7);
      :hover {
        color: #c5e7ff;
        /* color: hsl(210, 99%, 90%);*/
        border-bottom: 3px solid #c5e7ff;
      }
    }
  }
`

class Header extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.location.pathname !== prevProps.location.pathname &&
      (this.props.location.pathname === '/' || prevProps.location.pathname === '/')
    ) {
      const onIndex = !!(this.props.location.pathname === '/')
      this.wrapper.animate([{ height: '66vh' }, { height: '33vh' }], {
        duration: 500,
        fill: 'forwards',
        direction: onIndex ? 'reverse' : 'normal',
        easing: 'cubic-bezier(1,.25,.25,.95)',
        iterations: 1
      })
    }
  }

  render() {
    return (
      <HeaderWrapper
        isIndex={!!(this.props.location.pathname === '/')}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}>
        <HeaderContainer>
          <h1>
            <Link to="/">
              <img src={logo} alt="LevelUp Pro" />
            </Link>
          </h1>

          <nav>
            <NavWrapper>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </NavWrapper>
          </nav>
        </HeaderContainer>
        <Img
          sizes={this.props.data.background.sizes}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            opacity: '0.8'
          }}
        />
      </HeaderWrapper>
    )
  }
}

export default Header
