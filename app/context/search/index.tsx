"use client";

import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

interface QueryContextProps {
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<QueryContextProps | null>(null);

export default function SearchContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [query, setQuery] = useState("");

    return (
        <SearchContext.Provider value={{ query, setQuery }}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearchContext() {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("BAGULHO TA LOKO!");
    }

    return context;
}
