<script lang="ts">
	import { thumbnails } from '$lib/content';
</script>

<h1 class="text-7xl text-center">Welcome to Sphinx!</h1>

<h2 class="text-5xl text-center">Available quizes:</h2>

<div class="container mx-auto grid grid-flow-col">
	{#each thumbnails as { id, title, description, image }}
		<div class="card w-96 bg-base-100 shadow-xl">
			<figure><img src={image.src} alt={image.alt} /></figure>
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
