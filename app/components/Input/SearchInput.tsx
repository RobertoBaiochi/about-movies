import styles from "./styles.module.css";
import { BsSearch } from "react-icons/bs";

export const SearchInput = () => {
    return (
        <form className={styles.form}>
            <input type="text" placeholder="Search movie name..." />
            <button type="submit">
                <BsSearch size="2rem" color="#c60339" />
            </button>
        </form>
    );
};
