export type Image = {
	src: string;
	alt: string;
};

export type QuestionData = {
	id: number;
	image: Image | null;
	question: string;
	answers: string[];
	correctAnswer: number;
	explanation: string;
};

export type ScoreExplanationData = {
	range: [number, number];
	image: Image | null;
	title: string;
	explanation: string;
};

export type QuizData = {
	id: number;
	title: string;
	questions: QuestionData[];
	score_explanations: ScoreExplanationData[];
};

export type QuizThumbnail = {
	id: number;
	title: string;
	description: string;
	image: Image;
};

export type AnswerState = 'correct' | 'incorrect' | 'unanswered' | 'picked' | 'not-picked';
