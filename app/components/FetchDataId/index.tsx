import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { BsFillPlayFill } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

import { api } from "@/app/service/api";
import { AddListButton } from "../AddListButton/AddListButton";
import { ButtonBack } from "../ButtonBack";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

export const FetchMovieId = async ({ movieId }: { movieId: string }) => {
    const fetchMovieById = await api
        .get(`/movie/${movieId}`, {
            method: "GET",
            params: {
                language: "en-US",
                page: 1,
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

    const movieById: MovieIdProps = fetchMovieById;

    return (
        <section
            className={styles.movie__container}
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movieById.backdrop_path})`,
            }}
        >
            <div className={styles.card__info}>
                <article>
                    <div className={styles.image__container}>
                        <Image
                            src={`https://image.tmdb.org/t/p/original${movieById.poster_path}`}
                            alt={movieById.original_title}
                            width={300}
                            height={450}
                            priority
                        />
                    </div>

                    <div className={styles.info__container}>
                        <h3>{movieById.title}</h3>
                        <div className={styles.action__container}>
                            <Link
                                href={`https://youtube.com/results?search_query=${movieById.title}`}
                                target="blank"
                                rel="external"
                                title="Watch Trailer"
                            >
                                <BsFillPlayFill size={"2.5rem"} color="#fff" />
                            </Link>
                            <AddListButton {...movieById} />
                            <Link
                                href={movieById.homepage}
                                target="blank"
                                rel="external"
                                title="Official Page"
                            >
                                <BiLinkAlt size={"2.5rem"} color="#fff" />
                            </Link>
                        </div>
                        <div className={styles.time__container}>
                            <p>{movieById.runtime} min</p>
                            <span>
                                <p>{movieById.vote_average.toPrecision(2)} </p>
                                <AiFillStar size="2rem" color="#c60339" />
                            </span>
                        </div>
                        <div className={styles.tags__container}>
                            {movieById.genres.map((tag) => (
                                <p key={tag.name}>{tag.name}</p>
                            ))}
                        </div>
                        <p className={styles.overview}>{movieById.overview}</p>
                    </div>
                </article>
            </div>
            <ButtonBack />
        </section>
    );
};
