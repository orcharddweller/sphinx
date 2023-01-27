<script lang="ts">
	import { thumbnails } from '$lib/config/content';
</script>

<div class="container mx-auto grid grid-flow-col-dense mt-24">
	{#each thumbnails as { id, title, description, image }}
		<div class="card w-96 bg-base-300 shadow-xl mx-auto">
			<figure><img class="w-96 h-60" src={image.src} alt={image.alt} /></figure>
			<div class="card-body">
				<h2 class="card-title">{title}</h2>
				<p>{description}</p>
				<div class="card-actions justify-end">
					<a href="/q/{id}" class="btn btn-primary">Take this Quiz!</a>
				</div>
			</div>
		</div>
	{/each}
</div>
