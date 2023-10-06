import "./globals.css";
import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import { MyHeader } from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const chivo = Chivo({ weight: ["400", "800"], subsets: ["latin"] });

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
                <ToastContainer
                    position="bottom-center"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <MyHeader />
                {children}
            </body>
        </html>
    );
}
