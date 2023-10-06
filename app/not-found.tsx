import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
    return (
        <section className={styles.page__not_found}>
            <Link href="/" title="Home">
                Home Page
            </Link>
        </section>
    );
}
