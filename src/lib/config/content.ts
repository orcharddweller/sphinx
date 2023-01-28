import type { QuizData, QuizThumbnail, Slug } from '../types';

export const thumbnails: QuizThumbnail[] = [
	{
		slug: 'quiz-1',
		title: 'Quiz 1',
		description: 'This is quiz 1',
		image: {
			src: 'https://picsum.photos/200/300',
			alt: 'Random embed'
		}
	},
	{
		slug: 'quiz-2/the-mega-quiz',
		title: 'Quiz 2',
		description: 'This is quiz 2',
		image: {
			src: 'https://picsum.photos/200/300',
			alt: 'Random embed'
		}
	}
];

export const quizes: Record<Slug, QuizData> = {
	'quiz-1': {
		title: 'Quiz 1',
		twitterShareButton: {
			text: "It's a really cool quiz, you should try it out!",
			startWithScore: true,
			shareQuizUrl: true,
			alternativeUrl: undefined,
			via: 'sphinx',
			hashtags: ['sphinx', 'quiz'],
			related: ['sphinx', 'quiz']
		},
		questions: [
			{
				embed: {
					src: 'https://picsum.photos/200/300',
					alt: 'Random embed'
				},
				question: 'What is the capital of France?',
				answers: ['Paris', 'London', 'Berlin', 'Rome'],
				correctAnswer: 0,
				explanation: 'The capital of France is Paris'
			},
			{
				embed: {
					src: 'https://picsum.photos/200/300',
					alt: 'Random embed'
				},
				question: 'What is the capital of Germany?',
				answers: ['Paris', 'London', 'Berlin', 'Rome'],
				correctAnswer: 2,
				explanation: 'The capital of Germany is Berlin'
			},
			{
				embed: null,
				question: 'What is the capital of Italy?',
				answers: ['Paris', 'London', 'Berlin', 'Rome'],
				correctAnswer: 3,
				explanation: 'The capital of Italy is Rome'
			}
		],
		scoreExplanations: [
			{
				range: [0, 1],
				embed: null,
				title: 'You need to study more',
				explanation: 'You need to study more to get a better score next time :('
			},
			{
				range: [2, 3],
				embed: {
					src: 'https://picsum.photos/200/300',
					alt: 'Random embed'
				},
				title: 'You did well',
				explanation: 'You did well, but you can do better next time!'
			},
			{
				range: [4, 5],
				embed: {
					src: 'https://picsum.photos/200/300',
					alt: 'Random embed'
				},
				title: 'You did great!',
				explanation: "You did great! You're a true expert!"
			}
		]
	},
	'quiz-2/the-mega-quiz': {
		title: 'Quiz 2',
		startButtonText: 'Or this one!',
		questions: [
			{
				embed: {
					youtubeVideoId: 'lhj6lWVfavY'
				},
				question: 'What is the tallest mountain in the world?',
				answers: ['Mount Everest', 'Mount Fuji', 'Mount Kilimanjaro', 'Mount McKinley'],
				correctAnswer: 0,
				explanation: 'Mount Everest is the tallest mountain in the world'
			},
			{
				embed: {
					youtubeVideoId: 'lhj6lWVfavY'
				},
				question: 'What is the tallest mountain in the world?',
				answers: ['Mount Everest', 'Mount Fuji', 'Mount Kilimanjaro', 'Mount McKinley'],
				correctAnswer: 0,
				explanation: 'Mount Everest is the tallest mountain in the world'
			}
		],
		scoreExplanations: [
			{
				range: [0, 2],
				embed: {
					src: 'https://picsum.photos/200/300',
					alt: 'Random embed'
				},
				title: 'You are a true quizzer!',
				explanation: 'That was so much fun, you should try another quiz!'
			}
		]
	}
};
