<script lang="ts">
	import type { ScoreExplanationData } from '$lib/types';

	export let score_explanation: ScoreExplanationData;
</script>

<div class="mt-6">
	{#if score_explanation.embed === null}
		<div class="mx-auto w-96 h-64 glass" />
	{:else if 'youtubeVideoId' in score_explanation.embed}
		<iframe
			title="YouTube video player"
			class="mx-auto w-96 h-64"
			src={`https://www.youtube.com/embed/${score_explanation.embed.youtubeVideoId}`}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	{:else}
		<img
			class="mx-auto w-96 h-64"
			src={score_explanation.embed.src}
			alt={score_explanation.embed.alt}
		/>
	{/if}
	<div class="m-4 h-32 flex flex-col justify-around">
		<h1 class="text-3xl">{score_explanation.title}</h1>
		<p>
			{score_explanation.explanation}
		</p>
	</div>
</div>
