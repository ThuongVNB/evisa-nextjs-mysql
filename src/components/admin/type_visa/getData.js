export async function getAllTypeVisa () {
    try {
        const resp = await fetch(`http://localhost:3000/api/visas`)
        const dataJson = await resp.json();
        return dataJson;
    } catch (error) {
        throw error;
    }
}