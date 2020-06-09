<template>
	<div id="app" class="false">
		<div class="container">
			<Header></Header>
			<Footer></Footer>
		</div>
	</div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
	name: 'App',
	components: {
		Header,
		Footer,
	},
};
</script>

<style lang="scss">
html,
body {
	margin: 0;
	padding: 0;
}

*,
*:before,
*:after {
	box-sizing: border-box;
}

a {
	text-decoration: none;
	color: inherit;
}

#app {
	width: 100vw;
	height: 100vh;
	font-family: 'Lilita One', Helvetica, Arial, sans-serif;
	overflow: hidden;

	&.false {
		background-color: $rouge;
	}

	&.true {
		background-color: $vert;
	}
}
</style>
