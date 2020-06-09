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
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

$rouge: #ff5e4c;
$vert: #01ada9;

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

.container {
	max-width: 1640px;
	width: 100%;
	margin-right: auto;
	margin-left: auto;
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
