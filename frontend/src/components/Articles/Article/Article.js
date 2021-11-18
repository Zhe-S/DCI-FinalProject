
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


import styles from './Article.module.scss';
import { Link, useLocation } from 'react-router-dom';
import Arrows from '../../Arrows/Arrows';
import TimeAgo from 'javascript-time-ago';
import ReactTimeAgo from 'react-time-ago';
import de from 'javascript-time-ago/locale/en';


const Article = () => {

    TimeAgo.addDefaultLocale(de);
    const location = useLocation();

    const { author, img, article } = location.state;

    const authorToLower = author.toLowerCase();
    const authorToUpperCase = authorToLower.split(' ').map(user => user[0].toUpperCase() + user.slice(1)).join(' ');

    return (
        <Container>
            <Arrows />
            <div className={styles.containerH2}>
                <div className={styles.wrapper}>
                    <h2>Read all Article</h2>
                </div>
            </div>
            <Card className={[styles.card, 'bg-light'].join(' ')}>

                <div className={styles.articleAndUserImages}>

                    <div className={styles.imgArticleDiv}>
                        <Card.Img className={styles.imgArticle} src={article.image} />
                    </div>

                    <div className={styles.containerDataUser}>

                        <div className={styles.imgUserDiv}>
                            <Card.Img className={styles.imgUser} variant="top" src={img} />
                        </div>

                        <Card.Text className={styles.textUser}>{authorToUpperCase}</Card.Text>
                        <Card.Text className={styles.textTime}><ReactTimeAgo date={article.createDate} locale="en-En" /></Card.Text>

                    </div>


                </div>

                <Card.Body>
                    <Card.Title className={styles.titleArticle}>{article.title}</Card.Title>
                    {/*     <div className={styles.containerUserImageAndName}>
                        <Card.Img className={styles.imgUser} variant="top" src={img} />
                        <Card.Text>{authorToUpperCase}</Card.Text>

                    </div> */}


                    <Card.Text className={styles.textArticle}>
                        {article.text}
                    </Card.Text>


                </Card.Body>
            </Card>


            <Link to='/articles'>

                <div className={styles.btnDiv}>
                    <button className={styles.box}>
                        <span className={styles.name}>Back to Articles</span>
                        <i className={styles.iButton}></i>
                    </button>
                </div>

            </Link>




        </Container>
    )
}

export default Article;
