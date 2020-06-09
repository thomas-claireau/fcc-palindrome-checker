<template>
	<div id="header">
		<a href="#" class="works">
			<angleSvg />Works
		</a>
		<a href="#" class="follow-me">@thomasclaireau</a>
	</div>
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
			border-radius: 50px;
		}

		&.follow-me {
			letter-spacing: 7px;

			@media screen and (max-width: $break-tablet) {
				width: 100%;
				margin-top: 40px;
				text-align: center;
			}
		}
	}
}
</style>