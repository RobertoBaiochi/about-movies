import { api } from "@/app/service/api";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const NowPlayingList = async () => {
    const nowPlayingData = await api.get("movie/now_playing", {
        method: "GET",
        params: {
            language: "en-US",
            page: 1,
        },
    });

    const nowPlayingList: NowPlayingProps[] = nowPlayingData.data.results;

    return (
        <section className={styles.list__section}>
            <h2>Em Exibição</h2>
            <div className={styles.list__container}>
                {nowPlayingList.map((movie) => {
                    return (
                        <Link key={movie.id} href={`/filme/${movie.id}`}>
                            <div>
                                <h4>{movie.title}</h4>
                                <Image
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    alt=""
                                    width={350}
                                    height={450}
                                    loading="lazy"
                                />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};
