<script lang="ts">
	import type { QuestionData } from '$lib/types';
	import Answer from './Answer.svelte';
	import Embed from './Embed.svelte';

	export let question: QuestionData;
	export let pickedAnswer: number;
	export let onPickAnswer: (answer: number) => void;

	export let reviewMode = false;
</script>

<Embed embed={question.embed} />

<div class="m-4 h-32 flex">
	<div class="m-auto">
		<h2 class="text-3xl w-96 mx-2 my-6">
			{question.question}
		</h2>
	</div>
</div>
<ul class="m-2 menu bg-base-100 p-2 rounded-box">
	{#each question.answers as answer, index}
		<Answer
			state={reviewMode
				? index === question.correctAnswer
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

<div class="m-4">
	{#if reviewMode}
		{#if pickedAnswer === question.correctAnswer}
			<p class="text-success text-xl">Correct!</p>
		{:else}
			<p class="text-error text-xl">Incorrect!</p>
		{/if}
		<p class="text-lg">
			{question.explanation}
		</p>
	{/if}
</div>
