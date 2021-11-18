import Container from 'react-bootstrap/Container';
import { MdEmail } from "react-icons/md";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import styles from './LogIn.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {

    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [active, setActive] = useState(false);


    const togglePasswordVisiblity = () => {
        setIsPasswordShown(!isPasswordShown)
    }

    const showError = () => {
        setActive(true);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            email: email,
            password: password
        }


        const res = await fetch('http://localhost:3369/users/login', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)

        });
        const jsonResponse = await res.json();
        if (jsonResponse.error) {
            setErrorMsg(jsonResponse.error);
        }


        if (jsonResponse.token) {

            /* const userJson = JSON.stringify(jsonResponse.user) */
            localStorage.setItem('food-token', jsonResponse.token)
            //        localStorage.setItem('user', userJson)

            window.location = '/';
        }
    }
    return (
        <Container className={styles.loginContainer}>
            <div className={styles.appContainer}>


                <div className={styles.boxContainer}>
                    <div className={styles.topContainer}>
                        <div className={styles.backDrop}></div>
                        <div className={styles.headerContainer}>
                            <h2 className={styles.headerText}>Welcome</h2>
                            <h2 className={styles.headerText}>Login</h2>
                            <h5 className={styles.smallText}>please sing-in to continue!</h5>
                        </div>
                        {active ? <p className={styles.errorMsg}>{errorMsg}</p> : null}
                    </div>
                    <div className={styles.innerContainer}>


                        <div className={styles.boxFormContainer}>

                            <form onSubmit={handleSubmit}
                                className={styles.formContainer} >

                                <div className={styles.icons}>
                                    <input className={styles.inputEmail}
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <MdEmail className={styles.emailIcon} />
                                </div>
                                <div className={styles.icons}>
                                    <input className={styles.inputPassword}

                                        placeholder="password"
                                        value={password}
                                        type={(isPasswordShown) ? "text" : "password"}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <i
                                        className={styles.passwordIcon}
                                        onClick={togglePasswordVisiblity}
                                    >
                                        {isPasswordShown ? <BsEyeSlash /> : <BsEye />}
                                    </i>
                                </div>


                                <button
                                    className={styles.buttonLogin}
                                    type="submit"
                                    onClick={showError}
                                >
                                    Login
                                </button>
                            </form>


                            <div className={styles.notLogin}>
                                <p className={styles.mutedLink}>don,t have an account?</p>
                                <Link className={styles.boldLink} to='register'> register</Link>
                            </div>


                        </div>

                    </div>

                </div>
            </div>

        </Container >

    )

}


export default LogIn;
