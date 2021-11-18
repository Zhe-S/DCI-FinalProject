import Container from 'react-bootstrap/Container';
import styles from './Register.module.scss'
import { MdEmail } from "react-icons/md";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { React, useState } from 'react';


const Register = () => {

    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isRepeatPasswordShown, setIsRepeatPasswordShown] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [file, setFile] = useState(null);

    const [errorMsg, setErrorMsg] = useState('');


    const [previewImageSrc, setPreviewImageSrc] = useState("");
    const [active, setActive] = useState(false);


    const togglePasswordVisiblity = () => {
        setIsPasswordShown(!isPasswordShown);
    }

    const showError = () => {
        setActive(true);
    }

    const fileChangeHandler = (event) => {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(event.target.files[0])
        fileReader.onloadend = () => {

            let [file] = event.target.files;
            if (file) {
                setPreviewImageSrc(URL.createObjectURL(file))
            }
            const base64ImageUrl = fileReader.result;
            setFile(base64ImageUrl)
        }
    }

    const handleSubmitPassword = () => {

        if (password !== passwordConfirm) {
            setErrorMsg('The two passwords must be the same');
            return false;
        } else {
            return true;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!handleSubmitPassword()) {
            return false;
        }
        /*   let error = false; */
        const newUser = {
            firstName: firstName.toLowerCase().trim(),
            lastName: lastName.toLowerCase().trim(),
            email: email.trim(),
            password: password.trim(),
            image: file
        }

        const res = await fetch('http://localhost:3369/users', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)

        });

        const jsonResponse = await res.text();

        if (jsonResponse === 'es gibt schon den user oder die email') {
            setErrorMsg('Email already exists!');
        } else if (jsonResponse === 'es gibt schon den user oder die username') {
            setErrorMsg('username already used!');
        } else if (jsonResponse === 'Email war falsch') {
            setErrorMsg('Write the Email correctly!');
        } else if (jsonResponse === 'das Passwort ist nicht valide') {
            setErrorMsg('Password should be at least 10 characters and contains one Capital letter ,one special letter like @&?$ etc!');
        } else {

            window.location = '/login';
        }
        /* setUser(newUser) */
    }

    return (
        <Container
            className={styles.container}
        >

            <div className={styles.appContainer}

            >


                <div className={styles.boxContainer}>

                    <div className={styles.innerContainer}>


                        <div className={styles.boxFormContainer}>

                            <form onSubmit={handleSubmit}
                                className={styles.formContainer} >

                                <div className={styles.topContainer}>

                                    <div className={styles.headerContainer}>

                                        <div className={styles.imageUserDiv} >


                                            {previewImageSrc ? <img className={styles.imageUser} src={previewImageSrc} alt="test" /> : null}
                                        </div>

                                        <div className={styles.box}></div>

                                        <button className={styles.addFotoBtn} >
                                            Add Photo
                                            <input type="file"
                                                className={styles.btnFile}
                                                onChange={fileChangeHandler}
                                            />

                                        </button>

                                    </div>



                                </div>
                                {active ? <p className={styles.errorMsg}>{errorMsg}</p> : null}
                                <div className={styles.icons}>
                                    <input type="text" className={styles.inputText}
                                        placeholder="Firstname"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <FaUser className={styles.emailIcon} />
                                </div>

                                <div className={styles.icons}>
                                    <input type="text" className={styles.inputText}
                                        placeholder="Lastname"
                                        value={lastName}
                                        onChange={(e) => setlastName(e.target.value)}

                                    />
                                    <FaUser className={styles.emailIcon} />
                                </div>
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
                                        type={(isPasswordShown) ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <i
                                        className={styles.passwordIcon}
                                        onClick={togglePasswordVisiblity}
                                    >
                                        {isPasswordShown ? <BsEyeSlash /> : <BsEye />}
                                    </i>
                                </div>

                                <div className={styles.icons}>
                                    <input className={styles.inputPassword}

                                        placeholder="Confirm password"
                                        type={(isRepeatPasswordShown) ? "text" : "password"}
                                        value={passwordConfirm}
                                        onChange={(e) => setPasswordConfirm(e.target.value)}
                                    />

                                    <i
                                        className={styles.passwordIcon}
                                        onClick={() => setIsRepeatPasswordShown(!isRepeatPasswordShown)}
                                    >
                                        {isRepeatPasswordShown ? <BsEyeSlash /> : <BsEye />}
                                    </i>
                                </div>




                                <button className={styles.buttonRegister} type="submit"
                                    onClick={showError}
                                >
                                    Register
                                </button>
                            </form>

                            <div className={styles.notRegister}>
                                <p className={styles.mutedLink}>Don't have an account?</p>
                                <Link className={styles.boldLink} to='login'> Login</Link>
                            </div>

                        </div>

                    </div>

                </div>
            </div>



        </ Container>

    )

}

export default Register;