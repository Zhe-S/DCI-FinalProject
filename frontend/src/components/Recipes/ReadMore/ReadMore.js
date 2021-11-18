
import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import styles from './ReadMore.module.scss';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import diet from '../../../images/giphy.gif';
import Loading from "../../Loading/Loading";

const ReadMore = (props) => {

    const params = useParams()
    let history = useHistory();
    const [readMoreData, setReadMoreData] = useState([])

    useEffect(() => {
        console.log("props id", params.id)
        const urlId = params.id.trim();

        const url = `https://api.edamam.com/api/recipes/v2/recipe_${urlId}?type=public&app_id=ddab3a6f&app_key=60f4a798c728f8f926b6a3563ac5c0ce`
        getReadMoreData(url)
    }, [params])

    const getReadMoreData = (url) => {
        try {
            axios.get(url, {
                app_id: 'ddab3a6f',
                app_key: '60f4a798c728f8f926b6a3563ac5c0ce',


            })
                .then((response) => {
                    const data = response.data;
                    console.log("json data", data.recipe.healthLabels)
                    setReadMoreData(data.recipe)
                })
        }
        catch (error) {
            console.log(error)
            alert(error + 'some error occured ')
        }

    }

    return (
        <Container className={[styles.cardContainer,'bg-light'].join(' ')} >
            {Object.keys(readMoreData).length !== 0 ?
                <Row>
                    <Col className={styles.col}>
                        <Card style={{ width: '25rem' }} className={[styles.carding,'bg-light'].join(' ')}>
                            <Card.Img variant="top" src={readMoreData.image} alt="" className={styles.imgrecipeLeft} />
                            <Card.Body>
                                <Card.Title className={styles.title}>{readMoreData.label}</Card.Title>
                                <h4>Ingredients:</h4>
                                <ListGroup className={styles.ListGroup}>{readMoreData.ingredients.map(item => {
                                    return (
                                        <ListGroup.Item variant='success'>{item['text']}</ListGroup.Item>
                                    )
                                })}
                                </ListGroup>
                                {/*   <Button variant="success" className={styles.btnBack} onClick={() => history.goBack()}>Back to recipe search</Button> */}
                                <div className={styles.btnDiv}>
                                    <button className={styles.box} onClick={() => history.goBack()}>
                                        <span className={styles.name}>Back to recipe search</span>
                                        <i className={styles.iButton}></i>
                                    </button>
                                </div>
                            </Card.Body>

                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '25rem' }} className={[styles.carding,'bg-light'].join(' ')}>
                            <Card.Img variant="top" src={diet}
                                alt="" className={styles.imgrecipeRight} />
                            <Card.Body>
                                <Card.Title>Health labels</Card.Title>

                                <ListGroup className={styles.ListGroup} >{readMoreData.healthLabels.map(value => {
                                    return (
                                        <ListGroup.Item variant="info">{value}</ListGroup.Item>
                                    )
                                })}
                                </ListGroup>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row> :
                <Loading />
            }
        </Container>



    )
}
export default ReadMore;