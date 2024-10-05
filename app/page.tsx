import Header from '../components/Header';
import MusicCarousel from '../components/MusicCarousel';
import SuggestedFriends from '../components/SuggestedFriends';
import Feed from '../components/Feed';
import FriendsList from '../components/FriendsList';
import Profile from '../components/Profile';
import SpotifyConnect from '../components/SpotifyConnect';



export default function Home() {
    const nombre = "Juan";
    const canciones = [
        { titulo: "Livin' On A Prayer - Bon Jovi", link: "https://open.spotify.com/intl-es/track/37ZJ0p5Jm13JPevGcx4SkF" },
        { titulo: "Alegria - Anitta (feat. ThiagoPZK & Emilia)", link: "https://open.spotify.com/intl-es/track/5v9LMshhQsNtkUkcXRGO7i" }
    ];
    const foto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMBlq_pjNQyhLYmh-XgrhzaJS13Tw5Oymwrzv7TTtianK3p2_VXX1mMEGCbo9Qzct5lE&usqp=CAU";

    return (
        <>
            <Header />
            <main>
                <MusicCarousel />
                <FriendsList />
                <SuggestedFriends />
                <Feed />
                <SpotifyConnect />
                <Profile nombre={nombre} canciones={canciones} foto={foto} />
            </main>
        </>
    );
}

