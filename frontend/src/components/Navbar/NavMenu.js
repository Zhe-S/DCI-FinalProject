import styles from "./NavMenu.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useJwt } from "react-jwt";
import Logo from "../Navbar/logo1.jpg"


import { NavLink } from 'react-router-dom';
const token = localStorage.getItem("food-token")
const NavMenu = () => {
    const { decodedToken, isExpired } = useJwt(token);


    return (

        <Navbar className={styles.Navbar} collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container className={styles.navContainer} >
                <Navbar.Brand className={[styles.appName, 'application'].join(' ')}>

                    <img class src={Logo} alt="bug" height={80} className={styles.imgLogo} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">


                    <Nav className="me-auto">


                        <Nav.Link

                            className={styles.navItem}
                            as={NavLink}
                            eventKey={1}
                            to="/">
                            Home

                        </Nav.Link>





                        <Nav.Link

                            className={styles.navItem}
                            as={NavLink}
                            eventKey={1}
                            to="/nutrition-analysis">
                            Nutrition analysis

                        </Nav.Link>



                        <Nav.Link

                            className={styles.navItem}
                            as={NavLink}
                            eventKey={1}
                            to="/recipes">
                            Recipes
                        </Nav.Link>



                        <Nav.Link

                            className={styles.navItem}
                            as={NavLink}
                            eventKey={1}
                            to="/bmi">
                            BMI

                        </Nav.Link>


                        <Nav.Link

                            className={styles.navItem}
                            as={NavLink}
                            eventKey={1}
                            to="/articles">
                            Articles
                        </Nav.Link>



                    </Nav>


                    {decodedToken ? (<Nav>

                        <Nav.Link


                            className={[styles.navItemLogin].join(' ')}
                            as={NavLink}
                            eventKey={1} to="/logout"
                            onClick={(e) => {
                                localStorage.removeItem('food-token');
                                window.location = '/'
                            }}

                        >
                            <div className={styles.conBox}>

                                <div className={styles.box}>
                                    <span className={styles.name}>Logout</span>
                                    <i className={styles.iButton}></i>
                                </div>
                            </div>
                        </Nav.Link>
                        <Nav.Link className={styles.navLinkLogout}>
                            <div className={styles.userImageDiv}>
                                <img className={styles.image}
                                    src={decodedToken.image} />
                            </div>

                        </Nav.Link>



                    </Nav>) : (<Nav>


                        <Nav.Link
                            className={[styles.navItemLogin].join(' ')}

                            as={NavLink}
                            eventKey={1}
                            to="/login">
                            <div className={styles.conBox}>
                                <div className={styles.box}>
                                    <span className={styles.name}> Login</span>
                                    <i className={styles.iButton}></i>
                                </div>
                            </div>

                        </Nav.Link>




                        <Nav.Link
                            className={[styles.navItemLogin].join(' ')}
                            as={NavLink}
                            eventKey={1}
                            to="/register">
                            <div className={styles.conBox}>
                                <div className={styles.box}>
                                    <span className={styles.name}>Register</span>
                                    <i className={styles.iButton}></i>
                                </div>
                            </div>
                        </Nav.Link>



                    </Nav>)}




                </Navbar.Collapse>
            </Container>
        </Navbar>


    )

};

export default NavMenu;