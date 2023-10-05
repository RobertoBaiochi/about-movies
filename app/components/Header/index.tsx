"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.webp";
import styles from "./styles.module.css";
import { RiMenu3Fill } from "react-icons/ri";

import { SearchInput } from "../Input/SearchInput";
import { useState } from "react";
import { Menu } from "../Menu";

export const MyHeader = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <header className={styles.header}>
            <nav>
                <Link href="/">
                    <Image
                        src={logo}
                        alt="Logo about movies"
                        width={100}
                        height={100}
                    />
                </Link>

                <SearchInput />

                <button
                    onClick={() => setOpenMenu(true)}
                    className={styles.menu__button}
                >
                    <span>Menu</span>
                    <RiMenu3Fill size="3rem" color="#fff" />
                </button>
                <Menu open={openMenu} closeMenu={() => setOpenMenu(false)} />
            </nav>
        </header>
    );
};
