"use client";

import { useState, useEffect } from "react";

export const useMyList = () => {
    const [myList, setMyList] = useState<ListDataProps[]>([]);

    useEffect(() => {
        const myListData = localStorage.getItem("@aboutmovie");

        const getMyList = myListData !== null ? JSON.parse(myListData) : [];

        setMyList(getMyList);
    }, [setMyList]);

    return { myList, setMyList };
};
