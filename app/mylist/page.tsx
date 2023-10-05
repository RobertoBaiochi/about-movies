import { MyListComponent } from "../components/MyListComponent";
import styles from "./styles.module.css";

export default function MyList() {
    return (
        <main className={styles.mylist__page}>
            <MyListComponent slice={false} />
        </main>
    );
}
