<template>
	<div id="app" :class="isPalindrome() ? 'true' : 'false'">
		<div class="container">
			<Header></Header>
			<div>
				<input
					type="text"
					v-$model="write"
					placeholder="Write..."
					:class="{ empty: !this.write }"
					v-focus
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
			if (!/[a-zA-Z\s]/.test(this.write.charAt(this.write.length - 1))) {
				this.write = this.write.slice(0, -1);
			}
		},
		isPalindrome() {
			if (this.write && this.inverse)
				return this.write.toLowerCase() == this.inverse.toLowerCase();

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
	directives: {
		focus: {
			inserted: function(el) {
				el.focus();
			},
		},
		$model: {
			bind: function(el, binding, vnode) {
				el.oninput = () => {
					if (!/[a-zA-Z\s]/.test(el.value.charAt(el.value.length - 1))) {
						el.value = el.value.slice(0, -1);
					}

					return (vnode.context[binding.expression] = el.value);
				};
			},
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
		overflow-x: hidden;

		input,
		.inverse {
			width: 100%;
			font-family: 'Lilita One', Helvetica, Arial, sans-serif;
			font-size: 140px;
			color: #fff;
			text-align: center;

			@media screen and (max-width: $break-medium) {
				font-size: 100px;
			}

			@media screen and (max-width: $break-tablet) {
				font-size: 80px;
			}

			@media screen and (max-width: $break-small) {
				font-size: 60px;
			}

			&::placeholder {
				color: #fff;
			}

			&::-ms-clear {
				display: none;
			}
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
