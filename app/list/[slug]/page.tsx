import { FetchDataList } from "@/app/components/FetchDataList";
import styles from "./styles.module.css";

export default function ListPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const myTitle = slug.replace("_", " ").toLowerCase();
    return (
        <section className={styles.list__page}>
            <FetchDataList slice={false} title={myTitle} urlQuery={slug} />
        </section>
    );
}
