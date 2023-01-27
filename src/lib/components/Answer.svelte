<script lang="ts">
	import type { AnswerState } from '$lib/types';

	export let onPick: () => void;
	export let text: string;
	export let state: AnswerState = 'unanswered';

	$: classes =
		state === 'correct'
			? 'bg-success  text-success-content'
			: state === 'incorrect'
			? 'bg-error text-error-content'
			: state === 'not-picked'
			? 'disabled'
			: state === 'picked'
			? 'bg-primary text-primary-content'
			: '';

	$: enterKeydownHandler = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			onPick;
		}
	};
</script>

<li
	class={classes}
	on:click={state === 'unanswered' ? onPick : undefined}
	on:keydown={state === 'unanswered' ? enterKeydownHandler : undefined}
>
	<p class="text-xl">{text}</p>
</li>
