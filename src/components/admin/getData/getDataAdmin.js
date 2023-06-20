export async function getAllCountry () {
    try {
        const resp = await fetch(`http://localhost:3000/api/countries`)
        const dataJson = await resp.json();
        return dataJson;
    } catch (error) {
        throw error;
    }
}