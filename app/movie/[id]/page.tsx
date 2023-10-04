import { FetchMovieId } from "@/app/components/FetchDataId";
import styles from "./style.module.css";

export default function MoviePage({ params }: { params: { id: string } }) {
    const { id } = params;
    return (
        <main className={styles.container__id}>
            <FetchMovieId movieId={id} />
        </main>
    );
}
