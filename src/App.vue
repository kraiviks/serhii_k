<template>
	<v-app id="inspire">
		<v-app-bar app color="#54575F" class="header-shadow">
			<v-app-bar-nav-icon
				@click.stop="drawer = !drawer"
				class="d-flex d-sm-none"
			></v-app-bar-nav-icon>
			<v-avatar
				class="d-none d-sm-flex"
				color="grey darken-1 shrink"
				size="42"
				style="cursor: pointer"
			>
				<img src="./assets/Avatar.png" alt="Avatar" />
			</v-avatar>
			<router-link :to="'/'">
				<div class="logo d-none d-sm-flex">Kraiviks</div>
			</router-link>

			<v-tabs
				centered
				class="d-none d-sm-flex justify-end"
				color="grey darken-1"
			>
				<v-tab v-for="link in links" :key="link.name" class="link-anim mr-3">
					<router-link :to="'/' + link.link" class="pa-5">
						{{ link.name }}
					</router-link>
				</v-tab>
			</v-tabs>
		</v-app-bar>

		<v-main class="grey">
			<v-container>
				<v-row>
					<v-col cols="12">
						<v-sheet
							min-height="90vh"
							rounded="lg"
							color="#4FBEAC"
							class="body-shadow d-flex justify-center align-center"
						>
							<router-view></router-view>
						</v-sheet>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
		<v-navigation-drawer
			v-model="drawer"
			absolute
			left
			temporary
			dark
			class="drawer-align"
		>
			<router-link :to="'/'" class="mt-16">
				<div class="logo">Kraiviks</div>
			</router-link>
			<v-list nav dense class="mt-16">
				<v-list-item-group
					v-model="group"
					active-class="deep-purple--text text--accent-4"
				>
					<v-list-item v-for="link in links" :key="link.name">
						<v-list-item-title>
							<router-link :to="'/' + link.link" class="pa-15 font-drawer">
								{{ link.name }}
							</router-link>
						</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
			<v-spacer></v-spacer>
		</v-navigation-drawer>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		links: [
			{ name: "about", link: "" },
			{ name: "examples", link: "examples" },
			{ name: "contacts", link: "contacts" },
		],
		drawer: false,
		group: null,
	}),
	watch: {
		group() {
			this.drawer = false;
		},
	},
};
</script>

<style lang="scss">
#inspire {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	min-width: 320px;
}

.drawer-align .v-navigation-drawer__content {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-transform: uppercase;
}

.logo {
	font-family: "Kaushan Script", cursive;
	color: #54575f;
	padding: 5px 15px;
	cursor: pointer;
	font-size: 1.5rem;
	user-select: none;
	animation: logoAnimated 1.5s infinite alternate-reverse;
	@keyframes logoAnimated {
		0% {
			color: #54575f;
			text-shadow: 0 0 15px #54575f;
		}
		50% {
			text-shadow: 0 0 15px rgb(96, 96, 189);
		}
		100% {
			color: #00dcb3b8;
			text-shadow: 0 0 15px #00dcb3b8;
		}
	}
}

a {
	text-decoration: none;
	color: #56a091b8 !important;
}

.link-anim {
	&:hover {
		color: #4fbeac;
		@keyframes navItemAnimated {
			0% {
				box-shadow: 0 -10px 10px #54575f;
				box-shadow: inset 0 0 10px #54575f;
			}
			50% {
				box-shadow: 0 0px 10px rgb(96, 96, 189);
				box-shadow: inset 5px 5px 10px rgb(96, 96, 189);
			}
			100% {
				box-shadow: 0 5px 10px #00dcb3b8;
				box-shadow: inset -10 -10px 10px #00dcb3b8;
			}
		}
		animation: navItemAnimated 1s infinite ease-in alternate-reverse;
	}
}

.header-shadow {
	box-shadow: 0 5px 10px black !important;
}
.body-shadow {
	box-shadow: 10px 10px 25px #41454d !important;
}

.font-drawer{
	font-size: 1.3rem;
}

/************************ Scroll bar ************************/
::-webkit-scrollbar {
    width: 12px;
}
 
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #54575f; 
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px #54575f; 
}

</style>
