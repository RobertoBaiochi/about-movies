"use client";

import { useMyList } from "@/app/hooks/useMyList";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import styles from "./styles.module.css";
import { BsTrash3Fill } from "react-icons/bs";
import { MouseEvent } from "react";

export const MyListComponent = ({
    render,
    slice,
}: {
    render?: number;
    slice: boolean;
}) => {
    const { myList, setMyList } = useMyList();

    const handleDelete = (
        event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
        id: number
    ): void => {
        event.preventDefault();
        const filteredList = myList.filter((item) => {
            return item.id !== id;
        });

        setMyList(filteredList);
        toast.error("The movie was deleted.");
        return localStorage.setItem(
            "@aboutmovie",
            JSON.stringify(filteredList)
        );
    };

    const myListData: ListDataProps[] = slice
        ? myList.slice(0, render)
        : myList;

    if (myList.length === 0) {
        return null;
    }

    return (
        <section className={styles.mylist__section}>
            <h2>My List</h2>
            <div className={styles.list__container}>
                {myListData.map((movie) => {
                    return (
                        <Link key={movie.id} href={`/movie/${movie.id}`}>
                            <Image
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt=""
                                width={350}
                                height={450}
                                loading="lazy"
                            />
                            <div className={styles.delete__container}>
                                <button
                                    onClick={(e) => handleDelete(e, movie.id)}
                                    type="button"
                                >
                                    <BsTrash3Fill size="2rem" color="#fff" />
                                </button>
                            </div>
                        </Link>
                    );
                })}
            </div>
            {slice && myList.length > 4 && (
                <Link href="/mylist" className={styles.btn__link}>
                    See More...
                </Link>
            )}
        </section>
    );
};
