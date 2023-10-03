import styles from "./page.module.css";
import { NowPlayingList } from "./components/NowPlaying";
import { Banner } from "./components/Banner";

export default function Home() {
    return (
        <main className={styles.main}>
            <Banner />
            <NowPlayingList />
        </main>
    );
}
