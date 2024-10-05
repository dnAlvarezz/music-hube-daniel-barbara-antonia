"use client";

import Image from 'next/image';
import styles from '../styles/FriendsList.module.css';

export default function FriendsList() {
    const friends = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0BTYUO_mKu3UZPt9sfOPkSNSxXwE6Hz2Tg&s",
            name: "Daniel",
            description: "Fan de Pop y Rock",
            profileLink: "#perfil-daniel"
        },
        {
            img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigAPCiqI3h0bMA6ogD0BlwAyREDPhttK46HgJpNww3zNgZZJWT62efcxMR4_Dl9C4V86adoDgKZRFXygI0xIwMPdrH4gWCJtDKY8xFvuNwSBThBORfSX1krbTBKIX2nyNOtEoGMIoX2RCf/s1600/gustavo+maurelli",
            name: "Antonia",
            description: "Amante del Jazz",
            profileLink: "#perfil-antonia"
        },
        // Puedes agregar más amigos aquí
    ];

    return (
        <section id="amigos" className={styles.amigosContainer}>
            <h2>Amigos</h2>
            <div className={styles.listaAmigos}>
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
                        <button className={styles.amigoButton} onClick={() => window.location.href = friend.profileLink}>
                            Ver Perfil
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

