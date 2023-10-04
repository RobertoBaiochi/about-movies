import { MdOutlineMovieFilter } from "react-icons/md";
import styles from "./styles.module.css";

export const AddListButton = ({ ...movieById }) => {
    return (
        <>
            <button className={styles.add__button}>
                <MdOutlineMovieFilter size="2.5rem" color="#fff" />
            </button>
        </>
    );
};
