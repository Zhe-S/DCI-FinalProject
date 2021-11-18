import styles from './RecipeBtn.module.scss';
const RecipeBtn = () => {
    return (
        <div className={styles.box}>
            <span className={styles.name}>Read More</span>
            <i className={styles.iButton}></i>
        </div>
    )
}

export default RecipeBtn;

