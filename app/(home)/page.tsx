import Link from "next/link";

export const metadata = {
    title: "Home"
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await fetch(API_URL);
    return await response.json();
}

// cashing, revalidation, .etc

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <h1>{movies.map(movie =>
            <div key={movie.id}>
                <img src={movie.poster_path} alt={movie.title}/>
                <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
            </div>
        )}</h1>
    )
}