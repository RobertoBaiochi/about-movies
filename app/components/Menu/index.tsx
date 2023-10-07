"use client";

import { AiOutlineClose } from "react-icons/ai";

import styles from "./styles.module.css";
import Link from "next/link";

const routesMenu = [
    {
        title: "Home",
        route: "/",
    },
    {
        title: "My List",
        route: "/mylist",
    },
    {
        title: "Upcoming",
        route: "/list/upcoming",
    },
    {
        title: "Now Playing",
        route: "/list/now_playing",
    },
    {
        title: "Top Rated",
        route: "/list/top_rated",
    },
    {
        title: "Popular",
        route: "/list/popular",
    },
];

export const Menu = ({ open, closeMenu }: MenuProps) => {
    return (
        <>
            <div
                className={
                    open
                        ? styles.menu__background
                        : styles.menu__background_closed
                }
                onClick={closeMenu}
            ></div>
            <div
                className={
                    open
                        ? styles.menu__container
                        : styles.menu__container_closed
                }
            >
                <button type="button" onClick={closeMenu}>
                    <AiOutlineClose size="3rem" color="#fff" />
                </button>
                <nav className={styles.navlink__container}>
                    {routesMenu.map((link) => {
                        return (
                            <Link
                                key={link.route}
                                href={link.route}
                                onClick={closeMenu}
                            >
                                {link.title}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </>
    );
};
