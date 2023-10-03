import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM4MzBhNGNhZjY2YmFlYzkwNTA3MGYyYTI1OGRhZSIsInN1YiI6IjY1MTY0MmViZDQ2NTM3MDllMDA1YWRmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8s0kfLpbHok6flok7LtzcXiXC_uhHtmFmOYn0DQ5d6k",
    },
});
