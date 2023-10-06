"use client";

import { FetchDataSearchList } from "@/app/components/FetchDataSearchList";
import styles from "./styles.module.css";
import { useSearchContext } from "../context/search";

export default function SearchPage() {
    const { query } = useSearchContext();

    return (
        <main className={styles.search__main}>
            <FetchDataSearchList
                title="Search"
                slice={false}
                urlQuery={query}
            />
        </main>
    );
}
