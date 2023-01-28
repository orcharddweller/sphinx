<script lang="ts">
	import type { ScoreExplanationData } from '$lib/types';
	import Embed from './Embed.svelte';

	export let score_explanation: ScoreExplanationData;
</script>

<div class="mt-6">
	<Embed embed={score_explanation.embed} />
	<div class="m-4 h-32 flex flex-col justify-around">
		<h1 class="text-3xl">{score_explanation.title}</h1>
		<p>
			{score_explanation.explanation}
		</p>
	</div>
</div>
