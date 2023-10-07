import styles from "./page.module.css";

export default function Loading() {
    return (
        <div className={styles.loader__container}>
            <span className={styles.loader}></span>
        </div>
    );
}
