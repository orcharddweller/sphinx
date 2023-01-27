export type Image = {
	src: string;
	alt: string;
};

export type Question = {
	id: number;
	image: Image | null;
	question: string;
	answers: string[];
	correctAnswer: number;
	explanation: string;
};

export type ScoreExplanation = {
	range: [number, number];
	image: Image | null;
	title: string;
	explanation: string;
};

export type Quiz = {
	id: number;
	title: string;
	questions: Question[];
	score_explanations: ScoreExplanation[];
};

export type QuizThumbnail = {
	id: number;
	title: string;
	description: string;
	image: Image;
};
