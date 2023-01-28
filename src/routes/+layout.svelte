<script lang="ts">
	import { settings } from '$lib/config/settings';
	import '../app.css';

	import { promoState } from '$lib/store';
</script>

<div class="min-h-screen relative">
	<div class="navbar bg-base-300">
		<div class="navbar-start">
			<a class="btn btn-ghost normal-case text-xl" href="/">{settings.menuName}</a>
		</div>
		<div class="navbar-end">
			<a
				class={`btn ${$promoState === 'visible' ? 'btn-secondary' : ''}`}
				href="/about"
				on:click={() => ($promoState = 'clicked')}>About</a
			>
		</div>
	</div>
	<div class="pb-12">
		<slot />
	</div>

	<div class="text-center absolute bottom-0 w-full h-12 py-2">
		by <a class="link link-primary" href="https://www.youtube.com/@orcharddweller"
			>Orchard Dweller</a
		>
	</div>
</div>
