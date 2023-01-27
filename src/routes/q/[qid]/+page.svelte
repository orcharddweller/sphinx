<script lang="ts">
	import type { ScoreExplanation } from '$lib/types';
	import Results from '../../../components/Results.svelte';
	import type { PageData } from './$types';

	/** @type {import('./$types').PageData} */
	export let data: PageData;

	const { quiz } = data;

	let questionIdx = 0;
	$: question = quiz.questions[questionIdx];

	let answers: number[] = new Array(quiz.questions.length).fill(null);

	const pickAnswer = (answer: number) => {
		answers[questionIdx] = answer;
		questionIdx++;
	};

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
</script>

{#if questionIdx >= quiz.questions.length}
	<div class="max-w-screen-xl mx-auto xl:rounded-box p-4 flex flex-col items-center">
		<h1 class="text-7xl text-center">You scored {score} out of {quiz.questions.length}</h1>
		<div>
			<Results score_explanation={getScoreExplanation()} />
		</div>

		<div class="mt-12">
			<a href="/" class="btn btn-primary"> Back to home </a>
		</div>
	</div>
{:else}
	<div class="max-w-screen-xl mx-auto xl:rounded-box p-4">
		<title>{quiz.title}</title>
		<h1 class="text-7xl text-center">{quiz.title}</h1>

		<div class="mx-auto w-96 p-2">
			<progress class="progress" value={questionIdx} max={quiz.questions.length} />
			<h2>
				{questionIdx + 1}.
				{question.question}
			</h2>
			<ul class="menu bg-base-100 w-56 p-2 rounded-box">
				{#each question.answers as answer, index}
					<li
						on:click={() => pickAnswer(index)}
						on:keydown={(e) => {
							if (e.key === 'Enter') {
								pickAnswer(index);
							}
						}}
					>
						<p>{answer}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{/if}
