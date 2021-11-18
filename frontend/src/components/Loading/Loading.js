import styles from './Loading.module.scss';

const Loading = () => {
    return (
        <div className={[styles.containerLoader, 'bg-light'].join(' ')}>

            <div className={styles.loader}>

                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>

            </div>

        </div>
    )
}

export default Loading;
