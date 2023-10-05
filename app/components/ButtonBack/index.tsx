"use client";

import styles from "./styles.module.css";
import { BsArrowReturnLeft } from "react-icons/bs";

export const ButtonBack = () => {
    return (
        <button onClick={() => history.back()} className={styles.back__button}>
            Back <BsArrowReturnLeft />
        </button>
    );
};
