<script lang="ts">
	import type { ScoreExplanation } from '$lib/types';

	export let score_explanation: ScoreExplanation;
</script>

<div class="mt-6">
	<h1 class="text-5xl">{score_explanation.title}</h1>
	<p>
		{score_explanation.explanation}
	</p>
</div>
