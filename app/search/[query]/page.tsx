import { FetchDataSearchList } from "@/app/components/FetchDataSearchList";
import styles from "./styles.module.css";

export default function SearchPage({ params }: { params: { query: string } }) {
    const { query } = params;

    return (
        <main className={styles.search__main}>
            <FetchDataSearchList
                slice={false}
                title="Search"
                urlQuery={query}
            />
        </main>
    );
}
