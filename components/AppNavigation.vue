<template>
	<div id="app-nav" class='mb-4'>
		<b-navbar toggleable="lg" type="dark">
			<b-navbar-brand href="/">SgDevsMeetup</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav>
				<b-nav-item href="#">Link</b-nav-item>
				<b-nav-item href="#" disabled>Disabled</b-nav-item>
			</b-navbar-nav>

			<!-- Right aligned nav items -->
			<b-navbar-nav class="ml-auto">
		
				<b-nav-item-dropdown id="account-menu" right>
					<!-- Using 'button-content' slot -->
					<template v-slot:button-content>
						<fa icon="user-circle"/>
					</template>
					<b-dropdown-item href="/user/chenhuijing">Profile</b-dropdown-item>
					<b-dropdown-item href="/login">Login</b-dropdown-item>
					<b-dropdown-item href="#logout">Logout</b-dropdown-item>
				</b-nav-item-dropdown>
			</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		</div>
</template>
<style lang="scss">
	
	#app-nav {
		nav.navbar {
			background-color: #f44336;
		}		
	}

	#account-menu {
		.nav-link {
			padding: 0;
			font-size: 2rem;
			&:after{
				display: none;
			}
		}
	}

</style>
<script>
export default{
	
}
</script>