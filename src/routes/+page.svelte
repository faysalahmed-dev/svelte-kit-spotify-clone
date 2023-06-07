<script lang="ts">
	import {
		Navbar,
		NavBrand,
		NavHamburger,
		Avatar,
		Dropdown,
		DropdownHeader,
		DropdownItem,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		Button
	} from 'flowbite-svelte';
	import Logo from '$assets/spotify-logo.svg';
	import HomeIcon from '$assets/icons/home.svg';
	import SearchIcon from '$assets/icons/search.svg';
	import PlaylistIcon from '$assets/icons/playlist.svg';

	let sidebarItems = [
		{ path: '/', name: 'Home', icon: HomeIcon },
		{ path: '/', name: 'Search', icon: SearchIcon },
		{ path: '/', name: 'Profile', icon: PlaylistIcon }
	];
</script>

<div class="flex flex-col h-full">
	<header class="p-2">
		<Navbar color="none" fluid={true} class="bg-gray-900 rounded-md" let:toggle>
			<NavBrand href="/">
				<img src={Logo} class="mr-3 h-6 sm:h-9" alt="Spotify Logo" />
				<span class="self-center whitespace-nowrap text-xl font-semibold text-emerald-400"
					>Spotify</span
				>
			</NavBrand>
			<div class="text-gray-200">
				<Button
					pill={true}
					btnClass="w-8 h-8 rounded-full bg-gray-600 inline-flex justify-center items-center"
				>
					<svg
						class="w-4 h-4 inline-block"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						style="fill: currentColor;"
						><path
							d="M18.464 2.114a.998.998 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886zM17 19.091 6.757 12 17 4.909v14.182z"
						/></svg
					>
				</Button>
				<Button
					pill={true}
					btnClass="w-8 h-8 rounded-full bg-gray-600 inline-flex justify-center items-center opacity-70"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="w-4 h-4 inline-block"
						style="fill: currentColor;"
						><path
							d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"
						/>
					</svg>
				</Button>
			</div>
			<div class="flex items-center md:order-2 cursor-pointer">
				<Avatar
					id="avatar-menu"
					src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
				/>
				<NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1" />
			</div>
			<Dropdown
				frameClass="overflow-hidden"
				placement="bottom"
				ulClass="bg-gray-900 text-gray-200 p-2"
				triggeredBy="#avatar-menu"
			>
				<DropdownHeader divider={false}>
					<span class="block text-sm text-gray-100 font-bold"> Bonnie Green </span>
					<span class="block truncate text-sm font-medium text-gray-400"> name@flowbite.com </span>
				</DropdownHeader>
				<DropdownItem class="hover:bg-emerald-500 rounded-md">Dashboard</DropdownItem>
				<DropdownItem class="hover:bg-emerald-500 rounded-md">Settings</DropdownItem>
				<DropdownItem class="hover:bg-emerald-500 rounded-md">Sign out</DropdownItem>
			</Dropdown>
		</Navbar>
	</header>
	<Sidebar class="bg-gray-900 rounded-md overflow-hidden ml-2 mb-2 h-full flex-grow">
		<SidebarWrapper divClass="bg-none p-2">
			<SidebarGroup class="space-y-3">
				{#each sidebarItems as sidebarItem}
					<SidebarItem
						label={sidebarItem.name}
						aClass="hover:bg-emerald-500 block p-2 rounded-md font-semibold"
						href={sidebarItem.path}
					>
						<svelte:fragment slot="icon">
							<img src={sidebarItem.icon} alt={sidebarItem.name} class="inline-block" />
						</svelte:fragment>
					</SidebarItem>
				{/each}
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</div>
