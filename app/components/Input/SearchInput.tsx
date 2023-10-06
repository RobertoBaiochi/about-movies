"use client";

import styles from "./styles.module.css";
import { BsSearch } from "react-icons/bs";
import { useSearchContext } from "@/app/context/search";
import { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

export const SearchInput = () => {
    const { query, setQuery } = useSearchContext();

    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setQuery(query);
        router.push("/search");
    };

    return (
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                placeholder="Search movie name..."
                value={query}
                onChange={(e) => handleChange(e)}
            />
            <button type="submit">
                <BsSearch size="2rem" color="#c60339" />
            </button>
        </form>
    );
};
