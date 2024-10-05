"use client";

import styles from '../styles/SpotifyConnect.module.css';

export default function SpotifyConnect() {
    // Función para manejar la conexión a Spotify
    const conectarSpotify = () => {
        // Redirigir al usuario a la página de autenticación de Spotify
        window.open('https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=token&redirect_uri=YOUR_REDIRECT_URI&scope=user-read-private%20user-read-email', '_blank');
    };

    return (
        <section id="spotify" className={styles.spotifyContainer}>
            <h2>Conéctate con Spotify</h2>
            <button onClick={conectarSpotify} className={styles.connectButton}>
                Conectar a Spotify
            </button>
        </section>
    );
}
