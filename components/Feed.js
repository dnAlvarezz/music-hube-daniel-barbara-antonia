"use client";

import { useState, useEffect } from 'react';
import styles from '../styles/Feed.module.css';

export default function Feed() {
    const [posts, setPosts] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(storedPosts);
    }, []);

    const crearPost = () => {
        if (titulo && contenido) {
            const newPost = { titulo, contenido };
            const updatedPosts = [...posts, newPost];
            setPosts(updatedPosts);
            localStorage.setItem('posts', JSON.stringify(updatedPosts));
            setTitulo("");
            setContenido("");
        }
    };

    return (
        <section id="feed" className={styles.feed}>
            <h2>Comparte tus gustos musicales</h2>
            <div className={styles.compartirContainer}>
                <input 
                    type="text" 
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Título de tu publicación" 
                    className={styles.inputTitulo} 
                />
                <textarea 
                    value={contenido}
                    onChange={(e) => setContenido(e.target.value)}
                    rows="4" 
                    placeholder="Escribe sobre tu playlist o tu canción favorita..." 
                    className={styles.textareaContenido}
                />
                <button className={styles.btnCompartir} onClick={crearPost}>Compartir</button>
            </div>
            <div className={styles.publicaciones}>
                {posts.map((post, index) => (
                    <div key={index} className={styles.post}>
                        <h3>{post.titulo}</h3>
                        <p>{post.contenido}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

