<script lang="ts">
	import type { QuestionData } from '$lib/types';
	import Answer from './Answer.svelte';

	export let question: QuestionData;
	export let pickedAnswer: number;
	export let onPickAnswer: (answer: number) => void;

	export let reviewMode = false;
</script>

{#if question.image !== null}
	<img class="mx-auto" src={question.image.src} alt={question.image.alt} />
{/if}

<div class="m-4">
	<h2 class="text-3xl w-96 mx-2 my-6">
		{question.question}
	</h2>
</div>
<ul class="menu bg-base-100 p-2 rounded-box">
	{#each question.answers as answer, index}
		<Answer
			state={reviewMode
				? pickedAnswer === index && index === question.correctAnswer
					? 'correct'
					: pickedAnswer === index && index !== question.correctAnswer
					? 'incorrect'
					: 'not-picked'
				: pickedAnswer === index
				? 'picked'
				: 'unanswered'}
			text={answer}
			onPick={() => onPickAnswer(index)}
		/>
	{/each}
</ul>

{#if reviewMode}
	{#if pickedAnswer === question.correctAnswer}
		<p class="text-success">Correct!</p>
	{:else}
		<p class="text-error">Incorrect!</p>
	{/if}
	{question.explanation}
{/if}
