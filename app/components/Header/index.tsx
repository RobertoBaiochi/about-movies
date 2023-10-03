import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.webp";
import styles from "./styles.module.css";
import { SearchInput } from "../Input/SearchInput";

export const MyHeader = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Link href="/">
                    <Image
                        src={logo}
                        alt="Logo about movies"
                        width={60}
                        height={60}
                    />
                </Link>

                <Link href="/mylist" className={styles.my_list}>
                    My List
                </Link>
            </nav>
        </header>
    );
};
