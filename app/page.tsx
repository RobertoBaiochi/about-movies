import styles from "./page.module.css";
import { FetchDataList } from "./components/FetchDataList";
import { Banner } from "./components/Banner";

export default function Home() {
    return (
        <main className={styles.main}>
            <Banner />
            <FetchDataList
                render={4}
                slice
                urlQuery="upcoming"
                title="Upcoming"
            />
            <FetchDataList
                render={4}
                slice
                urlQuery="now_playing"
                title="Now Playing"
            />
            <FetchDataList
                render={4}
                slice
                urlQuery="top_rated"
                title="Top Rated"
            />
            <FetchDataList
                render={4}
                slice
                urlQuery="popular"
                title="Popular"
            />
        </main>
    );
}
