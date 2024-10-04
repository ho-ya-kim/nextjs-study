export default function UserDetail(
    {params: {id}}: { params: { id: string } }
) {
    return (
        <h1>User {id}</h1>
    )
}