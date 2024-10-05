"use client";

import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Music Hub</h1>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><a href="#explorar" className={styles.navLink}>Explorar</a></li>
                    <li><a href="#amigos" className={styles.navLink}>Amigos</a></li>
                    <li><a href="#feed" className={styles.navLink}>Feed</a></li>
                    <li><a href="#spotify" className={styles.navLink}>Spotify</a></li>
                    <li><a href="#perfil" className={styles.navLink}>Perfil</a></li>
                </ul>
            </nav>
        </header>
    );
}
