// export const metadata = {
//     title: {movie.title}
// }

import MovieInfos from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import {Suspense} from "react";

export default async function MovieDetail(
    {
        params: {id}
    }: {
        params: { id: string }
    }) {
    // const movie = await getMovie(id);
    // const videos = await getVideo(id);

    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfos id={id}/>
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    );
}