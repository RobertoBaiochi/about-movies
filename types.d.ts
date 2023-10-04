interface ListDataProps {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: false;
    vote_average: number;
    vote_count: number;
}

interface RenderListProps {
    render?: number;
    slice: boolean;
    urlQuery: string;
    title: string;
}

interface MovieIdProps {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null;
    budget: number;
    genres: GenresProps[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompaniesProps[];
    production_countries: ProductionCountriesProps[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguagesProps[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface GenresProps {
    id: number;
    name: string;
}

interface ProductionCompaniesProps {
    id: number;
    logo_path: null;
    name: string;
    origin_country: string;
}

interface ProductionCountriesProps {
    iso_3166_1: string;
    name: string;
}

interface SpokenLanguagesProps {
    english_name: string;
    iso_639_1: string;
    name: string;
}
