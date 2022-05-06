/**
 * Obtiene los datos del archivo stock.json y los devuelve.
 *
 */
const getData = async () => {
	try {
		const response = await fetch("./stock.json");
		const data = await response.json()

		return data;
	} catch (error) {
		console.log("hubo un error", error);

	}
}
export { getData };