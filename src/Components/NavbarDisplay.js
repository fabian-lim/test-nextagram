import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
import AuthModal from '../Containers/AuthModal'
import SignUp from '../Containers/SignUp';
import Login from '../Containers/Login';


const NavbarDisplay = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen); //these two are states for navbarDisplay

    // const [showModal, setShowModal] = useState(false)
    // const toggleModal = () => {
    //   setShowModal(!showModal)
    // } // these two const are for signUp modal
  

    const [isLogin, setIsLogin] = useState(true)
    const toggleIsLogin = () => {
    setIsLogin(!isLogin)
    }

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" style={{color:'light', alignItems:'center'}}>
            <img src='https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png' style={{height:'40px'}}/>
            Nextagram
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar></Nav>
          </Collapse>
              <NavLink style={{cursor:'pointer'}} onClick= {() => {toggle() 
                setIsLogin(true)
              }}>Log In</NavLink>
              <NavLink style={{cursor:'pointer'}} onClick= {() => {toggle() 
                setIsLogin(false)}}>
                Sign Up</NavLink>
        </Navbar>
        {
            isLogin
                ? <AuthModal 
                    isOpen={isOpen} 
                    toggle={toggle}
                    modalTitle={"Login"}
                    primaryBtnText={"Log In"}
                    primaryBtnAction={() => {}}
                    isLogin={isLogin}
                    toggleIsLogin={toggleIsLogin}
                  />
                : <AuthModal 
                    isOpen={isOpen} 
                    toggle={toggle}
                    modalTitle={"Sign Up"}
                    primaryBtnText={"Sign Up"}
                    primaryBtnAction={() => {}}
                    isLogin={isLogin}
                    toggleIsLogin={toggleIsLogin}
                  />    
              }
      </div>
    );
  
}

export default NavbarDisplay;