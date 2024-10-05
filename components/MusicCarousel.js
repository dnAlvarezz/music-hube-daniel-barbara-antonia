"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/MusicCarousel.module.css';

export default function MusicCarousel() {
    const [posicion, setPosicion] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const carruselRef = useRef(null);

    const items = [
        {
            img: "https://cdn.milenio.com/uploads/media/2020/12/09/colibritany-antes-y-despues-captura_0_0_1200_747.jpg",
            title: "Colibritany - Pop",
            link: "https://open.spotify.com/intl-es/artist/3zcuKJimMT3vahfO6w6V78"
        },
        {
            img: "https://i.scdn.co/image/ab6761610000e5eb54fddd2c41b624cf67b1300b",
            title: "Miguel Devia - Rock",
            link: "https://open.spotify.com/intl-es/artist/2UELoJlr5Cs7mKHqFIx4JK"
        },
        {
            img: "https://i.scdn.co/image/ab67616d00001e0283cc47e69bb033807affa91f",
            title: "Luli Love - Kpop",
            link: "https://open.spotify.com/intl-es/artist/01FD3tUSgbzEZDcFHoeKzk"
        },
        {
            img: "https://i.scdn.co/image/ab67616d00001e022cac682dfff0a6031d4d634f",
            title: "Karol Dance - Balada",
            link: "https://open.spotify.com/intl-es/artist/4iUUD4Z0SUgZdO5qGvXS1P"
        },
        {
            img: "https://i.scdn.co/image/ab67616100005174d642648235ebf3460d2d1f6a",
            title: "BTS - PunkEmo",
            link: "https://open.spotify.com/intl-es/artist/3Nrfpe0tUJi4K4DXYWgMUX"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOX8oCBbXKV_EsYc8TV4DWr1yu-BvQFof2mg&s",
            title: "Don Flaytiano - Rap",
            link: "https://open.spotify.com/intl-es/artist/3eWSJ0gJ6sdgwLOaa3tHnz"
        },
        {
            img: "https://i.scdn.co/image/ab6761610000e5ebc99be602f5beac87049ca7c1",
            title: "El Jordan - Bossa Nova",
            link: "https://open.spotify.com/intl-es/artist/1fIJZfSmqQkuqfKNRmrS1V"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_MlPM1Mof4-H1I_QE5RAb0VkI1UpBrNqUnA&s",
            title: "Matt Hunter - Jazz",
            link: "https://open.spotify.com/intl-es/artist/20pVLDSueWpSOPCWnCWzIU"
        }
    ];

    const duplicarItems = [...items, ...items, ...items]; // Triplicamos los elementos para lograr el bucle infinito visualmente
    const itemWidth = 200 + 16; // Ajuste del ancho + margen derecho
    const totalItems = duplicarItems.length;

    const moverCarrusel = (direccion) => {
        setIsTransitioning(true);
        setPosicion((prevPosicion) => prevPosicion + direccion * itemWidth);
    };

    useEffect(() => {
        if (!isTransitioning) return;

        const timer = setTimeout(() => {
            if (posicion <= -(itemWidth * (totalItems - items.length))) {
                setIsTransitioning(false);
                setPosicion(-(itemWidth * items.length));
            } else if (posicion >= 0) {
                setIsTransitioning(false);
                setPosicion(-(itemWidth * (totalItems - 2 * items.length)));
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [posicion, isTransitioning, itemWidth, totalItems, items.length]);

    return (
        <section id="explorar" className={styles.explorarContainer}>
            <h2>Explorar Música</h2>
            <div className={styles.carrusel}>
                <button className={`${styles.carruselBtn} ${styles.prev}`} onClick={() => moverCarrusel(-1)}>
                    &#10094;
                </button>
                <div
                    ref={carruselRef}
                    className={styles.carruselItems}
                    style={{
                        transform: `translateX(${posicion}px)`,
                        transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                    }}
                >
                    {duplicarItems.map((item, index) => (
                        <div key={index} className={styles.musicaItem}>
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={150}
                                height={150}
                            />
                            <p>{item.title}</p>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.spotifyLink}>
                                Escuchar en Spotify
                            </a>
                        </div>
                    ))}
                </div>
                <button className={`${styles.carruselBtn} ${styles.next}`} onClick={() => moverCarrusel(1)}>
                    &#10095;
                </button>
            </div>
        </section>
    );
}
