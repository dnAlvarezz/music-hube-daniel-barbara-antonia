"use client";

import Image from 'next/image';
import styles from '../styles/Profile.module.css';

interface ProfileProps {
    nombre: string;
    canciones: { titulo: string; link: string }[];
    foto: string;
}

export default function Profile({ nombre, canciones, foto }: ProfileProps) {
    return (
        <section id="perfil" className={styles.perfilContainer}>
            <h2>Perfil de {nombre}</h2>
            <div className={styles.perfilInfo}>
                <div className={styles.imagenPerfil}>
                    <Image
                        src={foto}
                        alt={`Foto de perfil de ${nombre}`}
                        width={150}
                        height={150}
                        className={styles.imagen}
                    />
                </div>
                <p><strong>Nombre:</strong> {nombre}</p>
                <p><strong>Canciones Favoritas:</strong></p>
                <ul className={styles.listaCanciones}>
                    {canciones.map((cancion, index) => (
                        <li key={index}>
                            <a href={cancion.link} target="_blank" rel="noopener noreferrer" className={styles.enlaceCancion}>
                                {cancion.titulo}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
