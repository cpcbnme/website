import Link from 'next/link'

export default function Introduction() {
    return (
        <>
            <div className="col-span-6 space-y-2 rounded-2xl bg-yellow-200 p-6 dark:bg-indigo-800 md:col-span-6">
                <h2 className="font-semibold">
                    Introduction <span className="inline dark:hidden">🌻</span>
                    <span className="hidden dark:inline">⭐</span>
                </h2>

                <p>
                    Hola. Je m'appelle François. I'm a software engineer from
                    the Ecuador, and no, I'm not french or something like that.
                    I've been programming for as long as I can remember,
                    probably since I was 14. I am currently super busy working
                    on{' '}
                    <Link className="underline" href="https://funiber.org">
                        FUNIBER
                    </Link>
                    , I'm the Head of Web Presence and I focus on building a
                    good experience for our users. Also, I'm passionate about
                    software and DevOps. I love to learn new things and share my
                    knowledge with others. I'm currently building my own
                    startup,{' '}
                    <Link className="underline" href="#">
                        Pisces Metadata
                    </Link>
                    , with some buddies from Argentina and Chile.
                </p>

                <p>
                    Beyond programming, I love to travel, read, and play video
                    games sometimes. By the night I'm a passionate cook and I
                    love to make some cocktails. I'm also a big fan of the 80's
                    and 90's music. I'm pretty sure you'll love my{' '}
                    <Link
                        className="underline"
                        href="https://open.spotify.com/playlist/4wZT3WMphRpp9Zma0HyZw9?si=cc8945597a7a4e94"
                    >
                        playlist
                    </Link>
                </p>
            </div>
        </>
    )
}
