<script lang="ts">
	import Question from '$lib/components/Question.svelte';
	import Results from '$lib/components/Results.svelte';
	import { browser } from '$app/environment';

	import type { PageData } from './$types';
	import TwitterShareButton from '$lib/components/TwitterShareButton.svelte';
	import { promoState } from '$lib/store';
	import ResultAbout from '$lib/config/ResultAbout.svelte';

	/** @type {import('./$types').PageData} */
	export let data: PageData;

	const { quiz } = data;

	let questionIdx = 0;
	$: question = quiz.questions[questionIdx];

	let reviewMode = false;

	let answers: number[] = new Array(quiz.questions.length).fill(null);

	$: score = answers
		.map((answer, index) => {
			return answer === quiz.questions[index].correctAnswer ? 1 : 0;
		})
		.reduce((a: number, b) => a + b, 0);

	const getScoreExplanation = () => {
		const res = quiz.score_explanations.find(
			(score_explanation) =>
				score_explanation.range[0] <= score && score_explanation.range[1] >= score
		);

		if (res === undefined) {
			throw new Error('No score explanation found');
		}

		return res;
	};

	$: isNextAvailable = answers[questionIdx] !== null && questionIdx < quiz.questions.length - 1;

	$: {
		if (questionIdx >= quiz.questions.length && $promoState === 'hidden') {
			promoState.set('visible');
		}
	}
</script>

<div class="mt-4 py-2 sm:p-6  mx-auto shadow-lg bg-neutral sm:rounded-box">
	<title>{quiz.title}</title>
	<h1 class="text-7xl text-center font-serif font-bold mt-4 mb-8">{quiz.title}</h1>

	{#if questionIdx >= quiz.questions.length}
		<div class="flex flex-col items-center text-center">
			<h1 class="text-3xl text-center">You scored {score} out of {quiz.questions.length}</h1>
			<div>
				<Results score_explanation={getScoreExplanation()} />
				<ResultAbout />
			</div>

			<div
				class="mt-12 flex flex-col sm:flex-row justify-around w-full sm:space-x-2 space-y-2 sm:space-y-0"
			>
				<button
					class="btn btn-primary sm:mx-0 mx-4"
					on:click={() => {
						reviewMode = true;
						questionIdx = 0;
					}}>Review</button
				>
				{#if quiz.twitter_share_button !== undefined}
					<TwitterShareButton
						quizTitle={quiz.title}
						numQuestions={quiz.questions.length}
						{score}
						props={quiz.twitter_share_button}
					/>
				{/if}

				<a href="/" class="btn btn-primary sm:mx-0 mx-4"> Back to home </a>
			</div>
		</div>
	{:else}
		<div>
			<Question
				{reviewMode}
				pickedAnswer={answers[questionIdx]}
				{question}
				onPickAnswer={(answer) => {
					answers[questionIdx] = answer;
					questionIdx++;
				}}
			/>
		</div>

		<progress
			class="progress progress-primary"
			value={questionIdx}
			max={quiz.questions.length - 1}
		/>

		<div class="mx-auto w-fit">
			<div class="btn-group">
				<button
					class={`btn ${questionIdx === 0 ? 'btn-disabled' : ''}`}
					on:click={questionIdx === 0 ? undefined : () => questionIdx--}>«</button
				>
				<button class="btn">{questionIdx + 1}</button>
				<button
					class={`btn ${!isNextAvailable ? 'btn-disabled' : ''}`}
					on:click={isNextAvailable ? () => questionIdx++ : undefined}>»</button
				>
			</div>
		</div>
		<div class="flex flex-col">
			<a href="/" class="btn btn-primary my-2 mx-4"> Back to home </a>
		</div>
	{/if}
</div>
