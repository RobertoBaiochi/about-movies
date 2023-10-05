import { FetchDataList } from "@/app/components/FetchDataList";
import styles from "./styles.module.css";
import { ButtonBack } from "@/app/components/ButtonBack";

export default function ListPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const myTitle = slug.replace("_", " ").toLowerCase();
    return (
        <main className={styles.list__page}>
            <FetchDataList slice={false} title={myTitle} urlQuery={slug} />
            <div className={styles.btn__container}>
                <ButtonBack />
            </div>
        </main>
    );
}
