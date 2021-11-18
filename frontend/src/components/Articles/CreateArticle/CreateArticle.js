import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './CreateArticle.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import TimeAgo from 'javascript-time-ago';
import ReactTimeAgo from 'react-time-ago';
import Arrows from '../../Arrows/Arrows';
import de from 'javascript-time-ago/locale/en';

/* import { useJwt } from "react-jwt"; 
const token = localStorage.getItem("food-token"); */


const CreateArticle = ({ data, addNewArticle, deleteArticle, updateArticle, doesUserHaveArticle }) => {
    /* const { decodedToken, isExpired } = useJwt(token); */

    TimeAgo.addDefaultLocale(de);


    useEffect(() => {



    }, [data])

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);
    const [imageUpdated, setImageUpdate] = useState(false);
    /*  const [createDate, setCreateDate] = useState(Number); */

    const [previewImageSrc, setPreviewImageSrc] = useState("");

    const [idToEdite, setIdToEdite] = useState('');

    const fileChangeHandler = (event) => {
        setImageUpdate(true)
        let fileReader = new FileReader();
        console.log(Date.now())
        fileReader.readAsDataURL(event.target.files[0])
        fileReader.onloadend = () => {

            let [file] = event.target.files;
            if (file) {
                setPreviewImageSrc(URL.createObjectURL(file))
            }

            const base64ImageUrl = fileReader.result;
            //console.log('base64Image', base64ImageUrl);

            setFile(base64ImageUrl)
        }
    }

    const handleAddSubmit = (event) => {

        event.preventDefault();

        const newArticle = {
            title: title,
            text: text,
            image: file,

        }
        addNewArticle(newArticle)
        setTitle('');
        setText('');
        setPreviewImageSrc('');
    }
    const handleEditeSubmit = (event) => {
        event.preventDefault();


        const UpditeArticle = {
            title: title,
            text: text,
            image: file,

        }
        updateArticle(idToEdite, UpditeArticle)
        setIdToEdite('')
        setTitle('');
        setText('');
        setPreviewImageSrc('');


    }

    const updateHandle = (article) => {
        setTitle(article.title);
        setText(article.text);
        setIdToEdite(article._id);
        setPreviewImageSrc(article.image);
        doesUserHaveArticle(article._id)
        /* setCreateDate(article.createDate) */
    }

    const convertToCamelCase = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    }

    return (
        <Container>
            <Arrows />
            <div className={styles.containerH2}>
                <div className={styles.wrapper}>
                    <h2>Add or Edit an new Article</h2>
                </div>
            </div>

            <Row className="justify-content-md-center">
                <Col sm={12} md={12} lg={6}>

                    <Card className={styles.cardCreateArt}>
                        <Form onSubmit={idToEdite ? handleEditeSubmit : handleAddSubmit} >
                            <div className={styles.imageCreateDiv}>
                                {previewImageSrc ? <img className={styles.imageCreate} src={previewImageSrc} alt="test" /> : null}

                            </div>
                            {/*  <Button className={styles.addPhotoBtn}
                            variant="outline-primary"
                        >

                            Add Photo
                            <Form.Control
                                className={styles.inputFile}
                                type="file"
                                name='file'
                                onChange={fileChangeHandler}

                            />
                        </Button> */}
                            <div className={styles.addPhotoDiv}>
                                <button className={[styles.box, styles.box1].join(' ')}>
                                    <Form.Control
                                        className={styles.inputFile}
                                        type="file"
                                        name='file'
                                        onChange={fileChangeHandler}

                                    />
                                    <span className={styles.name}>Add Photo</span>
                                    <i className={styles.iButton}></i>


                                </button>
                            </div>




                            <Form.Control
                                className={styles.inputText}
                                type="text"
                                /*  placeholder={`What’s on your mind ${convertToCamelCase(data[0].userId.firstName)}?`} */
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}

                            />

                            <Form.Group className="mb-3" controlId="Text">

                                <Form.Control as="textarea"
                                    className={styles.inputTextArea}
                                    rows={3}
                                    placeholder="Enter your Text"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}

                                />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3">
                                {/*        <FaPlusCircle color="darkcyan" size="20px"
                                className={styles.addPhotoBtn}

                            /> */}


                            </Form.Group>

                            <div className={styles.addAndBackBtnDiv}>


                                <button className={[styles.box, styles.box2].join(' ')}>
                                    <span className={styles.name}>{idToEdite ? 'Save' : 'Add'}</span>
                                    <i className={styles.iButton}></i>
                                </button>




                                <Link to='articles'>

                                    <button className={[styles.box, styles.box3].join(' ')}>
                                        <span className={styles.name}>Back to Articles</span>
                                        <i className={styles.iButton}></i>
                                    </button>
                                </Link>
                            </div>


                        </Form>
                    </Card>
                </Col>

                <Col sm={12} md={12} lg={6}>
                    {data.map(article => {


                        return (

                            <Card key={article._id} className={styles.cardCreateArt}>

                                <div className={styles.articleAndUserImages}>
                                    <div className={styles.imgArticleDiv}>
                                        <Card.Img className={styles.imgArticle} variant="top" src={article.image} />

                                    </div>

                                    <div className={styles.containerDataUser}>
                                        <div className={styles.imgUserDiv}>
                                            <Card.Img className={styles.imgUser} variant="top" src={article.userId.image} />
                                        </div>
                                        <Card.Text className={styles.textUser}>
                                            {
                                                convertToCamelCase(article.userId.firstName) + ' ' +
                                                convertToCamelCase(article.userId.lastName)
                                            }

                                        </Card.Text>

                                        <Card.Text className={styles.textTime}>
                                            <ReactTimeAgo date={article.updatedAt} locale="en-En" />

                                        </Card.Text>
                                    </div>


                                </div>

                                <Card.Body>
                                    <Card.Title className={styles.titleArticle}>{article.title}</Card.Title>





                                    <Card.Text >
                                        {article.text}
                                    </Card.Text>

                                    {/* {decodedToken.id == article.userId._id && */}
                                    {article.canEdit ?
                                        <div className={styles.editDeleteIcon}>
                                            {/* <Button className={styles.btnEditeAndDelete} variant="outline-primary"
                                                onClick={() => updateHandle(article)}
                                            >
                                                Edit
                                            </Button> */}

                                            <FaPen
                                                className={styles.etitIcon}
                                                onClick={() => updateHandle(article)}
                                            />
                                            {/*    <Button className={styles.btnEditeAndDelete} variant="outline-danger"
                                                onClick={() => deleteArticle(article._id)}
                                            >
                                                Delete
                                            </Button> */}
                                            <FaTrashAlt
                                                className={styles.deleteIcon}
                                                onClick={() => deleteArticle(article._id)}
                                            />
                                        </div>
                                        : <div></div>}
                                    {/* } */}


                                </Card.Body>
                            </Card>

                        )
                    })}
                </Col>
            </Row>


        </Container>
    )
}

export default CreateArticle;