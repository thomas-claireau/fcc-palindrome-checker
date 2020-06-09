<template>
	<div id="app" class="false">
		<div class="container">
			<Header></Header>
			<div>
				<input type="text" v-model="write" placeholder="Write some text..." />
				<div class="inverse">{{ inverse }}</div>
			</div>
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
	data() {
		return {
			write: '',
		};
	},
	computed: {
		inverse() {
			return this.write
				.split('')
				.reverse('')
				.join('');
		},
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

	> .container > div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		input,
		::placeholder {
			font-family: 'Lilita One', Helvetica, Arial, sans-serif;
			font-size: 140px;
			color: #fff;
			text-align: center;
		}

		input {
			-webkit-appearance: none;
			background-color: transparent;
			border: none;

			&:hover,
			&:focus {
				outline: none;
			}
		}
	}
}
</style>
