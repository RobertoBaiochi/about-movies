import "./globals.css";
import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import { MyHeader } from "./components/Header";

const chivo = Chivo({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "About Movies ~ Home",
    description:
        "Everything about movies for you who are passionate to this art!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={chivo.className}>
                <MyHeader />
                {children}
            </body>
        </html>
    );
}
