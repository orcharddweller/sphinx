import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { quizzes } from '$lib/config/content';

/** @type {import('./$types').PageLoad} */
export const load: PageLoad = ({ params }) => {
	const quiz = quizzes[params.slug];

	console.log(params.slug);

	if (quiz) {
		return {
			quiz
		};
	}

	throw error(404, 'Not found');
};
