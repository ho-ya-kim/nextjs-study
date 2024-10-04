import MovieInfos, {getMovie} from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import {Suspense} from "react";

interface IParams {
    params: {id: string};
}

export async function generateMetadata({params: {id}}: IParams) {
    const info = await getMovie(id);
    return {
        title: info.title,
    }
}

export default async function MovieDetail({params: {id}}: IParams) {
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