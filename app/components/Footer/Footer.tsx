import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLinkExternal } from "react-icons/bi";
import styles from "./styles.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer__container}>
            <div>
                <nav>
                    <Link
                        href="https://www.linkedin.com/in/roberto-baiochi/"
                        target="blank"
                        rel="external"
                    >
                        <BiLogoLinkedin size="2rem" color="#fff" />
                    </Link>
                    <Link
                        href="https://github.com/RobertoBaiochi"
                        target="blank"
                        rel="external"
                    >
                        <FiGithub size="2rem" color="#fff" />
                    </Link>
                    <Link
                        href="https://robertobaiochi.com.br/"
                        target="blank"
                        rel="external"
                    >
                        <BiLinkExternal size="2rem" color="#fff" />
                    </Link>
                </nav>

                <p>
                    created and developed by <span>Roberto Baiochi</span>.
                </p>
            </div>
        </footer>
    );
}
