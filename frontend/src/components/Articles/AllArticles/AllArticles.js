import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from './AllArticles.module.scss';

import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Arrows from '../../Arrows/Arrows';
import TimeAgo from 'javascript-time-ago';
import ReactTimeAgo from 'react-time-ago';
import de from 'javascript-time-ago/locale/en';
import LikeBtn from '../../Buttons/LikeBtn/LikeBtn';

const AllArticles = ({ data }) => {

    TimeAgo.addDefaultLocale(de);

    const convertToCamelCase = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    }

    return (

        <Container className={[styles.containerArticle, 'bg-light'].join(' ')}>
            <Arrows />
            <div className={styles.containerH2}>
                <div className={styles.wrapper}>
                    <h2>All Articles</h2>
                </div>
            </div>



            <Row className={[styles.rowArticle, "justify-content-md-center"].join(' ')}>
                <Link to='/create-article'>

                    {/*          <Button className={styles.btnAddArticle}
                        variant="outline-success"
                    >
                        Add New Article
                    </Button> */}

                    <div className={styles.btnDiv}>

                        <button className={styles.box}>
                            <span className={styles.name}>Add New Article</span>
                            <i className={styles.iButton}></i>
                        </button>
                    </div>

                </Link>


                {data.map(article => {
                    return (
                        <Col md="auto" className={styles.colArticle}>
                            <Card className={styles.cardArticle}>
                                <div className={styles.articleAndUserImages}>
                                    <Link to={{
                                        pathname: `/article/${article.title.replace(/ /g, '-')}`,
                                        state: {
                                            article,
                                            author: article.userId.firstName + ' ' + article.userId.lastName,
                                            img: article.userId.image
                                        }
                                    }}>
                                        <div className={styles.imgArticleDiv}>
                                            <Card.Img className={styles?.imgArticle} variant="top" src={article.image} />

                                        </div>



                                    </Link>


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
                                            <ReactTimeAgo date={article.createDate} locale="en-En" />
                                        </Card.Text>

                                    </div>
                                </div>
                                <Card.Body className={styles.cardBody}>
                                    <Link to={{
                                        pathname: `/article/${article.title.replace(/ /g, '-')}`,
                                        state: {
                                            article,
                                            author: article.userId.firstName + ' ' + article.userId.lastName,
                                            img: article.userId.image
                                        }
                                    }}>
                                        <Card.Title className={styles.titleArticle}>
                                            {article.title}
                                        </Card.Title>
                                    </Link >
                                    <Card.Text className={styles.textStyle}>
                                        {article.text}
                                    </Card.Text>

                                    <div className={styles.likeDetails}>
                                        <div className={styles.readBtn}>
                                            <FaRegArrowAltCircleRight color="darkcyan" size="20px" />
                                            <Link to={{
                                                pathname: `/article/${article.title.replace(/ /g, '-')}`,
                                                state: {
                                                    article,
                                                    author: article.userId.firstName + ' ' + article.userId.lastName,
                                                    img: article.userId.image
                                                }
                                            }}>

                                                <div className={styles.readMore}>Read More</div>
                                            </Link>
                                        </div>



                                        <LikeBtn />
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}

            </Row>

        </Container >


    )

}



export default AllArticles;