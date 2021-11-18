import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import styles from "./SearchBar.module.scss";

import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import RecipeBtn from '../../Buttons/RecipeBtn/RecipeBtn';

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    useEffect(() => {
        setFilteredData(data)
    }, [])


    const handleFilter = (event) => {

        const searchWord = event.target.value;
        setWordEntered(searchWord);

        const newFilter = data.filter((value) => {
            return value.recipe.label.toLowerCase().includes(searchWord.toLowerCase())
        });


        if (searchWord !== "") {
            setFilteredData(newFilter);
        } else {
            setFilteredData([]);
        }


    };

    const clearInput = () => {
        setWordEntered("");
        setFilteredData([]);
    };

  


    return (


        <Container className={styles.container} >
            <div className={styles.searchInputs}>
                <div className={styles.containerInputIcon}>
                    <Form.Control
                        type="text"
                        className={styles.SearchRecipe}
                        value={wordEntered}
                        placeholder={placeholder}
                        onChange={handleFilter} />

                    <div >
                   
                        {filteredData.length === 0 ? <BsSearch className={styles.searchIcon} id="searchIcon" /> :
                            <AiOutlineCloseCircle className={styles.searchIcon} id="closeIcon"
                                onClick={clearInput} />}
                    </div>
                </div>
            </div>

            {filteredData.length !== 0 ? (
                <div>
                    <Row>
                        {filteredData.map((value, key) => {
                            return (
                                <Col key={key} className={styles.col}>

                                    <Card style={{ width: '18rem' }} className={styles.cardBody}>
                                        <Card.Img variant="top" src={value.recipe.image} className={styles.recipeImg} />
                                        <Card.Body>
                                            <Card.Title className={styles.cardTitle}>{value.recipe.label}</Card.Title>
                                            <Card.Text className={styles.cardText}>
                                                {value.recipe.healthLabels}
                                            </Card.Text>

                                            <Link
                                                to={`/ReadMore/${value.recipe.uri.slice(value.recipe.uri.indexOf("_") + 1)} `}
                                                state={{ url: "testus" }}
                                            >
                                            
                                             
                                                    <RecipeBtn />
                                               




                                            </Link>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </div>)
                :
                <h2 className={styles.nodata}>
                    No data found
                </h2>
            }
        </Container>


    )


}

export default SearchBar