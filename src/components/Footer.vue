<template>
	<footer id="footer">
		<div class="logo"><LogoSvg />Palindrome Checker</div>
		<div class="social">
			<a href="https://www.linkedin.com/in/thomas-claireau/" target="_blank" rel="noopenner">
				<LinkedinSvg />
			</a>
			<a href="https://github.com/thomas-claireau" target="_blank" rel="noopenner">
				<GithubSvg />
			</a>
			<a href="https://twitter.com/thomas_claireau" target="_blank" rel="noopenner">
				<TwitterSvg />
			</a>
			<a
				href="https://thomas-claireau.com"
				target="_blank"
				rel="noopenner"
				class="follow-me-desktop"
				>@thomasclaireau</a
			>
		</div>
	</footer>
</template>

<script>
import LogoSvg from '../assets/Logo.svg';
import LinkedinSvg from '../assets/linkedin-in.svg';
import GithubSvg from '../assets/github-alt.svg';
import TwitterSvg from '../assets/twitter.svg';
import YoutubeSvg from '../assets/youtube.svg';

export default {
	name: 'Footer',
	components: {
		LogoSvg,
		LinkedinSvg,
		GithubSvg,
		TwitterSvg,
		YoutubeSvg,
	},
};
</script>

<style lang="scss">
#footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;

	@media screen and (max-width: $break-tablet) {
		flex-direction: column;
	}

	> .logo {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-family: 'Roboto';
		font-weight: 100;
		font-size: 18px;
		text-transform: uppercase;
		color: #fff;

		svg {
			width: 50px;
			height: auto;
			margin-right: 20px;
		}
	}

	> .social {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;

		@media screen and (max-width: $break-tablet) {
			margin-top: 20px;
		}

		> a {
			&:not(:first-child) {
				margin-left: 50px;
			}

			&:first-child {
				margin-top: -7px;
			}

			svg {
				min-width: 28px;
				width: 28px;
				height: 28px;

				@media screen and (max-width: $break-tablet) {
					min-width: 24px;
					width: 24px;
					height: 24px;
				}
			}
		}

		.follow-me-desktop {
			$break-custom: 1700px;
			position: absolute;
			top: -230px;
			right: -120px;
			font-family: 'Roboto';
			font-weight: 100;
			text-transform: uppercase;
			color: #fff;
			letter-spacing: 7px;
			transform: rotate(90deg);

			@media screen and (max-width: $break-custom) {
				display: none;
			}
		}
	}
}
</style>