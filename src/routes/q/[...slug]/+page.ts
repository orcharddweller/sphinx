import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { quizzes } from '$lib/config/content';

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export const load: PageLoad = ({ params }) => {
	const quiz = quizzes[params.slug];

	if (quiz) {
		return {
			quiz
		};
	}

	throw error(404, 'Not found');
};
