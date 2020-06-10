<template>
	<div id="app" :class="isPalindrome() ? 'true' : 'false'">
		<div class="container">
			<Header></Header>
			<div>
				<input
					type="text"
					v-model="write"
					@input="validate()"
					placeholder="Write some text..."
					:class="{ empty: !this.write }"
				/>
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
	methods: {
		validate() {
			if (!/[a-zA-Z]/.test(this.write.charAt(this.write.length - 1))) {
				this.write = this.write.slice(0, -1);
			}
		},
		isPalindrome() {
			if (this.write && this.inverse) return this.write == this.inverse;

			return false;
		},
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
	transition: all 0.3s ease-in-out;

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
		::placeholder,
		.inverse {
			font-family: 'Lilita One', Helvetica, Arial, sans-serif;
			font-size: 140px;
			color: #fff;
			text-align: center;
		}

		input {
			-webkit-appearance: none;
			background-color: transparent;
			border: none;

			&.empty {
				caret-color: transparent;
			}

			&:hover,
			&:focus {
				outline: none;
			}
		}
	}
}
</style>
