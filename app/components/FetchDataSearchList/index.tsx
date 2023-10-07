import { api } from "@/app/service/api";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

export const FetchDataSearchList = async ({
    render,
    slice,
    urlQuery,
    title,
}: RenderListProps) => {
    const urlData = await api
        .get(`search/movie`, {
            method: "GET",
            params: {
                language: "en-US",
                page: 1,
                query: urlQuery,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            toast.error("Oops, i'm sorry for this!");
            redirect("/");
        });

    const urlList: ListDataProps[] = slice
        ? urlData.results.slice(0, render)
        : urlData.results;

    const noFound = () => {
        return <h1>No Movies found...</h1>;
    };

    return (
        <section className={styles.list__section}>
            <h2>{title}</h2>
            {urlList.length === 0 && noFound()}
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
        </section>
    );
};
