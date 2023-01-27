import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { quizes } from '$lib/content';

/** @type {import('./$types').PageLoad} */
export const load: PageLoad = ({ params }) => {
	const quiz = quizes.find((quiz) => quiz.id === Number(params.qid));

	if (quiz) {
		return {
			quiz
		};
	}

	throw error(404, 'Not found');
};
