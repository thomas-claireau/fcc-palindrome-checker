<template>
	<header id="header">
		<a href="#" class="works">
			<angleSvg />Works Test
		</a>
		<a href="#" class="follow-me">@thomasclaireau</a>
	</header>
</template>

<script>
import angleSvg from '../assets/angle.svg';

export default {
	name: 'Header',
	components: {
		angleSvg,
	},
};
</script>

<style lang="scss">
#header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 0;

	@media screen and (max-width: $break-tablet) {
		flex-direction: column;
		align-items: flex-start;
	}

	> a {
		font-family: 'Roboto';
		font-weight: 100;
		text-transform: uppercase;
		color: #fff;

		&.works {
			width: 160px;
			height: 50px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30px;
			border: 2px solid #fff;
			background-color: transparent;
			border-radius: 50px;
			transition: all 0.3s ease-in-out;

			svg {
				transform: translateX(0);
				transition: all 0.3s ease-in-out;

				g path {
					fill: #fff;
					stroke: #fff;
					transition: all 0.3s ease-in-out;
				}
			}

			&:hover {
				color: $rouge;
				font-weight: 500;
				background-color: #fff;
				transition: all 0.3s ease-in-out;

				svg {
					transform: translateX(-10px);
					transition: all 0.3s ease-in-out;

					g path {
						fill: $rouge;
						stroke: $rouge;
						transition: all 0.3s ease-in-out;
					}
				}
			}
		}

		&.follow-me {
			$break-custom: 1700px;
			letter-spacing: 7px;

			@media screen and (min-width: $break-custom) {
				display: none;
			}

			@media screen and (max-width: $break-tablet) {
				width: 100%;
				margin-top: 40px;
				text-align: center;
			}
		}
	}
}
</style>