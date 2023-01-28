<script lang="ts">
	import { thumbnails } from '$lib/config/content';
	import { settings } from '$lib/config/settings';
</script>

<title>{settings.title}</title>

<div class="container mx-auto grid lg:grid-cols-2 xl:grid-cols-3 mt-24 space-y-6 lg:space-y-0">
	{#each thumbnails as { slug, title, description, image }}
		<div class="card w-96 bg-base-300 shadow-xl mx-auto">
			<figure><img class="w-96 h-60" src={image.src} alt={image.alt} /></figure>
			<div class="card-body">
				<h2 class="card-title">{title}</h2>
				<p>{description}</p>
				<div class="card-actions justify-end">
					<a href="/q/{slug}" class="btn btn-primary">Take this Quiz!</a>
				</div>
			</div>
		</div>
	{/each}
</div>
