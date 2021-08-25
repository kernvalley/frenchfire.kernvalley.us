export const GA = 'UA-119717465-16';

export const env = (location.hostname === 'localhost' || location.hostname.endsWith('.netlify.live'))
	? 'development'
	: 'production';

export const dev = env === 'development';

export const site = {
	title: 'Jekyll Template',
};

export const PETS_API = {
	// HOST: 'https://floating-atoll-79318.herokuapp.com',
	// PATH: '/api/v1',
	HOST: 'https://youthful-hugle-06ccd9-eb690e.netlify.live',
	PATH: '',
	ENDPOINTS: {
		// REPORTS: 'animal_reports',
		REPORTS: 'reports.json',
	},
};
