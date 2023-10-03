import { SearchInput } from "../Input/SearchInput";
import styles from "./styles.module.css";
import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({ weight: "400", subsets: ["latin"] });

export const Banner = () => {
    return (
        <section className={styles.banner}>
            <div>
                <h1 className={lilita.className}>About Movies</h1>
                <SearchInput />
            </div>
        </section>
    );
};
