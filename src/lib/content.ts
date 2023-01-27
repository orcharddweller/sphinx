import type { Quiz, QuizThumbnail } from './types';

export const thumbnails: QuizThumbnail[] = [
	{
		id: 1,
		title: 'Quiz 1',
		description: 'This is quiz 1',
		image: {
			src: 'https://picsum.photos/200/300',
			alt: 'Random image'
		}
	},
	{
		id: 2,
		title: 'Quiz 2',
		description: 'This is quiz 2',
		image: {
			src: 'https://picsum.photos/200/300',
			alt: 'Random image'
		}
	}
];

export const quizes: Quiz[] = [
	{
		id: 1,
		title: 'Quiz 1',
		questions: [
			{
				id: 1,
				image: {
					src: 'https://picsum.photos/200/300',
					alt: 'Random image'
				},
				question: 'What is the capital of France?',
				answers: ['Paris', 'London', 'Berlin', 'Rome'],
				correctAnswer: 0,
				explanation: 'The capital of France is Paris'
			},
			{
				id: 2,
				image: {
					src: 'https://picsum.photos/200/300',
					alt: 'Random image'
				},
				question: 'What is the capital of Germany?',
				answers: ['Paris', 'London', 'Berlin', 'Rome'],
				correctAnswer: 2,
				explanation: 'The capital of Germany is Berlin'
			},
			{
				id: 3,
				image: null,
				question: 'What is the capital of Italy?',
				answers: ['Paris', 'London', 'Berlin', 'Rome'],
				correctAnswer: 3,
				explanation: 'The capital of Italy is Rome'
			}
		],
		score_explanations: [
			{
				range: [0, 1],
				image: null,
				title: 'You need to study more',
				explanation: 'You need to study more to get a better score next time :('
			},
			{
				range: [2, 3],
				image: {
					src: 'https://picsum.photos/200/300',
					alt: 'Random image'
				},
				title: 'You did well',
				explanation: 'You did well, but you can do better next time!'
			},
			{
				range: [4, 5],
				image: {
					src: 'https://picsum.photos/200/300',
					alt: 'Random image'
				},
				title: 'You did great!',
				explanation: "You did great! You're a true expert!"
			}
		]
	},
	{
		id: 2,
		title: 'Quiz 2',
		questions: [
			{
				id: 1,
				image: null,
				question: 'What is the tallest mountain in the world?',
				answers: ['Mount Everest', 'Mount Fuji', 'Mount Kilimanjaro', 'Mount McKinley'],
				correctAnswer: 0,
				explanation: 'Mount Everest is the tallest mountain in the world'
			}
		],
		score_explanations: [
			{
				range: [0, 1],
				image: {
					src: 'https://picsum.photos/200/300',
					alt: 'Random image'
				},
				title: 'You need to study more',
				explanation: 'You need to study more to get a better score next time :('
			}
		]
	}
];
