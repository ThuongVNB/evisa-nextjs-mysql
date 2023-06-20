export async function getDataCurrency () {
    try {
        const resp = await fetch(`http://localhost:3000/api/currencies`)
        const dataJson = await resp.json();
        return dataJson;
    } catch (error) {
        throw error;
    }
}