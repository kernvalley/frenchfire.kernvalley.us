import { getJSON } from 'https://cdn.kernvalley.us/js/std-js/http.js';
import { PETS_API } from './consts.js';

export async function getAllPets() {
	const url = new URL(`${PETS_API.PATH}/${PETS_API.ENDPOINTS.REPORTS}`, PETS_API.HOST);
	return getJSON(url);
}
