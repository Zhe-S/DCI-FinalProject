import styles from "./BmiComponent.module.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { GiBodyHeight } from 'react-icons/gi';
import { GiWeight } from 'react-icons/gi';
import Arrows from "../Arrows/Arrows";
import LikeBtn from "../Buttons/LikeBtn/LikeBtn";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

const BmiComponent = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState(20.0);

  const [status, setStatus] = useState("");

  function calculateBMI() {
    if (weight !== 0 && height !== 0 && weight !== "" && height !== "") {

      let bmi = Number(weight / (height / 100) ** 2).toFixed(1);
      setBmiResult(bmi);
      console.log(bmi);
      let bmiStatus = getStatus(bmi);
      setStatus(bmiStatus);
      setHeight("");
      setWeight("");
    }
  }

  function getStatus(bmi) {

    console.log(typeof (status))
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi <= 24.9) return "Normal";
    else if (bmi >= 25) return "überweight";
    else return "Obese";
  }

  return (
    <div className="container bg-light secondary">
      <Arrows />
      <div className={styles.containerH2}>
        <div className={styles.wrapper}>
          <h2>BMI Calculator</h2>
        </div>
      </div>
      <div className={styles.inputsResponse}>


        <Form>
          <Row className={styles.rowIputs}>
            <Form.Group

              className={styles.inputItem}
              as={Col}
              controlId="exampleForm.ControlInput1">
              <Form.Label>Height (cm)

                <GiBodyHeight className={styles.icon} />
              </Form.Label>
              <Form.Control
                className={styles.inputBmi}
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}

              />

            </Form.Group>

            <Form.Group
              className={styles.inputItem}
              as={Col}
              controlId="exampleForm.ControlInput1">
              <Form.Label>
                Weight (kg)
                <GiWeight className={styles.icon} />
              </Form.Label>
              <Form.Control
                className={styles.inputBmi}
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}

              />

            </Form.Group>
          </Row>
        </Form>
      </div>

           <div className={styles.btnDiv}>

        <button className={styles.box}
          type="submit"
          onClick={calculateBMI}
        >
          <span className={styles.name}>Calculate BMI</span>
          <i className={styles.iButton}></i>
        </button>

      </div>




      <div className={styles.dark}>
        <p className={styles.result}>
          {bmiResult}

        </p>
      </div>


      <Row className="justify-content-md-center">

        <Col
          className={styles.colBmi}
          style={status === "Underweight" || status === "" ? { color: "orange" } : { opacity: "0.3" }}
        >
          <Card className={styles.card} >
            <Card.Title className={styles.title}>
              <span className={styles.titlevalue}> &lt; 18.5</span>
            </Card.Title>
            <Card.Body className={styles.cardbody}>
              <h3 className="text-center mt-3 mb-2">Underweight</h3>
              <Card.Text className={styles.cardtext}>
                Your weight is very low in relation to your height. Ideally, you should gain some weight to stay healthy and productive in the long run. Read our tips on eating right to stay fit now.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col
          className={styles.colBmi}
          style={status === "Normal" || status === "" ? {} : { opacity: "0.3" }}
        >
          <Card className={styles.card} >
            <Card.Title className={styles.title}>
              <span className={styles.titlevalue}>18.5 - 24.9</span>

            </Card.Title>
            <Card.Body className={styles.cardbody}>
              <h3 className="text-center mt-3 mb-2">Normal weight</h3>
              <Card.Text className={styles.cardtext}>
                The BMI shows you a healthy ratio of height to weight. With a balanced diet and regular exercise, it stays that way in the long term. With just one click to the information for a healthy lifestyle.
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col
          className={styles.colBmi}
          style={status === "überweight" || status === "" ? { color: "darkred" } : { opacity: "0.3" }}
        >
          <Card className={styles.card} >
            <Card.Title className={styles.title}>
              <span className={styles.titlevalue}>&gt; 25</span>
            </Card.Title>
            <Card.Body className={styles.cardbody}>
              <h3 className="text-center mt-3 mb-2">Obesity</h3>
              <Card.Text className={styles.cardtext}>
                25–30 OVERWEIGHT
                According to your body mass index, you are overweight. This increases the risk of diseases such as B. Diabetes. On the way to less pounds, we support you with offers to lose weight.
                <br />
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </div>
  );
};

export default BmiComponent;