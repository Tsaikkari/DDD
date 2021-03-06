import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useContext } from 'react'
import { AuthContext } from '../context/auth'

const Header = () => {
  const { isLoggedIn, logoutUser, user } = useContext(AuthContext)

  return (
    <Navbar bg='light' expand='lg' collapseOnSelect className='navbar'>
      <LinkContainer to='/'>
        <Navbar.Brand>DDD 😉</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {isLoggedIn ? (
            <>
              <LinkContainer to='/videos'>
                <Nav.Link>
                  <i className='fab fa-youtube'></i> My Videos
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/visionboards'>
                <Nav.Link>
                  <i className='fab fa-wpexplorer'></i> My Vision Boards
                </Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to='/visionboards'>
                <Nav.Link>
                  <i className='fas fa-clipboard'></i> My Notes
                </Nav.Link>
              </LinkContainer> */}
              <NavDropdown title={user.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutUser}>Logout</NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <div className='nav-not-signedin'>
              <LinkContainer to='/signup'>
                <Nav.Link>
                  <i className='fas fa-user-plus'></i> Sign Up
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Login
                </Nav.Link>
              </LinkContainer>
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
