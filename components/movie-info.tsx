import {API_URL} from "../app/(home)/page";

export async function getMovie(id: string) {
    // await new Promise((resolve) => setTimeout(resolve, 5000))
    // throw new Error("error test")
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfos(
    {
        id
    }: {
        id: string
    }) {
    const info = await getMovie(id);
    return (
        <h6>{JSON.stringify(info)}</h6>
    )
}