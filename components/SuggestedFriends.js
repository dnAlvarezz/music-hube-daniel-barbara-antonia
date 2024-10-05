"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/SuggestedFriends.module.css';

export default function SuggestedFriends() {
    // Estado para almacenar los amigos
    const [friends, setFriends] = useState([]);

    // Función para agregar un nuevo amigo
    const agregarAmigo = () => {
        const nombre = document.getElementById('nombre-amigo').value;
        const descripcion = document.getElementById('descripcion-amigo').value;
        const foto = document.getElementById('foto-amigo').value;

        // Validar que todos los campos estén completos
        if (nombre && descripcion && foto) {
            const newFriend = {
                name: nombre,
                description: descripcion,
                img: foto,
            };

            // Actualizar el estado con el nuevo amigo
            setFriends([...friends, newFriend]);

            // Limpiar los campos del formulario
            document.getElementById('nombre-amigo').value = '';
            document.getElementById('descripcion-amigo').value = '';
            document.getElementById('foto-amigo').value = '';
        } else {
            alert("Por favor, completa todos los campos antes de agregar un amigo.");
        }
    };

    return (
        <section id="amigos" className={styles.amigosContainer}>
            <h2>Sugerencias</h2>
            <div id="lista-amigos" className={styles.listaAmigos}>
                {friends.length === 0 && <p>No hay amigos sugeridos aún.</p>}
                {friends.map((friend, index) => (
                    <div key={index} className={styles.amigo}>
                        <Image
                            src={friend.img}
                            alt={`Foto de perfil de ${friend.name}`}
                            width={100}
                            height={100}
                            className={styles.amigoFoto}
                        />
                        <p>{friend.name} - {friend.description}</p>
                    </div>
                ))}
            </div>

            {/* Formulario para agregar un nuevo amigo */}
            <div className={styles.agregarAmigo}>
                <input type="text" id="nombre-amigo" placeholder="Buscar perfil" className={styles.input} />
                <input type="text" id="descripcion-amigo" placeholder="Descripción (ej. Fan de Rock)" className={styles.input} />
                <input type="text" id="foto-amigo" placeholder="Agregar foto" className={styles.input} />
                <button onClick={agregarAmigo} className={styles.agregarButton}>Agregar Amigo</button>
            </div>
        </section>
    );
}
