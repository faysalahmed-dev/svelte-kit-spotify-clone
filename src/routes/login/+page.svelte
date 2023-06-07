<script lang="ts">
	import { Button, P, Img } from 'flowbite-svelte';
	import bgImage from '$assets/music-dashboard.webp';
	import Logo from '$assets/spotify-logo.svg';
</script>

<section
	class="min-h-screen flex flex-col lg:flex-row items-center justify-between max-w-6xl w-[95%] space-y-7 lg:space-y-0 mx-auto py-6 lg:py-0"
>
	<section class="space-y-6">
		<div class="text-emerald-400 flex items-center">
			<img src={Logo} alt="Spotify Logo" class="inline-block w-14 h-14 lg:w-20 lg:h-20" />
			<span class="font-bold text-2xl md:text-3xl lg:text-4xl">Spotify</span>
		</div>

		<h1 class="text-lg md:text-xl lg:text-2xl font-bold text-gray-200 capitalize">
			Get Premium free for 1 month
		</h1>
		<P color="text-gray-300" class="max-w-xl leading-7 w-10/12">
			Introducing the UltimateTune Premium Music Player, where music comes alive like never before.
			With its cutting-edge features and unparalleled audio quality, the UltimateTune Premium Music
			Player sets a new standard for music enthusiasts worldwide
		</P>
		<Button class="bg-emerald-500 font-bold" size="lg">
			<a href="/api/auth/login" class="flex justify-center items-center">
				Login With
				<svg
					class="inline-block ml-2"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					style="fill: currentColor;"
					><path
						d="M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991 0 5.494 4.496 9.99 9.991 9.99 5.494 0 9.99-4.496 9.99-9.99 0-5.495-4.446-9.991-9.99-9.991zm4.595 14.436c-.199.299-.549.4-.85.201-2.349-1.45-5.296-1.75-8.793-.951-.348.102-.648-.148-.748-.449-.101-.35.149-.648.45-.749 3.795-.85 7.093-.499 9.69 1.1.35.149.4.548.251.848zm1.2-2.747c-.251.349-.7.499-1.051.249-2.697-1.646-6.792-2.148-9.939-1.148-.398.101-.85-.1-.949-.498-.101-.402.1-.852.499-.952 3.646-1.098 8.143-.548 11.239 1.351.3.149.45.648.201.998zm.099-2.799c-3.197-1.897-8.542-2.097-11.59-1.146a.938.938 0 0 1-1.148-.6.937.937 0 0 1 .599-1.151c3.547-1.049 9.392-.85 13.089 1.351.449.249.599.849.349 1.298-.25.35-.849.498-1.299.248z"
					/></svg
				>
			</a>
		</Button>
	</section>
	<section>
		<Img
			src={bgImage}
			alt="banner image"
			size="max-w-xl w-full"
			class="shadow-md drop-shadow rounded-md"
		/>
	</section>
</section>
