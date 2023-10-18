  export async function getScooter() {
    return (
        await fetch("http://localhost:3000/api/scData.json")
    ).json();
}