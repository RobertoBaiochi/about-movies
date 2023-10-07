"use client";

import { ButtonBack } from "../components/ButtonBack";
import { MyListComponent } from "../components/MyListComponent";
import { useMyList } from "../hooks/useMyList";
import styles from "./styles.module.css";

export default function MyList() {
    const { myList } = useMyList();

    return (
        <main className={styles.mylist__page}>
            {myList.length === 0 ? (
                <>
                    {/*eslint-disable-next-line react/no-unescaped-entities*/}
                    <h3>your list doesn't have any movies yet...</h3>
                </>
            ) : (
                <MyListComponent slice={false} />
            )}
            <ButtonBack />
        </main>
    );
}
