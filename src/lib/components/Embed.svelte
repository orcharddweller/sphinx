<script lang="ts">
	import type { EmbedData } from '$lib/types';
	import { removeUndefined } from '$lib/utils';
	import { match, P } from 'ts-pattern';

	export let embed: EmbedData | undefined = undefined;

	$: youtubeVideoSrc = match(embed)
		.with(
			{
				youtubeVideoId: P.string,
				start: P.optional(P.number),
				end: P.optional(P.number),
				autoplay: P.optional(P.boolean)
			},
			(v) => {
				const searchParams = new URLSearchParams(
					removeUndefined({
						start: v.start?.toString(),
						end: v.end?.toString(),
						autoplay: v.autoplay ? '1' : '0'
					})
				);

				return `https://www.youtube.com/embed/${v.youtubeVideoId}?${searchParams}`;
			}
		)
		.otherwise(() => {
			return null;
		});
</script>

{#if embed === undefined}
	<div class="mx-auto w-96 h-64 glass" />
{:else if 'youtubeVideoId' in embed}
	<iframe
		title="YouTube video player"
		class="mx-auto w-96 h-64"
		src={youtubeVideoSrc}
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
{:else}
	<img class="mx-auto w-96 h-64" src={embed.src} alt={embed.alt} />
{/if}
