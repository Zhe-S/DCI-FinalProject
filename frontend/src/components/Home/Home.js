import styles from "./Home.module.scss";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import ImgApp from "./imgApp";

const Home = () => {
  return (
    <div className="container">
      <div className={styles.title}>
        <h1 style={{ fontWeight: "800" }}>
          Your Health. Your Decisions. Our Support.
        </h1>

        <ul>
          <li>Medical experts and passionate journalists</li>
          <li>Thorough research and solid methodologies</li>
          <li>Fresh and actionable insights written for you</li>
        </ul>
      </div>

      <ImgApp />
      <div className={styles.article}>
        <div className={styles.articleContents}>
          <h3>What Is The Keto Diet?</h3>

          <ul>
            <a href="#lession1">
              <li>What Is the Ketogenic Diet?</li>
            </a>
            <a href="#lession2">
              <li>Keto Diet Foods</li>
            </a>
            <a href="#lession3">
              <li>Sources</li>
            </a>
          </ul>
        </div>

        <div className={styles.textcontent}>
          <div id="lession1">
            <h4 className={styles.articleh4title1}>
              Gaining traction in recent years, the keto diet—also known as the
              ketogenic diet—is a popular weight loss plan. It gets its name
              from ketosis, a metabolic process that occurs when your body burns
              fat rather than carbohydrates.
            </h4>
          </div>

          <div>
            <div>
              <section className={styles.lession}>
                <h2 className={styles.listItemH2title1}>
                  What Is the Ketogenic Diet?
                </h2>

                <div>
                  <p>
                    The ketogenic diet is a high-fat, very-low-carbohydrate
                    eating plan that aims to bring about weight loss by causing
                    your body to enter a state of fat-burning ketosis. Although
                    it’s become popular during the past decade or so as a weight
                    loss strategy, it was originally designed 100 years ago as a
                    way to reduce seizures in people with epilepsy.
                  </p>
                  <p>
                    The keto diet not only promises weight loss, but also claims
                    to reduce hunger and help balance blood sugar. However, it
                    can be a difficult protocol to follow. “One of the cons of
                    the keto diet is that it has very strict rules,” says
                    Melissa Majumdar, a certified specialist in obesity and
                    weight management and a bariatric coordinator at Emory
                    University Hospital Midtown in Atlanta. “I don’t know
                    anybody who would be able to follow this diet for a long
                    period of time.” It’s also risky for people with certain
                    health conditions.
                  </p>
                  <p>
                    A keto diet is low enough in carbs and protein and high
                    enough in fat to force the body to burn stored fat instead
                    of consumed carbohydrates for energy. To trigger ketosis, a
                    diet typically must contain a maximum of only 50 grams of
                    carbohydrates per day. (A slice of whole-wheat bread, for
                    example, contains about 15 grams of carbohydrates, and a
                    medium banana contains about 29 grams of carbohydrates.)
                    Overall, carbohydrates contribute fewer than 10% of calories
                    in a keto diet. The remainder comes from fat (70% to 80% of
                    daily calories) and protein (about 10% of daily calories or
                    about ½ gram per pound of body weight).
                  </p>
                  <h3>What Is Ketosis?</h3>
                  <p>
                    Your body prefers to burn glucose-containing carbs for
                    energy. When carbohydrate-sourced glucose is not available,
                    your body burns fat instead. To use fat for energy, your
                    liver converts fat to substances known as ketones and burns
                    those instead of glucose. When this process occurs, your
                    body is in a state of ketosis.
                  </p>
                  <p>
                    Because your body prefers to burn glucose rather than fat,
                    it may resist shifting into ketosis and will not do so
                    unless you adhere strictly to carbohydrate and protein
                    limits. It can take a few days, sometimes longer, to achieve
                    a state of ketosis, and you must continue to limit
                    carbohydrates and protein strictly in order to stay in
                    ketosis. “If you don’t follow the rules, you go out of
                    ketosis,” says Majumdar, who is also a registered dietitian
                    and spokesperson for the Academy of Nutrition and Dietetics.
                  </p>
                  <h3>Types of Keto Diets</h3>
                  <p>
                    Various types of diets call themselves keto diets. However,
                    some would be more accurately described as “keto-ish” or
                    low-carb diets because they’re too high in carbohydrates to
                    induce ketosis regularly. True keto diets are very low in
                    carbohydrates, high in fat and moderate in protein.
                  </p>
                  <p>
                    Well-known keto-style diets include the Atkins and South
                    Beach diet. Other low-carb diets may claim to be keto diets,
                    but unless they include fewer than 50 grams of carbohydrates
                    daily and only a moderate amount of protein, they may not
                    induce ketosis reliably. In addition to limiting
                    carbohydrates, you have to make sure you avoid eating too
                    much protein as well, because protein can interfere with
                    ketosis.
                  </p>
                </div>
              </section>

              <section className={styles.lession}>
                <div id="lession2">
                  <h2 className={styles.listItemH2title2}>Keto Diet Foods</h2>
                </div>
                <div>
                  <div>
                    <h4 className={styles.articleh4title2}>
                      The best foods for the keto diet are those high in fat,
                      low in carbohydrates and moderate in protein, such as:
                    </h4>
                  </div>
                  <ul>
                    <li>Avocados</li>
                    <li>Eggs</li>
                    <li>
                      Fats, including oils like olive, palm and coconut, as well
                      as butter and lard
                    </li>
                    <li>Fish and shellfish</li>
                    <li>
                      Low-carb, non-starchy vegetables, such as leafy greens
                    </li>
                    <li>Meat and poultry</li>
                    <li>Cheese</li>
                    <li>Nuts</li>
                    <li>Olives</li>
                    <li>Seeds</li>
                    <li>
                      Berries in very limited amounts (¼ cup), because they
                      contain carbohydrates, although fewer than other fruits
                    </li>
                    <li>Dark chocolate and cocoa powder</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <ImageSlider slides={SliderData} />

      <div id="lession3" className={styles.frontendbox}>
        <div className={styles.boxT}>
          <div className={styles.front}></div>
          <div className={styles.back}>
            <ul>
              <h2>Tareq Mshaal</h2>
              <li>Web developer</li>
              <li>
                <a
                  href="http://linkedin.com/in/tareq-mshaal-38a223217"
                  target="_blank"
                >
                  <FaLinkedin color="lightblue" fontSize="1.5em" />{" "}
                </a>
                LinkedIn
              </li>
              <li>
                <a href="http://github.com/tareq-1" target="_blank">
                  <AiFillGithub color="lightblue" fontSize="1.5em" />{" "}
                </a>
                GitHub
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.boxH}>
          <div className={styles.front}></div>
          <div className={styles.back}>
            <ul>
              <h2>Hosam Aldin</h2>
              <li>Web developer</li>
              <li>
                <a
                  href="http://linkedin.com/in/hosamaldin-sabrin/"
                  target="_blank"
                >
                  <FaLinkedin color="lightblue" fontSize="1.5em" />{" "}
                </a>{" "}
                LinkedIn{" "}
              </li>
              <li>
                <a href="http://github.com/hosamaldinsabrin" target="_blank">
                  <AiFillGithub color="lightblue" fontSize="1.5em" />{" "}
                </a>{" "}
                GitHub
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.front}></div>
          <div className={styles.back}>
            <ul>
              <h2>Zhe Sun</h2>
              <li>Web developer</li>
              <li>
                <a
                  href="http://linkedin.com/in/zhe-sun-bb6898146"
                  target="_blank"
                >
                  <FaLinkedin color="lightblue" fontSize="1.5em" />{" "}
                </a>
                LinkedIn
              </li>
              <li>
                <a href="http://github.com/Zhe-S" target="_blank">
                  <AiFillGithub color="lightblue" fontSize="1.5em" />{" "}
                </a>
                GitHub
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
