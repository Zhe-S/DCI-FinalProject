
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
/* import { BsArrowBarUp } from 'react-icons/bs'; */
import Logo from '../Navbar/logo1.jpg';


const Footer = () => {

       const handleClick = () => {
           window.scrollTo(0, 0)
       }

    return (

        <div className={styles.containerFooter}>
            <div className={styles.divcontainerFotter}>
                {/* {  <div onClick={handleClick} className={styles.arrow}><BsArrowBarUp /></div>} */}

                <footer className={styles.footer}>

                    <div className={styles.waves}>
                        <div className={[styles.wave, styles.wave1].join(' ')}></div>
                        <div className={[styles.wave, styles.wave2].join(' ')}></div>
                        <div className={[styles.wave, styles.wave3].join(' ')}></div>
                        <div className={[styles.wave, styles.wave4].join(' ')}></div>
                    </div>

                    <ul className={styles.socialIcon}>

                        <li className={styles.socialIconItem}>
                            <a className={styles.socialIconLink} href="http://facebook.com" target='_blank' rel="noreferrer">
                                <i className="fab fa-facebook "></i>
                            </a>
                        </li>

                        <li className={styles.socialIconItem}>
                            <a className={styles.socialIconLink} href="http://twitter.com" target='_blank' rel="noreferrer">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                        </li>

                        <li className={styles.socialIconItem}>
                            <a className={styles.socialIconLink} href="http://instagram.com" target='_blank' rel="noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>

                        <li className={styles.socialIconItem}>
                            <a className={styles.socialIconLink} href="http://github.com" target='_blank' rel="noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>

                        <li className={styles.socialIconItem}>
                            <a className={styles.socialIconLink} href="http://xing.com" target='_blank' rel="noreferrer">
                                <i className="fab fa-xing-square"></i>
                            </a>
                        </li>

                        <li className={styles.socialIconItem}>
                            <a className={styles.socialIconLink} href="http://linkedin.com" target='_blank' rel="noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>


                    </ul>

                    <ul className={styles.menu}>
                        <li className={styles.menuItem}><Link className={styles.menuLink} to="/">Home</Link></li>
                        <li className={styles.menuItem}><Link className={styles.menuLink} to="/nutrition-analysis">Nutrition analysis</Link></li>
                        <li className={styles.menuItem}><Link className={styles.menuLink} to="/recipes">Recipes</Link></li>
                        <li className={styles.menuItem}><Link className={styles.menuLink} to="/bmi">BMI</Link></li>
                        <li className={styles.menuItem}><Link className={styles.menuLink} to="/articles">Articles</Link></li>


                    </ul>
                    <p className={styles.textFooter}>&copy;2021 <img src={Logo} alt="bug" height={50}className={styles.imgLogo}/> All Rights Reserved
                    
                    </p>

                </footer>
            </div>

        </div>

    )
}
export default Footer;