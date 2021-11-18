import React, { useState, useEffect } from "react";
import axios from "axios"
import DonoutDiagram from '../NutritionAnalysis/DonoutDiagram';
import BarChart from "../NutritionAnalysis/BarChart";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./NutritionAnalysis.module.scss";
import Form from 'react-bootstrap/Form';
import Loading from '../Loading/Loading';

import Container from 'react-bootstrap/Container'


const NutritionAnalysis = () => {

    const [wordId, setWordId] = useState("");
    const [data, setData] = useState([]);
    const [dummyData, setDummyData] = useState([]);




    useEffect(() => {
        const getDummyData = async () => {
            const appKey = '60f4a798c728f8f926b6a3563ac5c0ce';
            const appId = 'ddab3a6f';
            let food = ["ice", "hotdog", "vegan", "hamburger", "soup", "pizza", "soup", "sweet", "salami", "rice", "meat", "fish"];
            const randomFood = Math.floor(Math.random() * food.length);
            let word = food[randomFood];
            const data = await axios.get(`https://api.edamam.com/search?q=${word}&app_id=${appId}&app_key=${appKey}&from=0&to=3&calories=591-722&health=alcohol-free`)
            setDummyData(data.data)
        }
        getDummyData();

    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!wordId) {
            alert("Pleaser enter a Word")
            setData([])
        } else {

            const appKey = '60f4a798c728f8f926b6a3563ac5c0ce';
            const appId = 'ddab3a6f';
            try {
                const data = await axios.get(`https://api.edamam.com/search?q=${wordId}&app_id=${appId}&app_key=${appKey}&from=0&to=3&calories=591-722&health=alcohol-free`)
                setData(data.data)
            } catch (error) {
                alert("Some Error occured" + error);
            }
        }
    }


    if (dummyData.length === 0) {
        return (<Loading />)
    } else {
        return (


            <Container Container className='bg-light' >
                <div className={styles.container}>
                    <p className={styles.intro}> Welcome in EatFit Nutrient Portal .here you can see how many Calories contains your Recipe .
                        you can check also how many mg Protein ,Cholesterol,Calcium,sugar and Energy in Kcal included.
                        you can find details about the Vitamines included in this meal and when it prefer to eat as popular just in one click
                    </p>

                    <div>
                        <form onSubmit={handleSubmit} className={styles.formcontainer}>
                            <Form.Control className={styles.inputNutrient} type="text" placeholder="please enter a recipe name "
                                onChange={(e) => setWordId(e.target.value)} />
                            {wordId.length !== 0 ?

                                <input alt="" src="https://img.icons8.com/officexs/96/000000/pie-chart.png" type="image" className={styles.btnanalyze} />
                                : <input alt="" src="https://img.icons8.com/color/96/000000/export-collections.png" type="image" className={styles.btnanalyze} />
                            }



                        </form>

                        {data.length === 0 ?
                            <div>
                                <Row className={[styles.rowArticle, "justify-content-md-center"].join(' ')}>
                                    {dummyData.hits.map((hit, index) => {
                                        return (
                                            <Col key={index} md="auto" className={styles.colAnalysis}>
                                                <div key={index} >

                                                    <CardGroup >

                                                        <Card className={styles.card}>
                                                            <p className={styles.attention}> Attention: Examples!
                                                                Here is some example Result, please search for a recipe to get your own data</p>


                                                            <Card.Img variant="top" alt="" src={hit.recipe.image} className={styles.recipeImg} />
                                                            <Card.Body className={styles.cardbody}>
                                                                <Card.Title className={styles.cardTitle}>{hit.recipe.label}</Card.Title>
                                                                <h4><img alt="" src="https://img.icons8.com/color/48/000000/broken-pencil.png" /> This meal contains {Math.ceil(hit.recipe.calories)} calories</h4>
                                                                <h4><img alt="" src="https://img.icons8.com/color/48/000000/broken-pencil.png" /> It Prefers to eat at {hit.recipe.mealType}</h4>
                                                                <div className={styles.donout}>
                                                                    <DonoutDiagram data={hit.recipe.totalNutrients} />
                                                                </div>

                                                                <div className={[styles.vitamin].join(' ')}>
                                                                    <BarChart data={hit.recipe.totalNutrients} />
                                                                </div>
                                                            </Card.Body>

                                                        </Card>


                                                    </CardGroup>


                                                </div>
                                            </Col>
                                        )
                                    })}


                                </Row>
                            </div>
                            :
                            <div>
                                <Row className={[styles.rowArticle, "justify-content-md-center"].join(' ')}>
                                    {data.hits.map((hit, index) => {
                                        return (
                                            <Col key={index} md="auto" className={styles.colAnalysis}>
                                                <div key={index} >
                                                    <CardGroup >
                                                        <Card className={styles.card}>
                                                            
                                                                <Card.Img variant="top" alt="" src={hit.recipe.image} className={styles.recipeImg} />
                                                          
                                                            <Card.Body >
                                                                <Card.Title className={styles.cardTitle}>{hit.recipe.label}</Card.Title>
                                                                <h4 ><img alt="" src="https://img.icons8.com/color/48/000000/broken-pencil.png" />This meal contains {Math.ceil(hit.recipe.calories)} calories</h4>
                                                                <h4><img alt="" src="https://img.icons8.com/color/48/000000/broken-pencil.png" />It Prefers to eat at {hit.recipe.mealType}</h4>
                                                                <div className={styles.donout}>
                                                                    <DonoutDiagram data={hit.recipe.totalNutrients} />
                                                                </div>

                                                                <div className={styles.donout}>
                                                                    <BarChart className={styles.head} data={hit.recipe.totalNutrients} />
                                                                </div>
                                                            </Card.Body>

                                                        </Card>
                                                    </CardGroup>
                                                </div>
                                            </Col>
                                        )
                                    })}

                                </Row>


                            </div>
                        }

                    </div>
                </div>
            </Container>



        )
    }
}

export default NutritionAnalysis