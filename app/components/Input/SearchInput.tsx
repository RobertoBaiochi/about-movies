"use client";

import styles from "./styles.module.css";
import { BsSearch } from "react-icons/bs";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export const SearchInput = () => {
    const [query, setQuery] = useState("");

    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!query) return;
        const teste = query.trim().toLowerCase();
        router.push(`/search/${teste}`);
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
