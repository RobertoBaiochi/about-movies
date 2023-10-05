"use client";

import { BiListPlus } from "react-icons/bi";
import { toast } from "react-toastify";
import styles from "./styles.module.css";

export const AddListButton = ({ ...movieById }) => {
    const saveMovie = () => {
        const myList: string | null = localStorage.getItem("@aboutmovie");

        const dataList = myList !== null ? JSON.parse(myList) : [];

        const hasMovie = dataList.some(
            (movie: MovieIdProps) => movie.id === movieById.id
        );

        if (hasMovie) {
            toast.warning("This movie is already on your list.");
            return;
        }

        dataList.push(movieById);
        toast.success("Movie saved successfully");
        return localStorage.setItem("@aboutmovie", JSON.stringify(dataList));
    };

    return (
        <>
            <button
                className={styles.add__button}
                onClick={saveMovie}
                title="Add to your list"
            >
                <BiListPlus size="2.5rem" color="#fff" />
            </button>
        </>
    );
};
