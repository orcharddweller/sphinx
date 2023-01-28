export type Image = {
	src: string;
	alt: string;
};

export type YoutubeVideo = {
	youtubeVideoId: string;
};

export type TwitterShareButtonProps = {
	text: string;
	startWithScore?: boolean;
	shareQuizUrl?: boolean;
	alternativeUrl?: string;
	via?: string;
	hashtags?: string[];
	related?: string[];
};

export type QuestionData = {
	id: number;
	embed: Image | YoutubeVideo | null;
	question: string;
	answers: string[];
	correctAnswer: number;
	explanation: string;
};

export type ScoreExplanationData = {
	range: [number, number];
	embed: Image | YoutubeVideo | null;
	title: string;
	explanation: string;
};

export type QuizData = {
	id: number;
	title: string;
	questions: QuestionData[];
	score_explanations: ScoreExplanationData[];
	twitter_share_button?: TwitterShareButtonProps;
};

export type QuizThumbnail = {
	id: number;
	title: string;
	description: string;
	image: Image;
};

export type AnswerState = 'correct' | 'incorrect' | 'unanswered' | 'picked' | 'not-picked';

export type PromoState = 'hidden' | 'visible' | 'clicked';
