import { api } from "@/app/service/api";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const FetchDataSearchList = async ({
    render,
    slice,
    urlQuery,
    title,
}: RenderListProps) => {
    const urlData = await api.get(`search/movie`, {
        method: "GET",
        params: {
            language: "en-US",
            page: 1,
            query: urlQuery,
        },
    });

    const urlList: ListDataProps[] = slice
        ? urlData.data.results.slice(0, render)
        : urlData.data.results;

    if (urlList.length === 0) {
        return <h1>No movies found</h1>;
    }

    return (
        <section className={styles.list__section}>
            <h2>{title}</h2>
            <div className={styles.list__container}>
                {urlList.map((movie) => {
                    return (
                        <Link key={movie.id} href={`/movie/${movie.id}`}>
                            <Image
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt=""
                                width={350}
                                height={450}
                                loading="lazy"
                            />
                        </Link>
                    );
                })}
            </div>
            {slice && (
                <Link href={`/list/${urlQuery}`} className={styles.btn__link}>
                    See More...
                </Link>
            )}
        </section>
    );
};
