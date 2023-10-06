import styles from "./styles.module.css";
import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({ weight: "400", subsets: ["latin"] });

export const Banner = () => {
    return (
        <section className={styles.banner}>
            <div>
                <h1 className={lilita.className}>About Movies</h1>
                <p>
                    At About Movies you will find the best of cinema in the palm
                    of your hand. Read about the most anticipated releases, the
                    classics that marked generations, and the documentaries that
                    reveal the world. All this with quality, speed and safety.
                </p>
            </div>
        </section>
    );
};
